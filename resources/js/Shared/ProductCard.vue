<template>
    <div class="card">
        <div class="card-body">

            <wishlist :propIsWishlisted="product.is_wish_listed"
                      :productId="product.id"
            ></wishlist>

            <div class="mb-4 text-center">
                <img src="https://picsum.photos/400/300?image=0"
                     alt="Apple iPhone 7 128GB"
                     class="img-fluid">
            </div>

            <variant :product-id="product.id"
                     :product-name="product.name"
                     :prop-items-in-cart="product.items_in_cart.data"
                     :variants="product.variants"
                     :order-count="product.statistics.order_count"
                     :shares="product.statistics.shares">
            </variant>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['product'],
        components: {
            'variant': () => import('../Shared/Variant.vue'),
            'wishlist': () => import('../Shared/WishList.vue'),
        }
    }
</script>