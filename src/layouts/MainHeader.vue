<template>


    <div class="mainHeader">
        <RouterLink :to="{ name: 'catalog' }">
            <img src="../assets/logo.jpg">
        </RouterLink>
        <div class="searchField">


            <!-- -----teilwind -->

            <form>
                <label for="default-search"
                    class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                    <input type="search" id="default-search"
                        class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Suchen nach Buch, Autor..." v-model="searchValue" required>
                    <button type="submit" @click="search(searchValue)"
                        class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>

            <!-- ---altecss -->
            <!-- <div>
            <input type="text"
                class="searchField__input f"
                v-model="searchValue">
            <button class="search_button">
                <i class="material-icons" @click="search(searchValue)">search</i>
            </button>
            <button class="search_button">
                <i class="material-icons" @click="search(searchValue = ' ')">X</i>
            </button> -->
        </div>

    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import { mapActions, mapGetters } from 'vuex';

export default {
    name: "MainHeader",
    props: {},
    data() {
        return {
            searchValue: ""
        };
    },
    components: {
        RouterLink

    },
    methods: {

        ...mapActions([
            'GET_SEARCH'
        ]),
        search(value) {
            this.GET_SEARCH(value);
        }
    },
    computed: {
        ...mapGetters([
            'SEARCH_VALUE'
        ])
    }
}
</script>

<style lang="scss" >
.mainHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fcf8f5;
    // padding: 16px;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;

    img {
        width: 150px;
    }

    .searchField {
        // padding: 16px;
        position: relative;
        // right: 200px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .search_button {
        margin-left: 16px;
        background: transparent;
        border: none;
    }
}
</style>