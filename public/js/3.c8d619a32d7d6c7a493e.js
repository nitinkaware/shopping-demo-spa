(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Modals/Login.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Modals/Login.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var form_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! form-object */ "./node_modules/form-object/dist/form.js");
/* harmony import */ var form_object__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(form_object__WEBPACK_IMPORTED_MODULE_0__);
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
  components: {
    Form: form_object__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      email: '',
      password: '',
      remember: false,
      form: new form_object__WEBPACK_IMPORTED_MODULE_0___default.a(),
      callback: function callback() {}
    };
  },
  computed: {
    signInText: function signInText() {
      return this.form.isPending ? ' Signing in' : ' Sign In';
    }
  },
  methods: {
    setCallback: function setCallback(event) {
      this.callback = event.params ? event.params.callback : function () {};
    },
    login: function login() {
      var _this = this;

      this.form.post(route('login'), {
        email: this.email,
        password: this.password,
        remember: this.remember,
        _token: document.head.querySelector('meta[name="csrf-token"]').content
      }).then(function (response) {
        window.axios.defaults.headers.common['X-CSRF-TOKEN'] = response.csrf;

        _this.$modal.hide('login');

        _this.callback();

        _this.$root.$emit('userLoggedIn', {
          user: response.user,
          isLoggedIn: response.isLoggedIn
        });
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Modals/Login.vue?vue&type=template&id=1aaa66fe&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Modals/Login.vue?vue&type=template&id=1aaa66fe& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "modal",
        {
          attrs: {
            name: "login",
            width: 400,
            height: 400,
            pivotX: 0.5,
            pivotY: 0.5
          },
          on: { "before-open": _vm.setCallback }
        },
        [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.login($event)
                }
              }
            },
            [
              _c("div", { staticClass: "card-body p-6" }, [
                _c("div", { staticClass: "card-title" }, [
                  _vm._v("Login to continue")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { staticClass: "form-label" }, [
                    _vm._v("Email address")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.email,
                        expression: "email"
                      }
                    ],
                    staticClass: "form-control",
                    class: { "is-invalid": _vm.form.errors.has("email") },
                    attrs: {
                      type: "email",
                      required: "",
                      placeholder: "Enter email",
                      autocomplete: "off"
                    },
                    domProps: { value: _vm.email },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.email = $event.target.value
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "invalid-feedback" }, [
                    _vm._v(_vm._s(_vm.form.errors.get("email")))
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { staticClass: "form-label" }, [
                    _vm._v("Password")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.password,
                        expression: "password"
                      }
                    ],
                    staticClass: "form-control",
                    class: { "is-invalid": _vm.form.errors.has("password") },
                    attrs: {
                      type: "password",
                      required: "",
                      placeholder: "Password"
                    },
                    domProps: { value: _vm.password },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.password = $event.target.value
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "invalid-feedback" }, [
                    _vm._v(_vm._s(_vm.form.errors.get("password")))
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    { staticClass: "custom-control custom-checkbox" },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.remember,
                            expression: "remember"
                          }
                        ],
                        staticClass: "custom-control-input",
                        attrs: { type: "checkbox" },
                        domProps: {
                          checked: Array.isArray(_vm.remember)
                            ? _vm._i(_vm.remember, null) > -1
                            : _vm.remember
                        },
                        on: {
                          change: function($event) {
                            var $$a = _vm.remember,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = null,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 && (_vm.remember = $$a.concat([$$v]))
                              } else {
                                $$i > -1 &&
                                  (_vm.remember = $$a
                                    .slice(0, $$i)
                                    .concat($$a.slice($$i + 1)))
                              }
                            } else {
                              _vm.remember = $$c
                            }
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "custom-control-label" }, [
                        _vm._v("Remember me")
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-footer" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary btn-block",
                      attrs: { type: "submit", disabled: _vm.form.isPending }
                    },
                    [
                      _vm.form.isPending
                        ? _c("i", { staticClass: "fa fa-spinner fa-spin" })
                        : _vm._e(),
                      _vm._v(
                        "\n                        " +
                          _vm._s(_vm.signInText) +
                          "\n                    "
                      )
                    ]
                  )
                ])
              ])
            ]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Modals/Login.vue":
/*!***************************************!*\
  !*** ./resources/js/Modals/Login.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_1aaa66fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=1aaa66fe& */ "./resources/js/Modals/Login.vue?vue&type=template&id=1aaa66fe&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/Modals/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_1aaa66fe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_1aaa66fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Modals/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Modals/Login.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/Modals/Login.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Modals/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Modals/Login.vue?vue&type=template&id=1aaa66fe&":
/*!**********************************************************************!*\
  !*** ./resources/js/Modals/Login.vue?vue&type=template&id=1aaa66fe& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_1aaa66fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=1aaa66fe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Modals/Login.vue?vue&type=template&id=1aaa66fe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_1aaa66fe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_1aaa66fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);