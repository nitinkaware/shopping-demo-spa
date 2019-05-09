<template>
    <a href="javascript:void(0)"
       class="icon d-none d-md-inline-block ml-3 float-right mb-2"
       :class="isWishlisted ? 'red' : '' "
       @click="toggleWishList"
    >
        <svg class="tw-fill-current tw-h-5 tw-w-5"
             :class="this.isWishlisted ? 'tw-text-red-600' : ''"
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 20 20">
            <path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z"/>
        </svg>
    </a>
</template>

<script>
    export default {
        props: ['isWishlisted', 'productId'],
        data: function () {
            return {}
        },
        methods: {
            toggleWishList: function () {
                let originalAction = this.isWishlisted;
                this.isWishlisted = !this.isWishlisted;

                axios.post(route('api.wishlist.store'), {
                    'product_id': this.productId
                }).catch((error) => {

                    if (error.response.status === 401) {
                        this.$modal.show('login');
                    }

                    this.isWishlisted = originalAction;
                });
            }
        },
    }
</script>

<style>
    .red {
        color: red !important;
    }
</style>