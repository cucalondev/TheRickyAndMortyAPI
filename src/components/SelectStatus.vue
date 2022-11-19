<template>
    <div class="input-field">
    <select @click="enviaStatus" ref="seleccionado">
        <option v-for="elemento in elementos" v-bind:key="elemento.otrasPropiedades">{{elemento.text}}</option>
    </select>
    </div>
</template>
<script>
export default {
    name:"SelectStatus",
    data:()=>{
        return{
        elementos: [{
        value: 0,
        text: 'Seleccionar status...'
      },
      {
        value: "alive",
        text: 'Alive'
      },
      {
        value: "dead",
        text: 'Dead'
      },
      {
      value: "unknow",
        text: 'Unknow'
      },
    ]}},
    emits:['enviarStatus'],
    methods:{
        enviaStatus(){
            this.status = this.$refs.seleccionado.value;
            this.$emit("enviarStatus",this.status);
        }
    }
    }
</script>