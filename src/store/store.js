import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'


Vue.use(Vuex);


let store = new Vuex.Store({

    state: {
        searchValue:'',
        products: [],
        cart: []
    },

    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
            console.log("setState:", state.products);
        },
        SET_CART: (state, product) => {



            if (product.Lagerbestand < 1) {
                /// const productIndex = state.cart.map( item => item.product.ProduktID).indexOf(product.ProduktID);
                //state.soldout = true;
                alert("ausverkauft");
                return;
            }

                if (state.cart.length) {
                    let isProduktExists = false;
                    state.cart.map(function (item) {
                        if (item.product.ProduktID === product.ProduktID) {
                            isProduktExists = true;
                            item.count++;
                            item.product.Lagerbestand--;
                        }
                    })
                    if (!isProduktExists) {
                        state.cart.push({ product, count: 1 });
                        state.cart.map(function (item) {
                            if (item.product.ProduktID === product.ProduktID)
                                item.product.Lagerbestand--;
                        })
                    }
                }
                else {
                    state.cart.push({ product, count: 1 });
                    state.cart.map(function (item) {
                        if (item.product.ProduktID === product.ProduktID)
                            item.product.Lagerbestand--;
                    })
                }
            

            /*
             if (productIndex === -1){ 
             state.cart.push({product, count:1});
              state.products[0].Lagerbestand--;
             }
             else state.cart[productIndex].count++;
            */

           // console.log(" cart count ", productIndex);
        },

        REMOVE_FROM_CART: (state, index) => {
            state.cart[index].product.Lagerbestand = state.cart[index].product.Lagerbestand + state.cart[index].count;
            state.cart.splice(index, 1);
        },

        INCREASE: (state,index)=>{
            if(state.cart[index].count <  state.cart[index].product.Lagerbestand){
                state.cart[index].count++;

                state.cart.map(function (item) {
                    if (item.product.ProduktID === state.cart[index].product.ProduktID)
                        item.product.Lagerbestand--;
                });
            }
        },

        DECREASE: (state,index)=>{
            if(state.cart[index].count > 1){
                state.cart[index].count--;
                state.cart.map(function (item) {
                    if (item.product.ProduktID === state.cart[index].product.ProduktID)
                        item.product.Lagerbestand++;
                });}
            
        },
        SET_SEARCH_VALUE:(state,value)=>{
            state.searchValue=value;
        }
    },

    actions: {
        GET_PRODUCTS_FROM_API_PHP({ commit }) {
            console.log("GET_PRODUCTS_FROM_API_PHP Start");
            return fetch("https://ivm108.informatik.htw-dresden.de/ewa/g10/praktikum_ewa/php/KatalogBeleg.php")
                .then(response => response.json())
                .then((products) => {
                    commit('SET_PRODUCTS_TO_STATE', products);
                })
            // axios( '', {
            //     method:"GET"
            // }).then((products)=>{
            //     commit('SET_PRODUCTS_TO_STATE', products);

            //     return products;
            // }).catch((error)=>{console.log(error)}); 
        },
        INCREASE_ITEM({commit},index) {
            // this.products[index].quantity++;
            commit('INCREASE',index);
        },
        DECREASE_ITEM({commit},index) {
            // if (this.products[index].quantity > 0)
            //     this.products[index].quantity--;
            commit('DECREASE',index);
        },
        ADD_TO_CART({ commit }, product) {
            commit('SET_CART', product);
        },
        DELETE_FROM_CART({ commit }, index) {
            commit('REMOVE_FROM_CART', index);
        },
        GET_SEARCH({commit},value){
            commit('SET_SEARCH_VALUE',value);
        }

    },

    getters: {
        PRODUCTS(state) {
            return state.products;
        },
        CART(state) {
            return state.cart;
        },
        SEARCH_VALUE(state){
            return state.searchValue;
        }
    },

});

export default store;
