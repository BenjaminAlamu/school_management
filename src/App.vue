<template>
  <div id="app">
    <SideBar></SideBar>
    <div class="flex">
      <div class="invisible md:visible md:w-1/5"></div>
      <router-view class="w-full md:w-4/5"></router-view>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/Sidebar.vue";
export default {
  name: 'app',
  components: {
    SideBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
