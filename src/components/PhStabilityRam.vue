<template>
  <div class="stability">
    <p class="stability__header">Нахождение стабильной частоты оперативной памяти</p>
    <div class="stability__content">
        <div class="stability__information">
            <p class="stability__text">1. Установите первичные тайминги на 19-22-22-42 (tCL-tRCD-tRP-tRAS) и установите tCWL = 18, так<br> как большинство
            материнских плат принимают только четный tCWL</p>
            <p class="stability__textsec">2. Далее установите tRRDS-tRRDL-tFAW = 4-6-16, на большинстве ОЗУ эта комбинация таймингов<br> увеличивает
            производительность и ускоряет тестирование оперативной памяти</p>
            <p class="stability__des">По моему опыту только Hynix MFR не смогли стабильно работать на tFAW = 16</p>
            <p class="stability__last">3. Увеличиваем частоту с шагом 133Mhz до частоты на которой у нас происходит запуск, после<br> начинаем тестировать память с
            помощью TM5, загружая конфиг Extreme / Absolut Anta777</p>
            <p class="stability__des">Рекомендую тестировать память более 40 минут, если вы нашли ошибки, то пробуйте уменьшать частоту на<br> 133Mhz до момента
            пока не будет ошибок в тесте.</p>
        </div>
        <div class="stability__img">
            <img src="../assets/stability/1.webp">
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.stability__header {
    font-weight: 600;
    font-size: 1.9791666666666665VW;
    color: #FFFFFF;
    margin-left: 9.333333333333332VW;
    margin-top: 2.2916666666666665VW;
}
.stability__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 3.0208333333333335VW;
}
.stability__information {
    margin-left: 2.864583333333333VW;
}
.stability__text {
    font-weight: 300;
    font-size: 0.8333333333333334VW;
    line-height: 180%;
    color: #FFFFFF;
    margin-bottom: 1.3020833333333335VW;
}
.stability__textsec {
font-weight: 300;
    font-size: 0.8333333333333334VW;
    line-height: 180%;
    color: #FFFFFF;
    margin-bottom: 0.4166666666666667VW;
}
.stability__des {
    font-weight: 300;
    font-size: 0.7291666666666666VW;
    line-height: 180%;
    color: #808080;
    margin-bottom: 1.3020833333333335VW;
}
.stability__last {
    font-weight: 300;
        font-size: 0.8333333333333334VW;
        line-height: 180%;
        color: #FFFFFF;
        margin-bottom: 1.3020833333333335VW;
}
.stability__img {
    margin-left: 12.5VW;
}
.stability__img img {
    width: 21.041666666666668VW;
}
</style>
