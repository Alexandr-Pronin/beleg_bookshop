<template>
    <div class="cartitem">
        <img class="cartitem__image" :src=cartItemData.product.LinkGrafik>
         <div class="cartitem__info">
            <p>{{ cartItemData.product.Produkttitel }}</p>
            <p>{{  cartItemData.product.PreisNetto }}</p>
         </div>
         <div class="cartitem_qnt">
            <span>
                <span class="qnt__button" @click="decrement">-</span>
                <p>{{  cartItemData.count}}</p>
                <span class="qnt__button" @click="increment">+</span>
            </span>
         </div>
         <button @click="deleteFromCart">Delete</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'


    export default {
        name: 'CartItem',    
        components: {},
        props: {

            cartItemData:{
                type:Object,
                default(){
                    return {}
                }
            }
        },
        data() {
            return {
                title: 'Cartitem'
            }
        },
        computed:{
    
        },
        methods:{
 
            deleteFromCart(){
                this.$emit('deleteFromCart')
            },
            increment(){
                this.$emit('increment');
            },
            decrement(){
                this.$emit('decrement');
            }
        },
        watch:{},
        mounted(){
            console.log("Cartitem..");
        }
            
        
    }
</script>

<style lang="scss" >
    .cartitem{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: nowrap;
        box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.329);
        padding: $padding;
        margin-bottom: $margin;
        &__image{
            max-width: 50px;
        }

        .qnt__button{
            cursor: pointer;
        }
    }
</style>