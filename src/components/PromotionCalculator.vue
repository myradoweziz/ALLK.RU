<script setup lang="ts">
  import Icon from '@/UI/Icon'
  import HomePageDropdown from '@/components/HomePageDropdown.vue'
  import CalculatorRange from '@/components/CalculatorRange.vue'
  import PlansRow from '@/components/PlansRow.vue'
</script>
<template>
  <div class="calculator__body">
    <div class="calculator__title">Калькулятор</div>
    <div class="calculator__filter">
      <div class="calculator__dropdowns">
        <home-page-dropdown label="Регион" />
        <home-page-dropdown />
        <home-page-dropdown label="Тематика" />
      </div>
      <div class="calculator__checkbox">
        <div class="calculator__checkbox-title">
          <div class="calculator__checkbox-icon">
            <icon name="checked" />
          </div>
          <p>Сайт продвигается</p>
        </div>
      </div>
    </div>
    <calculator-range />
    <div class="calculator__btn">
      <button>Рассчитать</button>
    </div>
    <div class="calculator__plan-month plan-month">
      <div class="calculator__sub-title">
        План продвижения <br />
        на 3 месяца
      </div>
      <plans-row />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .calculator {
    // .calculator__body
    &__body {
      max-width: 1200px;
      margin: 0 auto;
      border-radius: 20px;
      background: linear-gradient(0deg, #fff 0%, #fff 100%), #f4f7fe;
      box-shadow: 10px 10px 50px 0px rgba(0, 0, 0, 0.05);
      padding: 40px;
      @media (max-width: 1225px) {
        margin: 0 20px;
      }
    }
    // .calculator__title
    &__title {
      padding-top: 45px;
      padding-bottom: 35px;
      color: #333;
      font-family: Fira Sans Extra Condensed;
      font-size: 50px;
      font-style: normal;
      font-weight: 700;
      line-height: 100%; /* 50px */
      text-transform: uppercase;
      text-align: center;
      @media (max-width: 768px) {
        font-size: 35px;
      }
    }
    // .calculator__filter
    &__filter {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    // .calculator__dropdowns
    &__dropdowns {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px;
    }

    // .calculator__checkbox
    &__checkbox {
      padding-top: 20px;
    }
    // .calculator__checkbox-title
    &__checkbox-title {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    // .calculator__checkbox-icon
    &__checkbox-icon {
      padding: 6px 4px;
      border-radius: 4px;
      border: 1px solid #666666;
    }

    // .calculator__btn
    &__btn {
      text-align: center;
      padding-bottom: 56px;
      button {
        padding: 13px 30px;
        color: #ff0404;
        text-align: center;
        font-size: 16px;
        font-weight: 600;
        line-height: 150%;
        border-radius: 5px;
        border: 1px solid #ff0404;
        background: #fff;
      }
    }
    // .calculator__plan-month
    &__plan-month {
    }
    // .calculator__sub-title
    &__sub-title {
      padding-bottom: 35px;
      text-align: center;
      color: #333;
      font-family: Fira Sans Extra Condensed;
      font-size: 30px;
      font-weight: 700;
      line-height: 100%;
      text-transform: uppercase;
    }
  }
</style>
