<template>
<body class="font-sans leading-normal tracking-normal">
  <div class="flex flex-wrap">
    <div
      class="w-full md:w-1/5 my-sidebar px-2 text-center fixed pin-b md:pt-8 md:pin-t md:pin-l h-16 md:h-screen"
    >
      <div class="md:relative mx-auto lg:px-6">
        <img
          class="md:mb-12 md:ml-5"
          src="https://res.cloudinary.com/dldd8ucby/image/upload/v1573082401/502_logo.png"
        />
        <ul class="list-reset flex flex-row md:flex-col text-center md:text-left">
          <li class="mr-3 flex-1">
            <router-link to="#" class="block py-1 md:py-3 pl-1 align-middle text-white no-underline cursor-pointer hover:underline">
              <span class="text-xs md:text-base text-white block md:inline-block">Home</span>
            </router-link>
          </li>
          <li class="mr-3 flex-1">
            <router-link to="/admin/students" class="block py-1 md:py-3 pl-1 align-middle text-white no-underline cursor-pointer hover:underline">
              <span class="text-xs md:text-base text-white block md:inline-block">Students</span>
            </router-link>
          </li>

          <li class="mr-3 flex-1">
            <router-link to="/admin/courses" class="block py-1 md:py-3 pl-1 align-middle text-white no-underline cursor-pointer hover:underline">
              <span class="text-xs md:text-base text-white block md:inline-block">Courses</span>
            </router-link>
          </li>

          <li class="mr-3 flex-1">
            <router-link to="/admin/lecturers" class="block py-1 md:py-3 pl-1 align-middle text-white no-underline cursor-pointer hover:underline">
              <span class="text-xs md:text-base text-white block md:inline-block">Lecturers</span>
            </router-link>
          </li>

        </ul>
      </div>
    </div>
  </div>
</body>
</template>

<script>
export default {};
</script>

<style scoped>
.my-sidebar {
  background-color: #4c52bc;
  font-family: "Poppins";
}
</style>