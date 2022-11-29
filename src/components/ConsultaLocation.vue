<template>
  <Buscador v-model:valor="localidad"/>
  <button @click="mostrar=true">Localidades</button>
  <div v-if="mostrar">
        <ol>
        <li v-for="el of localidades" v-bind:key="el.id">
          {{el.name}} 
          </li>
        </ol>
      </div>
      <button @click="siguientePagina(pagina),conseguirLocalidades(pagina)">Siguiente</button>
      <button @click="atrasPagina(pagina),conseguirLocalidades(pagina)">Atras</button>
        <button @click="conseguirResidentes(localidad,pagina),mostrar=false">Residentes</button>
      <div v-if="!mostrar">
        <ol>
          <li v-for="el of residentes" v-bind:key="el.id">
            {{el.name}}
            Localidad:{{el.location.name}}
          </li>
        </ol>
      </div>
      <br>
</template>
<script>
import axios from "axios";
import Buscador from "../components/Buscador.vue";
export default {
data() {
return {
localidades:[],
localidad:"",
residentes:[],
pagina:0,
mostrar:false
    };
},
mounted(){
this.conseguirLocalidades(1)
},
components:{
  Buscador,
},
methods:{
  conseguirLocalidades(page){
      axios
      .get(`https://rickandmortyapi.com/api/location?page=${page}`)
        .then((localidades) => {
          this.localidades=localidades.data.results;
        })
        .catch((e) => console.log(e))
        .finally(() => this.loading = false);
    },
    conseguirResidentes(location,page){
      axios
      .get(`https://rickandmortyapi.com/api/character/?location=${location}&page=${page}`)
        .then((personaje) => {
          this.residentes=personaje.data.results;
          console.log(this.residentes);
        })
        .catch((e) => console.log(e))
        .finally(() => this.loading = false);
    },

    siguientePagina(page){
      this.pagina=page+1;
    },
    atrasPagina(page){
      this.pagina=page-1;
    },
    añadirResidentes(residentes){
      this.residentes=residentes;
    }
    },
}
</script>
