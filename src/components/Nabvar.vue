<template>
    <nav class="bg-blue-600 text-white py-4 px-8">
      <div class="container mx-auto flex justify-between items-center">
        <span class="text-xl font-bold">
          Rick and Morty <span class="text-blue-400">Wiki</span>
        </span>
        <!-- Right-aligned "Characters" router link -->
        <router-link to="/"  class="text-lg font-semibold ml-auto"
        exact-active-class="underline-white">
          Characters
        </router-link>
        
      </div>
    </nav>
  </template>
  
<style>
.underline-white {
  position: relative;
}

.underline-white::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #fff;
  opacity: 1;
}
</style>