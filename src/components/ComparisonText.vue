<script setup lang="ts">
  import { defineProps } from 'vue'
  defineProps({
    text: {
      type: String
    }
  })
</script>

<template>
  <div class="text">{{ text }}</div>
</template>

<style lang="scss" scoped>
  .text {
  }
</style>
