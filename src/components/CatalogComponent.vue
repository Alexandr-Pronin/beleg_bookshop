<template>
    <div class="catalogComponent">


        <KeepAlive>
            <RouterLink :to="{ name: 'cart', params: { cartData: CART } }">
                <!-- <div class="catalogComponent__linkToCart"> Korb: {{ CART.length }}</div> -->

                <!-- ---teilwind -->
                <li
                    class="catalogComponent__linkToCart font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700">
                    <a href="#" role="button" class="relative flex">
                        <svg class="flex-1 w-8 h-8 fill-current" viewbox="0 0 24 24">
                            <path
                                d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                        </svg>
                        <span
                            class="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                            {{ CART.length }}
                        </span>
                    </a>
                </li>

            </RouterLink>
        </KeepAlive>


        <h1></h1>

        <div class="catalogComponent__list flex overflow-y-auto space-x-100">
            
            <!-- <div class="flex overflow-x-auto space-x-8 w-1/2 bg-red-200"> -->
                <CatalogItem v-for="product in filteredBooks" :key="product.produktID" v-bind:product-data="product"
                    @addToCart="addChildArticle" />
            <!-- </div> -->

        </div>

        <DataView :value="211231" layout="grid" :paginator="true" :lazy="true" :rows="12">
        ewrwer
    </DataView>


    </div>
</template>

<script>
import CatalogItem from './CatalogItem.vue';
import { mapActions, mapGetters } from 'vuex';
import DataView from 'primevue/dataview';
				


export default {
    name: 'CatalogComponent',
    components: {
        CatalogItem,
        DataView
    },
    props: {

    },
    data() {
        return {
            title: 'Main Wrapper',
            products: [],
            timestamp: "",
            BookSearch: ""
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
        SEARCH_VALUE() {
            this.productBySearchValue(this.SEARCH_VALUE);
        }

    },

    methods: {
        ...mapActions([
            'GET_PRODUCTS_FROM_API_PHP',
            'ADD_TO_CART'
        ]),

        productBySearchValue(value) {
            this.BookSearch = value.toLowerCase();
            console.log("search", this.BookSearch);
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
    box-shadow: 0 0 47px 0 rgba(54, 26, 26, 0.75);

    &__list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        // max-width: 900px;
        // align-items: center;
        max-height: 51.9rem;
        padding-top: 3rem;
        margin: 0 auto;
        display: flex;
        justify-content: center;
    }

    &__linkToCart {
        position: fixed;
        top: 10px;
        right: 20rem;
        padding: $padding;
        // border: solid 1px;
    }
}
</style>