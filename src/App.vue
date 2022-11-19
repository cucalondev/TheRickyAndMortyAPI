<template>
    <h2 class="mb-12 text-center text-5xl font-extrabold">The Rick and Morty</h2>
    <button @click="showPersonajes = !showPersonajes">Personajes</button>
    <button @click="showLocalidades = !showLocalidades">Localidades</button>
  <div v-if="showPersonajes ">
    {{ocultarLocalidades()}}
  <ConsultaPersonaje/>
  </div>
  <div v-if="showLocalidades">
    {{ocultarPersonajes()}}
  <ConsultaLocation/>
</div>
</template>
<script>
import ConsultaPersonaje from "./components/ConsultaPersonaje.vue";
import ConsultaLocation from "./components/ConsultaLocation.vue";
export default {
  data(){
    return{
      showPersonajes:false,
      showLocalidades:false
    }
  },
  components:{
    ConsultaPersonaje,
    ConsultaLocation,
  },
  methods:{
    ocultarPersonajes(){
      console.log('ocultando');
      this.showPersonajes=false;
    },
    ocultarLocalidades(){
      this.showLocalidades=false;
    }
  }
}
</script>
<style>
</style>