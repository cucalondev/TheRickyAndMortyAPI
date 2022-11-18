<template>
    <Buscador v-model:valor="name" />
        Status:<SelectStatus @enviarStatus="statusRecibido"/>
        Pagina:<SelectPage @enviarPagina="paginaRecibida"/>
        <button @click="conseguirTodos(pagina)">Conseguir todos</button>
      <button @click="infoPersonaje(name,status)">Buscar</button>
    <Personaje :personajeSelected="personajeSelected"/>
    <Personaje :personajeSelected="personajes"/>
</template>
<script>
import axios from "axios";
import Buscador from "../components/Buscador.vue";
import Personaje from "../components/Personaje.vue";
import SelectStatus from "../components/SelectStatus.vue";
import SelectPage from "../components/SelectPage.vue";
export default {
name: "App",
data() {
return {
name:"",
personajes:[],
personajeSelected:null,
status:"",
pagina:0
    };
},
components:{
    Buscador,
    Personaje,
    SelectStatus,
    SelectPage,
    },
methods:{
  conseguirTodos(page){
      axios
      .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
        .then((personajes) => {
          this.personajes=personajes.data.results;
        })
        .catch((e) => console.log(e))
        .finally(() => this.loading = false);
    },
    infoPersonaje(name,status){
      axios
      .get(`https://rickandmortyapi.com/api/character/?name=${name}&status=${status}`)
        .then((personaje) => {
          this.personajeSelected=personaje.data.results;
        })
        .catch((e) => console.log(e))
        .finally(() => this.loading = false);
    },
    statusRecibido(data){
      this.status=data;
      
    },
    paginaRecibida(data){
      this.pagina=data;
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
