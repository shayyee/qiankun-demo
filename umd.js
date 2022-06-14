/**
 * root => window
 * factory => function() { // 子应用代码 return {...}  // 导出结果}
 */
(function webpackUniversalModuleDefinition(root, factory) {
    if(typeof exports === 'object' && typeof module === 'object')  // commonJs 规范
        module.exports = factory();
    else if(typeof define === 'function' && define.amd)  // AMD模块规范
        define([], factory);
    else if(typeof exports === 'object')  // commonJs
        exports["app-vue2"] = factory();
    else
        root["app-vue2"] = factory();  // window
})(self, function() {
    return /******/ (function() { // webpackBootstrap
        /******/ 	var __webpack_modules__ = ({

            /***/ "./src/App.vue":
            /*!*********************!*\
              !*** ./src/App.vue ***!
              \*********************/
            /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */ var _App_vue_vue_type_template_id_0b8a72b9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=0b8a72b9& */ "./src/App.vue?vue&type=template&id=0b8a72b9&");
                /* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ "./src/App.vue?vue&type=style&index=0&lang=css&");
                /* harmony import */ var _node_modules_vue_vue_loader_v15_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js */ "./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js");

                var script = {}
                ;


                /* normalize component */

                var component = (0,_node_modules_vue_vue_loader_v15_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
                    script,
                    _App_vue_vue_type_template_id_0b8a72b9___WEBPACK_IMPORTED_MODULE_0__.render,
                    _App_vue_vue_type_template_id_0b8a72b9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
                    false,
                    null,
                    null,
                    null

                )

                /* harmony default export */ __webpack_exports__["default"] = (component.exports);

                /***/ }),

            /***/ "./src/components/HelloWorld.vue":
            /*!***************************************!*\
              !*** ./src/components/HelloWorld.vue ***!
              \***************************************/
            /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */ var _HelloWorld_vue_vue_type_template_id_25d525f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HelloWorld.vue?vue&type=template&id=25d525f8&scoped=true& */ "./src/components/HelloWorld.vue?vue&type=template&id=25d525f8&scoped=true&");
                /* harmony import */ var _HelloWorld_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HelloWorld.vue?vue&type=script&lang=js& */ "./src/components/HelloWorld.vue?vue&type=script&lang=js&");
                /* harmony import */ var _HelloWorld_vue_vue_type_style_index_0_id_25d525f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HelloWorld.vue?vue&type=style&index=0&id=25d525f8&scoped=true&lang=css& */ "./src/components/HelloWorld.vue?vue&type=style&index=0&id=25d525f8&scoped=true&lang=css&");
                /* harmony import */ var _node_modules_vue_vue_loader_v15_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js */ "./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js");



                ;


                /* normalize component */

                var component = (0,_node_modules_vue_vue_loader_v15_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
                    _HelloWorld_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
                    _HelloWorld_vue_vue_type_template_id_25d525f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
                    _HelloWorld_vue_vue_type_template_id_25d525f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
                    false,
                    null,
                    "25d525f8",
                    null

                )

                /* harmony default export */ __webpack_exports__["default"] = (component.exports);

                /***/ }),

            /***/ "./src/views/HomeView.vue":
            /*!********************************!*\
              !*** ./src/views/HomeView.vue ***!
              \********************************/
            /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */ var _HomeView_vue_vue_type_template_id_5eb1c3fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeView.vue?vue&type=template&id=5eb1c3fc& */ "./src/views/HomeView.vue?vue&type=template&id=5eb1c3fc&");
                /* harmony import */ var _HomeView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeView.vue?vue&type=script&lang=js& */ "./src/views/HomeView.vue?vue&type=script&lang=js&");
                /* harmony import */ var _node_modules_vue_vue_loader_v15_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js */ "./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js");





                /* normalize component */
                ;
                var component = (0,_node_modules_vue_vue_loader_v15_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
                    _HomeView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
                    _HomeView_vue_vue_type_template_id_5eb1c3fc___WEBPACK_IMPORTED_MODULE_0__.render,
                    _HomeView_vue_vue_type_template_id_5eb1c3fc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
                    false,
                    null,
                    null,
                    null

                )

                /* harmony default export */ __webpack_exports__["default"] = (component.exports);

                /***/ }),

            /***/ "./src/App.vue?vue&type=template&id=0b8a72b9&":
            /*!****************************************************!*\
              !*** ./src/App.vue?vue&type=template&id=0b8a72b9& ***!
              \****************************************************/
            /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_vue_loader_v15_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0b8a72b9___WEBPACK_IMPORTED_MODULE_0__.render; },
                    /* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_vue_loader_v15_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0b8a72b9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
                    /* harmony export */ });
                /* harmony import */ var _node_modules_vue_vue_loader_v15_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0b8a72b9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./App.vue?vue&type=template&id=0b8a72b9& */ "./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=0b8a72b9&");


                /***/ }),

            /***/ "./src/components/HelloWorld.vue?vue&type=template&id=25d525f8&scoped=true&":
            /*!**********************************************************************************!*\
              !*** ./src/components/HelloWorld.vue?vue&type=template&id=25d525f8&scoped=true& ***!
              \**********************************************************************************/
            /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_vue_loader_v15_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_template_id_25d525f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },
                    /* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_vue_loader_v15_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_template_id_25d525f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
                    /* harmony export */ });
                /* harmony import */ var _node_modules_vue_vue_loader_v15_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_template_id_25d525f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./HelloWorld.vue?vue&type=template&id=25d525f8&scoped=true& */ "./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/HelloWorld.vue?vue&type=template&id=25d525f8&scoped=true&");


                /***/ }),

            /***/ "./src/views/HomeView.vue?vue&type=template&id=5eb1c3fc&":
            /*!***************************************************************!*\
              !*** ./src/views/HomeView.vue?vue&type=template&id=5eb1c3fc& ***!
              \***************************************************************/
            /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_vue_loader_v15_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_HomeView_vue_vue_type_template_id_5eb1c3fc___WEBPACK_IMPORTED_MODULE_0__.render; },
                    /* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_vue_loader_v15_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_HomeView_vue_vue_type_template_id_5eb1c3fc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
                    /* harmony export */ });
                /* harmony import */ var _node_modules_vue_vue_loader_v15_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_HomeView_vue_vue_type_template_id_5eb1c3fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./HomeView.vue?vue&type=template&id=5eb1c3fc& */ "./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/HomeView.vue?vue&type=template&id=5eb1c3fc&");


                /***/ }),

            /***/ "./src/App.vue?vue&type=style&index=0&lang=css&":
            /*!******************************************************!*\
              !*** ./src/App.vue?vue&type=style&index=0&lang=css& ***!
              \******************************************************/
            /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_12_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=style&index=0&lang=css&");


                /***/ }),

            /***/ "./src/components/HelloWorld.vue?vue&type=style&index=0&id=25d525f8&scoped=true&lang=css&":
            /*!************************************************************************************************!*\
              !*** ./src/components/HelloWorld.vue?vue&type=style&index=0&id=25d525f8&scoped=true&lang=css& ***!
              \************************************************************************************************/
            /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_12_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_25d525f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./HelloWorld.vue?vue&type=style&index=0&id=25d525f8&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/HelloWorld.vue?vue&type=style&index=0&id=25d525f8&scoped=true&lang=css&");


                /***/ }),

            /***/ "./src/components/HelloWorld.vue?vue&type=script&lang=js&":
            /*!****************************************************************!*\
              !*** ./src/components/HelloWorld.vue?vue&type=script&lang=js& ***!
              \****************************************************************/
            /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */ var _node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_clonedRuleSet_40_0_rules_0_use_1_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/thread-loader/dist/cjs.js!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!../../node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./HelloWorld.vue?vue&type=script&lang=js& */ "./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/HelloWorld.vue?vue&type=script&lang=js&");
                /* harmony default export */ __webpack_exports__["default"] = (_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_clonedRuleSet_40_0_rules_0_use_1_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

                /***/ }),

            /***/ "./src/views/HomeView.vue?vue&type=script&lang=js&":
            /*!*********************************************************!*\
              !*** ./src/views/HomeView.vue?vue&type=script&lang=js& ***!
              \*********************************************************/
            /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */ var _node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_clonedRuleSet_40_0_rules_0_use_1_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_HomeView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/thread-loader/dist/cjs.js!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!../../node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./HomeView.vue?vue&type=script&lang=js& */ "./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/HomeView.vue?vue&type=script&lang=js&");
                /* harmony default export */ __webpack_exports__["default"] = (_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_clonedRuleSet_40_0_rules_0_use_1_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_HomeView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

                /***/ }),

            /***/ "./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=0b8a72b9&":
            /*!*************************************************************************************************************************************************************************************************************!*\
              !*** ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=0b8a72b9& ***!
              \*************************************************************************************************************************************************************************************************************/
            /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */   "render": function() { return /* binding */ render; },
                    /* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
                    /* harmony export */ });
                var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('nav',[_c('router-link',{attrs:{"to":"/"}},[_vm._v("Vue2 Home")]),_vm._v(" | "),_c('router-link',{attrs:{"to":"/about"}},[_vm._v("About")])],1),_c('router-view')],1)}
                var staticRenderFns = []



                /***/ }),

            /***/ "./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/HelloWorld.vue?vue&type=template&id=25d525f8&scoped=true&":
            /*!*******************************************************************************************************************************************************************************************************************************************!*\
              !*** ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/HelloWorld.vue?vue&type=template&id=25d525f8&scoped=true& ***!
              \*******************************************************************************************************************************************************************************************************************************************/
            /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */   "render": function() { return /* binding */ render; },
                    /* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
                    /* harmony export */ });
                var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hello"},[_c('h1',[_vm._v(_vm._s(_vm.msg))]),_vm._m(0),_c('h3',[_vm._v("Installed CLI Plugins")]),_vm._m(1),_c('h3',[_vm._v("Essential Links")]),_vm._m(2),_c('h3',[_vm._v("Ecosystem")]),_vm._m(3)])}
                var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v(" For a guide and recipes on how to configure / customize this project,"),_c('br'),_vm._v(" check out the "),_c('a',{attrs:{"href":"https://cli.vuejs.org","target":"_blank","rel":"noopener"}},[_vm._v("vue-cli documentation")]),_vm._v(". ")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',[_c('li',[_c('a',{attrs:{"href":"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel","target":"_blank","rel":"noopener"}},[_vm._v("babel")])]),_c('li',[_c('a',{attrs:{"href":"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router","target":"_blank","rel":"noopener"}},[_vm._v("router")])]),_c('li',[_c('a',{attrs:{"href":"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint","target":"_blank","rel":"noopener"}},[_vm._v("eslint")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',[_c('li',[_c('a',{attrs:{"href":"https://vuejs.org","target":"_blank","rel":"noopener"}},[_vm._v("Core Docs")])]),_c('li',[_c('a',{attrs:{"href":"https://forum.vuejs.org","target":"_blank","rel":"noopener"}},[_vm._v("Forum")])]),_c('li',[_c('a',{attrs:{"href":"https://chat.vuejs.org","target":"_blank","rel":"noopener"}},[_vm._v("Community Chat")])]),_c('li',[_c('a',{attrs:{"href":"https://twitter.com/vuejs","target":"_blank","rel":"noopener"}},[_vm._v("Twitter")])]),_c('li',[_c('a',{attrs:{"href":"https://news.vuejs.org","target":"_blank","rel":"noopener"}},[_vm._v("News")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',[_c('li',[_c('a',{attrs:{"href":"https://router.vuejs.org","target":"_blank","rel":"noopener"}},[_vm._v("vue-router")])]),_c('li',[_c('a',{attrs:{"href":"https://vuex.vuejs.org","target":"_blank","rel":"noopener"}},[_vm._v("vuex")])]),_c('li',[_c('a',{attrs:{"href":"https://github.com/vuejs/vue-devtools#vue-devtools","target":"_blank","rel":"noopener"}},[_vm._v("vue-devtools")])]),_c('li',[_c('a',{attrs:{"href":"https://vue-loader.vuejs.org","target":"_blank","rel":"noopener"}},[_vm._v("vue-loader")])]),_c('li',[_c('a',{attrs:{"href":"https://github.com/vuejs/awesome-vue","target":"_blank","rel":"noopener"}},[_vm._v("awesome-vue")])])])}]



                /***/ }),

            /***/ "./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/HomeView.vue?vue&type=template&id=5eb1c3fc&":
            /*!************************************************************************************************************************************************************************************************************************!*\
              !*** ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/HomeView.vue?vue&type=template&id=5eb1c3fc& ***!
              \************************************************************************************************************************************************************************************************************************/
            /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */   "render": function() { return /* binding */ render; },
                    /* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
                    /* harmony export */ });
                var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home"},[_c('img',{attrs:{"alt":"Vue logo","src":__webpack_require__(/*! ../assets/logo.png */ "./src/assets/logo.png")}}),_c('HelloWorld',{attrs:{"msg":"Welcome to Your Vue.js App"}})],1)}
                var staticRenderFns = []



                /***/ }),

            /***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=style&index=0&lang=css&":
            /*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
              !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=style&index=0&lang=css& ***!
              \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
            /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


                /***/ }),

            /***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/HelloWorld.vue?vue&type=style&index=0&id=25d525f8&scoped=true&lang=css&":
            /*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
              !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/HelloWorld.vue?vue&type=style&index=0&id=25d525f8&scoped=true&lang=css& ***!
              \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
            /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


                /***/ }),

            /***/ "./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/HelloWorld.vue?vue&type=script&lang=js&":
            /*!***********************************************************************************************************************************************************************************************************************************************************!*\
              !*** ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/HelloWorld.vue?vue&type=script&lang=js& ***!
              \***********************************************************************************************************************************************************************************************************************************************************/
            /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
                /* harmony default export */ __webpack_exports__["default"] = ({
                    name: 'HelloWorld',
                    props: {
                        msg: String
                    }
                });

                /***/ }),

            /***/ "./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/HomeView.vue?vue&type=script&lang=js&":
            /*!****************************************************************************************************************************************************************************************************************************************************!*\
              !*** ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/HomeView.vue?vue&type=script&lang=js& ***!
              \****************************************************************************************************************************************************************************************************************************************************/
            /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */ var _components_HelloWorld_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/HelloWorld.vue */ "./src/components/HelloWorld.vue");
//
//
//
//
//
//
//
// @ is an alias to /src

                /* harmony default export */ __webpack_exports__["default"] = ({
                    name: 'HomeView',
                    components: {
                        HelloWorld: _components_HelloWorld_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
                    }
                });

                /***/ }),

            /***/ "./src/main.js":
            /*!*********************!*\
              !*** ./src/main.js ***!
              \*********************/
            /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */   "bootstrap": function() { return /* binding */ bootstrap; },
                    /* harmony export */   "mount": function() { return /* binding */ mount; },
                    /* harmony export */   "unmount": function() { return /* binding */ unmount; }
                    /* harmony export */ });
                /* harmony import */ var _Users_shayyee_Documents_studyspace_micro_frontend_qiankun_demo_app_vue2_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
                /* harmony import */ var _Users_shayyee_Documents_studyspace_micro_frontend_qiankun_demo_app_vue2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
                /* harmony import */ var _Users_shayyee_Documents_studyspace_micro_frontend_qiankun_demo_app_vue2_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
                /* harmony import */ var _Users_shayyee_Documents_studyspace_micro_frontend_qiankun_demo_app_vue2_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_shayyee_Documents_studyspace_micro_frontend_qiankun_demo_app_vue2_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
                /* harmony import */ var _Users_shayyee_Documents_studyspace_micro_frontend_qiankun_demo_app_vue2_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
                /* harmony import */ var _Users_shayyee_Documents_studyspace_micro_frontend_qiankun_demo_app_vue2_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_shayyee_Documents_studyspace_micro_frontend_qiankun_demo_app_vue2_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);
                /* harmony import */ var _Users_shayyee_Documents_studyspace_micro_frontend_qiankun_demo_app_vue2_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
                /* harmony import */ var _Users_shayyee_Documents_studyspace_micro_frontend_qiankun_demo_app_vue2_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Users_shayyee_Documents_studyspace_micro_frontend_qiankun_demo_app_vue2_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_4__);
                /* harmony import */ var _Users_shayyee_Documents_studyspace_micro_frontend_qiankun_demo_app_vue2_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.finally.js */ "./node_modules/core-js/modules/es.promise.finally.js");
                /* harmony import */ var _Users_shayyee_Documents_studyspace_micro_frontend_qiankun_demo_app_vue2_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Users_shayyee_Documents_studyspace_micro_frontend_qiankun_demo_app_vue2_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_5__);
                /* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
                /* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__);
                /* harmony import */ var _public_path__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./public-path */ "./src/public-path.js");
                /* harmony import */ var _public_path__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_path__WEBPACK_IMPORTED_MODULE_7__);
                /* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
                /* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
                /* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./App.vue */ "./src/App.vue");
                /* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./router */ "./src/router/index.js");












                vue__WEBPACK_IMPORTED_MODULE_10__["default"].use(vue_router__WEBPACK_IMPORTED_MODULE_11__["default"]);
                vue__WEBPACK_IMPORTED_MODULE_10__["default"].config.productionTip = false;
                var router = null;
                var instance = null;

                function render() {
                    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                    var container = props.container;
                    router = new vue_router__WEBPACK_IMPORTED_MODULE_11__["default"]({
                        base: window.__POWERED_BY_QIANKUN__ ? '/app-vue2/' : '/',
                        mode: 'history',
                        routes: _router__WEBPACK_IMPORTED_MODULE_9__["default"]
                    });
                    instance = new vue__WEBPACK_IMPORTED_MODULE_10__["default"]({
                        router: router,
                        render: function render(h) {
                            return h(_App_vue__WEBPACK_IMPORTED_MODULE_8__["default"]);
                        }
                    }).$mount(container ? container.querySelector('#app') : '#app');
                } // 独立运行时


                if (!window.__POWERED_BY_QIANKUN__) {
                    render();
                }

                function storeTest(props) {
                    props.onGlobalStateChange && props.onGlobalStateChange(function (value, prev) {
                        return console.log("[onGlobalStateChange - ".concat(props.name, "]:"), value, prev);
                    }, true);
                    props.setGlobalState && props.setGlobalState({
                        ignore: props.name,
                        user: {
                            name: props.name
                        }
                    });
                }

                function bootstrap() {
                    return _bootstrap.apply(this, arguments);
                }

                function _bootstrap() {
                    _bootstrap = (0,_Users_shayyee_Documents_studyspace_micro_frontend_qiankun_demo_app_vue2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0,_Users_shayyee_Documents_studyspace_micro_frontend_qiankun_demo_app_vue2_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
                        return (0,_Users_shayyee_Documents_studyspace_micro_frontend_qiankun_demo_app_vue2_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
                            while (1) {
                                switch (_context.prev = _context.next) {
                                    case 0:
                                        console.log('[vue] vue app bootstraped');

                                    case 1:
                                    case "end":
                                        return _context.stop();
                                }
                            }
                        }, _callee);
                    }));
                    return _bootstrap.apply(this, arguments);
                }

                function mount(_x) {
                    return _mount.apply(this, arguments);
                }

                function _mount() {
                    _mount = (0,_Users_shayyee_Documents_studyspace_micro_frontend_qiankun_demo_app_vue2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0,_Users_shayyee_Documents_studyspace_micro_frontend_qiankun_demo_app_vue2_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee2(props) {
                        return (0,_Users_shayyee_Documents_studyspace_micro_frontend_qiankun_demo_app_vue2_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee2$(_context2) {
                            while (1) {
                                switch (_context2.prev = _context2.next) {
                                    case 0:
                                        console.log('[vue] props from main framework', props);
                                        storeTest(props);
                                        render(props);

                                    case 3:
                                    case "end":
                                        return _context2.stop();
                                }
                            }
                        }, _callee2);
                    }));
                    return _mount.apply(this, arguments);
                }

                function unmount() {
                    return _unmount.apply(this, arguments);
                }

                function _unmount() {
                    _unmount = (0,_Users_shayyee_Documents_studyspace_micro_frontend_qiankun_demo_app_vue2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0,_Users_shayyee_Documents_studyspace_micro_frontend_qiankun_demo_app_vue2_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee3() {
                        return (0,_Users_shayyee_Documents_studyspace_micro_frontend_qiankun_demo_app_vue2_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee3$(_context3) {
                            while (1) {
                                switch (_context3.prev = _context3.next) {
                                    case 0:
                                        instance.$destroy();
                                        instance.$el.innerHTML = '';
                                        instance = null;
                                        router = null;

                                    case 4:
                                    case "end":
                                        return _context3.stop();
                                }
                            }
                        }, _callee3);
                    }));
                    return _unmount.apply(this, arguments);
                }

                /***/ }),

            /***/ "./src/public-path.js":
            /*!****************************!*\
              !*** ./src/public-path.js ***!
              \****************************/
            /***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

                if (window.__POWERED_BY_QIANKUN__) {
                    __webpack_require__.p = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
                }

                /***/ }),

            /***/ "./src/router/index.js":
            /*!*****************************!*\
              !*** ./src/router/index.js ***!
              \*****************************/
            /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
                /* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
                /* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
                /* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
                /* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
                /* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
                /* harmony import */ var _views_HomeView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/views/HomeView */ "./src/views/HomeView.vue");




                var routes = [{
                    path: '/',
                    name: 'home',
                    component: _views_HomeView__WEBPACK_IMPORTED_MODULE_3__["default"]
                }, {
                    path: '/about',
                    name: 'about',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: function component() {
                        return __webpack_require__.e(/*! import() | about */ "about").then(__webpack_require__.bind(__webpack_require__, /*! ../views/AboutView.vue */ "./src/views/AboutView.vue"));
                    }
                }];
                /* harmony default export */ __webpack_exports__["default"] = (routes);

                /***/ }),

            /***/ "./src/assets/logo.png":
            /*!*****************************!*\
              !*** ./src/assets/logo.png ***!
              \*****************************/
            /***/ (function(module) {

                "use strict";
                module.exports = "data:image/png;base64,";

                /***/ })

            /******/ 	});
        /************************************************************************/
        /******/ 	// The module cache
        /******/ 	var __webpack_module_cache__ = {};
        /******/
        /******/ 	// The require function
        /******/ 	function __webpack_require__(moduleId) {
            /******/ 		// Check if module is in cache
            /******/ 		var cachedModule = __webpack_module_cache__[moduleId];
            /******/ 		if (cachedModule !== undefined) {
                /******/ 			return cachedModule.exports;
                /******/ 		}
            /******/ 		// Create a new module (and put it into the cache)
            /******/ 		var module = __webpack_module_cache__[moduleId] = {
                /******/ 			// no module.id needed
                /******/ 			// no module.loaded needed
                /******/ 			exports: {}
                /******/ 		};
            /******/
            /******/ 		// Execute the module function
            /******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
            /******/
            /******/ 		// Return the exports of the module
            /******/ 		return module.exports;
            /******/ 	}
        /******/
        /******/ 	// expose the modules object (__webpack_modules__)
        /******/ 	__webpack_require__.m = __webpack_modules__;
        /******/
        /************************************************************************/
        /******/ 	/* webpack/runtime/chunk loaded */
        /******/ 	!function() {
            /******/ 		var deferred = [];
            /******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
                /******/ 			if(chunkIds) {
                    /******/ 				priority = priority || 0;
                    /******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
                    /******/ 				deferred[i] = [chunkIds, fn, priority];
                    /******/ 				return;
                    /******/ 			}
                /******/ 			var notFulfilled = Infinity;
                /******/ 			for (var i = 0; i < deferred.length; i++) {
                    /******/ 				var chunkIds = deferred[i][0];
                    /******/ 				var fn = deferred[i][1];
                    /******/ 				var priority = deferred[i][2];
                    /******/ 				var fulfilled = true;
                    /******/ 				for (var j = 0; j < chunkIds.length; j++) {
                        /******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
                            /******/ 						chunkIds.splice(j--, 1);
                            /******/ 					} else {
                            /******/ 						fulfilled = false;
                            /******/ 						if(priority < notFulfilled) notFulfilled = priority;
                            /******/ 					}
                        /******/ 				}
                    /******/ 				if(fulfilled) {
                        /******/ 					deferred.splice(i--, 1)
                        /******/ 					var r = fn();
                        /******/ 					if (r !== undefined) result = r;
                        /******/ 				}
                    /******/ 			}
                /******/ 			return result;
                /******/ 		};
            /******/ 	}();
        /******/
        /******/ 	/* webpack/runtime/compat get default export */
        /******/ 	!function() {
            /******/ 		// getDefaultExport function for compatibility with non-harmony modules
            /******/ 		__webpack_require__.n = function(module) {
                /******/ 			var getter = module && module.__esModule ?
                    /******/ 				function() { return module['default']; } :
                    /******/ 				function() { return module; };
                /******/ 			__webpack_require__.d(getter, { a: getter });
                /******/ 			return getter;
                /******/ 		};
            /******/ 	}();
        /******/
        /******/ 	/* webpack/runtime/define property getters */
        /******/ 	!function() {
            /******/ 		// define getter functions for harmony exports
            /******/ 		__webpack_require__.d = function(exports, definition) {
                /******/ 			for(var key in definition) {
                    /******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                        /******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
                        /******/ 				}
                    /******/ 			}
                /******/ 		};
            /******/ 	}();
        /******/
        /******/ 	/* webpack/runtime/ensure chunk */
        /******/ 	!function() {
            /******/ 		__webpack_require__.f = {};
            /******/ 		// This file contains only the entry chunk.
            /******/ 		// The chunk loading function for additional chunks
            /******/ 		__webpack_require__.e = function(chunkId) {
                /******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
                    /******/ 				__webpack_require__.f[key](chunkId, promises);
                    /******/ 				return promises;
                    /******/ 			}, []));
                /******/ 		};
            /******/ 	}();
        /******/
        /******/ 	/* webpack/runtime/get javascript chunk filename */
        /******/ 	!function() {
            /******/ 		// This function allow to reference async chunks
            /******/ 		__webpack_require__.u = function(chunkId) {
                /******/ 			// return url for filenames based on template
                /******/ 			return "js/" + chunkId + "-legacy." + "4dd841b2" + ".js";
                /******/ 		};
            /******/ 	}();
        /******/
        /******/ 	/* webpack/runtime/get mini-css chunk filename */
        /******/ 	!function() {
            /******/ 		// This function allow to reference async chunks
            /******/ 		__webpack_require__.miniCssF = function(chunkId) {
                /******/ 			// return url for filenames based on template
                /******/ 			return undefined;
                /******/ 		};
            /******/ 	}();
        /******/
        /******/ 	/* webpack/runtime/global */
        /******/ 	!function() {
            /******/ 		__webpack_require__.g = (function() {
                /******/ 			if (typeof globalThis === 'object') return globalThis;
                /******/ 			try {
                    /******/ 				return this || new Function('return this')();
                    /******/ 			} catch (e) {
                    /******/ 				if (typeof window === 'object') return window;
                    /******/ 			}
                /******/ 		})();
            /******/ 	}();
        /******/
        /******/ 	/* webpack/runtime/hasOwnProperty shorthand */
        /******/ 	!function() {
            /******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
            /******/ 	}();
        /******/
        /******/ 	/* webpack/runtime/load script */
        /******/ 	!function() {
            /******/ 		var inProgress = {};
            /******/ 		var dataWebpackPrefix = "app-vue2:";
            /******/ 		// loadScript function to load a script via script tag
            /******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
                /******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
                /******/ 			var script, needAttach;
                /******/ 			if(key !== undefined) {
                    /******/ 				var scripts = document.getElementsByTagName("script");
                    /******/ 				for(var i = 0; i < scripts.length; i++) {
                        /******/ 					var s = scripts[i];
                        /******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
                        /******/ 				}
                    /******/ 			}
                /******/ 			if(!script) {
                    /******/ 				needAttach = true;
                    /******/ 				script = document.createElement('script');
                    /******/
                    /******/ 				script.charset = 'utf-8';
                    /******/ 				script.timeout = 120;
                    /******/ 				if (__webpack_require__.nc) {
                        /******/ 					script.setAttribute("nonce", __webpack_require__.nc);
                        /******/ 				}
                    /******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
                    /******/ 				script.src = url;
                    /******/ 			}
                /******/ 			inProgress[url] = [done];
                /******/ 			var onScriptComplete = function(prev, event) {
                        /******/ 				// avoid mem leaks in IE.
                        /******/ 				script.onerror = script.onload = null;
                        /******/ 				clearTimeout(timeout);
                        /******/ 				var doneFns = inProgress[url];
                        /******/ 				delete inProgress[url];
                        /******/ 				script.parentNode && script.parentNode.removeChild(script);
                        /******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
                        /******/ 				if(prev) return prev(event);
                        /******/ 			}
                    /******/ 			;
                /******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
                /******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
                /******/ 			script.onload = onScriptComplete.bind(null, script.onload);
                /******/ 			needAttach && document.head.appendChild(script);
                /******/ 		};
            /******/ 	}();
        /******/
        /******/ 	/* webpack/runtime/make namespace object */
        /******/ 	!function() {
            /******/ 		// define __esModule on exports
            /******/ 		__webpack_require__.r = function(exports) {
                /******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                    /******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                    /******/ 			}
                /******/ 			Object.defineProperty(exports, '__esModule', { value: true });
                /******/ 		};
            /******/ 	}();
        /******/
        /******/ 	/* webpack/runtime/publicPath */
        /******/ 	!function() {
            /******/ 		__webpack_require__.p = "//localhost:8001/";
            /******/ 	}();
        /******/
        /******/ 	/* webpack/runtime/jsonp chunk loading */
        /******/ 	!function() {
            /******/ 		// no baseURI
            /******/
            /******/ 		// object to store loaded and loading chunks
            /******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
            /******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
            /******/ 		var installedChunks = {
                /******/ 			"app": 0
                /******/ 		};
            /******/
            /******/ 		__webpack_require__.f.j = function(chunkId, promises) {
                /******/ 				// JSONP chunk loading for javascript
                /******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
                /******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
                    /******/
                    /******/ 					// a Promise means "currently loading".
                    /******/ 					if(installedChunkData) {
                        /******/ 						promises.push(installedChunkData[2]);
                        /******/ 					} else {
                        /******/ 						if(true) { // all chunks have JS
                            /******/ 							// setup Promise in chunk cache
                            /******/ 							var promise = new Promise(function(resolve, reject) { installedChunkData = installedChunks[chunkId] = [resolve, reject]; });
                            /******/ 							promises.push(installedChunkData[2] = promise);
                            /******/
                            /******/ 							// start chunk loading
                            /******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
                            /******/ 							// create error before stack unwound to get useful stacktrace later
                            /******/ 							var error = new Error();
                            /******/ 							var loadingEnded = function(event) {
                                /******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
                                    /******/ 									installedChunkData = installedChunks[chunkId];
                                    /******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
                                    /******/ 									if(installedChunkData) {
                                        /******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
                                        /******/ 										var realSrc = event && event.target && event.target.src;
                                        /******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
                                        /******/ 										error.name = 'ChunkLoadError';
                                        /******/ 										error.type = errorType;
                                        /******/ 										error.request = realSrc;
                                        /******/ 										installedChunkData[1](error);
                                        /******/ 									}
                                    /******/ 								}
                                /******/ 							};
                            /******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
                            /******/ 						} else installedChunks[chunkId] = 0;
                        /******/ 					}
                    /******/ 				}
                /******/ 		};
            /******/
            /******/ 		// no prefetching
            /******/
            /******/ 		// no preloaded
            /******/
            /******/ 		// no HMR
            /******/
            /******/ 		// no HMR manifest
            /******/
            /******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
            /******/
            /******/ 		// install a JSONP callback for chunk loading
            /******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
                /******/ 			var chunkIds = data[0];
                /******/ 			var moreModules = data[1];
                /******/ 			var runtime = data[2];
                /******/ 			// add "moreModules" to the modules object,
                /******/ 			// then flag all "chunkIds" as loaded and fire callback
                /******/ 			var moduleId, chunkId, i = 0;
                /******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
                    /******/ 				for(moduleId in moreModules) {
                        /******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
                            /******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
                            /******/ 					}
                        /******/ 				}
                    /******/ 				if(runtime) var result = runtime(__webpack_require__);
                    /******/ 			}
                /******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
                /******/ 			for(;i < chunkIds.length; i++) {
                    /******/ 				chunkId = chunkIds[i];
                    /******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
                        /******/ 					installedChunks[chunkId][0]();
                        /******/ 				}
                    /******/ 				installedChunks[chunkId] = 0;
                    /******/ 			}
                /******/ 			return __webpack_require__.O(result);
                /******/ 		}
            /******/
            /******/ 		var chunkLoadingGlobal = self["webpackChunkapp_vue2"] = self["webpackChunkapp_vue2"] || [];
            /******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
            /******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
            /******/ 	}();
        /******/
        /************************************************************************/
        /******/
        /******/ 	// startup
        /******/ 	// Load entry module and return exports
        /******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
        /******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["chunk-vendors"], function() { return __webpack_require__("./src/main.js"); })
        /******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
        /******/
        /******/ 	return __webpack_exports__;
        /******/ })()
        ;
});
//# sourceMappingURL=app-legacy.b541f524.js.map
