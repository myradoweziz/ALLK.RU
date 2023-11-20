<script setup lang="ts">
  import TheLogo from '@/components/TheLogo.vue'
</script>

<template>
  <div class="footer__logo-name">
    <the-logo />
    <div class="footer__logo-name">
      Интернет- <br />
      агентство
    </div>
  </div>
</template>

<style scoped lang="scss">
  .footer {
    // .footer__logo-name
    &__logo-name {
      display: flex;
      gap: 9px;
    }
    // .footer__logo
    &__logo-name {
      // .footer__logo-name

      color: #fff;
      font-size: 10px;
      font-weight: 500;
      line-height: 100%;
    }
  }
</style>
