<template>
  <div class="main">
    <Pedometer v-model="count" />

    {{ count }}
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Pedometer from '@/components/Pedometer.vue'

const count = ref(1)
</script>

<style lang="scss" scoped></style>
