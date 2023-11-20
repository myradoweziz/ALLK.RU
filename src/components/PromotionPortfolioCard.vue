<script setup lang="ts">
  import { defineProps } from 'vue'

  defineProps({
    secondCard: {
      type: Boolean,
      default: () => false
    },
    thirdCard: {
      type: Boolean,
      default: () => false
    },
    foursCard: {
      type: Boolean,
      default: () => false
    },
    isWhite: {
      type: Boolean,
      default: () => false
    }
  })
</script>

<template>
  <div class="card">
    <div :class="{ card__body: isWhite, 'white-color': !isWhite }">
      <div v-if="secondCard" class="card__image">
        <img src="../assets/img/portfolio_car2.png" alt="" />
      </div>
      <div v-else-if="thirdCard" class="card__image">
        <img src="../assets/img/portfolio_car3.png" alt="" />
      </div>
      <div v-else-if="foursCard" class="card__image">
        <img src="../assets/img/portfolio_car4.png" alt="" />
      </div>
      <div v-else class="card__image">
        <img src="../assets/img/portfolio_car1.png" alt="" />
      </div>
      <div class="card__title">
        Продвижение <br />
        по позициям
      </div>
      <div class="card__desc">ecutools.ru</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .card {
    // .card__body
    &__body {
      padding: 20px;
      border-radius: 20px;
      background: #f5f7f9;
    }
    // .card__image
    &__image {
      padding-bottom: 30px;
    }
    // .card__title
    &__title {
      color: #333;
      font-family: Fira Sans Extra Condensed;
      font-size: 20px;
      font-weight: 700;
      line-height: 100%;
      text-transform: uppercase;
      padding-bottom: 7px;
    }
    // .card__desc
    &__desc {
      color: #333;
      font-size: 14px;
      font-weight: 400;
      line-height: normal;
      opacity: 0.9;
    }
  }
  .white-color {
    padding: 20px;
    border-radius: 20px;
    background-color: #fff;
  }
</style>
