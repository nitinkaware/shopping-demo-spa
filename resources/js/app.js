import Vue from 'vue';
import VueRouter from 'vue-router';
import VModal from 'vue-js-modal';

import Routes from './routes';

require('./bootstrap');

window.collect = require('collect.js').default;

Vue.use(VModal);
Vue.use(VueRouter);

Vue.component('loading', require('vue-loading-overlay'));
Vue.component('cart-menu', require('./Shared/CartMenu').default);

Vue.filter('toIndianMoneyFormat', function (amount) {
    if (!amount) return '';

    let x = amount;
    x = x.toString();
    x = x.replaceAll(",", '');
    let lastThree = x.substring(x.length - 3);
    let otherNumbers = x.substring(0, x.length - 3);
    if (otherNumbers !== '') lastThree = ',' + lastThree;

    return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
});

Array.prototype.remove = function (element) {
    this.splice(this.indexOf(element), 1);
};

String.prototype.replaceAll = function (search, replacement) {
    let target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

const router = new VueRouter({
    routes: Routes,
    mode: 'history',
});

const app = new Vue({
    el: '#app',
    router
});
