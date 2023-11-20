<script setup lang="ts">
  import { defineProps } from 'vue'
  import PortfolioCard from './PromotionPortfolioCard.vue'

  defineProps({
    isWhite: {
      type: Boolean,
      default: () => false
    }
  })
</script>

<template>
  <section :class="[{ 'white-color': isWhite, portfolio: !isWhite }]">
    <div class="portfolio__container">
      <div class="portfolio__row">
        <div class="portfolio__title"><span>Н2 -</span> ПОРТФОЛИО САЙТОВ</div>
        <div class="portfolio__cards">
          <div class="portfolio__card">
            <portfolio-card :is-white="isWhite" />
          </div>
          <div class="portfolio__card">
            <portfolio-card :is-white="isWhite" second-card />
          </div>
          <div class="portfolio__card">
            <portfolio-card :is-white="isWhite" third-card />
          </div>
          <div class="portfolio__card">
            <portfolio-card :is-white="isWhite" fours-card />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .portfolio {
    background: linear-gradient(0deg, #f5f7f9 0%, #f5f7f9 100%), #ece8e5;
    padding: 80px 0;
    // .portfolio__container
    &__container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }
    // .portfolio__row
    &__row {
    }
    // .portfolio__title
    &__title {
      padding-bottom: 45px;
      text-align: center;
      color: #333;
      font-family: Fira Sans Extra Condensed;
      font-size: 50px;
      font-weight: 700;
      line-height: 100%;
      text-transform: uppercase;
      @media (max-width: 768px) {
        font-size: 35px;
      }
      span {
        @media (max-width: 768px) {
          display: none;
        }
      }
    }
    // .portfolio__cards
    &__cards {
      display: flex;
      align-items: center;
      gap: 20px;
      justify-content: space-between;
      overflow-x: auto;
      padding-bottom: 30px;
    }
    // .portfolio__card
    &__card {
    }
  }
  .white-color {
    background-color: #fff;
    padding: 80px 0;
  }
</style>
