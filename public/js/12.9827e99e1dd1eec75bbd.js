(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Variant.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/Variant.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
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
  props: ['productId', 'productName', 'variants', 'orderCount', 'shares', 'propItemsInCart'],
  data: function data() {
    return {
      isAdding: false,
      selectedColorId: null,
      selectedSizeId: null,
      itemsInCart: collect(this.propItemsInCart)
    };
  },
  mounted: function mounted() {
    this.selectedColorId = this.variants[0].id;
    this.selectedSizeId = this.sizes.length ? this.sizes[0].id : null;
  },
  methods: {
    addToCart: function addToCart() {
      var _this = this;

      if (this.itemAlreadyInCart) {
        return;
      }

      this.isAdding = true;
      axios.post(route('api.checkout.cart.store'), {
        product_id: this.productId,
        size_id: this.selectedSizeId,
        color_id: this.selectedColorId
      }).then(function (response) {
        _this.isAdding = false; // HTTP_ALREADY_REPORTED

        if (response.status === 208) {
          return;
        }

        _this.itemsInCart = collect(response.data.data);

        _this.$root.$emit('addedToCart', {
          itemsInCartCount: _this.itemsInCart.count()
        });
      })["catch"](function (error) {
        _this.isAdding = false;

        if (error.response.status === 401) {
          _this.$modal.show('login', {
            callback: _this.addToCart
          });
        }
      });
    }
  },
  computed: {
    itemCartClass: function itemCartClass() {
      if (this.isAdding) {
        return 'fa fa-spinner fa-spin';
      }

      return {
        'fe fe-arrow-right': this.itemAlreadyInCart,
        'fe fe-shopping-bag': !this.itemAlreadyInCart
      };
    },
    itemCartText: function itemCartText() {
      if (this.isAdding) {
        return 'ADDING';
      }

      return this.itemAlreadyInCart ? 'GO TO CART' : 'ADD TO CART';
    },
    cartRoute: function cartRoute() {
      return route('api.cart.index');
    },
    itemAlreadyInCart: function itemAlreadyInCart() {
      var _this2 = this;

      return this.itemsInCart.contains(function (item) {
        if (!_this2.hasSize) {
          return item.color.id === _this2.selectedColorId;
        }

        return item.color.id === _this2.selectedColorId && item.size.id === _this2.selectedSizeId;
      });
    },
    sizes: function sizes() {
      return collect(this.variants).unique('size').filter(function (item) {
        return !!item.size;
      }).sort().all();
    },
    hasSize: function hasSize() {
      return this.sizes.length;
    },
    price: function price() {
      var variant = collect(this.variants).firstWhere('id', this.selectedColorId);
      return !!variant ? variant.price : 0;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Variant.vue?vue&type=template&id=3db5f959&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/Variant.vue?vue&type=template&id=3db5f959& ***!
  \******************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("h4", { staticClass: "card-title mb-3" }, [
      _c("span", { domProps: { textContent: _vm._s(_vm.productName) } })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "product-price mb-3" }, [
      !!_vm.price
        ? _c("strong", [_vm._v("₹ " + _vm._s(_vm.price) + " ")])
        : _vm._e(),
      _vm._v(" "),
      !!_vm.orderCount
        ? _c("span", { staticClass: "text-secondary" }, [
            _vm._v(" Sold: " + _vm._s(_vm.orderCount))
          ])
        : _vm._e(),
      _vm._v(" "),
      !!_vm.shares
        ? _c("span", [_vm._v("| Shares: " + _vm._s(_vm.shares))])
        : _vm._e()
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "form-group" },
      [
        _c("label", { staticClass: "form-label" }, [_vm._v("Select Color:")]),
        _vm._v(" "),
        _vm._l(_vm.variants, function(variant) {
          return _c(
            "div",
            { key: variant.id, staticClass: "selectgroup selectgroup-pills" },
            [
              _c("label", { staticClass: "selectgroup-item" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.selectedColorId,
                      expression: "selectedColorId"
                    }
                  ],
                  staticClass: "selectgroup-input",
                  attrs: { type: "radio", name: "color" },
                  domProps: {
                    value: variant.id,
                    checked: _vm._q(_vm.selectedColorId, variant.id)
                  },
                  on: {
                    change: function($event) {
                      _vm.selectedColorId = variant.id
                    }
                  }
                }),
                _vm._v(" "),
                _c("span", { staticClass: "selectgroup-button" }, [
                  _vm._v(_vm._s(variant.color))
                ])
              ])
            ]
          )
        })
      ],
      2
    ),
    _vm._v(" "),
    _vm.hasSize
      ? _c("label", { staticClass: "form-label" }, [_vm._v("Select Size:")])
      : _vm._e(),
    _vm._v(" "),
    _vm.hasSize
      ? _c(
          "div",
          { staticClass: "selectgroup selectgroup-pills" },
          _vm._l(_vm.sizes, function(item, index) {
            return _c("div", { key: index, staticClass: "form-group" }, [
              _c("label", { staticClass: "selectgroup-item" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.selectedSizeId,
                      expression: "selectedSizeId"
                    }
                  ],
                  staticClass: "selectgroup-input",
                  attrs: { type: "radio" },
                  domProps: {
                    value: item.id,
                    checked: _vm._q(_vm.selectedSizeId, item.id)
                  },
                  on: {
                    change: function($event) {
                      _vm.selectedSizeId = item.id
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "span",
                  { staticClass: "selectgroup-button selectgroup-button-icon" },
                  [_vm._v(" " + _vm._s(item.size) + " ")]
                )
              ])
            ])
          }),
          0
        )
      : _vm._e(),
    _vm._v(" "),
    !!_vm.price
      ? _c(
          "a",
          {
            staticClass: "btn btn-primary btn-block",
            class: _vm.isAdding ? "disabled" : "",
            attrs: {
              href: _vm.itemAlreadyInCart ? _vm.cartRoute : "javascript:void(0)"
            },
            on: { click: _vm.addToCart }
          },
          [
            _c("i", { class: _vm.itemCartClass }),
            _vm._v("\n          " + _vm._s(_vm.itemCartText) + "\n    ")
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Shared/Variant.vue":
/*!*****************************************!*\
  !*** ./resources/js/Shared/Variant.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Variant_vue_vue_type_template_id_3db5f959___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Variant.vue?vue&type=template&id=3db5f959& */ "./resources/js/Shared/Variant.vue?vue&type=template&id=3db5f959&");
/* harmony import */ var _Variant_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Variant.vue?vue&type=script&lang=js& */ "./resources/js/Shared/Variant.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Variant_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Variant_vue_vue_type_template_id_3db5f959___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Variant_vue_vue_type_template_id_3db5f959___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Shared/Variant.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Shared/Variant.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/Shared/Variant.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Variant_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Variant.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Variant.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Variant_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Shared/Variant.vue?vue&type=template&id=3db5f959&":
/*!************************************************************************!*\
  !*** ./resources/js/Shared/Variant.vue?vue&type=template&id=3db5f959& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Variant_vue_vue_type_template_id_3db5f959___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Variant.vue?vue&type=template&id=3db5f959& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Variant.vue?vue&type=template&id=3db5f959&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Variant_vue_vue_type_template_id_3db5f959___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Variant_vue_vue_type_template_id_3db5f959___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);