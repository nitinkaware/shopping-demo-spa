(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Products/Index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Products/Index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
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
    'filter-by-category': function filterByCategory() {
      return __webpack_require__.e(/*! import() */ 11).then(__webpack_require__.bind(null, /*! ../../Shared/FilterByCategory */ "./resources/js/Shared/FilterByCategory.vue"));
    }
  },
  props: ['route'],
  data: function data() {
    return {
      request: new form_object__WEBPACK_IMPORTED_MODULE_0___default.a(),
      products: {},
      filterBy: []
    };
  },
  watch: {
    '$route.params': {
      immediate: true,
      handler: function handler(newVal, oldVal) {
        if (newVal.slug) {
          this.fetchProducts({
            category: this.$route.params.slug
          });
        } else {
          this.fetchProducts();
        }
      }
    }
  },
  mounted: function mounted() {
    this.fetchProducts();
  },
  created: function created() {
    var _this = this;

    this.$root.$on('productFiltered', function (data) {
      data.checked ? _this.filterBy.push(data.id) : _this.filterBy.remove(data.id);
    });
  },
  computed: {
    filteredProducts: function filteredProducts() {
      return this.filterBy.length > 0 ? collect(this.products).whereIn('category.id', this.filterBy).all() : this.products;
    },
    categories: function categories() {
      return collect(this.products).pluck('category').unique('id').all();
    }
  },
  methods: {
    fetchProducts: function fetchProducts() {
      var _this2 = this;

      var slug = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var complitedroute = this.$route.params && this.$route.params.slug ? route('api.products.all.index', {
        category: this.$route.params.slug
      }) : route('api.products.all.index');
      this.request.submit('get', slug).then(function (response) {
        _this2.products = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Products/Index.vue?vue&type=template&id=fd0122a0&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Products/Index.vue?vue&type=template&id=fd0122a0& ***!
  \************************************************************************************************************************************************************************************************************/
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
        _c("div", { staticClass: "form-group" }, [
          _c("label", { staticClass: "form-label" }, [_vm._v("Filter By:")]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "selectgroup selectgroup-pills" },
            _vm._l(_vm.categories, function(category) {
              return _c("filter-by-category", {
                key: category.id,
                attrs: { category: category }
              })
            }),
            1
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "row row-cards" },
          _vm._l(_vm.filteredProducts, function(product) {
            return _c("product", {
              key: product.id,
              attrs: { product: product }
            })
          }),
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Products/Index.vue":
/*!***********************************************!*\
  !*** ./resources/js/Pages/Products/Index.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_fd0122a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=fd0122a0& */ "./resources/js/Pages/Products/Index.vue?vue&type=template&id=fd0122a0&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Products/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_fd0122a0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_fd0122a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Products/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Products/Index.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/Products/Index.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Products/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Products/Index.vue?vue&type=template&id=fd0122a0&":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Products/Index.vue?vue&type=template&id=fd0122a0& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_fd0122a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=fd0122a0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Products/Index.vue?vue&type=template&id=fd0122a0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_fd0122a0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_fd0122a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);