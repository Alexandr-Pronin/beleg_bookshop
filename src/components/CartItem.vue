<template>
    <div class="cartitem">
        <img class="cartitem__image" :src=cartItemData.product.LinkGrafik>
        <div class="cartitem__info">
            <p>{{ cartItemData.product.Produkttitel }}</p>
            <p>{{ cartItemData.product.PreisNetto }}</p>
        </div>

        <!-- ---teilwind css -->
        <div class="cartitem_qnt custom-number-input h-10 w-32">
            <label for="custom-input-number" class="w-full text-red-700 text-sm font-semibold">Anzahl
            </label>
            <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                <button data-action="decrement" @click="decrement"
                    class=" bg-red-300 text-red-600 hover:text-red-700 hover:bg-red-400 h-full w-20 rounded-l cursor-pointer outline-none">
                    <span class="m-auto text-2xl font-thin" @click="decrement">−</span>
                </button>
                   <p  class="outline-none focus:outline-none text-center justify-center  w-full bg-red-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-red-700  outline-none"
                   > {{cartItemData.count }}</p>
                <button data-action="increment"  @click="increment"
                    class="bg-red-300 text-red-600 hover:text-red-700 hover:bg-red-400 h-full w-20 rounded-r cursor-pointer">
                    <span class="m-auto text-2xl font-thin"  @click="increment">+</span>
                </button>
            </div>
        </div>
        <button type="button" @click="deleteFromCart" class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Löschen</button>

            
            <!-- <div class="cartitem_qnt">
                <span>
                    <span class="qnt__button" @click="decrement">-</span>
                    <p>{{ cartItemData.count }}</p>
                    <span class="qnt__button" @click="increment">+</span>
                </span>
            </div> -->
            <!-- <button @click="deleteFromCart">Delete</button> -->

            <!-- --teilwind -->

        </div>
        

</template>




<script>
import { mapActions } from 'vuex'


export default {
    name: 'CartItem',
    components: {},
    props: {

        cartItemData: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
            title: 'Cartitem'
        }
    },
    computed: {

    },
    methods: {

        deleteFromCart() {
            this.$emit('deleteFromCart')
        },
        increment() {
            this.$emit('increment');
        },
        decrement() {
            this.$emit('decrement');
        }
    },
    watch: {},
    mounted() {
        console.log("Cartitem..");
    }


}
</script>

<style lang="scss" >
.cartitem {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: nowrap;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.329);
    padding: $padding;
    margin-bottom: $margin;
    flex-direction: row;
    width: 40%;

    &__image {
        max-width: 50px;
    }

    .qnt__button {
        cursor: pointer;
    }
}
</style>

