<template>
    <div v-if="pagina<3">
    <button @click="siguiente(),conseguirEpisodios(pagina)">Siguiente</button>
    </div>
    <div v-if="pagina>0">
    <button @click="anterior(),conseguirEpisodios(pagina)">Anterior</button>
</div>

        <item-episodio v-for="el of episodios" :episode="el" v-bind:key="el.id"></item-episodio>
</template>
<script>
import axios from "axios";
import ItemEpisodio from "./ItemEpisodio.vue";
export default {
    name:"ConsultaEpisode",
    data(){
        return{
            pagina:0,
            episodios:[],
            personajes:[]
        }
    },
    components: {
        ItemEpisodio
    },
    mounted(){
        this.conseguirEpisodios(1);
    },
    methods:{
    conseguirEpisodios(page){
      axios
      .get(`https://rickandmortyapi.com/api/episode?page=${page}`)
        .then((episodios) => {
          this.episodios=episodios.data.results;
        })
        .catch((e) => console.log(e))
        .finally(() => this.loading = false);
    },
    siguiente(){
        this.pagina+=1;
    },
    anterior(){
        this.pagina-=1;
    },
    }
}

</script>