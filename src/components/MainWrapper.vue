<template>
    <div class="MainWrapper">
        <MainHeader></MainHeader    >
        <KeepAlive>
            <RouterView></RouterView>
        </KeepAlive>
       
        <!-- <Catalog />
        <Cart v-if="CART.length"
        :cart-data="CART"
        /> -->
    </div>
</template>

<script>
// import { computed } from 'vue';
// import Catalog from './CatalogComponent.vue';
// import Cart from './CartComponent.vue';
import MainHeader from '@/layouts/MainHeader.vue';
import { RouterView } from 'vue-router';
import { mapGetters } from 'vuex';


export default {
    name: "MainWrapper",
    // components: {
    //     Catalog, Cart
    // },
    props: {},
    data() {
        return {
            title: "Main Wrapper"
        };
    },
    // computed: {
    //     ...mapGetters([
    //         "CART"
    //     ])
    // },
    methods: {},
    watch: {},
    mounted() {
        console.log("main wrapper gestartet..");
    },
    components: { RouterView, MainHeader }
}
</script>

<style scoped>
.MainWrapper {
    max-width: 80%;
    background-color: #fcf8f5 ;
    margin: 0 auto;
}
</style>