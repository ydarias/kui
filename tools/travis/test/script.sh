#!/usr/bin/env bash

#
# Copyright 2017-18 IBM Corporation
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#

set -e
set -o pipefail

# composer/kui doesn't support travis osx and travis osx doesn't have docker
if [ "$TRAVIS_OS_NAME" == "osx" ] && ([ "$TRAVIS_REPO_SLUG" == "composer/kui" ] || [ "$NEEDS_OPENWHISK" == true ] || [ "$NEEDS_KUBERNETES" == true ]); then
  exit 0
fi

SCRIPTDIR=$(cd $(dirname "$0") && pwd)

if [ -n "$SCRIPTS" ]; then
    #
    # then we were asked to run one or more test.d/ scripts
    #
    for script in $SCRIPTS; do
        echo "spawning test script: $script"
        "$SCRIPTDIR"/test.d/$script
    done
fi

if [ -n "$LAYERS" ]; then
    #
    # we were asked to run one or more mocha test suites (which suites
    # as indicated by $LAYERS)
    #

    export KEY=$TRAVIS_JOB_NUMBER
    echo "Using KEY=$KEY"

    # remove HEADLESS from the list, as we are handling in specially
    # in the else clause below
    NON_HEADLESS_LAYERS=${LAYERS#HEADLESS}

    if [ -n "$NON_HEADLESS_LAYERS" ] && [ -n "$MOCHA_TARGETS" ]; then
        for MOCHA_RUN_TARGET in $MOCHA_TARGETS; do
          echo "mocha target: $MOCHA_RUN_TARGET"
          if [ "$MOCHA_RUN_TARGET" == "webpack" ] && [ "$TRAVIS_OS_NAME" == "osx" ]; then
            echo "skip travis osx Webpack test since travis doesn't support docker on osx"
          else
            export MOCHA_RUN_TARGET

            if [ -n "$WAIT_LAYERS" ]; then
              echo "running these non-headless layers and wait: $WAIT_LAYERS"
              (cd packages/tests && ./bin/runMochaLayers.sh $WAIT_LAYERS)
            fi

            echo "running these non-headless layers: $NON_HEADLESS_LAYERS"
            (cd packages/tests && ./bin/runMochaLayers.sh $NON_HEADLESS_LAYERS)
          fi
        done
    fi

    # is "HEADLESS" on the LAYERS list?
    if [ "$NON_HEADLESS_LAYERS" != "$LAYERS" ]; then
        #
        # for now, the headless test suite (which is also a mocha suite)
        # is a bit of a special case
        #
        echo "running HEADLESS layer"

        # When testing against build headless, we set TEST_SPACE manually
        # since we can't get the env var TEST_SPACE from the previous
        # runMochaLayers.sh => runTest.sh process. Namespace Current tests will
        # fail if we don't have TEST_SPACE.

        export TEST_SPACE="${TEST_SPACE_PREFIX-ns}${KEY}"
        export WSK_CONFIG_FILE=~/.wskprops_${KEY}
        (cd packages/tests && ./bin/allocateOpenWhiskAuth.sh "$TEST_SPACE")
        (cd /tmp/kui && npm run test) # see ./install.sh for the /tmp/kui target
    fi
fi
