<script setup lang="ts">
  import { ref } from 'vue'

  import Icon from '@/UI/Icon'

  interface MobileSearchItems {
    id: number
    name: string
  }

  const mobileSearchItems = ref<MobileSearchItems[]>([
    { id: 0, name: 'Продвинутый' },
    { id: 1, name: 'Комплексный' },
    { id: 2, name: 'Оптимизация' },
    { id: 3, name: 'Потрясающий' }
  ])
</script>
<template>
  <div class="search__mobile mobile-search">
    <div class="mobile-search__row">
      <div v-for="mobileSearchItem in mobileSearchItems" :key="mobileSearchItem.id" class="mobile-search__title">
        {{ mobileSearchItem.name }}
        <div class="mobile-search__icon">
          <icon name="redTick" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .mobile-search {
    // .mobile-search__row
    @media (min-width: 768px) {
      display: none;
    }
    &__row {
    }
    // .mobile-search__title
    &__title {
      display: flex;
      align-items: center;
      gap: 20px;
      color: #333;
      padding: 6px 0;
      font-family: Fira Sans Extra Condensed;
      font-size: 16px;
      font-weight: 600;
      line-height: normal;
      text-transform: uppercase;
    }
    // .mobile-search__icon
    &__icon {
    }
  }
</style>
