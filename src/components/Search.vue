<template>
  <div class="w-full sm:max-w-md p-5 mx-auto">
    <div class="relative">
      <div class="flex items-center border border-gray-300 focus-within:border-blue-500 focus-within:ring focus-within:ring-blue-200 focus-within:ring-opacity-50 rounded-lg shadow-sm">
        <input
          :value="nameCharacter"
          id="personaje"
          @input="updateProp('nameCharacter', $event)"
          type="text"
          name="personaje"
          class="py-3 px-4 focus:outline-none focus:ring-0 rounded-lg disabled:bg-gray-100 flex-1 pl-12 text-lg"
          placeholder="Search for characters"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    nameCharacter: {
    type: String,
    required: true,
  },
});

const emit = defineEmits();

const updateProp = (prop, { target: { value } }) => {
  emit(`update:${prop}`, value);
};
</script>
