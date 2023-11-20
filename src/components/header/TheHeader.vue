<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  import Icon from '@/UI/Icon'
  import Divider from '@/UI/Divider'
  import TheLogo from '@/components/TheLogo.vue'

  import { menus, bottomMenus } from './menu'

  const router = useRouter()

  const isBurger = ref(false)
</script>

<template>
  <div>
    <header :class="['header', { active: isBurger }]">
      <div class="header__container">
        <div class="header__row">
          <div @click="router.push('/')" class="header__logo-company">
            <the-logo />
            <div class="header__company">
              Интернет- <br />
              агентство
            </div>
          </div>
          <div @click="isBurger = !isBurger" class="header__burger">
            <icon :name="isBurger ? 'close' : 'burger'" />
          </div>
          <div class="header__menu">
            <nav class="menu">
              <ul class="menu__list">
                <li v-for="menu in menus" :key="menu.id" class="menu__item">
                  <span>/ </span>
                  <router-link @click="isBurger = false" :to="menu.path" class="menu__link">
                    {{ menu.name }}
                  </router-link>
                </li>
              </ul>
            </nav>
          </div>
          <div class="header__numbers">
            <div class="header__calls-icons">
              <icon name="calls" />
            </div>
            <div class="header__number">8 (444) 123-17-18</div>
          </div>
        </div>
      </div>
      <div class="divide">
        <divider />
      </div>
      <div class="header-menu__menu">
        <nav class="menu-bottom">
          <ul class="menu-bottom__list">
            <li v-for="item in bottomMenus" :key="item.id" class="menu-bottom__item">
              <router-link @click="isBurger = false" :to="item.path" class="menu-bottom__link">
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<style lang="scss" scoped>
  body {
  }
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 3;
    background: linear-gradient(0deg, #fff 0%, #fff 100%), #fff;

    // .header__container
    &__container {
      max-width: 1340px;
      margin: 0 auto;
      padding: 0 20px;
    }

    // .header__row
    &__row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 18px 0;
    }
    // .header__logo-company
    &__logo-company {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 9px;
      z-index: 4;
    }

    // .header__burger
    &__burger {
      z-index: 5;
      @media (min-width: 769px) {
        display: none;
      }
    }
    // .header__company
    &__company {
      user-select: none;
      font-size: 10px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%;
    }
    // .header__menu
    &__menu {
      @media (max-width: 768px) {
        display: none;
        position: fixed;
        background-color: #333;
        z-index: 3;
        top: 0%;
        left: 0;
        width: 100vw;
        height: 100vh;
      }
    }
    // .header__numbers
    &__numbers {
      display: flex;
      align-items: center;
      gap: 12px;
      @media (max-width: 768px) {
        display: none;
      }
    }
    // .header__calls
    &__calls-icons {
      // .header__calls-icons
    }
    // .header__number
    &__number {
      font-size: 18px;
      font-weight: 700;
      text-decoration-line: underline;
    }
  }
  .menu {
    // .menu__list
    &__list {
      display: flex;
      align-items: center;
      @media (max-width: 768px) {
        padding-top: 150px;
        flex-direction: column;
        justify-content: center;
        z-index: 2;
        gap: 20px;
        height: 100vh;
        &::before {
          margin-bottom: 10px;
          content: '';
          height: 1px;
          width: 100%;
          opacity: 0.10000000149011612;
          background: #fff;
        }
      }
    }
    // .menu__item
    &__item {
      &:first-child {
        span {
          display: none;
        }
      }
      span {
        padding: 0 25px;
        @media (max-width: 768px) {
          display: none;
        }
      }
    }
    // .menu__link
    &__link {
      text-align: center;
      font-family: Fira Sans Extra Condensed;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 0.56px;
      text-transform: uppercase;
      @media (max-width: 768px) {
        font-size: 16px;
        color: #fff;
      }
    }
  }

  .header {
  }
  .active {
    @media (max-width: 768px) {
      .header__menu {
        display: block;
      }
      .header__company {
        color: #fff;
      }
      .header-menu__menu {
        display: block;
      }
    }
  }

  .header-menu {
    // .header__menu

    &__menu {
      background: linear-gradient(0deg, #333 0%, #333 100%), linear-gradient(0deg, #333 0%, #333 100%), #735ff2;
      @media (max-width: 768px) {
        display: none;
        background: transparent;
        position: fixed;
        top: -71px;
        left: 0;
        width: 100%;
        // height: 100vh;
        z-index: 3;
      }
    }
  }
  .menu-bottom {
    // .menu__list
    padding: 0 10px;
    &__list {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 56px;
      @media (max-width: 768px) {
        flex-direction: column;
        gap: 20px;
        padding-top: 130px;
      }
    }
    // .menu__item
    &__item {
      padding: 8.5px 0;
    }
    // .menu__link
    &__link {
      color: #fff;
      font-family: Fira Sans Extra Condensed;
      font-size: 14px;
      font-weight: 500;
      line-height: 150%;
      text-transform: uppercase;
      @media (max-width: 768px) {
        font-size: 20px;
      }
    }
  }

  .divide {
    display: none;
    position: absolute;
    top: 400%;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
@/UI/Divider
