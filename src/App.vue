<template>
    <h2 class="mb-12 text-center text-5xl font-extrabold">The Rick and Morty</h2>
    <button @click="showPersonajes = !showPersonajes">Personajes</button>
    <button @click="showLocalidades = !showLocalidades">Localidades</button>
    <button @click="showEpisodios = !showEpisodios">Episodios</button>
  <div v-if="showPersonajes ">
    {{ocultarLocalidades()}}
    {{ocultarEpisodios()}}
  <ConsultaPersonaje/>
  </div>
  <div v-if="showLocalidades">
    {{ocultarPersonajes()}}
    {{ocultarEpisodios()}}
  <ConsultaLocation/>
</div>
<div v-if="showEpisodios">
  {{ocultarLocalidades()}}
  {{ocultarPersonajes()}}
  <ConsultaEpisode/>
</div>
</template>
<script>
import ConsultaPersonaje from "./components/ConsultaPersonaje.vue";
import ConsultaLocation from "./components/ConsultaLocation.vue";
import ConsultaEpisode from "./components/ConsultaEpisode.vue";
export default {
  data(){
    return{
      showPersonajes:false,
      showLocalidades:false,
      showEpisodios:false
    }
  },
  components:{
    ConsultaPersonaje,
    ConsultaLocation,
    ConsultaEpisode,
  },
  methods:{
    ocultarPersonajes(){
      console.log('ocultando');
      this.showPersonajes=false;
    },
    ocultarLocalidades(){
      this.showLocalidades=false;
    },
    ocultarEpisodios(){
      this.showEpisodios=false;
    }
  }
}
</script>
<style>
</style>