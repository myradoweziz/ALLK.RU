<script setup lang="ts">
  import { ref } from 'vue'

  import RatesCard from './PromotionRatesCard.vue'

  interface RatesCard {
    id: number
    name: string
    count: string
    card?: Boolean
    secondColor?: Boolean
    thirdColor?: Boolean
    foursColor?: Boolean
  }

  const ratesCards = ref<RatesCard[]>([
    { id: 0, name: '', count: '', secondColor: false, thirdColor: false, foursColor: false, card: false },
    { id: 1, name: 'трафику', count: '25000', secondColor: true, thirdColor: false, foursColor: false, card: true },
    { id: 2, name: 'лидам', count: '35000', secondColor: false, thirdColor: true, foursColor: false, card: false },
    { id: 3, name: 'KPI', count: '45000', secondColor: false, thirdColor: false, foursColor: true, card: true }
  ])
</script>
<template>
  <section class="rates">
    <div class="rates__container">
      <div class="rates__row">
        <div class="rates__title">Тарифы</div>
        <div class="rates__cards">
          <div v-for="ratesCard in ratesCards" :key="ratesCard.id" class="rates__card">
            <rates-card
              :name="ratesCard.name"
              :count="ratesCard.count"
              :card="ratesCard.card"
              :second-color="ratesCard.secondColor"
              :third-color="ratesCard.thirdColor"
              :fours-color="ratesCard.foursColor"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .rates {
    // .rates__container
    padding: 70px 0;
    background: linear-gradient(0deg, #f5f7f9 0%, #f5f7f9 100%), #ece8e5;
    &__container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }
    // .rates__row
    &__row {
    }
    // .rates__title
    &__title {
      padding-bottom: 45px;
      text-align: center;
      color: #333;
      font-family: Fira Sans Extra Condensed;
      font-size: 50px;
      font-weight: 700;
      line-height: 100%;
      text-transform: uppercase;
    }
    // .rates__cards
    &__cards {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      overflow-x: auto;
      padding-bottom: 30px;
    }
    // .rates__card
    &__card {
    }
  }
</style>
