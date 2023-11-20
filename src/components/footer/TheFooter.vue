<script setup lang="ts">
  import { ref, onMounted } from 'vue'

  import Icon from '@/UI/Icon'
  import FooterLogo from './FooterLogo.vue'
  import FooterBottom from './FooterBottom.vue'

  import { webSiteCategories } from './categories'

  const showFooter = ref<Boolean>(false)

  onMounted(() => {
    setTimeout(() => {
      showFooter.value = true
    }, 1000)
  })
</script>

<template>
  <footer v-if="showFooter" class="footer">
    <div class="footer__container">
      <div class="footer__row">
        <footer-logo />
        <div class="footer__menu">
          <nav class="menu">
            <ul class="menu__list">
              <li v-for="item in webSiteCategories" :key="item.id" class="menu__item">
                <a href="#" class="menu__link">{{ item.title }}</a>
                <ul class="menu__sub-menu sub-menu">
                  <li v-for="icon in item.categories" :key="icon.id" class="sub-menu__item">
                    <div class="sub-menu__icon">
                      <icon name="play" />
                    </div>
                    <p>{{ icon.name }}</p>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <footer-bottom />
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  .footer {
    // .footer__container
    background-color: #333333;
    &__container {
      max-width: 1340px;
      margin: 0 auto;
      padding: 0 20px;
    }
    // .footer__row
    &__row {
      padding-top: 80px;
      padding-bottom: 80px;
      display: flex;
      gap: 160px;
      @media (max-width: 875px) {
        gap: 100px;
      }
      @media (max-width: 768px) {
        gap: 50px;
        flex-wrap: wrap;
      }
    }

    // .footer__menu
    &__menu {
    }
  }
  .menu {
    // .menu__list
    &__list {
      display: flex;
      align-items: center;
      gap: 57px;
      @media (max-width: 768px) {
        flex-wrap: wrap;
      }
    }
    // .menu__item
    &__item {
    }

    // .menu__link
    &__link {
      color: #fff;
      font-family: Fira Sans Extra Condensed;
      font-size: 22px;
      font-weight: 700;
      line-height: normal;
      text-transform: uppercase;
    }
    // .menu__sub-menu
    &__sub-menu {
    }
  }
  .sub-menu {
    padding-top: 60px;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: 30px;
      left: 0;
      width: 34px;
      border-top: 1px solid #ff0404;
    }
    // .sub-menu__item
    &__item {
      display: flex;
      align-items: center;
      color: #fff;
      font-size: 16px;
      font-weight: 500;
      line-height: normal;
    }
    // .sub-menu__icon
    &__icon {
    }
  }
</style>
