<template>
    <div class="col-md-4">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">
                    <router-link :to="productLink">
                        {{ product.name }}
                    </router-link>
                </h4>

                <div class="mt-5 d-flex align-items-center">
                    <div class="product-price">
                        <strong>&#8377; {{ price }}</strong>
                    </div>
                </div>

                <slot name="button"></slot>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        props: ['product'],
        computed: {
            price: function () {
                let variants = collect(this.product.variants);

                if (variants.isEmpty()) {
                    return 0;
                }

                let min = variants.min('price');
                let max = variants.max('price');

                return (min === max) ? min : `${min} - ${max}`;
            },
            productLink: function () {
                return {
                    name: 'buy-product',
                    params: {
                        slug: this.product.category.slug,
                        productId: this.product.id
                    }
                };
            }
        },
    }
</script>