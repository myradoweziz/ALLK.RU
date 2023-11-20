<script setup lang="ts">
  import TheHeader from '@/components/header/TheHeader.vue'
  import TheFooter from '@/components/footer/TheFooter.vue'
</script>

<template>
  <div class="wrapper">
    <the-header />
    <main class="main">
      <router-view />
    </main>
    <the-footer />
  </div>
</template>

<style lang="scss" scoped>
  .main {
    padding-top: 50px;
    flex: 1 1 auto;
  }
  .wrapper {
    display: flex;
    height: 100%;
    flex-direction: column;
  }
</style>
