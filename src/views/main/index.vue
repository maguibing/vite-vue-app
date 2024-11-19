<template>
  <div class="main" :class="classAttribute">
    Hello world !

    <button @click="handleRes">
      操作
    </button>
  </div>
</template>

<script setup>
import { watchEffect } from 'vue'

const classAttribute = {
  lazy: true,
}
</script>

<style lang="scss" scoped></style>
