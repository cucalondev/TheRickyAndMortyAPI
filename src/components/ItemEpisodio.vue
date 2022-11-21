<template>
    <p>{{episode.name}}</p>
    <button @click="getPersonajes">
        ver personajes
    </button>
    <div v-if="show">
        <div v-for="el of personajes" v-bind:key="el.id">
            {{el.name}}
            <img :src="el.image"/>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "ItemEpisode",
    props: {
        episode: {
            type: Object
        }
    },
    data() {
        return {
            show: false,
            personajes: []
        }
    },
    methods: {
        getPersonajes(){
            const promises = this.episode.characters.map(x => axios.get(x))
            Promise.allSettled(promises).then(res => {
                this.personajes = res.map(x => x.value.data)
                this.show=true
            })
        }
    }
}
</script>