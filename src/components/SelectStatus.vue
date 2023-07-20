<template>
  <div class="input-field">
    <select @change="enviaStatus" ref="seleccionado" class="block w-40 py-2 px-3 border border-gray-300 bg-white rounded-lg shadow-sm focus:outline-none focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50 transition text-gray-800">
      <option v-for="elemento in elementos" :key="elemento.value" :value="elemento.value">{{ elemento.text }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "SelectStatus",
  data: () => ({
    elementos: [
      {
        value: 0,
        text: 'Seleccionar...',
      },
      {
        value: "alive",
        text: 'Alive',
      },
      {
        value: "dead",
        text: 'Dead',
      },
      {
        value: "unknown",
        text: 'Unknown',
      },
    ],
  }),
  emits: ['enviarStatus'],
  methods: {
    enviaStatus() {
      this.status = this.$refs.seleccionado.value;
      this.$emit("enviarStatus", this.status);
    },
  },
};
</script>

<style>
/* Additional custom styles */
.input-field select {
  font-size: 16px;
  color: #4a5568;
  appearance: none;
  padding-right: 2.5rem;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-position: right 0.75rem center;
  background-repeat: no-repeat;
  background-size: 12px;
  /* Added styles for better visibility */
  width: 10rem;
  padding-left: 1rem;
  border-radius: 9999px;
  border-color: #f9735b;
  background-color: #ffffff;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1);
}

.input-field select:focus {
  border-color: #f9735b;
  outline: none;
  box-shadow: 0 0 0 3px rgba(249, 115, 91, 0.25);
}
</style>
