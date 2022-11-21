<template>
    <Buscador v-model:valor="name" />
        Status:<SelectStatus @enviarStatus="statusRecibido"/>
        <button @click="infoPersonaje(name),infoPersonaje(name,status),mostrar=false">Buscar</button><br><br>
        <div v-if="pagina<42">
        <button @click="siguientePagina(pagina),conseguirTodos(pagina),mostrar=true">Siguiente</button>
      </div>
        <div v-if="pagina>1">
        <button @click="anteriorPagina(pagina),conseguirTodos(pagina),mostrar=true">Anterior</button>
      </div>
      Usted se encuentra en la página:{{pagina}}<br><br>
        <div v-if="mostrar">
    <Personaje :personajeSelected="personajes"/>
    </div>
    <div v-else>
          <Personaje :personajeSelected="personajeSelected"/>
    </div>
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
status:"",
pagina:0,
mostrar:false
    };
},
mounted(){
  this.conseguirTodos(1);
  this.mostrar=true;
  this.pagina=1;
},
components:{
    Buscador,
    Personaje,
    SelectStatus,
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
    infoPersonaje(name){
      axios
      .get(`https://rickandmortyapi.com/api/character/?name=${name}`)
        .then((personaje) => {
          console.log(personaje);
          this.personajeSelected=personaje.data.results;
        })
        .catch((e) => console.log(e))
        .finally(() => this.loading = false);
    },
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
      
    },
    siguientePagina(pagina){
      this.pagina+=1;
    },
    anteriorPagina(pagina){
      this.pagina-=1;
    },
},
computed: {
     personajesFilter: function() {
      let texto = this.name;
       return this.personajes.filter(function(el) {
         return el.name.toLowerCase().indexOf(texto.toLowerCase()) !== -1;
       });
      }
    }}
</script>
