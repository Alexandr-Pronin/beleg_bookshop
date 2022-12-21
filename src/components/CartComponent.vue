<template>
    <div class="CartComponent" v-if="cart.length">
        <h1>Cart</h1>
        <CartItem/>
    </div>
</template>

<script>
import CartItem from './CartItem.vue';

export default {
    name: 'CartComponent',
    components: { CartItem },
    props: {},
    data() {
        return {
           cart:[],
        }
    },
    computed: {

    },
    methods: {},
    watch: {},
    mounted() {
        console.log("cart..");
    }

}
</script>

<style >

</style>    