<template>
  <div>
    <SideBar></SideBar>
    <div class="flex">
      <div class="invisible md:visible md:w-1/5"></div>
      <div class="w-full md:w-4/5">
      <Header/>
      <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/student/Sidebar.vue";
import Header from "@/components/shared/header.vue";
    export default {
        components:{
            SideBar,
            Header
        }
    }
</script>

<style scoped>

</style>