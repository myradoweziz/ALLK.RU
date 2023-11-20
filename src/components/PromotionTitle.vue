<script setup lang="ts">
  import Icon from '@/UI/Icon'
</script>
<template>
  <div class="promotion__title">
    <p>
      <span>Продвижение</span>
      сайтов
    </p>
    <div class="promotion__icon">
      <icon name="fire" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .promotion {
    // .promotion__title
    &__title {
      padding-top: 80px;
      padding-bottom: 45px;
      color: #333;
      font-family: Fira Sans Extra Condensed;
      font-size: 55px;
      font-weight: 700;
      line-height: 100%;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      position: relative;
      @media (max-width: 768px) {
        font-size: 45px;
        text-align: center;
        p {
          span {
            background: linear-gradient(270deg, rgba(255, 4, 4, 0.65) 0%, rgba(255, 4, 4, 0) 100%);
          }
        }
      }
      @media (max-width: 425px) {
        font-size: 35px;
      }
    }
    &__icon {
      @media (max-width: 768px) {
        display: none;
      }
    }
  }
</style>
