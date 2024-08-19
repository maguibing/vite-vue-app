<template>
  <div @click="router.push('/main')">
    Login
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<style lang="scss" scoped>

</style>
