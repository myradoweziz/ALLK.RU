<script setup lang="ts">
  import { ref } from 'vue'

  interface ComparisonCategories {
    id: number
    name: string
    count: string
  }

  const comparisonCategories = ref<ComparisonCategories[]>([
    { id: 0, name: 'Продвинутый', count: '30 680 ₽' },
    { id: 1, name: 'Комплексный', count: '21 590 ₽' },
    { id: 2, name: 'Потрясающий', count: '50 680 ₽' },
    { id: 3, name: 'Оптимизация', count: '30 680 ₽' }
  ])
</script>

<template>
  <div class="comparison__mobile mobile-comparison">
    <div class="mobile-comparison__row">
      <div
        v-for="comparisonCategory in comparisonCategories"
        :key="comparisonCategory.id"
        class="mobile-comparison__content"
      >
        <div class="mobile-comparison__title-count">
          <div class="mobile-comparison__title">{{ comparisonCategory.name }}</div>
          <div class="mobile-comparison__count">{{ comparisonCategory.count }}</div>
        </div>
        <button class="mobile-comparison__btn">Выбрать</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .mobile-comparison {
    // .mobile-comparison__row
    padding-bottom: 50px;
    @media (min-width: 768px) {
      display: none;
    }
    &__row {
      display: grid;
      gap: 10px;
    }
    // .mobile-comparison__content
    &__content {
      border-radius: 5px;
      background: linear-gradient(0deg, #f5f7f9 0%, #f5f7f9 100%), #eaecef;
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    // .mobile-comparison__title-count
    &__title-count {
    }
    // .mobile-comparison__title
    &__title {
      color: #333;
      font-family: Fira Sans Extra Condensed;
      font-size: 16px;
      font-weight: 600;
      line-height: normal;
      text-transform: uppercase;
    }
    // .mobile-comparison__count
    &__count {
      color: #333;
      font-family: Fira Sans Extra Condensed;
      font-size: 24px;
      font-weight: 700;
      line-height: 100%;
      text-transform: uppercase;
    }
    // .mobile-comparison__btn
    &__btn {
      padding: 8px 27px;
      color: #ff0404;
      text-align: center;
      font-size: 16px;
      font-weight: 600;
      line-height: 150%;
      border-radius: 5px;
      border: 1px solid #ff0404;
      background: linear-gradient(0deg, #f5f7f9 0%, #f5f7f9 100%), #eaecef;
    }
  }
</style>
