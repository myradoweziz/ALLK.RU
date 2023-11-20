<script setup lang="ts">
  import PromotionTitle from '@/components/PromotionTitle.vue'
  import PromotionCalculator from '@/components/PromotionCalculator.vue'
  import PromotionComparison from '@/components/PromotionComparison.vue'
  import ApplicationForm from '@/components/ApplicationForm.vue'
  import PromotionSmallDesc from '@/components/PromotionSmallDesc.vue'
  import PromotionRates from '@/components/PromotionRates.vue'
  import PromotionPortfolio from '@/components/PromotionPortFolio.vue'
</script>

<template>
  <section class="main-page">
    <div class="main-page__container">
      <div class="main-page__image">
        <img src="@/assets/img/cherrydeck-05gac-Qn0k4-unsplash1.png" alt="" />
      </div>
      <div class="main-page__image-small">
        <img src="@/assets/img/smallImage.png" alt="" />
      </div>
      <div class="main-page__promotion promotion">
        <div class="promotion__body">
          <promotion-title />
          <div class="promotion__calculator calculator">
            <promotion-calculator />
          </div>
          <div class="promotion__comparison comparison">
            <promotion-comparison />
          </div>
          <div class="promotion__application-form application-form">
            <application-form />
          </div>
          <div class="promotion__small-desc small-desc">
            <promotion-small-desc />
          </div>
          <div class="promotion__rates rates">
            <promotion-rates />
          </div>
          <div class="promotion__portfolio portfolio">
            <promotion-portfolio />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .main-page {
    // .main-page__container
    &__container {
    }
    // .main-page__image
    &__image {
      padding-top: 50px;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
      @media (max-width: 375px) {
        // height: 456px;
        // display: none;
      }
    }
    // .main-page__image-small
    &__image-small {
      @media (min-width: 375px) {
      }
      display: none;
      // padding-top: 50px;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    &__promotion {
    }
  }

  .promotion {
    // .promotion__body
    &__body {
      background: linear-gradient(0deg, #f5f7f9 0%, #f5f7f9 100%), #ece8e5;
    }

    // .promotion__calculator
    &__calculator {
      padding-bottom: 80px;
    }
    // .promotion__comparison
    &__comparison {
    }

    // .promotion__application-form
    &__application-form {
    }
    // .promotion__small-desc
    &__small-desc {
    }
    // .promotion__rates
    &__rates {
    }
    // .promotion__portfolio
    &__portfolio {
    }
  }
  .plan-month {
    // .plan-month__row
    padding-bottom: 45px;
  }
</style>
