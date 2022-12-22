<template>
    <div class="cartComponent">


        <h1>Cart</h1>
        <RouterLink :to="{ name: 'catalog' }">
            <div class="catalogComponent__linkToCart">Zurück</div>
        </RouterLink>
        <p v-if="!cartData.length"> Dein Korb noch leer</p>
        <CartItem 
            v-for="(item, index) in cartData" 
            :key="item.product.ProduktID" :cart-item-data="item"
            @deleteFromCart="deleteFromCart(index)"
            @increment="increment(index)"
            @decrement="decrement(index)"
            />

        <div class="cartcomponent__total">
            <p class="cartcomponent__totalText">Total: </p>
            <p>{{cartTotalCoast}}</p>
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

        cartTotalCoast(){
            let result = [];

            if (this.cartData.length){
            for(let item of  this.cartData){
               result.push(item.product.PreisNetto*item.count) ;
            }

            result = result.reduce(function(sum,el){
                return sum+el
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
        increment(index){
            this.INCREASE_ITEM(index);
        },
        decrement(index){
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

.cartcomponent{
    margin-bottom: 100px;
    &__total{
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
    .cartcomponent__totalText{
    margin: $margin;
    font-size:20px ;
    }

}


</style>    