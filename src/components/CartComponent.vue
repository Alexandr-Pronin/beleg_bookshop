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
                <a href="#"
                    class=" btn_check flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
            </div>
            <RouterLink :to="{ name: 'catalog' }">
                <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p> or
                        <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">
                            Continue Shopping <span aria-hidden="true"> →</span></button>
                    </p>
                </div>
            </RouterLink>

            <!-- ---teilwind -->
            <button type="button"
                class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 mr-2 mb-2">
                <svg aria-hidden="true" class="mr-2 -ml-1 w-10 h-3" viewBox="0 0 660 203" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M233.003 199.762L266.362 4.002H319.72L286.336 199.762H233.003V199.762ZM479.113 8.222C468.544 4.256 451.978 0 431.292 0C378.566 0 341.429 26.551 341.111 64.604C340.814 92.733 367.626 108.426 387.865 117.789C408.636 127.387 415.617 133.505 415.517 142.072C415.384 155.195 398.931 161.187 383.593 161.187C362.238 161.187 350.892 158.22 333.368 150.914L326.49 147.803L319.003 191.625C331.466 197.092 354.511 201.824 378.441 202.07C434.531 202.07 470.943 175.822 471.357 135.185C471.556 112.915 457.341 95.97 426.556 81.997C407.906 72.941 396.484 66.898 396.605 57.728C396.605 49.591 406.273 40.89 427.165 40.89C444.611 40.619 457.253 44.424 467.101 48.39L471.882 50.649L479.113 8.222V8.222ZM616.423 3.99899H575.193C562.421 3.99899 552.861 7.485 547.253 20.233L468.008 199.633H524.039C524.039 199.633 533.198 175.512 535.27 170.215C541.393 170.215 595.825 170.299 603.606 170.299C605.202 177.153 610.098 199.633 610.098 199.633H659.61L616.423 3.993V3.99899ZM551.006 130.409C555.42 119.13 572.266 75.685 572.266 75.685C571.952 76.206 576.647 64.351 579.34 57.001L582.946 73.879C582.946 73.879 593.163 120.608 595.299 130.406H551.006V130.409V130.409ZM187.706 3.99899L135.467 137.499L129.902 110.37C120.176 79.096 89.8774 45.213 56.0044 28.25L103.771 199.45L160.226 199.387L244.23 3.99699L187.706 3.996"
                        fill="#0E4595" />
                    <path
                        d="M86.723 3.99219H0.682003L0 8.06519C66.939 24.2692 111.23 63.4282 129.62 110.485L110.911 20.5252C107.682 8.12918 98.314 4.42918 86.725 3.99718"
                        fill="#F2AE14" />
                </svg>
                Pay with Visa
            </button>
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
    max-width: 400px;
    margin: 0 auto;
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

}
</style>    