<template>
    <Buscador v-model:valor="name" />
        Status:<SelectStatus @enviarStatus="statusRecibido"/>
      <button @click="infoPersonaje(name,status)">Buscar</button>
    <Personaje :personajeSelected="personajeSelected"/>
</template>
<script>
import axios from "axios";
import Buscador from "../components/Buscador.vue";
import Personaje from "../components/Personaje.vue";
import SelectStatus from "../components/SelectStatus.vue";
export default {
name: "App",
data() {
return {
name:"",
personajes:[],
personajeSelected:null,
status:""
    };
},
components:{
    Buscador,
    Personaje,
    SelectStatus
    },
methods:{
    infoPersonaje(name,status){
      axios
      .get(`https://rickandmortyapi.com/api/character/?name=${name}&status=${status}`)
        .then((personaje) => {
          console.log(personaje);
          this.personajeSelected=personaje.data.results;
        })
        .catch((e) => console.log(e))
        .finally(() => this.loading = false);
    },
    statusRecibido(data){
      this.status=data;
    }
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
