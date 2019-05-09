# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 0.21.0 (2019-05-08)


### Bug Fixes

* a few more tab tweaks ([8e31e5e](https://github.com/IBM/kui/commit/8e31e5e)), closes [#719](https://github.com/IBM/kui/issues/719)
* add missing debug deps ([0bc5ef9](https://github.com/IBM/kui/commit/0bc5ef9)), closes [#646](https://github.com/IBM/kui/issues/646)
* allow clients to take control over entity name table cell coloring ([77b99d9](https://github.com/IBM/kui/commit/77b99d9)), closes [#675](https://github.com/IBM/kui/issues/675)
* ansi-to-html color definition updates ([74d7678](https://github.com/IBM/kui/commit/74d7678)), closes [#578](https://github.com/IBM/kui/issues/578)
* apache-composer versus webpack fixes ([0a97daf](https://github.com/IBM/kui/commit/0a97daf)), closes [#584](https://github.com/IBM/kui/issues/584)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* forbid tab focus more carefully for elements that should not receive focus ([faa3b86](https://github.com/IBM/kui/commit/faa3b86)), closes [#1160](https://github.com/IBM/kui/issues/1160)
* git diff should use side-by-side ([4fe215b](https://github.com/IBM/kui/commit/4fe215b)), closes [#617](https://github.com/IBM/kui/issues/617)
* git status UI fixes ([cf0f5cb](https://github.com/IBM/kui/commit/cf0f5cb)), closes [#702](https://github.com/IBM/kui/issues/702)
* improve handling of non-zero exit codes in bash-like usage formatting ([98bb8b3](https://github.com/IBM/kui/commit/98bb8b3)), closes [#582](https://github.com/IBM/kui/issues/582)
* improve input queueing versus PTY ([98120da](https://github.com/IBM/kui/commit/98120da)), closes [#1095](https://github.com/IBM/kui/issues/1095)
* improve ls output with sidecar open ([b3396fd](https://github.com/IBM/kui/commit/b3396fd)), closes [#1030](https://github.com/IBM/kui/issues/1030)
* improved activation list UI ([fe69bd6](https://github.com/IBM/kui/commit/fe69bd6)), closes [#837](https://github.com/IBM/kui/issues/837)
* improved scrolling behavior for PTY ([8953d8b](https://github.com/IBM/kui/commit/8953d8b)), closes [#1093](https://github.com/IBM/kui/issues/1093)
* kedit breakage ([e237336](https://github.com/IBM/kui/commit/e237336)), closes [#982](https://github.com/IBM/kui/issues/982)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* node-pty versus electron ([1263c74](https://github.com/IBM/kui/commit/1263c74)), closes [#1155](https://github.com/IBM/kui/issues/1155)
* **plugins/plugin-bash-like:** markdown versus popup mode ([02e108a](https://github.com/IBM/kui/commit/02e108a)), closes [#928](https://github.com/IBM/kui/issues/928)
* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* **packages/app:** make annoying 'ok' invisible ([0a0f7f7](https://github.com/IBM/kui/commit/0a0f7f7)), closes [#597](https://github.com/IBM/kui/issues/597)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-bash-like:** when cd fails, throw stderr ([85cb737](https://github.com/IBM/kui/commit/85cb737)), closes [#415](https://github.com/IBM/kui/issues/415)
* **plugins/plugin-bash-like:** ansi color bg/fg bug fix ([4d6265f](https://github.com/IBM/kui/commit/4d6265f)), closes [#591](https://github.com/IBM/kui/issues/591)
* **plugins/plugin-bash-like:** avoid use of bold fonts in git diff ([2dbe103](https://github.com/IBM/kui/commit/2dbe103)), closes [#636](https://github.com/IBM/kui/issues/636)
* **plugins/plugin-bash-like:** bash-like was not registering its catchall on preload ([99bf827](https://github.com/IBM/kui/commit/99bf827)), closes [#285](https://github.com/IBM/kui/issues/285)
* **plugins/plugin-bash-like:** cache websocket channels ([ed2538f](https://github.com/IBM/kui/commit/ed2538f)), closes [#1072](https://github.com/IBM/kui/issues/1072)
* **plugins/plugin-bash-like:** fix for ls on linux (-B) ([e1db77b](https://github.com/IBM/kui/commit/e1db77b)), closes [#904](https://github.com/IBM/kui/issues/904)
* PTY scrolling is a bit off ([788bd5a](https://github.com/IBM/kui/commit/788bd5a)), closes [#1128](https://github.com/IBM/kui/issues/1128)
* **plugins/plugin-bash-like:** fixes for empty row handling in pty ([35cb704](https://github.com/IBM/kui/commit/35cb704)), closes [#1282](https://github.com/IBM/kui/issues/1282)
* **plugins/plugin-bash-like:** git diff character diffs overlap ([d840251](https://github.com/IBM/kui/commit/d840251)), closes [#803](https://github.com/IBM/kui/issues/803)
* **plugins/plugin-bash-like:** git diff shouldn't force full screen ([c049c9f](https://github.com/IBM/kui/commit/c049c9f)), closes [#1120](https://github.com/IBM/kui/issues/1120)
* **plugins/plugin-bash-like:** git status text selection causes drilldown ([fb09aa5](https://github.com/IBM/kui/commit/fb09aa5)), closes [#1184](https://github.com/IBM/kui/issues/1184)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)
* **plugins/plugin-bash-like:** improve exit code handling of pty ([d096fe9](https://github.com/IBM/kui/commit/d096fe9)), closes [#1054](https://github.com/IBM/kui/issues/1054)
* PTY copy support ([bd67a31](https://github.com/IBM/kui/commit/bd67a31)), closes [#1188](https://github.com/IBM/kui/issues/1188)
* PTY should respond to sidecar open/close ([4972f1a](https://github.com/IBM/kui/commit/4972f1a)), closes [#1056](https://github.com/IBM/kui/issues/1056)
* **plugins/plugin-bash-like:** PTY copies wrong line ([2b8bdb7](https://github.com/IBM/kui/commit/2b8bdb7)), closes [#1214](https://github.com/IBM/kui/issues/1214)
* refinements to popup UI ([a6cab89](https://github.com/IBM/kui/commit/a6cab89)), closes [#874](https://github.com/IBM/kui/issues/874)
* repl should use outer scrolling when in popup mode ([434ed21](https://github.com/IBM/kui/commit/434ed21)), closes [#870](https://github.com/IBM/kui/issues/870)
* screenshot should respect scrollTop ([3d7e04c](https://github.com/IBM/kui/commit/3d7e04c)), closes [#970](https://github.com/IBM/kui/issues/970)
* **plugins/plugin-bash-like:** poor PTY text selection color ([943ed08](https://github.com/IBM/kui/commit/943ed08)), closes [#1268](https://github.com/IBM/kui/issues/1268)
* trim pty bits from headless build ([d9f8bf7](https://github.com/IBM/kui/commit/d9f8bf7)), closes [#1089](https://github.com/IBM/kui/issues/1089)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **plugins/plugin-bash-like:** improve PTY race conditions ([614f1df](https://github.com/IBM/kui/commit/614f1df)), closes [#1272](https://github.com/IBM/kui/issues/1272)
* **plugins/plugin-bash-like:** improved ls support on linux ([a424235](https://github.com/IBM/kui/commit/a424235)), closes [#869](https://github.com/IBM/kui/issues/869)
* webpack+proxy versus pty ([0f8a19a](https://github.com/IBM/kui/commit/0f8a19a)), closes [#1170](https://github.com/IBM/kui/issues/1170)
* **plugins/plugin-bash-like:** ls bug when dir contains suffix-matching files ([c6bbbd3](https://github.com/IBM/kui/commit/c6bbbd3)), closes [#940](https://github.com/IBM/kui/issues/940)
* **plugins/plugin-bash-like:** markdown missing overflow:auto ([e5f3910](https://github.com/IBM/kui/commit/e5f3910)), closes [#1038](https://github.com/IBM/kui/issues/1038)
* **plugins/plugin-bash-like:** nano versus pty ([5df2c66](https://github.com/IBM/kui/commit/5df2c66)), closes [#1254](https://github.com/IBM/kui/issues/1254)
* **plugins/plugin-bash-like:** pty output sometimes not visible ([3e3dab5](https://github.com/IBM/kui/commit/3e3dab5)), closes [#1087](https://github.com/IBM/kui/issues/1087)
* **plugins/plugin-bash-like:** resolve many pty rendering glitches ([4f89df0](https://github.com/IBM/kui/commit/4f89df0)), closes [#1073](https://github.com/IBM/kui/issues/1073)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)


### Features

* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* **packages/app:** queue up input while commands are executed ([51ec7e9](https://github.com/IBM/kui/commit/51ec7e9)), closes [#1044](https://github.com/IBM/kui/issues/1044)
* **plugins/plugin-bash-like:** asciidoc support ([af29e03](https://github.com/IBM/kui/commit/af29e03)), closes [#934](https://github.com/IBM/kui/issues/934)
* **plugins/plugin-bash-like:** do not show line numbers in git diff view ([2fc8803](https://github.com/IBM/kui/commit/2fc8803)), closes [#944](https://github.com/IBM/kui/issues/944)
* allow PTY websockets to piggyback on an existing https server ([4aeced5](https://github.com/IBM/kui/commit/4aeced5)), closes [#1183](https://github.com/IBM/kui/issues/1183)
* kubectl edit support ([de44c9a](https://github.com/IBM/kui/commit/de44c9a)), closes [#1164](https://github.com/IBM/kui/issues/1164)
* pty ([a3ad81d](https://github.com/IBM/kui/commit/a3ad81d)), closes [#572](https://github.com/IBM/kui/issues/572) [#414](https://github.com/IBM/kui/issues/414)
* sidecar full screen ([4f21cb2](https://github.com/IBM/kui/commit/4f21cb2)), closes [#294](https://github.com/IBM/kui/issues/294) [#721](https://github.com/IBM/kui/issues/721)
* **plugins/plugin-bash-like:** linkify links in PTY output ([ed7e590](https://github.com/IBM/kui/commit/ed7e590)), closes [#1266](https://github.com/IBM/kui/issues/1266)
* **plugins/plugin-bash-like:** make top-sliver in PTY mode draggable ([56942c0](https://github.com/IBM/kui/commit/56942c0)), closes [#1091](https://github.com/IBM/kui/issues/1091)





# 0.20.0 (2019-05-07)


### Bug Fixes

* a few more tab tweaks ([8e31e5e](https://github.com/IBM/kui/commit/8e31e5e)), closes [#719](https://github.com/IBM/kui/issues/719)
* add missing debug deps ([0bc5ef9](https://github.com/IBM/kui/commit/0bc5ef9)), closes [#646](https://github.com/IBM/kui/issues/646)
* allow clients to take control over entity name table cell coloring ([77b99d9](https://github.com/IBM/kui/commit/77b99d9)), closes [#675](https://github.com/IBM/kui/issues/675)
* ansi-to-html color definition updates ([74d7678](https://github.com/IBM/kui/commit/74d7678)), closes [#578](https://github.com/IBM/kui/issues/578)
* apache-composer versus webpack fixes ([0a97daf](https://github.com/IBM/kui/commit/0a97daf)), closes [#584](https://github.com/IBM/kui/issues/584)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* forbid tab focus more carefully for elements that should not receive focus ([faa3b86](https://github.com/IBM/kui/commit/faa3b86)), closes [#1160](https://github.com/IBM/kui/issues/1160)
* git diff should use side-by-side ([4fe215b](https://github.com/IBM/kui/commit/4fe215b)), closes [#617](https://github.com/IBM/kui/issues/617)
* git status UI fixes ([cf0f5cb](https://github.com/IBM/kui/commit/cf0f5cb)), closes [#702](https://github.com/IBM/kui/issues/702)
* improve handling of non-zero exit codes in bash-like usage formatting ([98bb8b3](https://github.com/IBM/kui/commit/98bb8b3)), closes [#582](https://github.com/IBM/kui/issues/582)
* improve input queueing versus PTY ([98120da](https://github.com/IBM/kui/commit/98120da)), closes [#1095](https://github.com/IBM/kui/issues/1095)
* improve ls output with sidecar open ([b3396fd](https://github.com/IBM/kui/commit/b3396fd)), closes [#1030](https://github.com/IBM/kui/issues/1030)
* improved activation list UI ([fe69bd6](https://github.com/IBM/kui/commit/fe69bd6)), closes [#837](https://github.com/IBM/kui/issues/837)
* improved scrolling behavior for PTY ([8953d8b](https://github.com/IBM/kui/commit/8953d8b)), closes [#1093](https://github.com/IBM/kui/issues/1093)
* kedit breakage ([e237336](https://github.com/IBM/kui/commit/e237336)), closes [#982](https://github.com/IBM/kui/issues/982)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* node-pty versus electron ([1263c74](https://github.com/IBM/kui/commit/1263c74)), closes [#1155](https://github.com/IBM/kui/issues/1155)
* **plugins/plugin-bash-like:** markdown versus popup mode ([02e108a](https://github.com/IBM/kui/commit/02e108a)), closes [#928](https://github.com/IBM/kui/issues/928)
* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* **packages/app:** make annoying 'ok' invisible ([0a0f7f7](https://github.com/IBM/kui/commit/0a0f7f7)), closes [#597](https://github.com/IBM/kui/issues/597)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-bash-like:** when cd fails, throw stderr ([85cb737](https://github.com/IBM/kui/commit/85cb737)), closes [#415](https://github.com/IBM/kui/issues/415)
* **plugins/plugin-bash-like:** ansi color bg/fg bug fix ([4d6265f](https://github.com/IBM/kui/commit/4d6265f)), closes [#591](https://github.com/IBM/kui/issues/591)
* **plugins/plugin-bash-like:** avoid use of bold fonts in git diff ([2dbe103](https://github.com/IBM/kui/commit/2dbe103)), closes [#636](https://github.com/IBM/kui/issues/636)
* **plugins/plugin-bash-like:** bash-like was not registering its catchall on preload ([99bf827](https://github.com/IBM/kui/commit/99bf827)), closes [#285](https://github.com/IBM/kui/issues/285)
* **plugins/plugin-bash-like:** cache websocket channels ([ed2538f](https://github.com/IBM/kui/commit/ed2538f)), closes [#1072](https://github.com/IBM/kui/issues/1072)
* **plugins/plugin-bash-like:** fix for ls on linux (-B) ([e1db77b](https://github.com/IBM/kui/commit/e1db77b)), closes [#904](https://github.com/IBM/kui/issues/904)
* PTY scrolling is a bit off ([788bd5a](https://github.com/IBM/kui/commit/788bd5a)), closes [#1128](https://github.com/IBM/kui/issues/1128)
* **plugins/plugin-bash-like:** fixes for empty row handling in pty ([35cb704](https://github.com/IBM/kui/commit/35cb704)), closes [#1282](https://github.com/IBM/kui/issues/1282)
* **plugins/plugin-bash-like:** git diff character diffs overlap ([d840251](https://github.com/IBM/kui/commit/d840251)), closes [#803](https://github.com/IBM/kui/issues/803)
* **plugins/plugin-bash-like:** git diff shouldn't force full screen ([c049c9f](https://github.com/IBM/kui/commit/c049c9f)), closes [#1120](https://github.com/IBM/kui/issues/1120)
* **plugins/plugin-bash-like:** git status text selection causes drilldown ([fb09aa5](https://github.com/IBM/kui/commit/fb09aa5)), closes [#1184](https://github.com/IBM/kui/issues/1184)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)
* **plugins/plugin-bash-like:** improve exit code handling of pty ([d096fe9](https://github.com/IBM/kui/commit/d096fe9)), closes [#1054](https://github.com/IBM/kui/issues/1054)
* PTY copy support ([bd67a31](https://github.com/IBM/kui/commit/bd67a31)), closes [#1188](https://github.com/IBM/kui/issues/1188)
* PTY should respond to sidecar open/close ([4972f1a](https://github.com/IBM/kui/commit/4972f1a)), closes [#1056](https://github.com/IBM/kui/issues/1056)
* **plugins/plugin-bash-like:** PTY copies wrong line ([2b8bdb7](https://github.com/IBM/kui/commit/2b8bdb7)), closes [#1214](https://github.com/IBM/kui/issues/1214)
* refinements to popup UI ([a6cab89](https://github.com/IBM/kui/commit/a6cab89)), closes [#874](https://github.com/IBM/kui/issues/874)
* repl should use outer scrolling when in popup mode ([434ed21](https://github.com/IBM/kui/commit/434ed21)), closes [#870](https://github.com/IBM/kui/issues/870)
* screenshot should respect scrollTop ([3d7e04c](https://github.com/IBM/kui/commit/3d7e04c)), closes [#970](https://github.com/IBM/kui/issues/970)
* **plugins/plugin-bash-like:** poor PTY text selection color ([943ed08](https://github.com/IBM/kui/commit/943ed08)), closes [#1268](https://github.com/IBM/kui/issues/1268)
* trim pty bits from headless build ([d9f8bf7](https://github.com/IBM/kui/commit/d9f8bf7)), closes [#1089](https://github.com/IBM/kui/issues/1089)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **plugins/plugin-bash-like:** improve PTY race conditions ([614f1df](https://github.com/IBM/kui/commit/614f1df)), closes [#1272](https://github.com/IBM/kui/issues/1272)
* **plugins/plugin-bash-like:** improved ls support on linux ([a424235](https://github.com/IBM/kui/commit/a424235)), closes [#869](https://github.com/IBM/kui/issues/869)
* webpack+proxy versus pty ([0f8a19a](https://github.com/IBM/kui/commit/0f8a19a)), closes [#1170](https://github.com/IBM/kui/issues/1170)
* **plugins/plugin-bash-like:** ls bug when dir contains suffix-matching files ([c6bbbd3](https://github.com/IBM/kui/commit/c6bbbd3)), closes [#940](https://github.com/IBM/kui/issues/940)
* **plugins/plugin-bash-like:** markdown missing overflow:auto ([e5f3910](https://github.com/IBM/kui/commit/e5f3910)), closes [#1038](https://github.com/IBM/kui/issues/1038)
* **plugins/plugin-bash-like:** nano versus pty ([5df2c66](https://github.com/IBM/kui/commit/5df2c66)), closes [#1254](https://github.com/IBM/kui/issues/1254)
* **plugins/plugin-bash-like:** pty output sometimes not visible ([3e3dab5](https://github.com/IBM/kui/commit/3e3dab5)), closes [#1087](https://github.com/IBM/kui/issues/1087)
* **plugins/plugin-bash-like:** resolve many pty rendering glitches ([4f89df0](https://github.com/IBM/kui/commit/4f89df0)), closes [#1073](https://github.com/IBM/kui/issues/1073)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)


### Features

* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* **packages/app:** queue up input while commands are executed ([51ec7e9](https://github.com/IBM/kui/commit/51ec7e9)), closes [#1044](https://github.com/IBM/kui/issues/1044)
* **plugins/plugin-bash-like:** asciidoc support ([af29e03](https://github.com/IBM/kui/commit/af29e03)), closes [#934](https://github.com/IBM/kui/issues/934)
* **plugins/plugin-bash-like:** do not show line numbers in git diff view ([2fc8803](https://github.com/IBM/kui/commit/2fc8803)), closes [#944](https://github.com/IBM/kui/issues/944)
* allow PTY websockets to piggyback on an existing https server ([4aeced5](https://github.com/IBM/kui/commit/4aeced5)), closes [#1183](https://github.com/IBM/kui/issues/1183)
* kubectl edit support ([de44c9a](https://github.com/IBM/kui/commit/de44c9a)), closes [#1164](https://github.com/IBM/kui/issues/1164)
* pty ([a3ad81d](https://github.com/IBM/kui/commit/a3ad81d)), closes [#572](https://github.com/IBM/kui/issues/572) [#414](https://github.com/IBM/kui/issues/414)
* sidecar full screen ([4f21cb2](https://github.com/IBM/kui/commit/4f21cb2)), closes [#294](https://github.com/IBM/kui/issues/294) [#721](https://github.com/IBM/kui/issues/721)
* **plugins/plugin-bash-like:** linkify links in PTY output ([ed7e590](https://github.com/IBM/kui/commit/ed7e590)), closes [#1266](https://github.com/IBM/kui/issues/1266)
* **plugins/plugin-bash-like:** make top-sliver in PTY mode draggable ([56942c0](https://github.com/IBM/kui/commit/56942c0)), closes [#1091](https://github.com/IBM/kui/issues/1091)





# 0.19.0 (2019-05-06)


### Bug Fixes

* a few more tab tweaks ([8e31e5e](https://github.com/IBM/kui/commit/8e31e5e)), closes [#719](https://github.com/IBM/kui/issues/719)
* add missing debug deps ([0bc5ef9](https://github.com/IBM/kui/commit/0bc5ef9)), closes [#646](https://github.com/IBM/kui/issues/646)
* allow clients to take control over entity name table cell coloring ([77b99d9](https://github.com/IBM/kui/commit/77b99d9)), closes [#675](https://github.com/IBM/kui/issues/675)
* ansi-to-html color definition updates ([74d7678](https://github.com/IBM/kui/commit/74d7678)), closes [#578](https://github.com/IBM/kui/issues/578)
* apache-composer versus webpack fixes ([0a97daf](https://github.com/IBM/kui/commit/0a97daf)), closes [#584](https://github.com/IBM/kui/issues/584)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* forbid tab focus more carefully for elements that should not receive focus ([faa3b86](https://github.com/IBM/kui/commit/faa3b86)), closes [#1160](https://github.com/IBM/kui/issues/1160)
* git diff should use side-by-side ([4fe215b](https://github.com/IBM/kui/commit/4fe215b)), closes [#617](https://github.com/IBM/kui/issues/617)
* git status UI fixes ([cf0f5cb](https://github.com/IBM/kui/commit/cf0f5cb)), closes [#702](https://github.com/IBM/kui/issues/702)
* improve handling of non-zero exit codes in bash-like usage formatting ([98bb8b3](https://github.com/IBM/kui/commit/98bb8b3)), closes [#582](https://github.com/IBM/kui/issues/582)
* improve input queueing versus PTY ([98120da](https://github.com/IBM/kui/commit/98120da)), closes [#1095](https://github.com/IBM/kui/issues/1095)
* improve ls output with sidecar open ([b3396fd](https://github.com/IBM/kui/commit/b3396fd)), closes [#1030](https://github.com/IBM/kui/issues/1030)
* improved activation list UI ([fe69bd6](https://github.com/IBM/kui/commit/fe69bd6)), closes [#837](https://github.com/IBM/kui/issues/837)
* improved scrolling behavior for PTY ([8953d8b](https://github.com/IBM/kui/commit/8953d8b)), closes [#1093](https://github.com/IBM/kui/issues/1093)
* kedit breakage ([e237336](https://github.com/IBM/kui/commit/e237336)), closes [#982](https://github.com/IBM/kui/issues/982)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* node-pty versus electron ([1263c74](https://github.com/IBM/kui/commit/1263c74)), closes [#1155](https://github.com/IBM/kui/issues/1155)
* **plugins/plugin-bash-like:** markdown versus popup mode ([02e108a](https://github.com/IBM/kui/commit/02e108a)), closes [#928](https://github.com/IBM/kui/issues/928)
* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* **packages/app:** make annoying 'ok' invisible ([0a0f7f7](https://github.com/IBM/kui/commit/0a0f7f7)), closes [#597](https://github.com/IBM/kui/issues/597)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-bash-like:** when cd fails, throw stderr ([85cb737](https://github.com/IBM/kui/commit/85cb737)), closes [#415](https://github.com/IBM/kui/issues/415)
* **plugins/plugin-bash-like:** ansi color bg/fg bug fix ([4d6265f](https://github.com/IBM/kui/commit/4d6265f)), closes [#591](https://github.com/IBM/kui/issues/591)
* **plugins/plugin-bash-like:** avoid use of bold fonts in git diff ([2dbe103](https://github.com/IBM/kui/commit/2dbe103)), closes [#636](https://github.com/IBM/kui/issues/636)
* **plugins/plugin-bash-like:** bash-like was not registering its catchall on preload ([99bf827](https://github.com/IBM/kui/commit/99bf827)), closes [#285](https://github.com/IBM/kui/issues/285)
* **plugins/plugin-bash-like:** cache websocket channels ([ed2538f](https://github.com/IBM/kui/commit/ed2538f)), closes [#1072](https://github.com/IBM/kui/issues/1072)
* **plugins/plugin-bash-like:** fix for ls on linux (-B) ([e1db77b](https://github.com/IBM/kui/commit/e1db77b)), closes [#904](https://github.com/IBM/kui/issues/904)
* PTY scrolling is a bit off ([788bd5a](https://github.com/IBM/kui/commit/788bd5a)), closes [#1128](https://github.com/IBM/kui/issues/1128)
* **plugins/plugin-bash-like:** fixes for empty row handling in pty ([35cb704](https://github.com/IBM/kui/commit/35cb704)), closes [#1282](https://github.com/IBM/kui/issues/1282)
* **plugins/plugin-bash-like:** git diff character diffs overlap ([d840251](https://github.com/IBM/kui/commit/d840251)), closes [#803](https://github.com/IBM/kui/issues/803)
* **plugins/plugin-bash-like:** git diff shouldn't force full screen ([c049c9f](https://github.com/IBM/kui/commit/c049c9f)), closes [#1120](https://github.com/IBM/kui/issues/1120)
* **plugins/plugin-bash-like:** git status text selection causes drilldown ([fb09aa5](https://github.com/IBM/kui/commit/fb09aa5)), closes [#1184](https://github.com/IBM/kui/issues/1184)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)
* **plugins/plugin-bash-like:** improve exit code handling of pty ([d096fe9](https://github.com/IBM/kui/commit/d096fe9)), closes [#1054](https://github.com/IBM/kui/issues/1054)
* PTY copy support ([bd67a31](https://github.com/IBM/kui/commit/bd67a31)), closes [#1188](https://github.com/IBM/kui/issues/1188)
* PTY should respond to sidecar open/close ([4972f1a](https://github.com/IBM/kui/commit/4972f1a)), closes [#1056](https://github.com/IBM/kui/issues/1056)
* **plugins/plugin-bash-like:** PTY copies wrong line ([2b8bdb7](https://github.com/IBM/kui/commit/2b8bdb7)), closes [#1214](https://github.com/IBM/kui/issues/1214)
* refinements to popup UI ([a6cab89](https://github.com/IBM/kui/commit/a6cab89)), closes [#874](https://github.com/IBM/kui/issues/874)
* repl should use outer scrolling when in popup mode ([434ed21](https://github.com/IBM/kui/commit/434ed21)), closes [#870](https://github.com/IBM/kui/issues/870)
* screenshot should respect scrollTop ([3d7e04c](https://github.com/IBM/kui/commit/3d7e04c)), closes [#970](https://github.com/IBM/kui/issues/970)
* **plugins/plugin-bash-like:** poor PTY text selection color ([943ed08](https://github.com/IBM/kui/commit/943ed08)), closes [#1268](https://github.com/IBM/kui/issues/1268)
* trim pty bits from headless build ([d9f8bf7](https://github.com/IBM/kui/commit/d9f8bf7)), closes [#1089](https://github.com/IBM/kui/issues/1089)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **plugins/plugin-bash-like:** improve PTY race conditions ([614f1df](https://github.com/IBM/kui/commit/614f1df)), closes [#1272](https://github.com/IBM/kui/issues/1272)
* **plugins/plugin-bash-like:** improved ls support on linux ([a424235](https://github.com/IBM/kui/commit/a424235)), closes [#869](https://github.com/IBM/kui/issues/869)
* webpack+proxy versus pty ([0f8a19a](https://github.com/IBM/kui/commit/0f8a19a)), closes [#1170](https://github.com/IBM/kui/issues/1170)
* **plugins/plugin-bash-like:** ls bug when dir contains suffix-matching files ([c6bbbd3](https://github.com/IBM/kui/commit/c6bbbd3)), closes [#940](https://github.com/IBM/kui/issues/940)
* **plugins/plugin-bash-like:** markdown missing overflow:auto ([e5f3910](https://github.com/IBM/kui/commit/e5f3910)), closes [#1038](https://github.com/IBM/kui/issues/1038)
* **plugins/plugin-bash-like:** nano versus pty ([5df2c66](https://github.com/IBM/kui/commit/5df2c66)), closes [#1254](https://github.com/IBM/kui/issues/1254)
* **plugins/plugin-bash-like:** pty output sometimes not visible ([3e3dab5](https://github.com/IBM/kui/commit/3e3dab5)), closes [#1087](https://github.com/IBM/kui/issues/1087)
* **plugins/plugin-bash-like:** resolve many pty rendering glitches ([4f89df0](https://github.com/IBM/kui/commit/4f89df0)), closes [#1073](https://github.com/IBM/kui/issues/1073)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)


### Features

* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* **packages/app:** queue up input while commands are executed ([51ec7e9](https://github.com/IBM/kui/commit/51ec7e9)), closes [#1044](https://github.com/IBM/kui/issues/1044)
* **plugins/plugin-bash-like:** asciidoc support ([af29e03](https://github.com/IBM/kui/commit/af29e03)), closes [#934](https://github.com/IBM/kui/issues/934)
* **plugins/plugin-bash-like:** do not show line numbers in git diff view ([2fc8803](https://github.com/IBM/kui/commit/2fc8803)), closes [#944](https://github.com/IBM/kui/issues/944)
* allow PTY websockets to piggyback on an existing https server ([4aeced5](https://github.com/IBM/kui/commit/4aeced5)), closes [#1183](https://github.com/IBM/kui/issues/1183)
* kubectl edit support ([de44c9a](https://github.com/IBM/kui/commit/de44c9a)), closes [#1164](https://github.com/IBM/kui/issues/1164)
* pty ([a3ad81d](https://github.com/IBM/kui/commit/a3ad81d)), closes [#572](https://github.com/IBM/kui/issues/572) [#414](https://github.com/IBM/kui/issues/414)
* sidecar full screen ([4f21cb2](https://github.com/IBM/kui/commit/4f21cb2)), closes [#294](https://github.com/IBM/kui/issues/294) [#721](https://github.com/IBM/kui/issues/721)
* **plugins/plugin-bash-like:** linkify links in PTY output ([ed7e590](https://github.com/IBM/kui/commit/ed7e590)), closes [#1266](https://github.com/IBM/kui/issues/1266)
* **plugins/plugin-bash-like:** make top-sliver in PTY mode draggable ([56942c0](https://github.com/IBM/kui/commit/56942c0)), closes [#1091](https://github.com/IBM/kui/issues/1091)





# 0.18.0 (2019-05-06)


### Bug Fixes

* a few more tab tweaks ([8e31e5e](https://github.com/IBM/kui/commit/8e31e5e)), closes [#719](https://github.com/IBM/kui/issues/719)
* add missing debug deps ([0bc5ef9](https://github.com/IBM/kui/commit/0bc5ef9)), closes [#646](https://github.com/IBM/kui/issues/646)
* allow clients to take control over entity name table cell coloring ([77b99d9](https://github.com/IBM/kui/commit/77b99d9)), closes [#675](https://github.com/IBM/kui/issues/675)
* ansi-to-html color definition updates ([74d7678](https://github.com/IBM/kui/commit/74d7678)), closes [#578](https://github.com/IBM/kui/issues/578)
* apache-composer versus webpack fixes ([0a97daf](https://github.com/IBM/kui/commit/0a97daf)), closes [#584](https://github.com/IBM/kui/issues/584)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* forbid tab focus more carefully for elements that should not receive focus ([faa3b86](https://github.com/IBM/kui/commit/faa3b86)), closes [#1160](https://github.com/IBM/kui/issues/1160)
* git diff should use side-by-side ([4fe215b](https://github.com/IBM/kui/commit/4fe215b)), closes [#617](https://github.com/IBM/kui/issues/617)
* git status UI fixes ([cf0f5cb](https://github.com/IBM/kui/commit/cf0f5cb)), closes [#702](https://github.com/IBM/kui/issues/702)
* improve handling of non-zero exit codes in bash-like usage formatting ([98bb8b3](https://github.com/IBM/kui/commit/98bb8b3)), closes [#582](https://github.com/IBM/kui/issues/582)
* improve input queueing versus PTY ([98120da](https://github.com/IBM/kui/commit/98120da)), closes [#1095](https://github.com/IBM/kui/issues/1095)
* improve ls output with sidecar open ([b3396fd](https://github.com/IBM/kui/commit/b3396fd)), closes [#1030](https://github.com/IBM/kui/issues/1030)
* improved activation list UI ([fe69bd6](https://github.com/IBM/kui/commit/fe69bd6)), closes [#837](https://github.com/IBM/kui/issues/837)
* improved scrolling behavior for PTY ([8953d8b](https://github.com/IBM/kui/commit/8953d8b)), closes [#1093](https://github.com/IBM/kui/issues/1093)
* kedit breakage ([e237336](https://github.com/IBM/kui/commit/e237336)), closes [#982](https://github.com/IBM/kui/issues/982)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* node-pty versus electron ([1263c74](https://github.com/IBM/kui/commit/1263c74)), closes [#1155](https://github.com/IBM/kui/issues/1155)
* **plugins/plugin-bash-like:** markdown versus popup mode ([02e108a](https://github.com/IBM/kui/commit/02e108a)), closes [#928](https://github.com/IBM/kui/issues/928)
* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* **packages/app:** make annoying 'ok' invisible ([0a0f7f7](https://github.com/IBM/kui/commit/0a0f7f7)), closes [#597](https://github.com/IBM/kui/issues/597)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-bash-like:** when cd fails, throw stderr ([85cb737](https://github.com/IBM/kui/commit/85cb737)), closes [#415](https://github.com/IBM/kui/issues/415)
* **plugins/plugin-bash-like:** ansi color bg/fg bug fix ([4d6265f](https://github.com/IBM/kui/commit/4d6265f)), closes [#591](https://github.com/IBM/kui/issues/591)
* **plugins/plugin-bash-like:** avoid use of bold fonts in git diff ([2dbe103](https://github.com/IBM/kui/commit/2dbe103)), closes [#636](https://github.com/IBM/kui/issues/636)
* **plugins/plugin-bash-like:** bash-like was not registering its catchall on preload ([99bf827](https://github.com/IBM/kui/commit/99bf827)), closes [#285](https://github.com/IBM/kui/issues/285)
* **plugins/plugin-bash-like:** cache websocket channels ([ed2538f](https://github.com/IBM/kui/commit/ed2538f)), closes [#1072](https://github.com/IBM/kui/issues/1072)
* **plugins/plugin-bash-like:** fix for ls on linux (-B) ([e1db77b](https://github.com/IBM/kui/commit/e1db77b)), closes [#904](https://github.com/IBM/kui/issues/904)
* PTY scrolling is a bit off ([788bd5a](https://github.com/IBM/kui/commit/788bd5a)), closes [#1128](https://github.com/IBM/kui/issues/1128)
* **plugins/plugin-bash-like:** fixes for empty row handling in pty ([35cb704](https://github.com/IBM/kui/commit/35cb704)), closes [#1282](https://github.com/IBM/kui/issues/1282)
* **plugins/plugin-bash-like:** git diff character diffs overlap ([d840251](https://github.com/IBM/kui/commit/d840251)), closes [#803](https://github.com/IBM/kui/issues/803)
* **plugins/plugin-bash-like:** git diff shouldn't force full screen ([c049c9f](https://github.com/IBM/kui/commit/c049c9f)), closes [#1120](https://github.com/IBM/kui/issues/1120)
* **plugins/plugin-bash-like:** git status text selection causes drilldown ([fb09aa5](https://github.com/IBM/kui/commit/fb09aa5)), closes [#1184](https://github.com/IBM/kui/issues/1184)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)
* **plugins/plugin-bash-like:** improve exit code handling of pty ([d096fe9](https://github.com/IBM/kui/commit/d096fe9)), closes [#1054](https://github.com/IBM/kui/issues/1054)
* PTY copy support ([bd67a31](https://github.com/IBM/kui/commit/bd67a31)), closes [#1188](https://github.com/IBM/kui/issues/1188)
* PTY should respond to sidecar open/close ([4972f1a](https://github.com/IBM/kui/commit/4972f1a)), closes [#1056](https://github.com/IBM/kui/issues/1056)
* **plugins/plugin-bash-like:** PTY copies wrong line ([2b8bdb7](https://github.com/IBM/kui/commit/2b8bdb7)), closes [#1214](https://github.com/IBM/kui/issues/1214)
* refinements to popup UI ([a6cab89](https://github.com/IBM/kui/commit/a6cab89)), closes [#874](https://github.com/IBM/kui/issues/874)
* repl should use outer scrolling when in popup mode ([434ed21](https://github.com/IBM/kui/commit/434ed21)), closes [#870](https://github.com/IBM/kui/issues/870)
* screenshot should respect scrollTop ([3d7e04c](https://github.com/IBM/kui/commit/3d7e04c)), closes [#970](https://github.com/IBM/kui/issues/970)
* **plugins/plugin-bash-like:** poor PTY text selection color ([943ed08](https://github.com/IBM/kui/commit/943ed08)), closes [#1268](https://github.com/IBM/kui/issues/1268)
* trim pty bits from headless build ([d9f8bf7](https://github.com/IBM/kui/commit/d9f8bf7)), closes [#1089](https://github.com/IBM/kui/issues/1089)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **plugins/plugin-bash-like:** improve PTY race conditions ([614f1df](https://github.com/IBM/kui/commit/614f1df)), closes [#1272](https://github.com/IBM/kui/issues/1272)
* **plugins/plugin-bash-like:** improved ls support on linux ([a424235](https://github.com/IBM/kui/commit/a424235)), closes [#869](https://github.com/IBM/kui/issues/869)
* webpack+proxy versus pty ([0f8a19a](https://github.com/IBM/kui/commit/0f8a19a)), closes [#1170](https://github.com/IBM/kui/issues/1170)
* **plugins/plugin-bash-like:** ls bug when dir contains suffix-matching files ([c6bbbd3](https://github.com/IBM/kui/commit/c6bbbd3)), closes [#940](https://github.com/IBM/kui/issues/940)
* **plugins/plugin-bash-like:** markdown missing overflow:auto ([e5f3910](https://github.com/IBM/kui/commit/e5f3910)), closes [#1038](https://github.com/IBM/kui/issues/1038)
* **plugins/plugin-bash-like:** nano versus pty ([5df2c66](https://github.com/IBM/kui/commit/5df2c66)), closes [#1254](https://github.com/IBM/kui/issues/1254)
* **plugins/plugin-bash-like:** pty output sometimes not visible ([3e3dab5](https://github.com/IBM/kui/commit/3e3dab5)), closes [#1087](https://github.com/IBM/kui/issues/1087)
* **plugins/plugin-bash-like:** resolve many pty rendering glitches ([4f89df0](https://github.com/IBM/kui/commit/4f89df0)), closes [#1073](https://github.com/IBM/kui/issues/1073)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)


### Features

* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* **packages/app:** queue up input while commands are executed ([51ec7e9](https://github.com/IBM/kui/commit/51ec7e9)), closes [#1044](https://github.com/IBM/kui/issues/1044)
* **plugins/plugin-bash-like:** asciidoc support ([af29e03](https://github.com/IBM/kui/commit/af29e03)), closes [#934](https://github.com/IBM/kui/issues/934)
* **plugins/plugin-bash-like:** do not show line numbers in git diff view ([2fc8803](https://github.com/IBM/kui/commit/2fc8803)), closes [#944](https://github.com/IBM/kui/issues/944)
* allow PTY websockets to piggyback on an existing https server ([4aeced5](https://github.com/IBM/kui/commit/4aeced5)), closes [#1183](https://github.com/IBM/kui/issues/1183)
* kubectl edit support ([de44c9a](https://github.com/IBM/kui/commit/de44c9a)), closes [#1164](https://github.com/IBM/kui/issues/1164)
* pty ([a3ad81d](https://github.com/IBM/kui/commit/a3ad81d)), closes [#572](https://github.com/IBM/kui/issues/572) [#414](https://github.com/IBM/kui/issues/414)
* sidecar full screen ([4f21cb2](https://github.com/IBM/kui/commit/4f21cb2)), closes [#294](https://github.com/IBM/kui/issues/294) [#721](https://github.com/IBM/kui/issues/721)
* **plugins/plugin-bash-like:** linkify links in PTY output ([ed7e590](https://github.com/IBM/kui/commit/ed7e590)), closes [#1266](https://github.com/IBM/kui/issues/1266)
* **plugins/plugin-bash-like:** make top-sliver in PTY mode draggable ([56942c0](https://github.com/IBM/kui/commit/56942c0)), closes [#1091](https://github.com/IBM/kui/issues/1091)





# 0.17.0 (2019-05-04)


### Bug Fixes

* a few more tab tweaks ([8e31e5e](https://github.com/IBM/kui/commit/8e31e5e)), closes [#719](https://github.com/IBM/kui/issues/719)
* add missing debug deps ([0bc5ef9](https://github.com/IBM/kui/commit/0bc5ef9)), closes [#646](https://github.com/IBM/kui/issues/646)
* allow clients to take control over entity name table cell coloring ([77b99d9](https://github.com/IBM/kui/commit/77b99d9)), closes [#675](https://github.com/IBM/kui/issues/675)
* ansi-to-html color definition updates ([74d7678](https://github.com/IBM/kui/commit/74d7678)), closes [#578](https://github.com/IBM/kui/issues/578)
* apache-composer versus webpack fixes ([0a97daf](https://github.com/IBM/kui/commit/0a97daf)), closes [#584](https://github.com/IBM/kui/issues/584)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* forbid tab focus more carefully for elements that should not receive focus ([faa3b86](https://github.com/IBM/kui/commit/faa3b86)), closes [#1160](https://github.com/IBM/kui/issues/1160)
* git diff should use side-by-side ([4fe215b](https://github.com/IBM/kui/commit/4fe215b)), closes [#617](https://github.com/IBM/kui/issues/617)
* git status UI fixes ([cf0f5cb](https://github.com/IBM/kui/commit/cf0f5cb)), closes [#702](https://github.com/IBM/kui/issues/702)
* improve handling of non-zero exit codes in bash-like usage formatting ([98bb8b3](https://github.com/IBM/kui/commit/98bb8b3)), closes [#582](https://github.com/IBM/kui/issues/582)
* improve input queueing versus PTY ([98120da](https://github.com/IBM/kui/commit/98120da)), closes [#1095](https://github.com/IBM/kui/issues/1095)
* improve ls output with sidecar open ([b3396fd](https://github.com/IBM/kui/commit/b3396fd)), closes [#1030](https://github.com/IBM/kui/issues/1030)
* improved activation list UI ([fe69bd6](https://github.com/IBM/kui/commit/fe69bd6)), closes [#837](https://github.com/IBM/kui/issues/837)
* improved scrolling behavior for PTY ([8953d8b](https://github.com/IBM/kui/commit/8953d8b)), closes [#1093](https://github.com/IBM/kui/issues/1093)
* kedit breakage ([e237336](https://github.com/IBM/kui/commit/e237336)), closes [#982](https://github.com/IBM/kui/issues/982)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* node-pty versus electron ([1263c74](https://github.com/IBM/kui/commit/1263c74)), closes [#1155](https://github.com/IBM/kui/issues/1155)
* **plugins/plugin-bash-like:** markdown versus popup mode ([02e108a](https://github.com/IBM/kui/commit/02e108a)), closes [#928](https://github.com/IBM/kui/issues/928)
* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* **packages/app:** make annoying 'ok' invisible ([0a0f7f7](https://github.com/IBM/kui/commit/0a0f7f7)), closes [#597](https://github.com/IBM/kui/issues/597)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-bash-like:** when cd fails, throw stderr ([85cb737](https://github.com/IBM/kui/commit/85cb737)), closes [#415](https://github.com/IBM/kui/issues/415)
* **plugins/plugin-bash-like:** ansi color bg/fg bug fix ([4d6265f](https://github.com/IBM/kui/commit/4d6265f)), closes [#591](https://github.com/IBM/kui/issues/591)
* **plugins/plugin-bash-like:** avoid use of bold fonts in git diff ([2dbe103](https://github.com/IBM/kui/commit/2dbe103)), closes [#636](https://github.com/IBM/kui/issues/636)
* **plugins/plugin-bash-like:** bash-like was not registering its catchall on preload ([99bf827](https://github.com/IBM/kui/commit/99bf827)), closes [#285](https://github.com/IBM/kui/issues/285)
* **plugins/plugin-bash-like:** cache websocket channels ([ed2538f](https://github.com/IBM/kui/commit/ed2538f)), closes [#1072](https://github.com/IBM/kui/issues/1072)
* **plugins/plugin-bash-like:** fix for ls on linux (-B) ([e1db77b](https://github.com/IBM/kui/commit/e1db77b)), closes [#904](https://github.com/IBM/kui/issues/904)
* PTY scrolling is a bit off ([788bd5a](https://github.com/IBM/kui/commit/788bd5a)), closes [#1128](https://github.com/IBM/kui/issues/1128)
* **plugins/plugin-bash-like:** fixes for empty row handling in pty ([35cb704](https://github.com/IBM/kui/commit/35cb704)), closes [#1282](https://github.com/IBM/kui/issues/1282)
* **plugins/plugin-bash-like:** git diff character diffs overlap ([d840251](https://github.com/IBM/kui/commit/d840251)), closes [#803](https://github.com/IBM/kui/issues/803)
* **plugins/plugin-bash-like:** git diff shouldn't force full screen ([c049c9f](https://github.com/IBM/kui/commit/c049c9f)), closes [#1120](https://github.com/IBM/kui/issues/1120)
* **plugins/plugin-bash-like:** git status text selection causes drilldown ([fb09aa5](https://github.com/IBM/kui/commit/fb09aa5)), closes [#1184](https://github.com/IBM/kui/issues/1184)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)
* **plugins/plugin-bash-like:** improve exit code handling of pty ([d096fe9](https://github.com/IBM/kui/commit/d096fe9)), closes [#1054](https://github.com/IBM/kui/issues/1054)
* PTY copy support ([bd67a31](https://github.com/IBM/kui/commit/bd67a31)), closes [#1188](https://github.com/IBM/kui/issues/1188)
* PTY should respond to sidecar open/close ([4972f1a](https://github.com/IBM/kui/commit/4972f1a)), closes [#1056](https://github.com/IBM/kui/issues/1056)
* **plugins/plugin-bash-like:** PTY copies wrong line ([2b8bdb7](https://github.com/IBM/kui/commit/2b8bdb7)), closes [#1214](https://github.com/IBM/kui/issues/1214)
* refinements to popup UI ([a6cab89](https://github.com/IBM/kui/commit/a6cab89)), closes [#874](https://github.com/IBM/kui/issues/874)
* repl should use outer scrolling when in popup mode ([434ed21](https://github.com/IBM/kui/commit/434ed21)), closes [#870](https://github.com/IBM/kui/issues/870)
* screenshot should respect scrollTop ([3d7e04c](https://github.com/IBM/kui/commit/3d7e04c)), closes [#970](https://github.com/IBM/kui/issues/970)
* **plugins/plugin-bash-like:** poor PTY text selection color ([943ed08](https://github.com/IBM/kui/commit/943ed08)), closes [#1268](https://github.com/IBM/kui/issues/1268)
* trim pty bits from headless build ([d9f8bf7](https://github.com/IBM/kui/commit/d9f8bf7)), closes [#1089](https://github.com/IBM/kui/issues/1089)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **plugins/plugin-bash-like:** improve PTY race conditions ([614f1df](https://github.com/IBM/kui/commit/614f1df)), closes [#1272](https://github.com/IBM/kui/issues/1272)
* **plugins/plugin-bash-like:** improved ls support on linux ([a424235](https://github.com/IBM/kui/commit/a424235)), closes [#869](https://github.com/IBM/kui/issues/869)
* webpack+proxy versus pty ([0f8a19a](https://github.com/IBM/kui/commit/0f8a19a)), closes [#1170](https://github.com/IBM/kui/issues/1170)
* **plugins/plugin-bash-like:** ls bug when dir contains suffix-matching files ([c6bbbd3](https://github.com/IBM/kui/commit/c6bbbd3)), closes [#940](https://github.com/IBM/kui/issues/940)
* **plugins/plugin-bash-like:** markdown missing overflow:auto ([e5f3910](https://github.com/IBM/kui/commit/e5f3910)), closes [#1038](https://github.com/IBM/kui/issues/1038)
* **plugins/plugin-bash-like:** nano versus pty ([5df2c66](https://github.com/IBM/kui/commit/5df2c66)), closes [#1254](https://github.com/IBM/kui/issues/1254)
* **plugins/plugin-bash-like:** pty output sometimes not visible ([3e3dab5](https://github.com/IBM/kui/commit/3e3dab5)), closes [#1087](https://github.com/IBM/kui/issues/1087)
* **plugins/plugin-bash-like:** resolve many pty rendering glitches ([4f89df0](https://github.com/IBM/kui/commit/4f89df0)), closes [#1073](https://github.com/IBM/kui/issues/1073)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)


### Features

* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* **packages/app:** queue up input while commands are executed ([51ec7e9](https://github.com/IBM/kui/commit/51ec7e9)), closes [#1044](https://github.com/IBM/kui/issues/1044)
* **plugins/plugin-bash-like:** asciidoc support ([af29e03](https://github.com/IBM/kui/commit/af29e03)), closes [#934](https://github.com/IBM/kui/issues/934)
* **plugins/plugin-bash-like:** do not show line numbers in git diff view ([2fc8803](https://github.com/IBM/kui/commit/2fc8803)), closes [#944](https://github.com/IBM/kui/issues/944)
* allow PTY websockets to piggyback on an existing https server ([4aeced5](https://github.com/IBM/kui/commit/4aeced5)), closes [#1183](https://github.com/IBM/kui/issues/1183)
* kubectl edit support ([de44c9a](https://github.com/IBM/kui/commit/de44c9a)), closes [#1164](https://github.com/IBM/kui/issues/1164)
* pty ([a3ad81d](https://github.com/IBM/kui/commit/a3ad81d)), closes [#572](https://github.com/IBM/kui/issues/572) [#414](https://github.com/IBM/kui/issues/414)
* sidecar full screen ([4f21cb2](https://github.com/IBM/kui/commit/4f21cb2)), closes [#294](https://github.com/IBM/kui/issues/294) [#721](https://github.com/IBM/kui/issues/721)
* **plugins/plugin-bash-like:** linkify links in PTY output ([ed7e590](https://github.com/IBM/kui/commit/ed7e590)), closes [#1266](https://github.com/IBM/kui/issues/1266)
* **plugins/plugin-bash-like:** make top-sliver in PTY mode draggable ([56942c0](https://github.com/IBM/kui/commit/56942c0)), closes [#1091](https://github.com/IBM/kui/issues/1091)





# 0.16.0 (2019-04-26)


### Bug Fixes

* a few more tab tweaks ([8e31e5e](https://github.com/IBM/kui/commit/8e31e5e)), closes [#719](https://github.com/IBM/kui/issues/719)
* add missing debug deps ([0bc5ef9](https://github.com/IBM/kui/commit/0bc5ef9)), closes [#646](https://github.com/IBM/kui/issues/646)
* allow clients to take control over entity name table cell coloring ([77b99d9](https://github.com/IBM/kui/commit/77b99d9)), closes [#675](https://github.com/IBM/kui/issues/675)
* ansi-to-html color definition updates ([74d7678](https://github.com/IBM/kui/commit/74d7678)), closes [#578](https://github.com/IBM/kui/issues/578)
* apache-composer versus webpack fixes ([0a97daf](https://github.com/IBM/kui/commit/0a97daf)), closes [#584](https://github.com/IBM/kui/issues/584)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* forbid tab focus more carefully for elements that should not receive focus ([faa3b86](https://github.com/IBM/kui/commit/faa3b86)), closes [#1160](https://github.com/IBM/kui/issues/1160)
* git diff should use side-by-side ([4fe215b](https://github.com/IBM/kui/commit/4fe215b)), closes [#617](https://github.com/IBM/kui/issues/617)
* git status UI fixes ([cf0f5cb](https://github.com/IBM/kui/commit/cf0f5cb)), closes [#702](https://github.com/IBM/kui/issues/702)
* improve handling of non-zero exit codes in bash-like usage formatting ([98bb8b3](https://github.com/IBM/kui/commit/98bb8b3)), closes [#582](https://github.com/IBM/kui/issues/582)
* improve input queueing versus PTY ([98120da](https://github.com/IBM/kui/commit/98120da)), closes [#1095](https://github.com/IBM/kui/issues/1095)
* improve ls output with sidecar open ([b3396fd](https://github.com/IBM/kui/commit/b3396fd)), closes [#1030](https://github.com/IBM/kui/issues/1030)
* **plugins/plugin-bash-like:** improved ls support on linux ([a424235](https://github.com/IBM/kui/commit/a424235)), closes [#869](https://github.com/IBM/kui/issues/869)
* improved activation list UI ([fe69bd6](https://github.com/IBM/kui/commit/fe69bd6)), closes [#837](https://github.com/IBM/kui/issues/837)
* improved scrolling behavior for PTY ([8953d8b](https://github.com/IBM/kui/commit/8953d8b)), closes [#1093](https://github.com/IBM/kui/issues/1093)
* kedit breakage ([e237336](https://github.com/IBM/kui/commit/e237336)), closes [#982](https://github.com/IBM/kui/issues/982)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* node-pty versus electron ([1263c74](https://github.com/IBM/kui/commit/1263c74)), closes [#1155](https://github.com/IBM/kui/issues/1155)
* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* **packages/app:** make annoying 'ok' invisible ([0a0f7f7](https://github.com/IBM/kui/commit/0a0f7f7)), closes [#597](https://github.com/IBM/kui/issues/597)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-bash-like:** when cd fails, throw stderr ([85cb737](https://github.com/IBM/kui/commit/85cb737)), closes [#415](https://github.com/IBM/kui/issues/415)
* **plugins/plugin-bash-like:** ansi color bg/fg bug fix ([4d6265f](https://github.com/IBM/kui/commit/4d6265f)), closes [#591](https://github.com/IBM/kui/issues/591)
* **plugins/plugin-bash-like:** avoid use of bold fonts in git diff ([2dbe103](https://github.com/IBM/kui/commit/2dbe103)), closes [#636](https://github.com/IBM/kui/issues/636)
* **plugins/plugin-bash-like:** bash-like was not registering its catchall on preload ([99bf827](https://github.com/IBM/kui/commit/99bf827)), closes [#285](https://github.com/IBM/kui/issues/285)
* **plugins/plugin-bash-like:** cache websocket channels ([ed2538f](https://github.com/IBM/kui/commit/ed2538f)), closes [#1072](https://github.com/IBM/kui/issues/1072)
* **plugins/plugin-bash-like:** fix for ls on linux (-B) ([e1db77b](https://github.com/IBM/kui/commit/e1db77b)), closes [#904](https://github.com/IBM/kui/issues/904)
* **plugins/plugin-bash-like:** git diff character diffs overlap ([d840251](https://github.com/IBM/kui/commit/d840251)), closes [#803](https://github.com/IBM/kui/issues/803)
* **plugins/plugin-bash-like:** git diff shouldn't force full screen ([c049c9f](https://github.com/IBM/kui/commit/c049c9f)), closes [#1120](https://github.com/IBM/kui/issues/1120)
* **plugins/plugin-bash-like:** git status text selection causes drilldown ([fb09aa5](https://github.com/IBM/kui/commit/fb09aa5)), closes [#1184](https://github.com/IBM/kui/issues/1184)
* **plugins/plugin-bash-like:** improve exit code handling of pty ([d096fe9](https://github.com/IBM/kui/commit/d096fe9)), closes [#1054](https://github.com/IBM/kui/issues/1054)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **plugins/plugin-bash-like:** ls bug when dir contains suffix-matching files ([c6bbbd3](https://github.com/IBM/kui/commit/c6bbbd3)), closes [#940](https://github.com/IBM/kui/issues/940)
* **plugins/plugin-bash-like:** markdown missing overflow:auto ([e5f3910](https://github.com/IBM/kui/commit/e5f3910)), closes [#1038](https://github.com/IBM/kui/issues/1038)
* **plugins/plugin-bash-like:** markdown versus popup mode ([02e108a](https://github.com/IBM/kui/commit/02e108a)), closes [#928](https://github.com/IBM/kui/issues/928)
* PTY copy support ([bd67a31](https://github.com/IBM/kui/commit/bd67a31)), closes [#1188](https://github.com/IBM/kui/issues/1188)
* **plugins/plugin-bash-like:** PTY copies wrong line ([2b8bdb7](https://github.com/IBM/kui/commit/2b8bdb7)), closes [#1214](https://github.com/IBM/kui/issues/1214)
* PTY scrolling is a bit off ([788bd5a](https://github.com/IBM/kui/commit/788bd5a)), closes [#1128](https://github.com/IBM/kui/issues/1128)
* PTY should respond to sidecar open/close ([4972f1a](https://github.com/IBM/kui/commit/4972f1a)), closes [#1056](https://github.com/IBM/kui/issues/1056)
* refinements to popup UI ([a6cab89](https://github.com/IBM/kui/commit/a6cab89)), closes [#874](https://github.com/IBM/kui/issues/874)
* repl should use outer scrolling when in popup mode ([434ed21](https://github.com/IBM/kui/commit/434ed21)), closes [#870](https://github.com/IBM/kui/issues/870)
* screenshot should respect scrollTop ([3d7e04c](https://github.com/IBM/kui/commit/3d7e04c)), closes [#970](https://github.com/IBM/kui/issues/970)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)
* trim pty bits from headless build ([d9f8bf7](https://github.com/IBM/kui/commit/d9f8bf7)), closes [#1089](https://github.com/IBM/kui/issues/1089)
* **plugins/plugin-bash-like:** pty output sometimes not visible ([3e3dab5](https://github.com/IBM/kui/commit/3e3dab5)), closes [#1087](https://github.com/IBM/kui/issues/1087)
* webpack+proxy versus pty ([0f8a19a](https://github.com/IBM/kui/commit/0f8a19a)), closes [#1170](https://github.com/IBM/kui/issues/1170)
* **plugins/plugin-bash-like:** resolve many pty rendering glitches ([4f89df0](https://github.com/IBM/kui/commit/4f89df0)), closes [#1073](https://github.com/IBM/kui/issues/1073)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)


### Features

* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* **packages/app:** queue up input while commands are executed ([51ec7e9](https://github.com/IBM/kui/commit/51ec7e9)), closes [#1044](https://github.com/IBM/kui/issues/1044)
* **plugins/plugin-bash-like:** asciidoc support ([af29e03](https://github.com/IBM/kui/commit/af29e03)), closes [#934](https://github.com/IBM/kui/issues/934)
* **plugins/plugin-bash-like:** do not show line numbers in git diff view ([2fc8803](https://github.com/IBM/kui/commit/2fc8803)), closes [#944](https://github.com/IBM/kui/issues/944)
* **plugins/plugin-bash-like:** make top-sliver in PTY mode draggable ([56942c0](https://github.com/IBM/kui/commit/56942c0)), closes [#1091](https://github.com/IBM/kui/issues/1091)
* allow PTY websockets to piggyback on an existing https server ([4aeced5](https://github.com/IBM/kui/commit/4aeced5)), closes [#1183](https://github.com/IBM/kui/issues/1183)
* kubectl edit support ([de44c9a](https://github.com/IBM/kui/commit/de44c9a)), closes [#1164](https://github.com/IBM/kui/issues/1164)
* pty ([a3ad81d](https://github.com/IBM/kui/commit/a3ad81d)), closes [#572](https://github.com/IBM/kui/issues/572) [#414](https://github.com/IBM/kui/issues/414)
* sidecar full screen ([4f21cb2](https://github.com/IBM/kui/commit/4f21cb2)), closes [#294](https://github.com/IBM/kui/issues/294) [#721](https://github.com/IBM/kui/issues/721)





# 0.15.0 (2019-04-23)


### Bug Fixes

* a few more tab tweaks ([8e31e5e](https://github.com/IBM/kui/commit/8e31e5e)), closes [#719](https://github.com/IBM/kui/issues/719)
* add missing debug deps ([0bc5ef9](https://github.com/IBM/kui/commit/0bc5ef9)), closes [#646](https://github.com/IBM/kui/issues/646)
* allow clients to take control over entity name table cell coloring ([77b99d9](https://github.com/IBM/kui/commit/77b99d9)), closes [#675](https://github.com/IBM/kui/issues/675)
* ansi-to-html color definition updates ([74d7678](https://github.com/IBM/kui/commit/74d7678)), closes [#578](https://github.com/IBM/kui/issues/578)
* apache-composer versus webpack fixes ([0a97daf](https://github.com/IBM/kui/commit/0a97daf)), closes [#584](https://github.com/IBM/kui/issues/584)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* forbid tab focus more carefully for elements that should not receive focus ([faa3b86](https://github.com/IBM/kui/commit/faa3b86)), closes [#1160](https://github.com/IBM/kui/issues/1160)
* git diff should use side-by-side ([4fe215b](https://github.com/IBM/kui/commit/4fe215b)), closes [#617](https://github.com/IBM/kui/issues/617)
* git status UI fixes ([cf0f5cb](https://github.com/IBM/kui/commit/cf0f5cb)), closes [#702](https://github.com/IBM/kui/issues/702)
* improve handling of non-zero exit codes in bash-like usage formatting ([98bb8b3](https://github.com/IBM/kui/commit/98bb8b3)), closes [#582](https://github.com/IBM/kui/issues/582)
* improve input queueing versus PTY ([98120da](https://github.com/IBM/kui/commit/98120da)), closes [#1095](https://github.com/IBM/kui/issues/1095)
* improve ls output with sidecar open ([b3396fd](https://github.com/IBM/kui/commit/b3396fd)), closes [#1030](https://github.com/IBM/kui/issues/1030)
* improved activation list UI ([fe69bd6](https://github.com/IBM/kui/commit/fe69bd6)), closes [#837](https://github.com/IBM/kui/issues/837)
* improved scrolling behavior for PTY ([8953d8b](https://github.com/IBM/kui/commit/8953d8b)), closes [#1093](https://github.com/IBM/kui/issues/1093)
* kedit breakage ([e237336](https://github.com/IBM/kui/commit/e237336)), closes [#982](https://github.com/IBM/kui/issues/982)
* **plugins/plugin-bash-like:** bash-like was not registering its catchall on preload ([99bf827](https://github.com/IBM/kui/commit/99bf827)), closes [#285](https://github.com/IBM/kui/issues/285)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* node-pty versus electron ([1263c74](https://github.com/IBM/kui/commit/1263c74)), closes [#1155](https://github.com/IBM/kui/issues/1155)
* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* **packages/app:** make annoying 'ok' invisible ([0a0f7f7](https://github.com/IBM/kui/commit/0a0f7f7)), closes [#597](https://github.com/IBM/kui/issues/597)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-bash-like:** when cd fails, throw stderr ([85cb737](https://github.com/IBM/kui/commit/85cb737)), closes [#415](https://github.com/IBM/kui/issues/415)
* **plugins/plugin-bash-like:** ansi color bg/fg bug fix ([4d6265f](https://github.com/IBM/kui/commit/4d6265f)), closes [#591](https://github.com/IBM/kui/issues/591)
* **plugins/plugin-bash-like:** avoid use of bold fonts in git diff ([2dbe103](https://github.com/IBM/kui/commit/2dbe103)), closes [#636](https://github.com/IBM/kui/issues/636)
* **plugins/plugin-bash-like:** cache websocket channels ([ed2538f](https://github.com/IBM/kui/commit/ed2538f)), closes [#1072](https://github.com/IBM/kui/issues/1072)
* **plugins/plugin-bash-like:** fix for ls on linux (-B) ([e1db77b](https://github.com/IBM/kui/commit/e1db77b)), closes [#904](https://github.com/IBM/kui/issues/904)
* **plugins/plugin-bash-like:** git diff character diffs overlap ([d840251](https://github.com/IBM/kui/commit/d840251)), closes [#803](https://github.com/IBM/kui/issues/803)
* **plugins/plugin-bash-like:** git diff shouldn't force full screen ([c049c9f](https://github.com/IBM/kui/commit/c049c9f)), closes [#1120](https://github.com/IBM/kui/issues/1120)
* **plugins/plugin-bash-like:** git status text selection causes drilldown ([fb09aa5](https://github.com/IBM/kui/commit/fb09aa5)), closes [#1184](https://github.com/IBM/kui/issues/1184)
* PTY copy support ([bd67a31](https://github.com/IBM/kui/commit/bd67a31)), closes [#1188](https://github.com/IBM/kui/issues/1188)
* PTY scrolling is a bit off ([788bd5a](https://github.com/IBM/kui/commit/788bd5a)), closes [#1128](https://github.com/IBM/kui/issues/1128)
* PTY should respond to sidecar open/close ([4972f1a](https://github.com/IBM/kui/commit/4972f1a)), closes [#1056](https://github.com/IBM/kui/issues/1056)
* refinements to popup UI ([a6cab89](https://github.com/IBM/kui/commit/a6cab89)), closes [#874](https://github.com/IBM/kui/issues/874)
* repl should use outer scrolling when in popup mode ([434ed21](https://github.com/IBM/kui/commit/434ed21)), closes [#870](https://github.com/IBM/kui/issues/870)
* screenshot should respect scrollTop ([3d7e04c](https://github.com/IBM/kui/commit/3d7e04c)), closes [#970](https://github.com/IBM/kui/issues/970)
* **plugins/plugin-bash-like:** improve exit code handling of pty ([d096fe9](https://github.com/IBM/kui/commit/d096fe9)), closes [#1054](https://github.com/IBM/kui/issues/1054)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)
* **plugins/plugin-bash-like:** improved ls support on linux ([a424235](https://github.com/IBM/kui/commit/a424235)), closes [#869](https://github.com/IBM/kui/issues/869)
* **plugins/plugin-bash-like:** ls bug when dir contains suffix-matching files ([c6bbbd3](https://github.com/IBM/kui/commit/c6bbbd3)), closes [#940](https://github.com/IBM/kui/issues/940)
* **plugins/plugin-bash-like:** markdown missing overflow:auto ([e5f3910](https://github.com/IBM/kui/commit/e5f3910)), closes [#1038](https://github.com/IBM/kui/issues/1038)
* **plugins/plugin-bash-like:** markdown versus popup mode ([02e108a](https://github.com/IBM/kui/commit/02e108a)), closes [#928](https://github.com/IBM/kui/issues/928)
* **plugins/plugin-bash-like:** pty output sometimes not visible ([3e3dab5](https://github.com/IBM/kui/commit/3e3dab5)), closes [#1087](https://github.com/IBM/kui/issues/1087)
* **plugins/plugin-bash-like:** resolve many pty rendering glitches ([4f89df0](https://github.com/IBM/kui/commit/4f89df0)), closes [#1073](https://github.com/IBM/kui/issues/1073)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)
* trim pty bits from headless build ([d9f8bf7](https://github.com/IBM/kui/commit/d9f8bf7)), closes [#1089](https://github.com/IBM/kui/issues/1089)
* webpack+proxy versus pty ([0f8a19a](https://github.com/IBM/kui/commit/0f8a19a)), closes [#1170](https://github.com/IBM/kui/issues/1170)


### Features

* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* **packages/app:** queue up input while commands are executed ([51ec7e9](https://github.com/IBM/kui/commit/51ec7e9)), closes [#1044](https://github.com/IBM/kui/issues/1044)
* **plugins/plugin-bash-like:** asciidoc support ([af29e03](https://github.com/IBM/kui/commit/af29e03)), closes [#934](https://github.com/IBM/kui/issues/934)
* **plugins/plugin-bash-like:** do not show line numbers in git diff view ([2fc8803](https://github.com/IBM/kui/commit/2fc8803)), closes [#944](https://github.com/IBM/kui/issues/944)
* **plugins/plugin-bash-like:** make top-sliver in PTY mode draggable ([56942c0](https://github.com/IBM/kui/commit/56942c0)), closes [#1091](https://github.com/IBM/kui/issues/1091)
* allow PTY websockets to piggyback on an existing https server ([4aeced5](https://github.com/IBM/kui/commit/4aeced5)), closes [#1183](https://github.com/IBM/kui/issues/1183)
* kubectl edit support ([de44c9a](https://github.com/IBM/kui/commit/de44c9a)), closes [#1164](https://github.com/IBM/kui/issues/1164)
* pty ([a3ad81d](https://github.com/IBM/kui/commit/a3ad81d)), closes [#572](https://github.com/IBM/kui/issues/572) [#414](https://github.com/IBM/kui/issues/414)
* sidecar full screen ([4f21cb2](https://github.com/IBM/kui/commit/4f21cb2)), closes [#294](https://github.com/IBM/kui/issues/294) [#721](https://github.com/IBM/kui/issues/721)





# 0.14.0 (2019-04-10)


### Bug Fixes

* a few more tab tweaks ([8e31e5e](https://github.com/IBM/kui/commit/8e31e5e)), closes [#719](https://github.com/IBM/kui/issues/719)
* add missing debug deps ([0bc5ef9](https://github.com/IBM/kui/commit/0bc5ef9)), closes [#646](https://github.com/IBM/kui/issues/646)
* allow clients to take control over entity name table cell coloring ([77b99d9](https://github.com/IBM/kui/commit/77b99d9)), closes [#675](https://github.com/IBM/kui/issues/675)
* ansi-to-html color definition updates ([74d7678](https://github.com/IBM/kui/commit/74d7678)), closes [#578](https://github.com/IBM/kui/issues/578)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* git diff should use side-by-side ([4fe215b](https://github.com/IBM/kui/commit/4fe215b)), closes [#617](https://github.com/IBM/kui/issues/617)
* git status UI fixes ([cf0f5cb](https://github.com/IBM/kui/commit/cf0f5cb)), closes [#702](https://github.com/IBM/kui/issues/702)
* improve handling of non-zero exit codes in bash-like usage formatting ([98bb8b3](https://github.com/IBM/kui/commit/98bb8b3)), closes [#582](https://github.com/IBM/kui/issues/582)
* improve input queueing versus PTY ([98120da](https://github.com/IBM/kui/commit/98120da)), closes [#1095](https://github.com/IBM/kui/issues/1095)
* improve ls output with sidecar open ([b3396fd](https://github.com/IBM/kui/commit/b3396fd)), closes [#1030](https://github.com/IBM/kui/issues/1030)
* improved activation list UI ([fe69bd6](https://github.com/IBM/kui/commit/fe69bd6)), closes [#837](https://github.com/IBM/kui/issues/837)
* **plugins/plugin-bash-like:** git diff character diffs overlap ([d840251](https://github.com/IBM/kui/commit/d840251)), closes [#803](https://github.com/IBM/kui/issues/803)
* improved scrolling behavior for PTY ([8953d8b](https://github.com/IBM/kui/commit/8953d8b)), closes [#1093](https://github.com/IBM/kui/issues/1093)
* kedit breakage ([e237336](https://github.com/IBM/kui/commit/e237336)), closes [#982](https://github.com/IBM/kui/issues/982)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* PTY should respond to sidecar open/close ([4972f1a](https://github.com/IBM/kui/commit/4972f1a)), closes [#1056](https://github.com/IBM/kui/issues/1056)
* refinements to popup UI ([a6cab89](https://github.com/IBM/kui/commit/a6cab89)), closes [#874](https://github.com/IBM/kui/issues/874)
* repl should use outer scrolling when in popup mode ([434ed21](https://github.com/IBM/kui/commit/434ed21)), closes [#870](https://github.com/IBM/kui/issues/870)
* screenshot should respect scrollTop ([3d7e04c](https://github.com/IBM/kui/commit/3d7e04c)), closes [#970](https://github.com/IBM/kui/issues/970)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)
* trim pty bits from headless build ([d9f8bf7](https://github.com/IBM/kui/commit/d9f8bf7)), closes [#1089](https://github.com/IBM/kui/issues/1089)
* **packages/app:** make annoying 'ok' invisible ([0a0f7f7](https://github.com/IBM/kui/commit/0a0f7f7)), closes [#597](https://github.com/IBM/kui/issues/597)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-bash-like:** when cd fails, throw stderr ([85cb737](https://github.com/IBM/kui/commit/85cb737)), closes [#415](https://github.com/IBM/kui/issues/415)
* **plugins/plugin-bash-like:** ansi color bg/fg bug fix ([4d6265f](https://github.com/IBM/kui/commit/4d6265f)), closes [#591](https://github.com/IBM/kui/issues/591)
* **plugins/plugin-bash-like:** avoid use of bold fonts in git diff ([2dbe103](https://github.com/IBM/kui/commit/2dbe103)), closes [#636](https://github.com/IBM/kui/issues/636)
* **plugins/plugin-bash-like:** bash-like was not registering its catchall on preload ([99bf827](https://github.com/IBM/kui/commit/99bf827)), closes [#285](https://github.com/IBM/kui/issues/285)
* **plugins/plugin-bash-like:** cache websocket channels ([ed2538f](https://github.com/IBM/kui/commit/ed2538f)), closes [#1072](https://github.com/IBM/kui/issues/1072)
* **plugins/plugin-bash-like:** fix for ls on linux (-B) ([e1db77b](https://github.com/IBM/kui/commit/e1db77b)), closes [#904](https://github.com/IBM/kui/issues/904)
* **plugins/plugin-bash-like:** improve exit code handling of pty ([d096fe9](https://github.com/IBM/kui/commit/d096fe9)), closes [#1054](https://github.com/IBM/kui/issues/1054)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **plugins/plugin-bash-like:** improved ls support on linux ([a424235](https://github.com/IBM/kui/commit/a424235)), closes [#869](https://github.com/IBM/kui/issues/869)
* **plugins/plugin-bash-like:** ls bug when dir contains suffix-matching files ([c6bbbd3](https://github.com/IBM/kui/commit/c6bbbd3)), closes [#940](https://github.com/IBM/kui/issues/940)
* **plugins/plugin-bash-like:** markdown missing overflow:auto ([e5f3910](https://github.com/IBM/kui/commit/e5f3910)), closes [#1038](https://github.com/IBM/kui/issues/1038)
* **plugins/plugin-bash-like:** markdown versus popup mode ([02e108a](https://github.com/IBM/kui/commit/02e108a)), closes [#928](https://github.com/IBM/kui/issues/928)
* **plugins/plugin-bash-like:** pty output sometimes not visible ([3e3dab5](https://github.com/IBM/kui/commit/3e3dab5)), closes [#1087](https://github.com/IBM/kui/issues/1087)
* **plugins/plugin-bash-like:** resolve many pty rendering glitches ([4f89df0](https://github.com/IBM/kui/commit/4f89df0)), closes [#1073](https://github.com/IBM/kui/issues/1073)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)


### Features

* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* **packages/app:** queue up input while commands are executed ([51ec7e9](https://github.com/IBM/kui/commit/51ec7e9)), closes [#1044](https://github.com/IBM/kui/issues/1044)
* **plugins/plugin-bash-like:** asciidoc support ([af29e03](https://github.com/IBM/kui/commit/af29e03)), closes [#934](https://github.com/IBM/kui/issues/934)
* **plugins/plugin-bash-like:** do not show line numbers in git diff view ([2fc8803](https://github.com/IBM/kui/commit/2fc8803)), closes [#944](https://github.com/IBM/kui/issues/944)
* pty ([a3ad81d](https://github.com/IBM/kui/commit/a3ad81d)), closes [#572](https://github.com/IBM/kui/issues/572) [#414](https://github.com/IBM/kui/issues/414)
* sidecar full screen ([4f21cb2](https://github.com/IBM/kui/commit/4f21cb2)), closes [#294](https://github.com/IBM/kui/issues/294) [#721](https://github.com/IBM/kui/issues/721)
* **plugins/plugin-bash-like:** make top-sliver in PTY mode draggable ([56942c0](https://github.com/IBM/kui/commit/56942c0)), closes [#1091](https://github.com/IBM/kui/issues/1091)





# 0.13.0 (2019-03-19)


### Bug Fixes

* a few more tab tweaks ([8e31e5e](https://github.com/IBM/kui/commit/8e31e5e)), closes [#719](https://github.com/IBM/kui/issues/719)
* add missing debug deps ([0bc5ef9](https://github.com/IBM/kui/commit/0bc5ef9)), closes [#646](https://github.com/IBM/kui/issues/646)
* allow clients to take control over entity name table cell coloring ([77b99d9](https://github.com/IBM/kui/commit/77b99d9)), closes [#675](https://github.com/IBM/kui/issues/675)
* ansi-to-html color definition updates ([74d7678](https://github.com/IBM/kui/commit/74d7678)), closes [#578](https://github.com/IBM/kui/issues/578)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* git diff should use side-by-side ([4fe215b](https://github.com/IBM/kui/commit/4fe215b)), closes [#617](https://github.com/IBM/kui/issues/617)
* git status UI fixes ([cf0f5cb](https://github.com/IBM/kui/commit/cf0f5cb)), closes [#702](https://github.com/IBM/kui/issues/702)
* improve handling of non-zero exit codes in bash-like usage formatting ([98bb8b3](https://github.com/IBM/kui/commit/98bb8b3)), closes [#582](https://github.com/IBM/kui/issues/582)
* improved activation list UI ([fe69bd6](https://github.com/IBM/kui/commit/fe69bd6)), closes [#837](https://github.com/IBM/kui/issues/837)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* **packages/app:** make annoying 'ok' invisible ([0a0f7f7](https://github.com/IBM/kui/commit/0a0f7f7)), closes [#597](https://github.com/IBM/kui/issues/597)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-bash-like:** when cd fails, throw stderr ([85cb737](https://github.com/IBM/kui/commit/85cb737)), closes [#415](https://github.com/IBM/kui/issues/415)
* **plugins/plugin-bash-like:** ansi color bg/fg bug fix ([4d6265f](https://github.com/IBM/kui/commit/4d6265f)), closes [#591](https://github.com/IBM/kui/issues/591)
* refinements to popup UI ([a6cab89](https://github.com/IBM/kui/commit/a6cab89)), closes [#874](https://github.com/IBM/kui/issues/874)
* **plugins/plugin-bash-like:** avoid use of bold fonts in git diff ([2dbe103](https://github.com/IBM/kui/commit/2dbe103)), closes [#636](https://github.com/IBM/kui/issues/636)
* repl should use outer scrolling when in popup mode ([434ed21](https://github.com/IBM/kui/commit/434ed21)), closes [#870](https://github.com/IBM/kui/issues/870)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)
* **plugins/plugin-bash-like:** bash-like was not registering its catchall on preload ([99bf827](https://github.com/IBM/kui/commit/99bf827)), closes [#285](https://github.com/IBM/kui/issues/285)
* **plugins/plugin-bash-like:** fix for ls on linux (-B) ([e1db77b](https://github.com/IBM/kui/commit/e1db77b)), closes [#904](https://github.com/IBM/kui/issues/904)
* **plugins/plugin-bash-like:** git diff character diffs overlap ([d840251](https://github.com/IBM/kui/commit/d840251)), closes [#803](https://github.com/IBM/kui/issues/803)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **plugins/plugin-bash-like:** improved ls support on linux ([a424235](https://github.com/IBM/kui/commit/a424235)), closes [#869](https://github.com/IBM/kui/issues/869)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)


### Features

* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* sidecar full screen ([4f21cb2](https://github.com/IBM/kui/commit/4f21cb2)), closes [#294](https://github.com/IBM/kui/issues/294) [#721](https://github.com/IBM/kui/issues/721)





# 0.12.0 (2019-03-19)


### Bug Fixes

* a few more tab tweaks ([8e31e5e](https://github.com/IBM/kui/commit/8e31e5e)), closes [#719](https://github.com/IBM/kui/issues/719)
* add missing debug deps ([0bc5ef9](https://github.com/IBM/kui/commit/0bc5ef9)), closes [#646](https://github.com/IBM/kui/issues/646)
* allow clients to take control over entity name table cell coloring ([77b99d9](https://github.com/IBM/kui/commit/77b99d9)), closes [#675](https://github.com/IBM/kui/issues/675)
* ansi-to-html color definition updates ([74d7678](https://github.com/IBM/kui/commit/74d7678)), closes [#578](https://github.com/IBM/kui/issues/578)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* git diff should use side-by-side ([4fe215b](https://github.com/IBM/kui/commit/4fe215b)), closes [#617](https://github.com/IBM/kui/issues/617)
* git status UI fixes ([cf0f5cb](https://github.com/IBM/kui/commit/cf0f5cb)), closes [#702](https://github.com/IBM/kui/issues/702)
* improve handling of non-zero exit codes in bash-like usage formatting ([98bb8b3](https://github.com/IBM/kui/commit/98bb8b3)), closes [#582](https://github.com/IBM/kui/issues/582)
* improved activation list UI ([fe69bd6](https://github.com/IBM/kui/commit/fe69bd6)), closes [#837](https://github.com/IBM/kui/issues/837)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* **packages/app:** make annoying 'ok' invisible ([0a0f7f7](https://github.com/IBM/kui/commit/0a0f7f7)), closes [#597](https://github.com/IBM/kui/issues/597)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-bash-like:** when cd fails, throw stderr ([85cb737](https://github.com/IBM/kui/commit/85cb737)), closes [#415](https://github.com/IBM/kui/issues/415)
* **plugins/plugin-bash-like:** ansi color bg/fg bug fix ([4d6265f](https://github.com/IBM/kui/commit/4d6265f)), closes [#591](https://github.com/IBM/kui/issues/591)
* refinements to popup UI ([a6cab89](https://github.com/IBM/kui/commit/a6cab89)), closes [#874](https://github.com/IBM/kui/issues/874)
* **plugins/plugin-bash-like:** avoid use of bold fonts in git diff ([2dbe103](https://github.com/IBM/kui/commit/2dbe103)), closes [#636](https://github.com/IBM/kui/issues/636)
* repl should use outer scrolling when in popup mode ([434ed21](https://github.com/IBM/kui/commit/434ed21)), closes [#870](https://github.com/IBM/kui/issues/870)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)
* **plugins/plugin-bash-like:** bash-like was not registering its catchall on preload ([99bf827](https://github.com/IBM/kui/commit/99bf827)), closes [#285](https://github.com/IBM/kui/issues/285)
* **plugins/plugin-bash-like:** git diff character diffs overlap ([d840251](https://github.com/IBM/kui/commit/d840251)), closes [#803](https://github.com/IBM/kui/issues/803)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **plugins/plugin-bash-like:** improved ls support on linux ([a424235](https://github.com/IBM/kui/commit/a424235)), closes [#869](https://github.com/IBM/kui/issues/869)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)


### Features

* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* sidecar full screen ([4f21cb2](https://github.com/IBM/kui/commit/4f21cb2)), closes [#294](https://github.com/IBM/kui/issues/294) [#721](https://github.com/IBM/kui/issues/721)





# 0.11.0 (2019-03-10)


### Bug Fixes

* **plugins/plugin-bash-like:** ansi color bg/fg bug fix ([4d6265f](https://github.com/IBM/kui/commit/4d6265f)), closes [#591](https://github.com/IBM/kui/issues/591)
* a few more tab tweaks ([8e31e5e](https://github.com/IBM/kui/commit/8e31e5e)), closes [#719](https://github.com/IBM/kui/issues/719)
* add missing debug deps ([0bc5ef9](https://github.com/IBM/kui/commit/0bc5ef9)), closes [#646](https://github.com/IBM/kui/issues/646)
* allow clients to take control over entity name table cell coloring ([77b99d9](https://github.com/IBM/kui/commit/77b99d9)), closes [#675](https://github.com/IBM/kui/issues/675)
* ansi-to-html color definition updates ([74d7678](https://github.com/IBM/kui/commit/74d7678)), closes [#578](https://github.com/IBM/kui/issues/578)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* git diff should use side-by-side ([4fe215b](https://github.com/IBM/kui/commit/4fe215b)), closes [#617](https://github.com/IBM/kui/issues/617)
* git status UI fixes ([cf0f5cb](https://github.com/IBM/kui/commit/cf0f5cb)), closes [#702](https://github.com/IBM/kui/issues/702)
* improve handling of non-zero exit codes in bash-like usage formatting ([98bb8b3](https://github.com/IBM/kui/commit/98bb8b3)), closes [#582](https://github.com/IBM/kui/issues/582)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)
* **packages/app:** make annoying 'ok' invisible ([0a0f7f7](https://github.com/IBM/kui/commit/0a0f7f7)), closes [#597](https://github.com/IBM/kui/issues/597)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-bash-like:** when cd fails, throw stderr ([85cb737](https://github.com/IBM/kui/commit/85cb737)), closes [#415](https://github.com/IBM/kui/issues/415)
* **plugins/plugin-bash-like:** avoid use of bold fonts in git diff ([2dbe103](https://github.com/IBM/kui/commit/2dbe103)), closes [#636](https://github.com/IBM/kui/issues/636)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)


### Features

* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* sidecar full screen ([4f21cb2](https://github.com/IBM/kui/commit/4f21cb2)), closes [#294](https://github.com/IBM/kui/issues/294) [#721](https://github.com/IBM/kui/issues/721)





# 0.10.0 (2019-03-10)


### Bug Fixes

* **plugins/plugin-bash-like:** ansi color bg/fg bug fix ([4d6265f](https://github.com/IBM/kui/commit/4d6265f)), closes [#591](https://github.com/IBM/kui/issues/591)
* a few more tab tweaks ([8e31e5e](https://github.com/IBM/kui/commit/8e31e5e)), closes [#719](https://github.com/IBM/kui/issues/719)
* add missing debug deps ([0bc5ef9](https://github.com/IBM/kui/commit/0bc5ef9)), closes [#646](https://github.com/IBM/kui/issues/646)
* allow clients to take control over entity name table cell coloring ([77b99d9](https://github.com/IBM/kui/commit/77b99d9)), closes [#675](https://github.com/IBM/kui/issues/675)
* ansi-to-html color definition updates ([74d7678](https://github.com/IBM/kui/commit/74d7678)), closes [#578](https://github.com/IBM/kui/issues/578)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* git diff should use side-by-side ([4fe215b](https://github.com/IBM/kui/commit/4fe215b)), closes [#617](https://github.com/IBM/kui/issues/617)
* git status UI fixes ([cf0f5cb](https://github.com/IBM/kui/commit/cf0f5cb)), closes [#702](https://github.com/IBM/kui/issues/702)
* improve handling of non-zero exit codes in bash-like usage formatting ([98bb8b3](https://github.com/IBM/kui/commit/98bb8b3)), closes [#582](https://github.com/IBM/kui/issues/582)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)
* **packages/app:** make annoying 'ok' invisible ([0a0f7f7](https://github.com/IBM/kui/commit/0a0f7f7)), closes [#597](https://github.com/IBM/kui/issues/597)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-bash-like:** when cd fails, throw stderr ([85cb737](https://github.com/IBM/kui/commit/85cb737)), closes [#415](https://github.com/IBM/kui/issues/415)
* **plugins/plugin-bash-like:** avoid use of bold fonts in git diff ([2dbe103](https://github.com/IBM/kui/commit/2dbe103)), closes [#636](https://github.com/IBM/kui/issues/636)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)


### Features

* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* sidecar full screen ([4f21cb2](https://github.com/IBM/kui/commit/4f21cb2)), closes [#294](https://github.com/IBM/kui/issues/294) [#721](https://github.com/IBM/kui/issues/721)





# 0.9.0 (2019-03-10)


### Bug Fixes

* **plugins/plugin-bash-like:** ansi color bg/fg bug fix ([4d6265f](https://github.com/IBM/kui/commit/4d6265f)), closes [#591](https://github.com/IBM/kui/issues/591)
* a few more tab tweaks ([8e31e5e](https://github.com/IBM/kui/commit/8e31e5e)), closes [#719](https://github.com/IBM/kui/issues/719)
* add missing debug deps ([0bc5ef9](https://github.com/IBM/kui/commit/0bc5ef9)), closes [#646](https://github.com/IBM/kui/issues/646)
* allow clients to take control over entity name table cell coloring ([77b99d9](https://github.com/IBM/kui/commit/77b99d9)), closes [#675](https://github.com/IBM/kui/issues/675)
* ansi-to-html color definition updates ([74d7678](https://github.com/IBM/kui/commit/74d7678)), closes [#578](https://github.com/IBM/kui/issues/578)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* git diff should use side-by-side ([4fe215b](https://github.com/IBM/kui/commit/4fe215b)), closes [#617](https://github.com/IBM/kui/issues/617)
* git status UI fixes ([cf0f5cb](https://github.com/IBM/kui/commit/cf0f5cb)), closes [#702](https://github.com/IBM/kui/issues/702)
* improve handling of non-zero exit codes in bash-like usage formatting ([98bb8b3](https://github.com/IBM/kui/commit/98bb8b3)), closes [#582](https://github.com/IBM/kui/issues/582)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)
* **packages/app:** make annoying 'ok' invisible ([0a0f7f7](https://github.com/IBM/kui/commit/0a0f7f7)), closes [#597](https://github.com/IBM/kui/issues/597)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-bash-like:** when cd fails, throw stderr ([85cb737](https://github.com/IBM/kui/commit/85cb737)), closes [#415](https://github.com/IBM/kui/issues/415)
* **plugins/plugin-bash-like:** avoid use of bold fonts in git diff ([2dbe103](https://github.com/IBM/kui/commit/2dbe103)), closes [#636](https://github.com/IBM/kui/issues/636)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)


### Features

* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* sidecar full screen ([4f21cb2](https://github.com/IBM/kui/commit/4f21cb2)), closes [#294](https://github.com/IBM/kui/issues/294) [#721](https://github.com/IBM/kui/issues/721)





# 0.8.0 (2019-03-09)


### Bug Fixes

* **plugins/plugin-bash-like:** ansi color bg/fg bug fix ([4d6265f](https://github.com/IBM/kui/commit/4d6265f)), closes [#591](https://github.com/IBM/kui/issues/591)
* a few more tab tweaks ([8e31e5e](https://github.com/IBM/kui/commit/8e31e5e)), closes [#719](https://github.com/IBM/kui/issues/719)
* add missing debug deps ([0bc5ef9](https://github.com/IBM/kui/commit/0bc5ef9)), closes [#646](https://github.com/IBM/kui/issues/646)
* allow clients to take control over entity name table cell coloring ([77b99d9](https://github.com/IBM/kui/commit/77b99d9)), closes [#675](https://github.com/IBM/kui/issues/675)
* ansi-to-html color definition updates ([74d7678](https://github.com/IBM/kui/commit/74d7678)), closes [#578](https://github.com/IBM/kui/issues/578)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* git diff should use side-by-side ([4fe215b](https://github.com/IBM/kui/commit/4fe215b)), closes [#617](https://github.com/IBM/kui/issues/617)
* git status UI fixes ([cf0f5cb](https://github.com/IBM/kui/commit/cf0f5cb)), closes [#702](https://github.com/IBM/kui/issues/702)
* improve handling of non-zero exit codes in bash-like usage formatting ([98bb8b3](https://github.com/IBM/kui/commit/98bb8b3)), closes [#582](https://github.com/IBM/kui/issues/582)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)
* **packages/app:** make annoying 'ok' invisible ([0a0f7f7](https://github.com/IBM/kui/commit/0a0f7f7)), closes [#597](https://github.com/IBM/kui/issues/597)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-bash-like:** when cd fails, throw stderr ([85cb737](https://github.com/IBM/kui/commit/85cb737)), closes [#415](https://github.com/IBM/kui/issues/415)
* **plugins/plugin-bash-like:** avoid use of bold fonts in git diff ([2dbe103](https://github.com/IBM/kui/commit/2dbe103)), closes [#636](https://github.com/IBM/kui/issues/636)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)


### Features

* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* sidecar full screen ([4f21cb2](https://github.com/IBM/kui/commit/4f21cb2)), closes [#294](https://github.com/IBM/kui/issues/294) [#721](https://github.com/IBM/kui/issues/721)





# 0.7.0 (2019-03-08)


### Bug Fixes

* add missing debug deps ([0bc5ef9](https://github.com/IBM/kui/commit/0bc5ef9)), closes [#646](https://github.com/IBM/kui/issues/646)
* allow clients to take control over entity name table cell coloring ([77b99d9](https://github.com/IBM/kui/commit/77b99d9)), closes [#675](https://github.com/IBM/kui/issues/675)
* ansi-to-html color definition updates ([74d7678](https://github.com/IBM/kui/commit/74d7678)), closes [#578](https://github.com/IBM/kui/issues/578)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* git diff should use side-by-side ([4fe215b](https://github.com/IBM/kui/commit/4fe215b)), closes [#617](https://github.com/IBM/kui/issues/617)
* improve handling of non-zero exit codes in bash-like usage formatting ([98bb8b3](https://github.com/IBM/kui/commit/98bb8b3)), closes [#582](https://github.com/IBM/kui/issues/582)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* **packages/app:** make annoying 'ok' invisible ([0a0f7f7](https://github.com/IBM/kui/commit/0a0f7f7)), closes [#597](https://github.com/IBM/kui/issues/597)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-bash-like:** when cd fails, throw stderr ([85cb737](https://github.com/IBM/kui/commit/85cb737)), closes [#415](https://github.com/IBM/kui/issues/415)
* **plugins/plugin-bash-like:** ansi color bg/fg bug fix ([4d6265f](https://github.com/IBM/kui/commit/4d6265f)), closes [#591](https://github.com/IBM/kui/issues/591)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)
* **plugins/plugin-bash-like:** avoid use of bold fonts in git diff ([2dbe103](https://github.com/IBM/kui/commit/2dbe103)), closes [#636](https://github.com/IBM/kui/issues/636)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)


### Features

* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)





# 0.6.0 (2019-03-06)


### Bug Fixes

* add missing debug deps ([0bc5ef9](https://github.com/IBM/kui/commit/0bc5ef9)), closes [#646](https://github.com/IBM/kui/issues/646)
* ansi-to-html color definition updates ([74d7678](https://github.com/IBM/kui/commit/74d7678)), closes [#578](https://github.com/IBM/kui/issues/578)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* git diff should use side-by-side ([4fe215b](https://github.com/IBM/kui/commit/4fe215b)), closes [#617](https://github.com/IBM/kui/issues/617)
* improve handling of non-zero exit codes in bash-like usage formatting ([98bb8b3](https://github.com/IBM/kui/commit/98bb8b3)), closes [#582](https://github.com/IBM/kui/issues/582)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)
* **packages/app:** make annoying 'ok' invisible ([0a0f7f7](https://github.com/IBM/kui/commit/0a0f7f7)), closes [#597](https://github.com/IBM/kui/issues/597)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-bash-like:** when cd fails, throw stderr ([85cb737](https://github.com/IBM/kui/commit/85cb737)), closes [#415](https://github.com/IBM/kui/issues/415)
* **plugins/plugin-bash-like:** ansi color bg/fg bug fix ([4d6265f](https://github.com/IBM/kui/commit/4d6265f)), closes [#591](https://github.com/IBM/kui/issues/591)
* **plugins/plugin-bash-like:** avoid use of bold fonts in git diff ([2dbe103](https://github.com/IBM/kui/commit/2dbe103)), closes [#636](https://github.com/IBM/kui/issues/636)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)


### Features

* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)





# 0.5.0 (2019-03-06)


### Bug Fixes

* add missing debug deps ([0bc5ef9](https://github.com/IBM/kui/commit/0bc5ef9)), closes [#646](https://github.com/IBM/kui/issues/646)
* ansi-to-html color definition updates ([74d7678](https://github.com/IBM/kui/commit/74d7678)), closes [#578](https://github.com/IBM/kui/issues/578)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* git diff should use side-by-side ([4fe215b](https://github.com/IBM/kui/commit/4fe215b)), closes [#617](https://github.com/IBM/kui/issues/617)
* improve handling of non-zero exit codes in bash-like usage formatting ([98bb8b3](https://github.com/IBM/kui/commit/98bb8b3)), closes [#582](https://github.com/IBM/kui/issues/582)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)
* **packages/app:** make annoying 'ok' invisible ([0a0f7f7](https://github.com/IBM/kui/commit/0a0f7f7)), closes [#597](https://github.com/IBM/kui/issues/597)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-bash-like:** when cd fails, throw stderr ([85cb737](https://github.com/IBM/kui/commit/85cb737)), closes [#415](https://github.com/IBM/kui/issues/415)
* **plugins/plugin-bash-like:** ansi color bg/fg bug fix ([4d6265f](https://github.com/IBM/kui/commit/4d6265f)), closes [#591](https://github.com/IBM/kui/issues/591)
* **plugins/plugin-bash-like:** avoid use of bold fonts in git diff ([2dbe103](https://github.com/IBM/kui/commit/2dbe103)), closes [#636](https://github.com/IBM/kui/issues/636)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)


### Features

* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)





# 0.4.0 (2019-03-06)


### Bug Fixes

* add missing debug deps ([0bc5ef9](https://github.com/IBM/kui/commit/0bc5ef9)), closes [#646](https://github.com/IBM/kui/issues/646)
* ansi-to-html color definition updates ([74d7678](https://github.com/IBM/kui/commit/74d7678)), closes [#578](https://github.com/IBM/kui/issues/578)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* git diff should use side-by-side ([4fe215b](https://github.com/IBM/kui/commit/4fe215b)), closes [#617](https://github.com/IBM/kui/issues/617)
* improve handling of non-zero exit codes in bash-like usage formatting ([98bb8b3](https://github.com/IBM/kui/commit/98bb8b3)), closes [#582](https://github.com/IBM/kui/issues/582)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)
* **packages/app:** make annoying 'ok' invisible ([0a0f7f7](https://github.com/IBM/kui/commit/0a0f7f7)), closes [#597](https://github.com/IBM/kui/issues/597)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-bash-like:** when cd fails, throw stderr ([85cb737](https://github.com/IBM/kui/commit/85cb737)), closes [#415](https://github.com/IBM/kui/issues/415)
* **plugins/plugin-bash-like:** ansi color bg/fg bug fix ([4d6265f](https://github.com/IBM/kui/commit/4d6265f)), closes [#591](https://github.com/IBM/kui/issues/591)
* **plugins/plugin-bash-like:** avoid use of bold fonts in git diff ([2dbe103](https://github.com/IBM/kui/commit/2dbe103)), closes [#636](https://github.com/IBM/kui/issues/636)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)


### Features

* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)





# 0.3.0 (2019-02-28)


### Bug Fixes

* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-bash-like:** when cd fails, throw stderr ([85cb737](https://github.com/IBM/kui/commit/85cb737)), closes [#415](https://github.com/IBM/kui/issues/415)
* ansi-to-html color definition updates ([74d7678](https://github.com/IBM/kui/commit/74d7678)), closes [#578](https://github.com/IBM/kui/issues/578)
* improve handling of non-zero exit codes in bash-like usage formatting ([98bb8b3](https://github.com/IBM/kui/commit/98bb8b3)), closes [#582](https://github.com/IBM/kui/issues/582)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* **plugins/plugin-bash-like:** ansi color bg/fg bug fix ([4d6265f](https://github.com/IBM/kui/commit/4d6265f)), closes [#591](https://github.com/IBM/kui/issues/591)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)


### Features

* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)





# 0.2.0 (2019-02-28)


### Bug Fixes

* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-bash-like:** when cd fails, throw stderr ([85cb737](https://github.com/IBM/kui/commit/85cb737)), closes [#415](https://github.com/IBM/kui/issues/415)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)
* ansi-to-html color definition updates ([74d7678](https://github.com/IBM/kui/commit/74d7678)), closes [#578](https://github.com/IBM/kui/issues/578)
* improve handling of non-zero exit codes in bash-like usage formatting ([98bb8b3](https://github.com/IBM/kui/commit/98bb8b3)), closes [#582](https://github.com/IBM/kui/issues/582)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)


### Features

* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)





# 0.1.0 (2019-02-27)


### Bug Fixes

* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-bash-like:** when cd fails, throw stderr ([85cb737](https://github.com/IBM/kui/commit/85cb737)), closes [#415](https://github.com/IBM/kui/issues/415)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)


### Features

* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)





## 0.0.18 (2019-02-22)


### Bug Fixes

* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-bash-like:** when cd fails, throw stderr ([85cb737](https://github.com/IBM/kui/commit/85cb737)), closes [#415](https://github.com/IBM/kui/issues/415)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)





## 0.0.17 (2019-02-21)


### Bug Fixes

* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* **plugin-bash-like:** when cd fails, throw stderr ([85cb737](https://github.com/IBM/kui/commit/85cb737)), closes [#415](https://github.com/IBM/kui/issues/415)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)





## 0.0.14 (2019-02-21)


### Bug Fixes

* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* **plugin-bash-like:** when cd fails, throw stderr ([85cb737](https://github.com/IBM/kui/commit/85cb737)), closes [#415](https://github.com/IBM/kui/issues/415)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)





## 0.0.13 (2019-02-20)


### Bug Fixes

* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* **plugin-bash-like:** when cd fails, throw stderr ([85cb737](https://github.com/IBM/kui/commit/85cb737)), closes [#415](https://github.com/IBM/kui/issues/415)





## 0.0.12 (2019-02-20)


### Bug Fixes

* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* **plugin-bash-like:** when cd fails, throw stderr ([85cb737](https://github.com/IBM/kui/commit/85cb737)), closes [#415](https://github.com/IBM/kui/issues/415)





## 0.0.11 (2019-02-19)


### Bug Fixes

* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* **plugin-bash-like:** when cd fails, throw stderr ([85cb737](https://github.com/IBM/kui/commit/85cb737)), closes [#415](https://github.com/IBM/kui/issues/415)





## 0.0.10 (2019-02-13)


### Bug Fixes

* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)
* **plugin-bash-like:** when cd fails, throw stderr ([85cb737](https://github.com/IBM/kui/commit/85cb737)), closes [#415](https://github.com/IBM/kui/issues/415)





## 0.0.7 (2019-02-04)


### Bug Fixes

* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)





## 0.0.5 (2019-02-03)


### Bug Fixes

* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)





## 0.0.4 (2019-02-03)


### Bug Fixes

* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)





## 0.0.3 (2019-02-03)


### Bug Fixes

* proxy package and plugin have improper package.json ([d6f474d](https://github.com/IBM/kui/commit/d6f474d)), closes [#355](https://github.com/IBM/kui/issues/355)





## 0.0.2 (2019-02-03)


### Bug Fixes

* proxy package and plugin have improper package.json ([d6f474d](https://github.com/starpit/kui/commit/d6f474d)), closes [#355](https://github.com/starpit/kui/issues/355)
