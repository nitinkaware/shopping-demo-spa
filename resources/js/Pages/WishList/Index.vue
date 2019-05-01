<template>
    <div class="my-3 my-md-5">
        <div class="container">
            <loading :active.sync="request.isPending"
                     :can-cancel="false"
                     :is-full-page="true">
            </loading>
            <div class="row">
                <div class="col-md-4"
                     v-for="product in products"
                     :key="product.id">

                    <product-card :product="product"
                                  :key="product.id">
                    </product-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import Form from 'form-object';

    export default {
        components: {
            'product-card': () => import('../../Shared/ProductCard.vue'),
        },
        data: function () {
            return {
                products: [],
                request: new Form
            }
        },
        mounted() {
            this.request.submit('get', route('api.wishlist.index')).then((response) => {
                this.products = response.data;
            });
        },
        methods: {}
    }
</script>