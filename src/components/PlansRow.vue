<script setup lang="ts">
  import { ref } from 'vue'

  import Icon from '@/UI/Icon'

  interface FirstMonthPlans {
    id: number
    name: string
  }

  const firstMonthPlans = ref<FirstMonthPlans[]>([
    { id: 0, name: 'Общий аудит сайта' },
    { id: 1, name: 'Создание резервной копии сайта' },
    { id: 2, name: 'Поиск и устранение дублей сайта' },
    { id: 3, name: 'Поиск и удаление битых ссылок' },
    { id: 4, name: 'Пропишем тег <link rel="canonical">' },
    { id: 5, name: 'Создадим XML-карту сайта' }
  ])

  const secondMonthPlans = ref<FirstMonthPlans[]>([
    { id: 0, name: 'Создание резервной копии сайта' },
    { id: 1, name: 'Поиск и устранение дублей сайта' },
    { id: 2, name: 'Поиск и удаление битых ссылок' },
    { id: 3, name: 'Пропишем тег <link rel="canonical">' },
    { id: 4, name: 'Создадим XML-карту сайта' }
  ])

  const thirdMonthPlans = ref<FirstMonthPlans[]>([
    { id: 0, name: 'Поиск и устранение дублей сайта' },
    { id: 1, name: 'Поиск и удаление битых ссылок' },
    { id: 2, name: 'Пропишем тег <link rel="canonical">' },
    { id: 3, name: 'Создадим XML-карту сайта' }
  ])
</script>
<template>
  <div class="plan-month__row">
    <div class="plan-month__column">
      <div class="plan-month__title">1 мес.</div>
      <div class="plan-month__content">
        <div v-for="firstMonthPlan in firstMonthPlans" :key="firstMonthPlan.id" class="plan-month__sub-title">
          <div class="plan-month__icon">
            <icon name="circle" />
          </div>
          <p>{{ firstMonthPlan.name }}</p>
        </div>
      </div>
    </div>
    <div class="plan-month__column divider">
      <div class="plan-month__title">2 мес.</div>
      <div class="plan-month__content">
        <div v-for="secondMonthPlan in secondMonthPlans" :key="secondMonthPlan.id" class="plan-month__sub-title">
          <div class="plan-month__icon">
            <icon name="circle" />
          </div>
          <p>{{ secondMonthPlan.name }}</p>
        </div>
      </div>
    </div>
    <div class="plan-month__column divider">
      <div class="plan-month__title">3 мес.</div>
      <div class="plan-month__content">
        <div v-for="thirdMonthPlan in thirdMonthPlans" :key="thirdMonthPlan.id" class="plan-month__sub-title">
          <div class="plan-month__icon">
            <icon name="circle" />
          </div>
          <p>{{ thirdMonthPlan.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .plan-month {
    &__row {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
      }
    }
    // .plan-month__column
    &__column {
      position: relative;
      @media (max-width: 768px) {
        &:not(:last-child) {
          padding-bottom: 40px;
          border-bottom: 1px solid #f0edea;
        }
      }
    }
    // .plan-month__title
    &__title {
      color: #333;
      text-align: center;
      font-family: Fira Sans Extra Condensed;
      font-size: 22px;
      font-weight: 700;
      line-height: 100%; /* 22px */
      text-transform: uppercase;
      padding-bottom: 25px;
    }
    // .plan-month__content
    &__content {
    }
    // .plan-month__sub-title
    &__sub-title {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 0 10px;
      @media (max-width: 768px) {
        justify-content: center;
      }
      &:not(:last-child) {
        padding-bottom: 20px;
      }
      p {
        color: #333;
        font-family: Gilroy;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
    }
    // .plan-month__icon
    &__icon {
    }
  }

  .divider {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -20px;
      width: 2px;
      height: 100%;
      border-radius: 20px;
      background: #f0edea;
      @media (max-width: 768px) {
        display: none;
      }
    }
  }
</style>
