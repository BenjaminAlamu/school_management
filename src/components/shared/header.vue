<template>
<nav class="flex items-center justify-between flex-wrap p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <div class=" px-3 mb-6 md:mb-0">
      <input class="appearance-none block w-full bg-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none text-black" id="grid-first-name" type="text" placeholder="Jane">
    </div>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">

    </div>
    <div>
        <i class="mx-2 text-3xl fas fa-bell"></i>
        <i class="mx-2 text-3xl fas fa-user-circle"></i>
    </div>
  </div>
</nav>      
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>