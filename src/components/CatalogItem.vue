<template>
    <div class="CatalogItem">
    <img class="CatalogItem__image" :src=productData.LinkGrafik>
    <p class="CatalogItem__name">{{ productData.Produkttitel }}</p>
    <p class="CatalogItem__price">{{ productData.PreisNetto }} Euro</p>
    <p class="CatalogItem__price"> Lagerbestand: {{ productData.Lagerbestand>0 ? productData.Lagerbestand :  'Ausferkauft' }}</p>
    <button :class=" { disabledButton: isButtonDisabled , btn: !isButtonDisabled}" @click="addToCart" v-bind:disabled="isButtonDisabled" >Add to Cart</button>
    </div>
    </template>
     
    <script>
        export default {
        name: 'CatalogItem',    
        components: {},
        props: {
            productData:{
                type: Object,
                default(){
                    return {}
                }
            }
        },
        data() {
            return {
                title: 'Main Wrapper'
            }
        },
        computed:{
            isButtonDisabled: function () {
                if( this.productData.Lagerbestand > 0)
                return false;
                else return true;
            },
        },
        methods:{
            // sendDataToParent(){
            //     this.$emit('addToCart', this.productData);
            // }
            addToCart(){
                this.$emit('addToCart', this.productData);
            }
        },
        watch:{},
        mounted(){
            console.log("jo geht..");
        }
            
        }
    </script>
    
    <style lang="scss">
    .CatalogItem{
        flex-basis: 20%; //max 25% breite
        display: flex;
        flex-direction: column;
        box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.329);
        padding: $padding;
        margin-bottom: $margin;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        margin-right: 40px;
        background: white;
        &__image{
            width: 100%;
        }

    }
    .btn{
    padding: $padding 16px;
    background: #ce3232;
    color: beige;
    border:0;
    border-radius: $radius;
    }

    .disabledButton{
        padding: $padding 16px;
        background: rgb(172, 172, 172);
        color: rgb(253, 253, 253);
        border:0;
        border-radius: $radius;
    }

    </style>