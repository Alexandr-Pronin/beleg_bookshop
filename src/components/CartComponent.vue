<template>
    <div class="CartComponent">
        <h1>Cart</h1>
        <CartItem
        v-for="(item,index) in cartData"
        :key="item.product.ProduktID"
        :cart-item-data="item"
        @deleteFromCart="deleteFromCart(index)"/>
    </div>
</template>

<script>
import CartItem from './CartItem.vue';
import { mapActions } from 'vuex';

export default {
    name: 'CartComponent',
    components: { CartItem },
    props: {
        cartData:{
            type: Array,
            default(){
                return []
            }
        }
    },
    data() {
        return {
           cart:[],
        }
    },
    computed: {

    },
    methods: {
        ...mapActions(['DELETE_FROM_CART']),
        deleteFromCart(index){
            this.DELETE_FROM_CART(index);
        }
    },
    watch: {},
    mounted() {
        console.log("cart component mounted..");
    }

}
</script>

<style >

</style>    