<script setup lang="ts">
  import { defineProps } from 'vue'
  import type { PropType } from 'vue'

  import Icon from '@/UI/Icon'
  import ComparisonSearchMobile from './ComparisonSearchMobile.vue'

  interface SearchContent {
    id: number
    title: string
    desc: string
  }

  defineProps({
    label: {
      type: String,
      default: () => 'Глубокий анализ'
    },
    isBlue: {
      type: Boolean,
      default: () => false
    },
    searchContent: {
      type: Array as PropType<SearchContent[]>,
      default: () => []
    },
    isText: {
      type: Boolean,
      default: () => false
    }
  })
</script>

<template>
  <div class="search">
    <div class="search__body">
      <div :class="['search__title', { search__blue: isBlue }]">{{ label }}</div>
      <div class="search__rows">
        <div v-for="item in searchContent" :key="item.id" class="search__content">
          <div class="search__title-desc">
            <div class="search__sub-title">{{ item.title }}</div>
            <div class="search__desc">{{ item.desc }}</div>
          </div>
          <comparison-search-mobile v-if="!isText" />
          <div v-if="isText" class="comparison__text">
            это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для
            текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую
          </div>
          <div v-else class="search__icons">
            <div v-for="i in 4" :key="i" class="search__icon">
              <icon name="redTick" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .search {
    // .search__body
    &__body {
    }
    // .search__title
    &__title {
      padding: 8px;
      margin-bottom: 35px;
      border-radius: 5px;
      background: linear-gradient(0deg, #ffd773 0%, #ffd773 100%), #f4f7fe;
      text-align: center;
      color: #333;
      font-family: Fira Sans Extra Condensed;
      font-size: 30px;
      font-weight: 700;
      line-height: 100%;
      text-transform: uppercase;
      @media (max-width: 768px) {
        font-size: 25px;
      }
    }
    // .search__rows
    &__rows {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    // .search__content
    &__content {
      display: flex;
      align-items: center;
      gap: 10px;
      justify-content: space-between;
      position: relative;
      &:not(:first-child) {
        padding-top: 20px;
        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #eaecef;
        }
      }
      &:last-child {
        padding-bottom: 35px;
      }
      @media (max-width: 425px) {
        flex-wrap: wrap;
      }
    }
    // .search__title-desc
    &__title-desc {
      width: 35%;
      @media (max-width: 768px) {
        width: 100%;
      }

      @media (max-width: 425px) {
        width: 100%;
      }
    }
    // .search__sub-title
    &__sub-title {
      padding-bottom: 10px;
      color: #333;
      font-family: Fira Sans Extra Condensed;
      font-size: 22px;
      font-weight: 700;
      line-height: 100%;
      text-transform: uppercase;
    }
    // .search__desc
    &__desc {
      color: #333;
      font-size: 16px;
      font-weight: 500;
      line-height: normal;
      @media (max-width: 425px) {
        padding-bottom: 20px;
      }
    }
    // .search__icons
    &__icons {
      display: flex;
      align-items: center;
      width: 50%;
      gap: 60px;
      justify-content: space-around;
      @media (max-width: 768px) {
        display: none;
      }
    }
    // .search__icon
    &__icon {
      position: relative;
      &:not(:first-child) {
        &::after {
          content: '';
          position: absolute;
          top: -5px;
          left: -55px;
          width: 2px;
          height: 21px;
          border-left: 1px solid #eaecef;
        }
      }
    }
    // .search__mobile
    &__mobile {
    }
  }
  .comparison {
    &__text {
      width: 38%;
      color: #333;
      font-size: 16px;
      font-weight: 500;
      line-height: normal;
      opacity: 0.9;
      position: relative;
      @media (max-width: 768px) {
        width: 100%;
      }
      &::before {
        content: '';
        position: absolute;
        top: 15px;
        left: -100px;
        width: 2px;
        height: 30px;
        border-left: 2px solid #eaecef;
        @media (max-width: 768px) {
          border: none;
        }
      }
    }
  }

  .search__blue {
    background: linear-gradient(0deg, #77cbfa 0%, #77cbfa 100%), #f4f7fe;
  }
</style>
