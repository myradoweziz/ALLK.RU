<script setup lang="ts">
  import Icon from '@/UI/Icon'
</script>

<template>
  <section class="contacts">
    <div class="contacts__container">
      <div class="contacts__row">
        <div class="contacts__title">Контакты</div>
        <div class="contacts__cards">
          <div class="card__body">
            <div class="card__icon">
              <icon name="locationTick" />
            </div>
            <div class="card__content">
              <div class="card__title">Офис:</div>
              <div class="card__desc">
                Москва, Пресненский район, Краснопресненская <br />
                Набережная
              </div>
            </div>
          </div>
          <div class="card__body">
            <div class="card__icon">
              <icon name="call" />
            </div>
            <div class="card__content">
              <div class="card__title">Телефон:</div>
              <div class="card__desc">
                +7 (499) 112-41-44,
                <p>+7 (499) 256-75-65</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="contacts__map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50327.68175939655!2d58.4271616782959!3d37.96592346899318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6ffe1bab3684d9%3A0x3cde013f62d3ade9!2z0JDRiNGF0LDQsdCw0LQsINCi0YPRgNC60LzQtdC90LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1691225328105!5m2!1sru!2s"
        width="100%"
        height="450"
        style="border: 0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .contacts {
    padding-top: 50px;
    background: linear-gradient(0deg, #f5f7f9 0%, #f5f7f9 100%), #ece8e5;
    height: 100%;
    // .contacts__container
    &__container {
      max-width: 1300px;
      margin: 0 auto;
      padding-bottom: 77px;
    }
    // .contacts__row
    &__row {
    }
    // .contacts__title
    &__title {
      padding-top: 60px;
      padding-bottom: 45px;
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
    // .contacts__cards
    &__cards {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;
      padding: 0 20px;
      @media (max-width: 768px) {
        flex-wrap: wrap;
      }
    }
    // .contacts__card
    &__card {
    }
    // .contacts__map
    &__map {
      width: 100%;
      height: 100%;
    }
  }
  .card {
    // .card__body
    min-width: 498px;
    &__body {
      width: 100%;
      border-radius: 20px;
      background: #fff;
      padding: 30px;
      display: flex;
      gap: 15px;
    }
    // .card__icon
    &__icon {
    }
    // .card__content
    &__content {
    }
    // .card__title
    &__title {
      padding-bottom: 10px;
      color: #333;
      font-family: Fira Sans Extra Condensed;
      font-size: 22px;
      font-weight: 700;
      line-height: 100%;
      text-transform: uppercase;
    }
    // .card__desc
    &__desc {
      color: #333;
      font-size: 16px;
      font-weight: 500;
      line-height: normal;
      opacity: 0.9;
    }
  }
</style>
