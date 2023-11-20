<script setup lang="ts">
  import { defineProps } from 'vue'
  import type { PropType } from 'vue'

  defineProps({
    card: {
      type: Boolean as PropType<Boolean | null>,
      default: () => false
    },
    secondColor: {
      type: Boolean as PropType<Boolean | null>,
      default: () => false
    },
    thirdColor: {
      type: Boolean as PropType<Boolean | null>,
      default: () => false
    },
    foursColor: {
      type: Boolean as PropType<Boolean | null>,
      default: () => false
    },
    name: {
      type: String,
      default: () => 'позициям'
    },
    count: {
      type: String,
      default: () => '15000'
    }
  })
</script>

<template>
  <div class="card">
    <div :class="['card__body', { 'second-color': secondColor, 'third-color': thirdColor, 'fours-color': foursColor }]">
      <div class="card__title">
        Продвижение по <br />
        {{ name }}
      </div>
      <div v-if="card" class="card__icon">
        <img src="../assets/img/card2.png" alt="" />
      </div>
      <div v-else class="card__icon">
        <img src="../assets/img/card1.png" alt="" />
      </div>
      <div class="card__desc">
        Продвинем 10 сылок <br />
        на первые места
      </div>
      <div class="card__count">{{ count }} руб</div>
      <button class="card__btn">Оставить заявку</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .card {
    // .card__body
    &__body {
      border-radius: 20px;
      background: #93e7ff;
      padding: 20px;
    }
    // .card__title
    &__title {
      padding-top: 10px;
      padding-bottom: 30px;
      color: #333;
      text-align: center;
      font-family: Fira Sans Extra Condensed;
      font-size: 20px;
      font-weight: 700;
      line-height: 100%;
      text-transform: uppercase;
    }
    // .card__icon
    &__icon {
      text-align: center;
    }
    // .card__desc
    &__desc {
      padding-bottom: 15px;
      color: #000;
      text-align: center;
      font-size: 14px;
      font-weight: 400;
      line-height: normal;
    }
    // .card__count
    &__count {
      color: #000;
      text-align: center;
      font-size: 18px;
      font-weight: 600;
      line-height: normal;
      padding-bottom: 25px;
    }
    // .card__btn
    &__btn {
      text-align: center;
      font-size: 16px;
      font-weight: 500;
      line-height: 150%;
      border-radius: 5px;
      background: #fff;
      padding: 12px 33px;
    }
  }
  .second-color {
    background-color: #ffd773;
  }
  .third-color {
    background-color: #a3a3ff;
  }
  .fours-color {
    background-color: #d1caff;
  }
</style>
