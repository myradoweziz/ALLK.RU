<script setup lang="ts">
  import { defineProps } from 'vue'
  import Icon from '@/UI/Icon'

  defineProps({
    label: {
      type: String,
      default: () => 'Поиск. сист.'
    }
  })
</script>

<template>
  <div class="calculator__dropdown dropdown">
    <button class="dropdown__title">
      <p>{{ label }}</p>
      <icon name="arrowBottom" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
  // .calculator__dropdown
  .calculator {
    &__dropdown {
      button {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 8px 18px;
        border-radius: 5px;
        background: #eaecef;
        color: #333;
        font-size: 16px;
        font-weight: 600;
        line-height: 150%;
        @media (max-width: 478px) {
          width: 100%;
          justify-content: space-between;
        }
      }
      @media (max-width: 478px) {
        width: 100%;
      }
    }
  }
  .dropdown {
    // .dropdown__title
    &__title {
    }
  }
</style>
