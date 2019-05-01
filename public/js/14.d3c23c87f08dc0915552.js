(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/ProductCard.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/ProductCard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['product'],
  components: {
    'variant': function variant() {
      return __webpack_require__.e(/*! import() */ 12).then(__webpack_require__.bind(null, /*! ../Shared/Variant.vue */ "./resources/js/Shared/Variant.vue"));
    },
    'wishlist': function wishlist() {
      return __webpack_require__.e(/*! import() */ 13).then(__webpack_require__.bind(null, /*! ../Shared/WishList.vue */ "./resources/js/Shared/WishList.vue"));
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/ProductCard.vue?vue&type=template&id=53c23a73&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/ProductCard.vue?vue&type=template&id=53c23a73& ***!
  \**********************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "card" }, [
    _c(
      "div",
      { staticClass: "card-body" },
      [
        _c("wishlist", {
          attrs: {
            propIsWishlisted: _vm.product.is_wish_listed,
            productId: _vm.product.id
          }
        }),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _c("variant", {
          attrs: {
            "product-id": _vm.product.id,
            "product-name": _vm.product.name,
            "prop-items-in-cart": _vm.product.items_in_cart.data,
            variants: _vm.product.variants,
            "order-count": _vm.product.statistics.order_count,
            shares: _vm.product.statistics.shares
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mb-4 text-center" }, [
      _c("img", {
        staticClass: "img-fluid",
        attrs: {
          src: "https://picsum.photos/400/300?image=0",
          alt: "Apple iPhone 7 128GB"
        }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Shared/ProductCard.vue":
/*!*********************************************!*\
  !*** ./resources/js/Shared/ProductCard.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductCard_vue_vue_type_template_id_53c23a73___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductCard.vue?vue&type=template&id=53c23a73& */ "./resources/js/Shared/ProductCard.vue?vue&type=template&id=53c23a73&");
/* harmony import */ var _ProductCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductCard.vue?vue&type=script&lang=js& */ "./resources/js/Shared/ProductCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductCard_vue_vue_type_template_id_53c23a73___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductCard_vue_vue_type_template_id_53c23a73___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Shared/ProductCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Shared/ProductCard.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/Shared/ProductCard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ProductCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/ProductCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Shared/ProductCard.vue?vue&type=template&id=53c23a73&":
/*!****************************************************************************!*\
  !*** ./resources/js/Shared/ProductCard.vue?vue&type=template&id=53c23a73& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_template_id_53c23a73___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ProductCard.vue?vue&type=template&id=53c23a73& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/ProductCard.vue?vue&type=template&id=53c23a73&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_template_id_53c23a73___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCard_vue_vue_type_template_id_53c23a73___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);