<script setup lang="ts">
  import { ref, defineProps } from 'vue'
  import ComparisonSearch from '@/components/ComparisonSearch.vue'
  import ComparisonMobile from '@/components/ComparisonMobile.vue'

  defineProps({
    label: {
      type: String,
      default: () => 'Сравнение тарифов'
    },
    isText: {
      type: Boolean,
      default: () => false
    }
  })

  interface Menus {
    id: number
    name: string
  }

  interface DeepScan {
    id: number
    title: string
    desc: string
  }

  const menus = ref<Menus[]>([
    { id: 0, name: 'Продвинутый' },
    { id: 1, name: 'Комплексный' },
    { id: 2, name: 'Оптимизация' },
    { id: 3, name: 'Потрясающий' }
  ])

  const deepScan = ref<DeepScan[]>([
    { id: 0, title: 'Общий аудит сайта', desc: 'SEO, юзабилити, тексты. Пример аудита' },
    {
      id: 1,
      title: 'Общий аудит сайта',
      desc: 'Определим основных конкурентов, их преимущества и недостатки, выстроим стратегию продвижения, без предоставления отчета'
    },
    {
      id: 2,
      title: 'Составление семантического ядра',
      desc: 'Страхуем себя и ваш сайт, чтобы ничего не пострадало. Копию храним до 3 месяцев'
    }
  ])

  const workingKeywords = ref<DeepScan[]>([
    { id: 0, title: 'Составление семантического ядра', desc: 'Cписок ключевых слов, по которым будем продвигать сайт' },
    {
      id: 1,
      title: 'Кластеризация ключевых слов и составление карты релевантности',
      desc: 'Распределим, какие страницы по каким запросам будем продвигать'
    }
  ])
</script>

<template>
  <section class="comparison">
    <div class="comparison__container">
      <div class="comparison__row">
        <div class="comparison__title">{{ label }}</div>
        <div v-if="!isText" class="comparison__menu">
          <nav class="menu">
            <ul class="menu__list">
              <li v-for="(item, index) in menus" :key="index" class="menu__item">
                <a href="#" class="menu__link">{{ item.name }}</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="comparison__search">
          <comparison-search :search-content="deepScan" :is-text="isText" />
        </div>
        <div class="comparison__search">
          <comparison-search
            label="Работа с ключевыми словами"
            :search-content="workingKeywords"
            :is-text="isText"
            is-blue
          />
        </div>
        <comparison-mobile v-if="!isText" />
        <div v-if="!isText" class="comparison__counts">
          <div v-for="i in 4" :key="i" class="comparison__count">30 680 ₽</div>
        </div>
        <div v-if="!isText" class="comparison__btns">
          <button v-for="i in 4" :key="i" class="comparison__btn">Выбрать</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .comparison {
    // .comparison__container
    background-color: #fff;
    padding-bottom: 80px;
    @media (max-width: 768px) {
      padding-bottom: 60px;
    }
    &__container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }
    // .comparison__row
    &__row {
    }
    // .comparison__title
    &__title {
      padding-top: 80px;
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
    }
    // .comparison__menu
    &__menu {
    }
    // .comparison__search
    &__search {
    }
    // .comparison__counts
    &__counts {
      display: flex;
      align-items: center;
      gap: 58px;
      justify-content: flex-end;
      padding-bottom: 15px;
      @media (max-width: 768px) {
        display: none;
      }
    }
    // .comparison__count
    &__count {
      color: #333;
      font-family: Fira Sans Extra Condensed;
      font-size: 24px;
      font-weight: 700;
      line-height: 100%;
      text-transform: uppercase;
    }
    // .comparison__btns
    &__btns {
      display: flex;
      align-items: center;
      gap: 16px;
      justify-content: flex-end;
      padding-bottom: 15px;
      @media (max-width: 768px) {
        display: none;
      }
    }
    // .comparison__btn
    &__btn {
      padding: 8px 27px;
      color: #ff0404;
      text-align: center;
      font-size: 16px;
      font-weight: 600;
      line-height: 150%;
      border-radius: 5px;
      border: 1px solid #ff0404;
      background: #fff;
    }
    // .comparison__mobile
    &__mobile {
    }
  }
  .menu {
    // .menu__list
    &__list {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 39px;
      padding-bottom: 20px;
      @media (max-width: 768px) {
        display: none;
      }
    }
    // .menu__item
    &__item {
    }
    // .menu__link
    &__link {
      color: #333;
      font-family: Fira Sans Extra Condensed;
      font-size: 16px;
      font-weight: 600;
      line-height: 150%;
      text-transform: uppercase;
    }
  }
</style>
