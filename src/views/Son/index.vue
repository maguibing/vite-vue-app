<template>
  <div class="son" v-bind="calssAttribute">
    SI
  </div>
</template>

<script setup>
defineOptions({ name: 'Son' })

const calssAttribute = {
  id: 'container',
  class: 'wrapper',
  style: 'background-color:green',
}
</script>

<style lang="scss" scoped>

</style>
