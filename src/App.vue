<template>
  <div id="app">
   <Wrap/>
  </div>
</template>

<script>


import Wrap from './components/MainWrapper.vue';

export default {
  name: 'App',
  components: {
    Wrap
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 75px;
  background-color: transparent;
}
</style>
