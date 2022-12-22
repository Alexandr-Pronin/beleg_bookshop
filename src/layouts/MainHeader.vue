<template>
    <div class="mainHeader">
        <img src="../assets/logo.jpg">
        <input type="text"
        class="searchField">
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" >

.mainHeader{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: aqua;
    padding: 16px;
    img{
        width: 50px;
    }
    .searchField{
        padding:16px;
        color: beige;
        background: #e7e7e7;
    }
}
</style>