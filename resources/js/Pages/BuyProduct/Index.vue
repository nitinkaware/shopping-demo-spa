<template>
    <div class="my-3 my-md-5">
        <div class="container">
            <login></login>
            <loading :active.sync="request.isPending"
                     :can-cancel="false"
                     :is-full-page="true">
            </loading>
            <div class="row"
                 v-if="topProducts.length > 0">
                <div class="col-md-4">
                    <product-card :product="product"></product-card>
                </div>
                <div class="col-md-8">
                    <div class="row">
                        <product v-for="product in topProducts"
                                 :key="product.id"
                                 :product="product"></product>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import Form from 'form-object';

    export default {
        components: {
            'product': () => import('../../Shared/Product.vue'),
            'product-card': () => import('../../Shared/ProductCard.vue'),
            'login': () => import('../../Modals/Login.vue')
        },
        data: function () {
            return {
                topProducts: [],
                product: {},
                request: new Form
            }
        },
        watch: {
            '$route.params': {
                immediate: true,
                handler() {
                    this.fetchProductInformation();
                }
            }
        },
        computed: {},
        methods: {
            fetchProductInformation() {
                this.request.submit('get', route('api.buy-product.index', [
                    this.$route.params.slug,
                    this.$route.params.productId,
                ])).then(response => {
                    this.product = response.product;
                    this.topProducts = response.topProducts.data;
                });
            }
        }
    }
</script>