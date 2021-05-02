<template>
  <div class="app">
    <!-- <AppHeader></AppHeader> -->
    <div class="app-contents">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import AppHeader from '@/components/common/AppHeader.vue';
export default {
  components: {
    // AppHeader,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
@import './css/reset.css';
@import './css/common.css';
</style>
