<template>
    <Buscador v-model:valor="name" />
    <button @click="obtenerPersonajes()">Obtener</button>
      <button @click="infoPersonaje(name)">Info</button>
    <Personaje :personajeSelected="personajeSelected"/>
</template>
<script>
import axios from "axios";
import Buscador from "../components/Buscador.vue";
import Personaje from "../components/Personaje.vue";
export default {
name: "App",
data() {
return {
name:"",
personajes:[],
personajeSelected:null
    };
},
components:{
    Buscador,
    Personaje,
    },
methods:{
    obtenerPersonajes(){
      axios
      .get(`https://rickandmortyapi.com/api/character`)
        .then((personajes) => {
          console.log(personajes);
          this.personajes=personajes.data.results;
          this.personajeSelected=null;
        })
        .catch((e) => console.log(e))
        .finally(() => this.loading = false);
    },
    infoPersonaje(name){
      console.log(name);
      axios
      .get(`https://rickandmortyapi.com/api/character/?name=${name}&page=1`)
        .then((personaje) => {
          this.personajeSelected=personaje.data.results;
        })
        .catch((e) => console.log(e))
        .finally(() => this.loading = false);
    },
},
computed: {
     personajesFilter: function() {
      let texto = this.nombrePersonaje;
       return this.personajes.filter(function(el) {
         return el.name.toLowerCase().indexOf(texto.toLowerCase()) !== -1;
       });
      }
    }}
</script>
