<template>
    <div class="CatalogComponent">
        <h1>Catalog</h1>
        <div class="CatalogComponent__list">
            <CatalogItem v-for="product in PRODUCTS" :key="product.produktID" v-bind:product-data="product"
                @addToCart="showChildArticle" />
        </div>

    </div>
</template>

<script>
import CatalogItem from './CatalogItem.vue';
import { mapActions, mapGetters } from 'vuex';



export default {
    name: 'CatalogComponent',
    components: {
        CatalogItem
    },
    props: {

    },
    data() {
        return {
            title: 'Main Wrapper',
            // products: [],
            timestamp: ""
        }
    },
    computed: {
        ...mapGetters([
            'PRODUCTS'
        ]),

    },
    watch: {},

    methods: {
        ...mapActions([
            'GET_PRODUCTS_FROM_API_PHP'
        ]),
        // fetchData() {

        //     fetch("https://iws107.informatik.htw-dresden.de/ewa/g11/PHP/beleg_fetch.php")
        //         .then(response => response.json())
        //         .then((data) => {
        //             this.products = data;
        //         })
        // },
        increase(index) {
            this.products[index].quantity++;
        },
        decrease(index) {
            if (this.products[index].quantity > 0)
                this.products[index].quantity--;
        },
        now() {
            const today = new Date();
            const date = today.getDate()
                + '.' + (today.getMonth() + 1)
                + '.' + today.getFullYear();
            const time = today.getHours()
                + ":" + today.getMinutes()
                + ":" + today.getSeconds();
            const dateTime = "Date: " + date + ' Time: ' + time;
            this.timestamp = dateTime;
        },
        showChildArticle(data) {
            console.log("ADD: ", data);
            // this.$emit('addToCartFromCatalog', this.productAddToCart);
        }
    },

    created() {
        setInterval(this.now, 1000);
    },

    mounted() {
        // this.fetchData();
        this.GET_PRODUCTS_FROM_API_PHP();
    },

}
</script>

<style lang="scss">
.CatalogComponent {
    &__list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        // align-items: center;
    }
}
</style>