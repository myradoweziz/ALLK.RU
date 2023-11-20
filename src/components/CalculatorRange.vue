<script setup lang="ts"></script>

<template>
  <div class="calculator__range">
    <div class="calculator__range-count_title">
      <div class="calculator__range-count">Цена</div>
      <div class="calculator__range-title">
        <span>10500</span>
        руб./мес.
      </div>
    </div>
    <div class="calculator__range-input">
      <input type="range" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  // .calculator__range
  .calculator {
    &__range {
      padding-top: 38px;
    }
    &__range-input {
      padding-bottom: 35px;
      input {
        width: 100%;
      }
      input[type='range'] {
        overflow: hidden;
        width: 100%;
        -webkit-appearance: none;
        border-radius: 20px;
        background-color: #000;
      }
      input[type='range']::-webkit-slider-thumb {
        width: 100%;
        -webkit-appearance: none;
        height: 5px;
        // cursor: ew-resize;
        border-radius: 20px;
        background: linear-gradient(270deg, #eaecef 10.56%, rgba(255, 4, 4, 0.88) 11.79%, rgba(255, 4, 4, 0) 100%),
          #f5f7f9;
      }
      // .calculator__range-input
    }
    // .calculator__range-count
    &__range-count {
      color: #333;
      font-size: 10px;
      font-weight: 500;
      line-height: 150%;
      text-transform: uppercase;
      // .calculator__range-count_title
      &_title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 14px;
        color: #333;
        font-size: 16px;
        font-weight: 500;
        line-height: 150%;
        span {
          font-size: 20px;
          font-weight: 700;
        }
      }
    }
    // .calculator__range-title
    &__range-title {
    }
  }
</style>
