<template>
    <div class="catalogComponent">
        <KeepAlive>
            <RouterLink :to="{ name: 'cart', params: { cartData: CART } }">
                <div class="catalogComponent__linkToCart"> Korb: {{ CART.length }}</div>
            </RouterLink>
        </KeepAlive>



        <h1>Catalog</h1>
        <div class="catalogComponent__list">
            <CatalogItem v-for="product in filteredBooks"
             :key="product.produktID" 
             v-bind:product-data="product"
            @addToCart="addChildArticle" />
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
            products: [],
            timestamp: "",
            BookSearch:""
        }
    },
    computed: {
        ...mapGetters([
            'PRODUCTS',
            'CART',
            'SEARCH_VALUE'
        ]),
        filteredBooks: function () {
            return this.PRODUCTS.filter((product) => {
              return product.Produkttitel.toLowerCase().match(this.BookSearch) || product.Autorname.toLowerCase().match(this.BookSearch) || product.Verlagsname.toLowerCase().match(this.BookSearch);
      });
    },
    },
    watch: {
        SEARCH_VALUE(){
            this.productBySearchValue(this.SEARCH_VALUE);
        }

    },

    methods: {
        ...mapActions([
            'GET_PRODUCTS_FROM_API_PHP',
            'ADD_TO_CART'
        ]),

        productBySearchValue(value){  
          this.BookSearch = value.toLowerCase();
          console.log("search",this.BookSearch );
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
        addChildArticle(data) {
            console.log("ADD: ", data);
            // this.$emit('addToCartFromCatalog', this.productAddToCart);
            this.ADD_TO_CART(data);
        }
    },

    created() {
        setInterval(this.now, 1000);
    },

    mounted() {
        // this.fetchData();
        this.GET_PRODUCTS_FROM_API_PHP();
        this.products = this.PRODUCTS;
    },

}
</script>



<style lang="scss">
.catalogComponent {
    &__list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        max-width: 900px;
        //align-items: center;
        margin: 0 auto;
    }

    &__linkToCart {
        position: fixed;
        top: 10px;
        right: 10px;
        padding: $padding;
        border: solid 1px;
    }
}
</style>