<script setup lang="ts">
  import PromotionComparison from '@/components/PromotionComparison.vue'
  import ApplicationForm from '@/components/ApplicationForm.vue'
  import PromotionPortFolio from '@/components/PromotionPortFolio.vue'
</script>

<template>
  <div class="position-promotion">
    <div class="position-promotion__img-title">
      <div class="position-promotion__image">
        <img src="@/assets/img/page3.png" alt="" />
      </div>
      <div class="position-promotion__title">Продвижение по позициям</div>
    </div>
    <promotion-comparison label="Что входит в стоимость" is-text />
    <application-form />
    <div class="position-promotion__text-block text-block">
      <div class="text-block__row">
        <div class="text-block__title">Текстовый текст</div>
        <div class="text-block__body">
          <div class="text-block__content">
            <div class="text-block__sub-title">Что такое Lorem Ipsum?</div>
            <div class="text-block__desc">
              Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является
              стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал
              большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не
              только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его
              популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в
              более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется
              Lorem Ipsum.
            </div>
          </div>
          <div class="text-block__content">
            <div class="text-block__sub-title">Почему он используется?</div>
            <div class="text-block__desc">
              Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum
              используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное
              распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст..
              Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют
              Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу
              показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст
              Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например,
              юмористические варианты).
            </div>
          </div>
        </div>
      </div>
    </div>
    <promotion-port-folio is-white />
  </div>
</template>

<style lang="scss" scoped>
  .position-promotion {
    // .position-promotion__img-title
    &__img-title {
      position: relative;
      height: 300px;
      @media (max-width: 767px) {
        height: 210px;
      }
    }
    // .position-promotion__image
    &__image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        @media (max-width: 425px) {
          object-fit: cover;
        }
      }
    }
    // .position-promotion__title
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
    // .position-promotion__text-block
    &__text-block {
    }
  }

  .text-block {
    // .text-block__row
    background: linear-gradient(0deg, #f5f7f9 0%, #f5f7f9 100%), #ece8e5;
    &__row {
      max-width: 1100px;
      margin: 0 auto;
      padding: 80px;
      @media (max-width: 768px) {
        padding-left: 20px;
        padding-right: 20px;
      }
    }
    // .text-block__title
    &__title {
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
    // .text-block__body
    &__body {
      border-radius: 20px;
      background: linear-gradient(0deg, #fff 0%, #fff 100%), #f4f7fe;
      box-shadow: 10px 10px 50px 0px rgba(0, 0, 0, 0.05);
      padding: 45px;
      @media (max-width: 768px) {
        padding: 30px;
      }
    }
    // .text-block__sub-title
    &__sub-title {
      padding-bottom: 20px;
      color: #333;
      font-family: Fira Sans Extra Condensed;
      font-size: 30px;
      font-weight: 700;
      line-height: 100%;
      text-transform: uppercase;
      @media (max-width: 768px) {
        font-size: 25px;
      }
    }
    // .text-block__content
    &__content {
      &:not(:first-child) {
        padding-top: 40px;
      }
    }
    // .text-block__desc
    &__desc {
      color: #333;
      font-size: 16px;
      font-weight: 500;
      line-height: 145%;
    }
  }
</style>
