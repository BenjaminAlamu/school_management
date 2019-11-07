<template>
<body class="font-sans leading-normal tracking-normal">
  <div class="flex flex-wrap">
    <!-- Main Content
    <div class="w-full md:w-4/5">
      <div class="container pt-16 px-6"></div>
    </div>-->

    <!--Sidebar-->
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
            <a href="#" class="block py-1 md:py-3 pl-1 align-middle text-white no-underline">
              <span class="text-xs md:text-base text-white block md:inline-block">Home</span>
            </a>
          </li>
          <li class="mr-3 flex-1">
            <a href="#" class="block py-1 md:py-3 pl-1 align-middle text-white no-underline">
              <span class="text-xs md:text-base text-white block md:inline-block">Students</span>
            </a>
          </li>

          <li class="mr-3 flex-1">
            <a href="#" class="block py-1 md:py-3 pl-1 align-middle text-white no-underline">
              <span class="text-xs md:text-base text-white block md:inline-block">Courses</span>
            </a>
          </li>

          <li class="mr-3 flex-1">
            <a href="#" class="block py-1 md:py-3 pl-1 align-middle text-white no-underline">
              <span class="text-xs md:text-base text-white block md:inline-block">Lecturers</span>
            </a>
          </li>

                    <li class="mr-3 flex-1">
            <a href="#" class="block py-1 md:py-3 pl-1 align-middle text-white no-underline">
              <span class="text-xs md:text-base text-white block md:inline-block">Annoucements</span>
            </a>
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