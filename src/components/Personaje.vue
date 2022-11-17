<template>
    <ul>
        <li v-for="el of personajeSelected" v-bind:key="el.id">
             {{el.name}}
             <img :src="el.image">
             {{el.status}}
        </li>
    </ul>
</template>
<script>
export default {
    name:"Personaje",
    props:{
        personajeSelected:{
            type:Object,
        }
    }
}
</script>