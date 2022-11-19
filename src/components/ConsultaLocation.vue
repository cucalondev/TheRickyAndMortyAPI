<template>
        <ol>
        <li v-for="el of localidades" v-bind:key="el.id">
          {{el.name}}
        </li>
      </ol>
      <button @click="siguientePagina(pagina),conseguirLocalidades(pagina)">Siguiente</button>
      <button @click="atrasPagina(pagina),conseguirLocalidades(pagina)">Atras</button>
      <br>
</template>
<script>
import axios from "axios";
export default {
data() {
return {
localidades:[],
residentes:[],
pagina:0
    };
},
mounted(){
this.conseguirLocalidades(1)
},
methods:{
  conseguirLocalidades(page){
      axios
      .get(`https://rickandmortyapi.com/api/location?page=${page}`)
        .then((localidades) => {
          console.log(localidades);
          this.localidades=localidades.data.results;
        })
        .catch((e) => console.log(e))
        .finally(() => this.loading = false);
    },
    siguientePagina(page){
      this.pagina=page+1;
    },
    atrasPagina(page){
      this.pagina=page-1;
    }
    },
}
</script>
