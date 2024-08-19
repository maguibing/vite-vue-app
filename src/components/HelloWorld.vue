<template>
  <div>
    {{ msg }}
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {

  setup() {
    const state = reactive({
      msg: 'Hello World !',
    })

    return {
      ...toRefs(state),
    }
  },
}
</script>

<style lang="scss" scoped></style>
