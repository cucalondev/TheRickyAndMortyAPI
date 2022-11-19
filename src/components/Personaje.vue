<template>
    <div class="grid grid-cols-3 gap-40">
<div class="max-w-xl rounded-lg shadow-md lg:flex md:flex shadow-sky-600" v-for="el of personajeSelected" v-bind:key="el.id">
  <img
    class="object-cover w-full md:w-1/2 lg:w-1/3"
    :src="el.image"
    alt="image"
  />
  <div class="px-6 py-4">
    <h4 class="mb-3 text-base font-semibold tracking-tight text-sky-600">
      {{el.name}}
    </h4>
    <p class="mb-2 text-sm leading-normal text-justify text-sky-900">
      Status:{{el.status}}
    </p>
  </div>
</div>
</div>
</template>
<script>
export default {
    name:"Personaje",
    props:{
        personajeSelected:{
            type:Object,
        }
    }
}
</script>