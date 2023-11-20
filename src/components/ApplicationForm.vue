<script setup lang="ts">
  import ApplicationFormInput from '@/UI/ApplicationFormInput'
  import Icon from '@/UI/Icon'
</script>
<template>
  <section class="application-form">
    <div class="application-form__container">
      <div class="application-form__row">
        <div class="application-form__title">Форма заявки</div>
        <div class="application-form__form">
          <div class="application-form__inputs-checkbox">
            <div v-for="i in 2" :key="i" class="application-form__input">
              <application-form-input />
            </div>
            <div class="application-form__checkbox">
              <div class="application-form__check-icon">
                <icon name="checkedBlack" />
              </div>
              <p>
                Нажимая на кнопку, вы соглашаетесь <br />
                с нашей политикой обработки
              </p>
            </div>
          </div>
          <div class="application-form__inputs-btn">
            <div v-for="i in 2" :key="i" class="application-form__input">
              <application-form-input />
            </div>
            <button class="application-form__btn">Оставить заявку</button>
            <div class="application-form__mobile mobile">
              <div class="mobile__row">
                <div class="mobile__checkbox">
                  <div class="mobile__check-icon">
                    <icon name="checkedBlack" />
                  </div>
                  <p>
                    Нажимая на кнопку, вы соглашаетесь <br />
                    с нашей политикой обработки
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .application-form {
    // .application-form__container
    background: #333;
    &__container {
      max-width: 1000px;
      margin: 0 auto;
      padding: 0 20px;
      padding-bottom: 80px;
    }
    // .application-form__row
    &__row {
    }
    // .application-form__title
    &__title {
      padding-top: 80px;
      padding-bottom: 44px;
      text-align: center;
      color: #fff;
      font-family: Fira Sans Extra Condensed;
      font-size: 50px;
      font-weight: 700;
      line-height: 100%;
      text-transform: uppercase;
    }
    // .application-form__form
    &__form {
      display: grid;
    }
    // .application-form__inputs-checkbox
    &__inputs-checkbox {
      padding-bottom: 28px;
      display: flex;
      gap: 20px;
      justify-content: space-between;
      flex-wrap: wrap;
      @media (max-width: 768px) {
        justify-content: center;
      }
    }
    // .application-form__input
    &__input {
      width: 314px;
    }
    // .application-form__checkbox
    &__checkbox {
      width: 314px;
      display: flex;
      align-items: center;
      gap: 10px;
      opacity: 0.9;

      p {
        color: #fff;
        font-size: 14px;
        font-weight: 500;
        line-height: normal;
      }
      @media (max-width: 1030px) {
        display: none;
      }
    }
    // .application-form__check-icon
    &__check-icon {
    }
    // .application-form__inputs-btn
    &__inputs-btn {
      display: flex;
      align-items: center;
      gap: 20px;
      justify-content: space-between;
      @media (max-width: 1030px) {
        flex-wrap: wrap;
      }
      @media (max-width: 768px) {
        justify-content: center;
      }
    }
    // .application-form__btn
    &__btn {
      width: 314px;
      padding: 13px;
      border-radius: 5px;
      background: #ff0404;
      color: #fff;
      text-align: center;
      font-size: 16px;
      font-weight: 600;
      line-height: 150%;
    }
    // .application-form__mobile
    &__mobile {
    }
  }

  .mobile {
    // .mobile__row
    @media (min-width: 1030px) {
      display: none;
    }
    &__row {
      width: 314px;
      height: 50px;
    }
    // .mobile__checkbox
    &__checkbox {
      width: 314px;
      opacity: 0.9;
      display: flex;
      align-items: center;
      gap: 10px;
      p {
        color: #fff;
        font-size: 14px;
        font-weight: 500;
        line-height: normal;
      }
    }
    // .mobile__check-icon
    &__check-icon {
    }
  }
</style>
