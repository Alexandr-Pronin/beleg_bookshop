import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import { createStore } from 'vuex'


Vue.use(Vuex);

let store = new Vuex.Store({
    state:{
        products:[]
    },
    mutations:{
        SET_PRODUCTS_TO_STATE:(state, products) => {
            state.prodcts=products;
        }
    },
    actions:{
        GET_PRODUCTS_FROM_API_PHP({commit}){
            console.log("GET_PRODUCTS_FROM_API_PHP Start");
            return  axios( 'https://iws107.informatik.htw-dresden.de/ewa/g11/PHP/beleg_fetch.php', {
                method:"GET"
            }).then((products)=>{
                commit('SET_PRODUCTS_TO_STATE', products);
                console.log("GET_PRODUCTS_FROM_API_PHP:",products);
                return products;
            }).catch((error)=>{console.log(error)}); 
        }
    },
    getters:{
        PRODUCTS(state){
            return state.products;
        }
    }, 

});

export default store;