<template>
    <div class="CatalogItem">
    <img class="CatalogItem__image" :src=productData.LinkGrafik>
    <p class="CatalogItem__name">{{ productData.Produkttitel }}</p>
    <p class="CatalogItem__price">{{ productData.PreisNetto }} Euro</p>
    <button class="CatalogItem__add btn" @click="addToCart">Add to Cart</button>
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
        flex-basis: 25%; //max 25% breite
        box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.329);
        padding: $padding;
        margin-bottom: $margin;
        &__image{
            width: 100px;
        }

    }
    </style>