<template>
    <div class="my-3 my-md-5">
        <div class="container">
            <loading :active.sync="request.isPending"
                     :can-cancel="false"
                     :is-full-page="true">
            </loading>
            <div class="row-cards row-deck"
                 v-if=" !request.isPending">
                <cart-quantity-size></cart-quantity-size>
                <div class="col-4"
                     style="margin-left: 30%"
                     v-if="!hasItemInCart">

                    <svg height="200pt"
                         viewBox="0 -16 512 512"
                         width="200pt"
                         class="ml-3"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="m272 424c0 30.929688-25.070312 56-56 56s-56-25.070312-56-56 25.070312-56 56-56 56 25.070312 56 56zm0 0"
                              fill="#57565c"/>
                        <path d="m464 424c0 30.929688-25.070312 56-56 56s-56-25.070312-56-56 25.070312-56 56-56 56 25.070312 56 56zm0 0"
                              fill="#57565c"/>
                        <path d="m496 336h-364.335938l-80-304h-35.664062c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h60.335938l80 304h339.664062c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
                              fill="#77959e"/>
                        <path d="m448 272h-267.054688l-54.65625-208h385.710938v144c0 35.34375-28.65625 64-64 64zm0 0"
                              fill="#fdd835"/>
                        <g fill="#fbc02d">
                            <path d="m384 224c-8.832031 0-16-7.167969-16-16v-96c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v96c0 8.832031-7.167969 16-16 16zm0 0"/>
                            <path d="m464 224c-8.832031 0-16-7.167969-16-16v-96c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v96c0 8.832031-7.167969 16-16 16zm0 0"/>
                            <path d="m304 224c-8.832031 0-16-7.167969-16-16v-96c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v96c0 8.832031-7.167969 16-16 16zm0 0"/>
                            <path d="m224 224c-8.832031 0-16-7.167969-16-16v-96c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v96c0 8.832031-7.167969 16-16 16zm0 0"/>
                        </g>
                        <path d="m216 448c-25.28125 0-46.449219-16.945312-53.390625-40-1.539063 5.105469-2.609375 10.398438-2.609375 16 0 30.878906 25.121094 56 56 56s56-25.121094 56-56c0-5.601562-1.070312-10.894531-2.609375-16-6.941406 23.054688-28.109375 40-53.390625 40zm0 0"
                              fill="#2d2d30"/>
                        <path d="m408 448c-25.28125 0-46.449219-16.945312-53.390625-40-1.539063 5.105469-2.609375 10.398438-2.609375 16 0 30.878906 25.121094 56 56 56s56-25.121094 56-56c0-5.601562-1.070312-10.894531-2.609375-16-6.941406 23.054688-28.109375 40-53.390625 40zm0 0"
                              fill="#2d2d30"/>
                        <path d="m448 240h-275.457031l8.417969 32h267.039062c35.34375 0 64-28.65625 64-64v-32c0 35.34375-28.65625 64-64 64zm0 0"
                              fill="#fbc02d"/>
                    </svg>

                    <h3 class="mt-3 text-center tw-text-2xl tw-text-gray-900">
                        Hey, it feels so light!
                    </h3>
                    <span class="text-secondary text-center">There is nothing in your cart. Lets add some item.</span>
                    <router-link to="/my/wishlist"
                                 class="btn btn-instagram mt-3">
                        <svg class="tw-inline tw-fill-current tw-h-4 tw-w-4" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 20 20">
                            <path d="M15 9h-3v2h3v3h2v-3h3V9h-3V6h-2v3zM0 3h10v2H0V3zm0 8h10v2H0v-2zm0-4h10v2H0V7zm0 8h10v2H0v-2z"/>
                        </svg>
                        ADD ITEM FROM WISHLIST
                    </router-link>
                </div>
                <div class="col-12"
                     v-else>
                    <div class="row">
                        <div class="col-md-12 tw-text-2xl tw-text-base tw-mb-2">
                            <div class="float-left">
                                <h3>My Shopping Cart ({{ totalItemsInCartCount }})</h3>
                            </div>
                            <div class="float-right">
                                <h4>Total: {{ total }}</h4>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="table-responsive">
                            <table class="table table-hover table-outline table-vcenter text-nowrap card-table">
                                <thead>
                                <tr>
                                    <th class="text-center w-1"><i class="icon-people"></i></th>
                                    <th class="text-left">Product</th>
                                    <th class="text-center">Color</th>
                                    <th class="text-center">Size</th>
                                    <th class="text-center">Quantity</th>
                                    <th class="text-center">Total</th>
                                    <th class="text-center"><i class="icon-settings"></i></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="item in itemsInCart"
                                    :key="item.id">
                                    <td class="text-center">
                                <span class="avatar"
                                      style="background-image: url(https://picsum.photos/400/300?image=0)"></span>
                                    </td>
                                    <td class="text-left">
                                        <div>
                                            {{ item.product.name }}
                                        </div>
                                        <div class="small text-muted">
                                            Tax: {{ item.calculated_tax }}
                                        </div>
                                    </td>
                                    <td class="text-center">
                                        <div>{{ item.color.name }}</div>
                                    </td>
                                    <td class="text-center">
                                <span class="cursor"
                                      @click="showSizeModal(item)">
                                    {{ item.size.name }} <i v-if=" !!item.size.name"
                                                            class="fa fa-caret-down"></i>
                                </span>
                                    </td>
                                    <td class="text-center">
                                <span class="cursor"
                                      @click="showQuantityModal(item)">
                                    {{ item.quantity }} <i class="fa fa-caret-down"></i>
                                </span>
                                    </td>
                                    <td class="text-center">
                                        <div>{{ item.price }}</div>
                                    </td>
                                    <td class="w-1">
                                        <a href="#"
                                           class="icon"
                                           @click="removeItemFromCart(item.id)">
                                            <svg class="tw-h-5 tw-w-5"
                                                 xmlns="http://www.w3.org/2000/svg"
                                                 viewBox="0 0 20 20">
                                                <path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"/>
                                            </svg>
                                        </a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                        <button class="btn btn-primary float-right text-uppercase"
                                @click="goToAddress">
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import Form from 'form-object';

    export default {
        props: ['propItemsInCart'],
        components: {
            'cart-quantity-size': () => import('../../Modals/UpdateSizeQuantity')
        },
        data: function () {
            return {
                request: new Form,
                itemsInCart: [],
            }
        },
        mounted() {
            this.request.submit('get', route('api.cart.index')).then(response => {
                this.itemsInCart = response.data;
            });
        },
        computed: {
            hasItemInCart: function () {
                return this.itemsInCart.length;
            },
            total: function () {
                return indian_format(collect(this.itemsInCart).map(function (item) {
                    let productTotal = item.price * item.quantity;
                    let tax = ((productTotal * item.product.tax.value) / 100);
                    item['calculated_tax'] = tax;
                    item['calculated_price'] = (productTotal) + tax;
                    return item;
                }).sum('calculated_price'));
            },
            totalItemsInCartCount: function () {
                return collect(this.itemsInCart).count();
            },
        },
        methods: {
            showQuantityModal(cart) {
                this.$modal.show('product-quantity-size', {
                    route: 'api.checkout.quantity.update',
                    requestParam: 'quantity',
                    label: 'Select Quantity',
                    cart: cart,
                    selected: cart.quantity,
                    type: 'quantity',
                    collection: collect([1, 2, 3, 4, 5]).map(function (item) {
                        return {
                            id: item,
                            value: item,
                        }
                    }).all(),
                });
            },
            showSizeModal(cart) {
                this.$modal.show('product-quantity-size', {
                    route: 'api.checkout.size.update',
                    requestParam: 'size_id',
                    label: 'Select Size',
                    cart: cart,
                    selected: cart.size.id,
                    type: 'size',
                    collection: collect(cart.product.variants).unique('size').map(function (item) {
                        return {
                            id: item.id,
                            value: item.size,
                        }
                    }).all(),
                });
            },
            removeItemFromCart: function (cartId) {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, remove from the cart!'
                }).then((result) => {
                    if (result.value) {
                        axios.delete(route('api.checkout.cart.destroy', cartId)).then((response) => {
                            this.itemsInCart = response.data.data;

                            this.$root.$emit('removedFromCart', {
                                itemsInCartCount: this.itemsInCart.length
                            });

                            Swal.fire(
                                'Removed!',
                                'Your item has been removed.',
                                'success'
                            );
                        }).catch((error) => {
                            Swal.fire(
                                'Oops!',
                                'Something went wrong!',
                                'error'
                            );
                        });
                    }
                });
            },
            goToAddress: function () {
                this.$router.push({
                    name: 'cart.address.index'
                });
            }
        }
    }
</script>

<style scoped>
    .cursor {
        cursor: pointer;
    }
</style>