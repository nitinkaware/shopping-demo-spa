export default [
    {
        path: '/',
        name: 'home',
        component: () => import('./Pages/Products/Index')
    },
    
    {
        path: '/login',
        name: 'login',
        component: () => import('./Pages/Login')
    },

    {
        path: '/register',
        name: 'register',
        component: () => import('./Pages/Register')
    },

    {
        path: '/products/:slug/:productId/buy',
        name: 'buy-product',
        component: () => import('./Pages/BuyProduct/Index')
    },

    {
        path: '/products/:slug',
        name: 'product.index',
        component: () => import('./Pages/Products/Index')
    },

    {
        path: '/checkout/cart',
        name: 'cart.index',
        component: () => import('./Pages/Cart/Index')
    },

    {
        path: '/checkout/address',
        name: 'cart.address.index',
        component: () => import('./Pages/Address/Index')
    },

    {
        path: '/checkout/payment',
        name: 'cart.payment.index',
        component: () => import('./Pages/Payment/Index')
    },

    {
        path: '/my/wishlist',
        name: 'my.wishlist.index',
        component: () => import('./Pages/WishList/Index')
    }
];