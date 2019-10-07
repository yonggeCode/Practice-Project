<template>
  <div id="app">
    <router-link class="a" to="/layout">layout</router-link>
    <router-link class="a" to="/container">container</router-link>
    <router-link class="a" to="/button">button</router-link>
    <router-link class="a" to="/link">link</router-link>
    <router-view class="main"></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  },
};
</script>

<style lang="scss" scoped>
 #app{
   .a{
     text-decoration: none;
     display: inline-block;
     padding: 4px 8px;
     border:1px solid transparent;
     border-radius: 4px;
     &:hover{
       background: #e5e5e5;
       border-color: #dfdfdf;
       box-shadow: inset 0 0 0px 2px rgba(0, 0, 0, 0.1);
     }
   }
   .main{
     margin-top:50px;
   }
 } 
</style>
