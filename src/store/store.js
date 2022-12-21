import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'


Vue.use(Vuex);


let store = new Vuex.Store({
    state:{
        products:[]
    },
    mutations:{
        SET_PRODUCTS_TO_STATE:(state, products) => {
            state.products=products;
            console.log("setState:",state.products);
        }
    },
    actions:{
        GET_PRODUCTS_FROM_API_PHP({commit}){
            console.log("GET_PRODUCTS_FROM_API_PHP Start");
            return  fetch("https://iws107.informatik.htw-dresden.de/ewa/g11/PHP/beleg_fetch.php")
            .then(response => response.json())
            .then((products)=>{
                  commit('SET_PRODUCTS_TO_STATE', products);
            }) 
            // axios( '', {
            //     method:"GET"
            // }).then((products)=>{
            //     commit('SET_PRODUCTS_TO_STATE', products);
                
            //     return products;
            // }).catch((error)=>{console.log(error)}); 
        }
    },
    getters:{
        PRODUCTS(state){
            return state.products;
        }
    }, 

});

export default store;
