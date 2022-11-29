<template>
    <!-- component -->
    <div class="w-full sm:max-w-md p-5 mx-auto">
    <div class="mb-4">
    <label class="block mb-1" for="personaje">Introduce el Personaje</label>
    <input
    :value="valor"
    id="personaje"
    @input="updateProp('valor', $event)"
    type="text"
    name="personaje"
    class="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
    />
    </div>
    </div>
    </template>
    
    <script>
    export default {
    name: "Entrada",
    props: {
    valor: {
    type: String,
    required: true,
    },
    },
    emits: ["update:valor"],
    data() {
    return {};
    },
    methods: {
    updateProp(prop, { target: { value } }) {
    this.$emit(`update:${prop}`, value);
    },
    },
    };
    </script>
    