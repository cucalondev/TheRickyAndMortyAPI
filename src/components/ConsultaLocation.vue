<template>
        <ol>
        <li v-for="el of localidades" v-bind:key="el.id">
          {{el.name}} 
          <ol>
            <li v-for="p of el.residents" v-bind:key="p.id">
              {{conseguirPersonaje(p)}}
            </li>
          </ol>
          </li>
      </ol>
      <label>Residentes</label>
      <ol>
        <li v-for="el of residentes" v-bind:key="el.id">
           <p>Hola</p>
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
          this.localidades=localidades.data.results;
        })
        .catch((e) => console.log(e))
        .finally(() => this.loading = false);
    },
    conseguirPersonaje(personaje){
      axios
      .get(personaje)
        .then((personaje) => {
          console.log(personaje);
          this.residentes=personaje.data.results;
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
