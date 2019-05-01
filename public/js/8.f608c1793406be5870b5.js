(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/BuyProduct/Index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/BuyProduct/Index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'product': function product() {
      return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../../Shared/Product.vue */ "./resources/js/Shared/Product.vue"));
    },
    'product-card': function productCard() {
      return __webpack_require__.e(/*! import() */ 14).then(__webpack_require__.bind(null, /*! ../../Shared/ProductCard.vue */ "./resources/js/Shared/ProductCard.vue"));
    },
    'login': function login() {
      return __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! ../../Modals/Login.vue */ "./resources/js/Modals/Login.vue"));
    }
  },
  data: function data() {
    return {
      topProducts: [],
      product: {},
      request: new form_object__WEBPACK_IMPORTED_MODULE_0___default.a()
    };
  },
  watch: {
    '$route.params': {
      immediate: true,
      handler: function handler() {
        this.fetchProductInformation();
      }
    }
  },
  computed: {},
  methods: {
    fetchProductInformation: function fetchProductInformation() {
      var _this = this;

      this.request.submit('get', route('api.buy-product.index', [this.$route.params.slug, this.$route.params.productId])).then(function (response) {
        _this.product = response.product;
        _this.topProducts = response.topProducts.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/BuyProduct/Index.vue?vue&type=template&id=42a80655&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/BuyProduct/Index.vue?vue&type=template&id=42a80655& ***!
  \**************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "my-3 my-md-5" }, [
    _c(
      "div",
      { staticClass: "container" },
      [
        _c("login"),
        _vm._v(" "),
        _c("loading", {
          attrs: {
            active: _vm.request.isPending,
            "can-cancel": false,
            "is-full-page": true
          },
          on: {
            "update:active": function($event) {
              return _vm.$set(_vm.request, "isPending", $event)
            }
          }
        }),
        _vm._v(" "),
        _vm.topProducts.length > 0
          ? _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-md-4" },
                [_c("product-card", { attrs: { product: _vm.product } })],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-8" }, [
                _c(
                  "div",
                  { staticClass: "row" },
                  _vm._l(_vm.topProducts, function(product) {
                    return _c("product", {
                      key: product.id,
                      attrs: { product: product }
                    })
                  }),
                  1
                )
              ])
            ])
          : _vm._e()
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/BuyProduct/Index.vue":
/*!*************************************************!*\
  !*** ./resources/js/Pages/BuyProduct/Index.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_42a80655___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=42a80655& */ "./resources/js/Pages/BuyProduct/Index.vue?vue&type=template&id=42a80655&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/Pages/BuyProduct/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_42a80655___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_42a80655___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/BuyProduct/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/BuyProduct/Index.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/BuyProduct/Index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/BuyProduct/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/BuyProduct/Index.vue?vue&type=template&id=42a80655&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/BuyProduct/Index.vue?vue&type=template&id=42a80655& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_42a80655___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=42a80655& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/BuyProduct/Index.vue?vue&type=template&id=42a80655&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_42a80655___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_42a80655___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);