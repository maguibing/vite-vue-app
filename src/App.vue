<script setup>
import { dateZhCN, zhCN } from 'naive-ui'
</script>

<template>
  <n-config-provider class="wh-full" :locale="zhCN" :date-locale="dateZhCN">
    <RouterView v-slot="{ Component }">
      <component :is="Component" />
    </RouterView>
  </n-config-provider>
</template>
