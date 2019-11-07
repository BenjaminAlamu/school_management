<template>
  <div>
    <SideBar></SideBar>
    <div class="flex">
      <div class="invisible md:visible md:w-1/5"></div>
      <div class="w-full md:w-4/5">
        <Header />
        <div class="flex">
          <router-view class="w-full md:w-4/5"></router-view>
          <Announcements class="w-full md:w-1/5"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/lecturers/Sidebar.vue";
import Header from "@/components/shared/header.vue";
import Announcements from "@/components/shared/announcements.vue";
export default {
  components: {
    SideBar,
    Header,
    Announcements
  }
};
</script>

<style scoped>
</style>