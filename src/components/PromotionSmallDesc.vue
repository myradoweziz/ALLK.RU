<script setup lang="ts">
  import Icon from '@/UI/Icon'
</script>

<template>
  <section class="small-desc">
    <div class="small-desc__container">
      <div class="small-desc__row">
        <div v-for="i in 4" :key="i" class="small-desc__content">
          <div class="small-desc__icon">
            <icon name="bigIcon" />
          </div>
          <div class="small-desc__title">Заголовок #1</div>
          <div class="small-desc__desc">
            Небольшое описание <br />
            в 2 строчки
          </div>
        </div>
      </div>
      <div class="small-desc__mobile mobile">
        <div class="mobile__row">
          <div v-for="i in 4" :key="i" class="mobile__content">
            <div class="mobile__icon">
              <icon name="smallIcon" />
            </div>
            <div class="mobile__body">
              <div class="mobile__title">Заголовок #1</div>
              <div class="mobile__desc">
                Небольшое описание <br />
                в 2 строчки
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .small-desc {
    padding-top: 80px;
    background-color: #fff;
    padding-bottom: 80px;
    // .small-desc__container
    &__container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }
    // .small-desc__row
    &__row {
      display: flex;
      align-items: center;
      gap: 30px;
      flex-wrap: wrap;
      justify-content: space-between;
      @media (max-width: 375px) {
        display: none;
      }
    }
    // .small-desc__content
    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    // .small-desc__icon
    &__icon {
      padding-bottom: 36px;
    }
    // .small-desc__title
    &__title {
      padding-bottom: 13px;
      color: var(--light-text-primary, #272727);
      text-align: center;
      font-family: Fira Sans Extra Condensed;
      font-size: 22px;
      font-weight: 500;
      line-height: 113.636%;
      letter-spacing: -0.31px;
      text-transform: uppercase;
    }
    // .small-desc__desc
    &__desc {
      color: var(--light-text-primary, #272727);
      text-align: center;
      font-size: 14px;
      font-weight: 500;
      line-height: normal;
      letter-spacing: -0.31px;
    }
  }

  .small-desc {
    // .small-desc__mobile
    &__mobile {
    }
  }
  .mobile {
    // .mobile__row
    @media (min-width: 375px) {
      display: none;
    }
    &__row {
      display: grid;
      gap: 30px;
    }
    // .mobile__content
    &__content {
      display: flex;
      align-items: center;
      gap: 20px;
    }
    // .mobile__icon
    &__icon {
    }
    // .mobile__title
    &__title {
      color: var(--light-text-primary, #272727);
      font-family: Fira Sans Extra Condensed;
      font-size: 22px;
      font-weight: 500;
      line-height: 113.636%;
      letter-spacing: -0.31px;
      text-transform: uppercase;
      padding-bottom: 10px;
    }
    // .mobile__desc
    &__desc {
      color: var(--light-text-primary, #272727);
      font-size: 14px;
      font-weight: 500;
      line-height: normal;
      letter-spacing: -0.31px;
    }
  }
</style>
