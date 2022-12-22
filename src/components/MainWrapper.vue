<template>
    <div class="MainWrapper">
        <p>{{ title }}</p>
        <Catalog />
        <Cart v-if="CART.length"
        :cart-data="CART"
        />
    </div>
</template>

<script>
import { computed } from 'vue';
import Catalog from './CatalogComponent.vue';
import Cart from './CartComponent.vue';
import { mapGetters } from 'vuex';


export default {
    name: 'MainWrapper',
    components: {
        Catalog, Cart
    },
    props: {},
    data() {
        return {
            title: 'Main Wrapper'
        }
    },
    computed: {

        ...mapGetters([
            'CART'
        ])

    },
    methods: {},
    watch: {},
    mounted() {
        console.log("jo geht..");
    }
}
</script>

<style scoped>
.MainWrapper {
    max-width: 900px;
    margin: 0 auto;
}
</style>