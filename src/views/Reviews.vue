<template>
  <div class="reviews">
    <p class="reviews__header">Отзывы</p>
    <div class="reviews__slider">
      <div ref="content" class="reviews__content swiper" >
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="reviews__card">
              <img class="reviews__img" src="../assets/reviews/ava1.svg">
              <p class="reviews__name">manuk792</p>
              <p class="reviews__description">Покупатель Overclocking</p>
                  <p class="reviews__text">Cделал разгон озу, игра стала плавная, фпс стал стабильным, инпутлага меньше, пинг не упал</p>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="reviews__card">
              <img class="reviews__img" src="../assets/reviews/ava2.svg">
              <p class="reviews__name">jar1k</p>
              <p class="reviews__description">Покупатель System Tweaking</p>
              <p class="reviews__text">Купил System Tweaking все настроили, дали советы и протестили в игре несколько раз разные пресеты, спасибо за
              оптимизацию</p>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="reviews__card">
              <img class="reviews__img" src="../assets/reviews/ava3.svg">
              <p class="reviews__name">RG_FastA</p>
              <p class="reviews__description">Покупатель Overclocking</p>
              <p class="reviews__text">Дали пинка моей ОЗУ аж на +1000 МГц, думал она бракованная и не держит частоты по хмп. Руками все прописал, все
              работает, все стабильно. Очень доволен. Большое спасибо!</p>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="reviews__card">
              <img class="reviews__img" src="../assets/reviews/ava3.svg">
              <p class="reviews__name">ChuckChuck_Norris</p>
              <p class="reviews__description">Покупатель Сustom Tweaking</p>
              <p class="reviews__text">Воспользовался услугой Сustom Tweaking , господа это просто БОМБА. Все интересующие проблемы пк решил, на все вопросы
              ответил, работой доволен целиком и полностью.</p>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="reviews__card">
              <img class="reviews__img" src="../assets/reviews/ava3.svg">
              <p class="reviews__name">baeff</p>
              <p class="reviews__description">Покупатель Сustom Tweaking</p>
              <p class="reviews__text">Заказал Сustom Tweaking все настроили в лучшем свете, все стало плавнее и плюс прирост фпс, спасибо за проделанную
              работу. Однозначно лукас</p>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-prev" ><img class="reviews__arrows" src="../assets/reviews/prev.svg"></div>
      <div class="swiper-next"><img class="reviews__arrows" src="../assets/reviews/next.svg"></div>
    </div>
    <img class="reviews__perehod" src="../assets/reviews/perehod.svg">
  </div>
</template>
<script>
import Swiper, { Navigation } from 'swiper'
import 'swiper/css'

export default {
  data () {
    return {
    }
  },
  mounted () {
    new Swiper(this.$refs.content, {
      modules: [Navigation],
      slidesPerView: 3,
      spaceBetween: 110,
      centeredSlides: true,
      allowTouchMove: false,
      speed: 450,
      loop: true,
      navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev'
      },
      breakpoints: {
        1300: {
          spaceBetween: 100
        },
        900: {
          spaceBetween: 70
        },
        500: {
          spaceBetween: 40
        },
        200: {
          spaceBetween: 10
        }
      }
    })
  }
}
</script>

<style scoped>
.reviews {

    overflow: hidden;
}
.reviews__header {
    padding-top: 5.208333333333334VW;
        padding-bottom: 3.854166666666667VW;
        text-align: center;
        font-weight: 600;
        font-size: 2.5VW;
        color: #FFFFFF;
}
.reviews__content {
position: relative;
width: 62.239583333333336VW;
}
.reviews__slider {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.reviews__content .swiper-slide {
box-sizing: border-box;
background: #fff;
height: 22.395833333333336VW;
border-radius: 0.5208333333333333VW;
}

.reviews__card {
  padding: 1.5625VW;
  text-align: center;
}
.reviews__img {
  margin-bottom: 1.0416666666666665VW;
}
.reviews__img  {
  width: 4.166666666666666VW;
}
.reviews__name {
  font-weight: 600;
    font-size: 1.25VW;
    text-transform: capitalize;
    color: #070200;
}
.reviews__description {
  font-weight: 500;
    font-size: 0.8333333333333334VW;
    text-transform: capitalize;
    color: #A6A6A6;
    margin-bottom: 1.5104166666666667VW;
}
.reviews__text {
  font-weight: 500;
  font-size: 0.8333333333333334VW;
  line-height: 1.5104166666666667VW;
  text-transform: capitalize;
  color: #4E4E4E;
}
.reviews__slider .swiper-prev {
  position: absolute;
  left:12%;
  transition: all 0.3s ease;
  cursor: pointer;
}
.reviews__slider .swiper-prev:hover {
  opacity: 0.5;
  transform: scale(0.98);
}
.reviews__slider .swiper-next {
  position: absolute;
  right: 12%;
  transition: all 0.3s ease;
  cursor: pointer;
}
.reviews__slider .swiper-next:hover {
  opacity: 0.5;
  transform: scale(0.98);
}
.reviews__arrows {
  width: 3.125VW;
}
.reviews__perehod {
  margin-top: 8.125VW;
}
.reviews__perehod img {
  width: 100vw;
}
</style>
