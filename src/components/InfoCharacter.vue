<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    <div v-for="el of personajeSelected" :key="el.id" class="rounded-lg shadow-md border border-blue-500 hover:shadow-lg transition duration-300">
      <div class="relative">
        <img class="w-full h-64 object-cover rounded-t-lg" :src="el.image" :alt="el.name" />
        <div class="absolute inset-0 bg-black opacity-50 rounded-t-lg"></div>
        <div class="absolute top-4 right-4">
          <span
            :class="{
              'text-white bg-red-500': el.status === 'Dead',
              'text-white bg-green-500': el.status === 'Alive',
              'text-white bg-blue-500': el.status === 'unknown',
            }"
            class="px-2 py-1 rounded-md shadow-md"
          >
            {{ el.status }}
          </span>
        </div>
      </div>
      <div class="p-4">
        <h3 class="mb-2 text-xl font-semibold text-blue-800">{{ el.name }}</h3>
        <p class="mb-2 text-sm text-gray-600">Last Location:</p>
        <p class="text-sm text-gray-800">{{ el.location.name }}</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Personaje",
  props: {
    personajeSelected: {
      type: Object,
    },
  },
};
</script>
