<template>
    <div class="my-3 my-md-5">
        <div class="container">
            <loading :active.sync="request.isPending"
                     :can-cancel="false"
                     :is-full-page="true">
            </loading>
            <div class="form-group">
                <label class="form-label">Filter By:</label>
                <div class="selectgroup selectgroup-pills">
                    <filter-by-category v-for="category in categories"
                                        :key="category.id"
                                        :category="category">
                    </filter-by-category>
                </div>
            </div>
            <div class="row row-cards">
                <product v-for="product in filteredProducts"
                         :key="product.id"
                         :product="product"></product>
            </div>
        </div>
    </div>
</template>

<script>

    import Form from 'form-object';

    export default {
        components: {
            'product': () => import('../../Shared/Product.vue'),
            'filter-by-category': () => import('../../Shared/FilterByCategory')
        },
        props: ['route'],
        data: function () {
            return {
                request: new Form,
                products: {},
                filterBy: []
            }
        },
        watch: {
            '$route.params': {
                immediate: true,
                handler() {
                    this.fetchProducts();
                }
            }
        },
        created() {
            this.$root.$on('productFiltered', (data) => {
                data.checked
                    ? this.filterBy.push(data.id)
                    : this.filterBy.remove(data.id)
            });
        },
        computed: {
            filteredProducts: function () {
                return this.filterBy.length > 0
                    ? collect(this.products).whereIn('category.id', this.filterBy).all()
                    : this.products;
            },
            categories: function () {
                return collect(this.products).pluck('category').unique('id').all();
            }
        },
        methods: {
            fetchProducts() {
                let compiledRoute = this.$route.params && this.$route.params.slug
                    ? route('api.products.all.index', {category: this.$route.params.slug})
                    : route('api.products.all.index');


                this.request.submit('get', compiledRoute).then((response) => {
                    this.products = response.data;
                    this.filterBy = [];
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>
