import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'


Vue.use(Vuex);


let store = new Vuex.Store({

    state: {
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
    },

    actions: {
        GET_PRODUCTS_FROM_API_PHP({ commit }) {
            console.log("GET_PRODUCTS_FROM_API_PHP Start");
            return fetch("https://iws107.informatik.htw-dresden.de/ewa/g11/PHP/beleg_fetch.php")
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
        INCREASE(index) {
            this.products[index].quantity++;
        },
        DECREASE(index) {
            if (this.products[index].quantity > 0)
                this.products[index].quantity--;
        },
        ADD_TO_CART({ commit }, product) {
            console.log("set cart");
            commit('SET_CART', product);
        },
        DELETE_FROM_CART({ commit }, index) {
            commit('REMOVE_FROM_CART', index);
        }

    },

    getters: {
        PRODUCTS(state) {
            return state.products;
        },
        CART(state) {
            return state.cart;
        }
    },

});

export default store;
