<template>
    <div class="cartComponent">
        <RouterLink :to="{ name: 'catalog' }">
            <div class="catalogComponent__linkToCart">
                <button type="button"
                    class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Zurück</button>

            </div>
        </RouterLink>
        <p v-if="!cartData.length"> Dein Korb noch leer</p>
        <!-- <CartItem 
            v-for="(item, index) in cartData" 
            :key="item.product.ProduktID" :cart-item-data="item"
            @deleteFromCart="deleteFromCart(index)"
            @increment="increment(index)"
            @decrement="decrement(index)"
            /> -->

        <div class="cartcomponent__total">
            <p class="cartcomponent__totalText">Total: </p>
            <p>{{ cartTotalCoast }}</p>
        </div>
        <div class="flex-1 overflow-y-auto py-6 px-4 sm:px-6">

            <div class="mt-8">
                <div class="flow-root">
                    <CartItem v-for="(item, index) in cartData" :key="item.product.ProduktID" :cart-item-data="item"
                        @deleteFromCart="deleteFromCart(index)" @increment="increment(index)"
                        @decrement="decrement(index)" />
                </div>
            </div>
        </div>
        <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
            <div class="subtotal flex justify-between text-base font-bold text-gray-900">
                <p>Subtotal</p>
                <h1>{{ cartTotalCoast }} Euro</h1>
            </div>
            <p class="mt-0.5 text-sm text-gray-500">Versand wird an der Kasse berechnet.</p>
            <div class="mt-6">
                <button
                    class=" btn_check flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                    @click="goToStripe()">Checkout</button>
            </div>
            <RouterLink :to="{ name: 'catalog' }">
                <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p> or
                        <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">
                            Continue Shopping <span aria-hidden="true"> →</span></button>
                    </p>
                </div>
            </RouterLink>

            
        </div>
        <div>
                <transition name="fade">
                    <div v-if="showPopup"
                        class="popup-overlay flex justify-between text-red-200 shadow-inner rounded p-3 bg-red-600 mt-5  ">
                        <p class="self-center"><strong>Moment.. </strong>Erstmal etwas in Korb legen</p>
                        <button @click="showPopup = false"><strong
                                class="text-xl align-center cursor-pointer alert-del">&times;</strong></button>
                    </div>
                </transition>
            </div>
    </div>
    
</template>


<script>
import CartItem from './CartItem.vue';
import { mapActions } from 'vuex';

export default {
    name: 'CartComponent',
    components: { CartItem },
    props: {
        cartData: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
            showPopup: false,
            cart: [],
        }
    },
    computed: {

        cartTotalCoast() {
            let result = [];

            if (this.cartData.length) {
                for (let item of this.cartData) {
                    result.push(item.product.PreisNetto * item.count);
                }

                result = result.reduce(function (sum, el) {
                    return sum + el
                })
            }
            else result = 0;
            return result;
        }

    },
    methods: {
        ...mapActions([
            'DELETE_FROM_CART',
            'INCREASE_ITEM',
            'DECREASE_ITEM'
        ]),
        goToStripe() {
            const cart = this.cartData.reduce(
                function (newArr, item) {
                    newArr.push(item.product.Produkttitel);
                    newArr.push(item.count);
                    newArr.push(parseFloat(item.product.PreisNetto) * 100);
                    newArr.push(item.product.ProduktID);
                    return newArr;
                }, []
            );
            const postTo = JSON.stringify(cart);
            if (cart.length)
                window.open(
                    "https://ivm108.informatik.htw-dresden.de/ewa/g10/praktikum_ewa/php/__STRIPE_DEMOS_2022/stripe.php?array=" +
                    postTo, "_self"
                );
            else this.showPopup = true

        },
        deleteFromCart(index) {
            this.DELETE_FROM_CART(index);
        },
        increment(index) {
            this.INCREASE_ITEM(index);
        },
        decrement(index) {
            this.DECREASE_ITEM(index);
        }
    },
    watch: {},
    mounted() {
        console.log("cart component mounted..");
    }

}
</script>

<style lang="scss">
.btn_check {
    width: 400px;
    margin: 0 auto;
}

.flow-root {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
    align-content: center;
}

.subtotal {
    // display: flex;
    // flex-direction: column;
    // align-content: center;
    // /* align-items: center; */
    // /* justify-content: center; */
    // flex-wrap: nowrap;
    font-size: 1.7rem;
    margin: 3rem 27rem;
}

.cartcomponent {
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-around;
    align-items: center;

    &__total {
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        padding: $padding;
        display: flex;
        justify-content: center;
        background-color: rgb(3, 87, 59);
        color: azure;

    }

    .cartcomponent__totalText {
        margin: $margin;
        font-size: 20px;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }

}
</style>    