<template>
  <div class="software">
    <div class="software__up">
        <p class="software__header">Разгон оперативной памяти очень важен, поскольку вы можете увеличить<br> производительность
            вашей системы в программах и
            играх за счет увеличения тактовой<br> частоты и тонкой настройки таймингов вашей ОЗУ</p>
        <div class="software__line"><img src="../assets/guide/line.svg"></div>
        <p class="software__des">Ниже ссылки на все нужные программы для разгона оперативной памяти</p>
    </div>
    <div class="software__content">
        <div ref="swiper" class="software__slider swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="software__card">
                        <div class="software__up">
                            <div class="software__img">
                                <img src="../assets/software/1.svg">
                            </div>
                            <p class="software__title">Asrock Timing Configurator</p>
                            <p class="software__text">Утилита для просмотра таймингов из-под Windows</p>
                        </div>
                        <div class="software__under">
                            <a href="https://drive.google.com/file/d/1jY2QgkOI5n0JCUoI8NhNiDuS4SuUkByp/edit" target="_blank">Скачать</a>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="software__card">
                        <div class="software__up">
                            <div class="software__img">
                                <img src="../assets/software/2.svg">
                            </div>
                            <p class="software__title">TM5</p>
                            <p class="software__text">Тест для нахождения ошибок оперативной памяти</p>
                        </div>
                        <div class="software__under">
                            <a href="https://mega.nz/file/vLhxBahB#WwJIpN3mQOaq_XsJUboSIcaMg3RlVBWvFnVspgJpcLY" target="_blank">Скачать</a>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="software__card">
                        <div class="software__up">
                            <div class="software__img">
                                <img src="../assets/software/3.svg">
                            </div>
                            <p class="software__title">OCCT</p>
                            <p class="software__text">Тест для нахождения ошибок контроллера памяти</p>
                        </div>
                        <div class="software__under">
                            <a href="https://www.ocbase.com/" target="_blank">Скачать</a>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="software__card">
                        <div class="software__up">
                            <div class="software__img">
                                <img src="../assets/software/4.svg">
                            </div>
                            <p class="software__title">AIDA64</p>
                            <p class="software__text">Измерение производительности памяти</p>
                        </div>
                        <div class="software__under">
                            <a href="https://www.aida64.com/downloads" target="_blank">Скачать</a>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="software__card">
                        <div class="software__up">
                            <div class="software__img">
                                <img src="../assets/software/5.svg">
                            </div>
                            <p class="software__title">GSAT</p>
                            <p class="software__text">Тест для поиска<br> сопротивлений RTT</p>
                        </div>
                        <div class="software__under">
                            <a href="https://forums.overclockers.ru/viewtopic.php?p=17452918#p17452918" target="_blank">Скачать</a>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="software__card">
                        <div class="software__up">
                            <div class="software__img">
                                <img src="../assets/software/6.svg">
                            </div>
                            <p class="software__title">Rufus</p>
                            <p class="software__text">Утилита для записи GSAT на флешку (MBR + FAT32)</p>
                        </div>
                        <div class="software__under">
                            <a href="https://rufus.ie/ru/" target="_blank">Скачать</a>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="software__card">
                        <div class="software__up">
                            <div class="software__img">
                                <img src="../assets/software/7.svg">
                            </div>
                            <p class="software__title">Thaiphoon Burner</p>
                            <p class="software__text">Программа для просмотра чипов оперативной памяти</p>
                        </div>
                        <div class="software__under">
                            <a href="https://drive.google.com/file/d/1B56Qmj97lzhcsd8wBD3HN_4tp28Ls86F/view?usp=share_link" target="_blank">Скачать</a>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="software__card">
                        <div class="software__up">
                            <div class="software__img">
                                <img src="../assets/software/8.svg">
                            </div>
                            <p class="software__title">HWINFO</p>
                            <p class="software__text">Просмотр датчиков температуры / напряжений</p>
                        </div>
                        <div class="software__under">
                            <a href="https://www.hwinfo.com/" target="_blank">Скачать</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="swiper-prev"><img class="reviews__arrows" src="../assets/software/prev.svg"></div>
    <div class="swiper-next"><img class="reviews__arrows" src="../assets/software/next.svg"></div>
    <div class="software__motherboard">
        <img src="../assets/software/back.webp">
    </div>
  </div>
</template>

<script>
import Swiper, { Navigation } from 'swiper'
import 'swiper/css'
export default {
  mounted () {
    new Swiper(this.$refs.swiper, {
      modules: [Navigation],
      slidesPerView: 4,
      centeredSlides: false,
      spaceBetween: 50,
      allowTouchMove: false,
      speed: 450,
      loop: true,
      navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev'
      },
      breakpoints: {
          1600: {
              spaceBetween: 30,
          },
          900: {
              spaceBetween: 70,
          },
          500: {
              spaceBetween: 40,
          },
          200: {
              spaceBetween: 10,
          },
      }
    })
  }
}
</script>

<style scoped>
.software {
    position: relative;
    margin-top: 2.1875VW;
}
.software__up {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

}
.software__header {
    font-weight: 500;
    font-size: 1.25VW;
    line-height: 1.5104166666666667VW;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 1.0416666666666665VW;
}
.software__line {
margin-bottom: 1.0416666666666665VW;
}
.software__des {
    text-align: center;
    font-weight: 300;
    font-size: 0.7291666666666666VW;
    color: #9C9C9C;
    margin-bottom: 1.6145833333333335VW;
}
.software__slider {
    position: relative;
    padding: 0 0.26041666666666663VW;
    width: 57.291666666666664VW;
}
.software__slider .swiper-slide {
    height: 13.854166666666668VW !important;
    box-sizing: border-box;
    border-radius: 0.5208333333333333VW;
    border: 0.052083333333333336VW solid #fff;
    background: none;
}
.software__card {
    padding: 1.0416666666666665VW 0.5208333333333333VW;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    height: 100%;
    box-sizing: border-box;
}
.software__img {
    width: 2.5VW;
    height: 2.5VW;
    display: flex;
    align-items: center;
    justify-content: center;
}
.software__title {
    text-align: center;
    font-weight: 500;
        font-size: 0.8333333333333334VW;
        color: #FFFFFF;
        margin-top: 1.09375VW;
        margin-bottom: 0.7291666666666666VW;
}
.software__text {
    font-weight: 300;
    font-size: 0.7291666666666666VW;
    line-height: 0.8854166666666666VW;
    text-align: center;
     color: #C1C1C1;
}
.software__under a {
    font-weight: 300;
    font-size: 0.7291666666666666VW;
    color: #C1C1C1;
}
.reviews__arrows {
    width: 1.8VW;
}
.software .swiper-prev {
    position: absolute;
    bottom: 26%;
    left:17%;
    transition: all 0.3s ease;
    cursor: pointer;
}
.software .swiper-prev:hover {
    opacity: 0.7;
    transform: scale(0.98);
}
.software .swiper-next {
    position: absolute;
    bottom: 26%;
    right: 17%;
    transition: all 0.3s ease;
    cursor: pointer;
}

.software .swiper-next:hover {
    opacity: 0.7;
    transform: scale(0.98);
}
.software__motherboard {
    position: absolute;
    top:10%;
    right: 0;
}
@media(max-width:1620px) {
    .software__motherboard img {
            width: 15.937499999999998VW;
        }
}
</style>
