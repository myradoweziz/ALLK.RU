<script setup lang="ts"></script>

<template>
  <div class="bottom-footer">
    <div class="bottom-footer__title">с 2021. ALKK</div>
    <div class="bottom-footer__map-name">Карта сайта</div>
  </div>
</template>

<style scoped lang="scss">
  .bottom-footer {
    // .bottom-footer__title
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;
    border-top: 1px solid #6666;
    &__title {
      color: #fff;
      font-size: 16px;
      font-weight: 500;
      line-height: normal;
    }
    // .bottom-footer__map-name
    &__map-name {
      color: #fff;
      font-size: 16px;
      font-weight: 500;
      line-height: normal;
    }
  }
</style>
