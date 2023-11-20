<script setup lang="ts">
  import ApplicationForm from '@/components/ApplicationForm.vue'
  import PromotionSmallDesc from '@/components/PromotionSmallDesc.vue'
  import PromotionRates from '@/components/PromotionRates.vue'
  import PromotionComparison from '@/components/PromotionComparison.vue'
  import PromotionPortFolio from '@/components/PromotionPortFolio.vue'
</script>

<template>
  <section class="create-pages">
    <div class="create-pages__row">
      <div class="create-pages__img-title">
        <div class="create-pages__image">
          <img src="@/assets/img/create_page.png" alt="" />
        </div>
        <div class="create-pages__title">Создание сайтов</div>
      </div>
      <div class="create-pages__container">
        <div class="create-pages__counts">
          <div class="create-pages__count-title">
            <div class="create-pages__count first">1047</div>
            <div class="create-pages__sub-title">
              Небольшое описание <br />
              в 2 строчки
            </div>
          </div>
          <div class="create-pages__count-title">
            <div class="create-pages__count second">10 547</div>
            <div class="create-pages__sub-title">
              Небольшое описание <br />
              в 2 строчки
            </div>
          </div>
          <div class="create-pages__count-title">
            <div class="create-pages__count">1047</div>
            <div class="create-pages__sub-title">
              Небольшое описание <br />
              в 2 строчки
            </div>
          </div>
          <div class="create-pages__count-title">
            <div class="create-pages__count four">10 547</div>
            <div class="create-pages__sub-title">
              Небольшое описание <br />
              в 2 строчки
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="create-pages__components">
      <application-form />
      <promotion-small-desc />
      <promotion-rates />
      <promotion-comparison />
      <promotion-port-folio />
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .create-pages {
    // .create-pages__container
    position: relative;
    &__container {
      max-width: 1300px;
      margin: 0 auto;
      padding: 0 20px;
    }
    // .create-pages__row
    &__row {
    }

    // .create-pages__img-title
    &__img-title {
      position: relative;
      height: 300px;
      @media (max-width: 767px) {
        height: 210px;
      }
    }
    // .create-pages__image
    &__image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    // .create-pages__title
    &__title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      color: #333;
      font-family: Fira Sans Extra Condensed;
      font-size: 55px;
      font-weight: 700;
      line-height: 100%;
      text-transform: uppercase;
      @media (max-width: 768px) {
        font-size: 45px;
      }
    }
    &__components {
    }
    // .create-pages__counts
    &__counts {
      padding: 60px 0;
      display: flex;
      align-items: center;
      gap: 110px;
      justify-content: space-between;
      @media (max-width: 803px) {
        justify-content: center;
        flex-wrap: wrap;
        gap: 90px;
      }
      @media (max-width: 425px) {
        flex-wrap: wrap;
        gap: 50px;
      }
    }
    // .create-pages__count-title
    &__count-title {
      position: relative;
      &:not(:first-child) {
        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: -80px;
          width: 2px;
          height: 100%;
          border-left: 1px solid #eaecef;
          @media (max-width: 768px) {
            left: -30px;
          }
        }
      }
      &:nth-child(3) {
        @media (max-width: 636px) {
          &::before {
            content: '';
            border: none;
          }
        }
      }
    }
    // .create-pages__count
    &__count {
      text-align: right;
      background: linear-gradient(270deg, rgba(163, 163, 255, 0.65) 0%, rgba(163, 163, 255, 0) 100%);
      color: #333;
      font-family: Fira Sans Extra Condensed;
      font-size: 45px;
      font-weight: 700;
      line-height: 100%;
      text-transform: uppercase;
      @media (max-width: 803px) {
        font-size: 35px;
      }
    }

    // .create-pages__sub-title
    &__sub-title {
      padding-top: 15px;
      color: var(--light-text-primary, #272727);
      text-align: center;
      font-size: 14px;
      font-weight: 500;
      line-height: normal;
      letter-spacing: -0.31px;
    }
  }
  .first {
    background: linear-gradient(270deg, rgba(255, 4, 4, 0.35) 0%, rgba(255, 4, 4, 0) 100%);
  }
  .second {
    background: linear-gradient(270deg, rgba(255, 215, 115, 0.65) 0%, rgba(255, 215, 115, 0) 100%);
  }
  .four {
    background: linear-gradient(270deg, #ffd7ca 0%, rgba(255, 221, 202, 0) 100%);
  }
</style>
