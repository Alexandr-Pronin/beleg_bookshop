import Vue from 'vue';
import Router from 'vue-router';
import CatalogComponent from '@/components/CatalogComponent.vue';
import CartComponent from '@/components/CartComponent.vue';
import Home from '@/home/MainHome.vue'

Vue.use(Router);
let router = new Router({
    // base: '/',
    // mode: 'history',
    routes: [
        // {
        //     path: '/',
        //     name: 'home',
        //     component: Home
        // },
        {
            path: '/',
            name: 'catalog',
            component: CatalogComponent
        },
        {
            path: '/cart',
            name: 'cart',
            component: CartComponent,
            props:true
        },
    ]
}); 

export default router;