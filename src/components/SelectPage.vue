<template>
    <div class="input-field">
    <select @click="enviaPagina" ref="seleccionado">
        <option v-for="elemento in elementos" v-bind:key="elemento.otrasPropiedades">{{elemento.text}}</option>
    </select>
    </div>
</template>
<script>
export default {
    name:"SelectPage",
    data:()=>{
        return{
        elementos: [{
        value: 0,
        text: 'Seleccionar página...'
      },
      {
        value: 1,
        text: '1'
      },
      {
        value: 2,
        text: '2'
      },
    ]}},
    emits:['enviarPagina'],
    methods:{
        enviaPagina(){
            this.pagina = this.$refs.seleccionado.value;
            this.$emit("enviarPagina",this.pagina);
        }
    }
    }
</script>