<template>
  <div class="flex flex-col items-center">
    <div class="flex items-center mb-4">
      <Search v-model:nameCharacter="name" class="ml-auto mr-4" />
    </div>

    <div class="flex items-center space-x-4 mb-2">
      <button @click="anteriorPagina(); conseguirTodos(); mostrar=true" :disabled="pagina <= 1" class="px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none focus:ring focus:ring-blue-300" :class="{ 'opacity-50 cursor-not-allowed': pagina <= 1 }">Anterior</button>
      <span class="text-lg font-semibold text-gray-800">Página {{ pagina }}</span>
      <button @click="siguientePagina(); conseguirTodos(); mostrar=true" :disabled="pagina >= 42" class="px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none focus:ring focus:ring-blue-300" :class="{ 'opacity-50 cursor-not-allowed': pagina >= 42 }">Siguiente</button>
    </div>

    <div v-if="loading">
      <Loader />
    </div>
    <div v-else>
      <div class="flex flex-col md:flex-row"> <!-- Use flex container for two-column layout -->
        <div class="md:w-1/4"> <!-- First column for Status -->
          <div class="mb-2">
            <span class="text-gray-600">Status:</span>
            <SelectStatus @enviarStatus="statusRecibido" class="ml-2" />
          </div>
        </div>
        <div class="md:w-3/4"> <!-- Second column for character cards -->
          <div v-if="mostrar">
            <InfoCharacter :personajeSelected="filteredCharacters" />
          </div>
          <div v-else>
            <InfoCharacter :personajeSelected="personajeSelected" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script setup>
import axios from "axios";
import { ref, onMounted, watch } from "vue";
import Search from "../components/Search.vue";
import InfoCharacter from "../components/InfoCharacter.vue";
import SelectStatus from "../components/SelectStatus.vue";
import Loader from "../components/Loader.vue"

const name = ref('');
const characters = ref([]);
const personajeSelected = ref(null);
const status = ref('');
const pagina = ref(0);
const mostrar = ref(false);
const filteredCharacters = ref([]); 
const loading = ref(false);

onMounted(() => {
  conseguirTodos();
  mostrar.value = true;
  pagina.value = 1;
});

watch([name, status], () => {
  filterCharacters();
});

const conseguirTodos = async () => {
  loading.value = true; // Show the loader

  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${pagina.value}`);
    characters.value = response.data.results; // Update characters with the current page characters
    filterCharacters(); // Apply filtering on all characters
  } catch (error) {
    console.error(error);
  } finally {
    // Hide the loader after all data is fetched
    // But set a timeout to ensure the loader is visible for a certain duration
    setTimeout(() => {
      loading.value = false;
    }, 500); // Replace 2000 with the desired duration in milliseconds (e.g., 2000ms = 2 seconds)
  }
};


const filterCharacters = () => {
  if (status.value === '') {
    filteredCharacters.value = characters.value.filter((el) => el.name.toLowerCase().includes(name.value.toLowerCase()));
  } else {
    filteredCharacters.value = characters.value.filter(
      (el) => el.name.toLowerCase().includes(name.value.toLowerCase()) && el.status.toLowerCase() === status.value.toLowerCase()
    );
  }
};

const statusRecibido = (data) => {
  status.value = data;
  filterCharacters();
};

const siguientePagina = () => {
  pagina.value += 1;
  conseguirTodos();
  mostrar.value = true;
};

const anteriorPagina = () => {
  pagina.value -= 1;
  conseguirTodos();
  mostrar.value = true;
};
</script>