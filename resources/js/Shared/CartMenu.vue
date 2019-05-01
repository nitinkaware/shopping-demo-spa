<template>
    <div class="dropdown">
        <loading :active.sync="isLoading"
                 :can-cancel="false"
                 :is-full-page="true">
        </loading>
        <div class="nav-item d-none d-md-flex">
            <button class="btn btn-md btn-outline-primary"
                    @click="redirectToCart"
                    :disabled="isLoading"
                    :title="`Your cart contains ${itemsInCartCount} items.`">

                <svg class="tw-stroke-current tw-inline-block tw-h-5 tw-w-5"
                     viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     stroke-width="2"
                     stroke-linecap="round"
                     stroke-linejoin="round">
                    <circle cx="8"
                            cy="21"
                            r="2"></circle>
                    <circle cx="20"
                            cy="21"
                            r="2"></circle>
                    <path d="M5.67 6H23l-1.68 8.39a2 2 0 0 1-2 1.61H8.75a2 2 0 0 1-2-1.74L5.23 2.74A2 2 0 0 0 3.25 1H1"></path>
                </svg>

                Cart
                <span v-if=" !!itemsInCartCount"
                      class="badge badge-primary rounded-full relative">
                    {{ itemsInCartCount }}
                </span>
            </button>
        </div>
    </div>
</template>

<script>

    export default {
        props: ['propCount'],
        data: function () {
            return {
                itemsInCartCount: this.propCount,
                isLoading: false,
            }
        },
        created() {
            this.$root.$on(['addedToCart', 'removedFromCart'], (data) => {
                this.itemsInCartCount = data.itemsInCartCount;
            });
        },
        methods: {
            redirectToCart() {
                this.$router.push({name: 'cart.index'});
            }
        }
    }
</script>

<style>
    .relative {
        position: relative !important;
    }

    .rounded-full {
        border-radius: 12px;
    }
</style>