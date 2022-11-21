<template>
    <div v-if="pagina<3">
    <button @click="siguiente(),conseguirEpisodios(pagina)">Siguiente</button>
    </div>
    <div v-if="pagina>0">
    <button @click="anterior(),conseguirEpisodios(pagina)">Anterior</button>
</div>
        <div v-for="el of episodios" v-bind:key="el.id">
            {{el.name}}<br>
            </div>
</template>
<script>
import axios from "axios";
export default {
    name:"ConsultaEpisode",
    data(){
        return{
            pagina:0,
            episodios:[],
            personajes:[]
        }
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
    añadirPersonajes(){
        this.personajes.push(personaje)
    }
    }
}

</script>