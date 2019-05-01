<template>
    <div class="my-3 my-md-5">
        <div class="container">
            <div class="row-cards row-deck">
                <loading :active.sync="request.isPending"
                         :can-cancel="false"
                         :is-full-page="true">
                </loading>
                <address-modal></address-modal>
                <div class="row">
                    <div class="col-lg-9">
                        <div class="row">
                            <checkout-address v-for="address in addresses"
                                              :prop-address="address"
                                              :key="address.id">
                            </checkout-address>

                            <label class="col-lg-4 tw-cursor-pointer"
                                   @click="showAddressModal">
                                <div class="card rounded-full badge-pill address-row">
                                    <div class="card-body">
                                        <div class="tw-mt-20">
                                            <svg class="tw-fill-current tw-ml-20 tw-h-8 tw-w-8" xmlns="http://www.w3.org/2000/svg"
                                                 viewBox="0 0 20 20">
                                                <path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"/>
                                            </svg>
                                            <p class="font-weight-bold tw-text-xl text-center">Add new address</p>
                                        </div>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="border-0 card">
                            <div class="card-body d-flex flex-column">
                                <div class="border-bottom">
                                    <p class="font-weight-bold text-uppercase mb-2">{{ cart.length }} Item(s)</p>
                                </div>
                                <div class="mt-2">
                                    <span class="pull-left text-dark">Order Total:</span>
                                    <span class="pull-right text-dark">Rs. {{ order.sum }}</span>
                                </div>
                                <div class="mt-2 border-bottom">
                                    <span class="pull-left text-dark">Estimated Tax:</span>
                                    <span class="pull-right text-dark mb-2">Rs. {{ order.tax }}</span>
                                </div>
                                <div class="mt-2 font-weight-bold">
                                    <span class="pull-left text-dark">Total Payable</span>
                                    <span class="pull-right text-dark">Rs. {{ order.payable }}</span>
                                </div>
                            </div>
                            <div class="card-footer border-top-0">
                                <button class="btn btn-block btn-lg btn-pr btn-primary"
                                        :disabled="!addresses.length"
                                        @click="goToPayment">
                                    CONTINUE
                                </button>
                            </div>
                        </div>
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
            'checkout-address': () => import('../../Shared/Address'),
            'address-modal': () => import('../../Modals/Address')
        },
        data: function () {
            return {
                request: new Form,
                addresses: [],
                cart: {},
                order: {}
            }
        },
        mounted() {
            this.request.submit('get', route('api.my.address.index')).then(response => {
                this.addresses = response.address.data;
                this.cart = response.cart.data;
                this.order = response.cart.order;
            })
        },
        created() {
            this.$root.$on('newAddressAdded', address => {
                this.addresses.push(address);
            });

            this.$root.$on('addressDeleted', addresses => {
                this.addresses = addresses;

                this.$root.$emit('addressUpdated', function () {
                    let address = collect(addresses).firstWhere('is_default', true);
                    return address ? address : [];
                }());
            });
        },
        computed: {},
        methods: {
            showAddressModal() {
                this.$modal.show('address');
            },
            goToPayment() {

            }
        }
    }
</script>

<style>
    .address-row {
        height: 296px;
        width: 275px;
    }

    :disabled {
        cursor: not-allowed;
    }
</style>