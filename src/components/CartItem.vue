<template>
    <div class="cartitem">
        <img class="cartitem__image" :src=cartItemData.product.LinkGrafik>
         <div class="cartitem__info">
            <p>{{ cartItemData.product.Produkttitel }}</p>
            <p>{{  cartItemData.product.PreisNetto }}</p>
            <p>{{  cartItemData.count}}</p>
         </div>
         <div class="cartitem_qnt"></div>
         <button @click="deleteFromCart">Delete</button>
    </div>
</template>

<script>
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
    }
</style>