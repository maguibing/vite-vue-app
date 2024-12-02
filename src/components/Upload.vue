<template>
  <div class="uplaod" />
</template>

<script setup>
defineOptions({ name: 'Upload' })

/**
 * 大文件上传：
 * 1、先切片，一片分成几兆几兆，然后分片上传，最后在合并
 * 2、断点续传：
 *  先选择文件，在分片上传，多一步向服务端检查是否已经存在
 *
 *
 */
</script>

<style lang="scss" scoped></style>
