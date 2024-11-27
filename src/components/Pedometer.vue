<template>
  <div>
    <button @click="numer++">
      +
    </button>
    <input v-model="calcNs" type="number">
    <button @click="numer--">
      -
    </button>
  </div>
</template>

<script setup>
import { computed, defineModel } from 'vue'

defineOptions({ name: 'Pedometer' })

const numer = defineModel()
const calcNs = computed({
  get: () => numer.value,
  set: value => numer.value = value,
})
</script>
