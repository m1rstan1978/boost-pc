<template>
  <div class="timingsall">
    <p class="timingsall__header">Оперативная память - это таблица, состоящая из строк и столбцов, таблица разделена на банки, в которые требуется время
    для<br> записи строк в тактах</p>
    <div class="timingsall__box">
        <div class="timingsall__line">
            <img src="../assets/bios/line.webp">
        </div>
        <p class="timingsall__title">Timings</p>
        <div class="timingsall__arrows">
            <img  src="../assets/timings/arrows.svg">
        </div>
    </div>
    <div class="timingsall__content">
        <div ref="swiper" class="timingsall__slider swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="timingsall__card">
                        <div class="timingsall__up">
                            <p class="timingsall__name">tCL</p>
                            <p class="timingsall__text">Минимальное время между подачей команды на чтение и началом передачи данных</p>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="timingsall__card">
                        <div class="timingsall__up">
                            <p class="timingsall__name">tRCD</p>
                            <p class="timingsall__text">Время, необходимое для активизации строки банка</p>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="timingsall__card">
                        <div class="timingsall__up">
                            <p class="timingsall__name">tRP</p>
                            <p class="timingsall__text">Время, необходимое для предварительного заряда банка</p>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="timingsall__card">
                        <div class="timingsall__up">
                            <p class="timingsall__name">tRAS</p>
                            <p class="timingsall__text">Минимальное время между активацией строки и подачей команды на предзаряд</p>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="timingsall__card">
                        <div class="timingsall__up">
                            <p class="timingsall__name">tWTR</p>
                            <p class="timingsall__text">Минимальное время между окончанием записи и подачей команды на чтение (CAS#) в одном ранке</p>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="timingsall__card">
                        <div class="timingsall__up">
                            <p class="timingsall__name">tREFI</p>
                            <p class="timingsall__text">Определяет временной интервал между всеми процедурами регенерации памяти.</p>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="timingsall__card">
                        <div class="timingsall__up">
                            <p class="timingsall__name">tCWL</p>
                            <p class="timingsall__text">Задержка между подачей команды на запись и сигналом DQS. Аналог CL, но для записи.</p>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="timingsall__card">
                        <div class="timingsall__up">
                            <p class="timingsall__name">tRC</p>
                            <p class="timingsall__text">Минимальное время между активацией строк одного банка, разгон памяти актуален только при tRC ≤ 60</p>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="timingsall__card">
                        <div class="timingsall__up">
                            <p class="timingsall__name">tRRD</p>
                            <p class="timingsall__text">Минимальное время между активацией строк разных банков, используется для реализации Interleaving</p>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="timingsall__card">
                        <div class="timingsall__up">
                            <p class="timingsall__name">tFAW</p>
                            <p class="timingsall__text">Минимальное время активности четырех окон. Применяется в восьмибанковых устройствах</p>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="timingsall__card">
                        <div class="timingsall__up">
                            <p class="timingsall__name">tWR</p>
                            <p class="timingsall__text">Минимальное время между окончанием операции записи и подачей команды строки для одного банка</p>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="timingsall__card">
                        <div class="timingsall__up">
                            <p class="timingsall__name">tRTP</p>
                            <p class="timingsall__text">Минимальный интервал между подачей команды на чтение до команды на предварительный заряд</p>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="timingsall__card">
                        <div class="timingsall__up">
                            <p class="timingsall__name">tCCD</p>
                            <p class="timingsall__text">Устанавливает задержку между двумя командами CAS, когда последующее чтение обращается к другому</p>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="timingsall__card">
                        <div class="timingsall__up">
                            <p class="timingsall__name">tRFC</p>
                            <p class="timingsall__text">Минимальное время между командой на обновление строки и командой активизации</p>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="timingsall__card">
                        <div class="timingsall__up">
                            <p class="timingsall__name">tRDWR</p>
                            <p class="timingsall__text">Число тактов между операциями чтения и записи</p>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="timingsall__card">
                        <div class="timingsall__up">
                            <p class="timingsall__name">tRDRD</p>
                            <p class="timingsall__text">Число тактов между операциями чтения</p>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="timingsall__card">
                        <div class="timingsall__up">
                            <p class="timingsall__name">tWRWR</p>
                            <p class="timingsall__text">Число тактов между операциями записи</p>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="timingsall__card">
                        <div class="timingsall__up">
                            <p class="timingsall__name">tWRRD</p>
                            <p class="timingsall__text">Число тактов между операциями записи и чтения</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div class="swiper-prev"><img class="reviews__arrows" src="../assets/software/prev.svg"></div>
    <div class="swiper-next"><img class="reviews__arrows" src="../assets/software/next.svg"></div>
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
      spaceBetween: 79,
      allowTouchMove: false,
      speed: 450,
      loop: true,
      navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev'
      }
      // breakpoints: {
      //     1300: {
      //         spaceBetween: 100,
      //     },
      //     900: {
      //         spaceBetween: 70,
      //     },
      //     500: {
      //         spaceBetween: 40,
      //     },
      //     200: {
      //         spaceBetween: 10,
      //     },
      // }
    })
  }
}
</script>

<style scoped>
.timingsall {
    position: relative;
}
.timingsall__header {
        margin-top: 1.09375VW;
        font-weight: 500;
        font-size: 0.9375VW;
        line-height: 1.1458333333333333VW;
        text-align: center;
        margin-left: 6.25VW;
        color: #FFFFFF;
}

.timingsall__box {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-left:6.25VW;
}
.timingsall__line {
    margin-top: 0.5208333333333333VW;
    margin-bottom: 0.5208333333333333VW;
}
.timingsall__title {
    font-weight: 700;
    font-size: 1.4583333333333333VW;
    text-align: center;
    color: #FFFFFF;

}
.timingsall__arrows {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 1.8229166666666667VW;
    margin-top: 0.9895833333333333VW;
}
.timingsall__slider {
    margin-top: 0.26041666666666663VW;
    position: relative;
    width: 62.5VW;
    margin-left: 7.8125VW;
    padding: 0.26041666666666663VW 0;
}

.timingsall__slider .swiper-slide {
    height: 13.854166666666668VW !important;
    box-sizing: border-box;
    border: 1px solid #FFFFFF;
    border-radius: 0.5208333333333333VW;
    background: none;
}
.timingsall__card {
    padding: 0.5208333333333333VW 0.625VW;
}
.timingsall__arrows img {
    width: 52.61458333333333VW;
}
.timingsall__name {
    text-align: center;
    font-weight: 600;
        font-size: 1.4583333333333333VW;
        color: #FFFFFF;
        margin-top: 1.6666666666666667VW;
        margin-bottom: 1.6666666666666667VW;
}
.timingsall__text {
    font-weight: 400;
        font-size: 0.7291666666666666VW;
        line-height: 0.8854166666666666VW;
        text-align: center;
        color: #C1C1C1;
}
.timingsall .swiper__prev img {
    width:1.7708333333333333VW;
}
.timingsall .swiper__next img {
    width: 1.7708333333333333VW;
}
.timingsall .swiper-prev {
    position: absolute;
    bottom: 20%;
    left:6%;
    transition: all 0.3s ease;
    cursor: pointer;
}

.timingsall .swiper-prev:hover {
    opacity: 0.7;
    transform: scale(0.98);
}

.timingsall .swiper-next {
    position: absolute;
    bottom: 20%;
    right: -5%;
    transition: all 0.3s ease;
    cursor: pointer;
}

.timingsall .swiper-next:hover {
    opacity: 0.7;
    transform: scale(0.98);
}

.timingsall__motherboard {
    position: absolute;
    bottom: 50%;
    border:1px solid red;
    right: 0;
}
</style>
