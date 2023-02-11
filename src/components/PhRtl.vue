<template>
    <div class="rtl">
        <p class="rtl__header">Настройка блока RTL-IOL / Обучение памяти</p>
        <div class="rtl__content">
            <div class="rtl__settings">
                <div class="rtl__iol">
                    <p class="rtl__name">IOL</p>
                    <div class="rtl__img">
                        <img src="../assets/rtl/arrow.svg">
                    </div>
                    <p class="rtl__des">время, которое требуется оперативной памяти для отправки ответа после получения запроса</p>
                </div>
                <div class="rtl__block">
                    <p class="rtl__name">RTL</p>
                    <div class="rtl__img">
                        <img src="../assets/rtl/arrow.svg">
                    </div>
                    <p class="rtl__des">время, которое требуется оперативной памяти для отправки ответа после получения запроса</p>
                </div>
                <div class="rtl__line"><img src="../assets/bios/line.webp"> </div>
            </div>
        </div>
        <p class="rtl__methods">Два способа настройки блока RTL:</p>
        <p class="rtl__information">1. Вы можете включить Round Trip Latency пытаясь поймать верную тренировку памяти,<br>
            актуально для систем, в которых не
            применяется ручная настройка RTL-IOL</p>
        <p class="rtl__information">2. Уменьшить IOL Offset до минимального рабочего значения, затем сложить получившиеся IOL
            и<br> IOL Offset и вычесть из них
            21, затем установить получившиеся IOL канала, продублировать<br> значения RTL блока и поставить IOL Offset = 21
        </p>
        <p class="rtl__below">Пример правильного обучения IOL каналов: 5-5 / 5-6 / 6-6 / 6-7 / 7-7, также разница между каналами
            RTL<br> должна быть не
            более 2 единиц</p>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.rtl__header {
    text-align: center;
    font-weight: 700;
    font-size: 1.9791666666666665VW;
    color: #FFFFFF;
    margin-top: 2.2916666666666665VW;
}
.rtl__content {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.5625VW;
}
.rtl__iol {
display: flex;
    align-items: center;
    margin-bottom: 1.5625VW;
}
.rtl__block {
    display: flex;
    align-items: center;
}
.rtl__name {
font-weight: 600;
font-size: 1.9791666666666665VW;
color: #FFFFFF;
margin-right: 1.875VW;
width: 3.90625VW;
}
.rtl__img img {
    display: flex;
    align-items: center;
    width: 7.5VW;
}
.rtl__des {
    font-weight: 300;
    font-size: 0.8333333333333334VW;
    color: #FFFFFF;
    margin-left: 1.875VW;
}
.rtl__line {
    text-align: center;
    margin-top: 0.5208333333333333VW;
}
.rtl__methods {
    text-align: center;
    font-weight: 600;
    font-size: 1.25VW;
    color: #FFFFFF;
    margin-top: 0.5208333333333333VW;
    margin-bottom: 0.78125VW;
}
.rtl__information {
    text-align: center;
    font-weight: 300;
    font-size: 0.8333333333333334VW;
    line-height: 180%;
    color: #FFFFFF;
    margin-bottom: 0.5208333333333333VW;
}
.rtl__below {
    text-align: center;
    font-weight: 300;
        font-size: 0.7291666666666666VW;
        line-height: 180%;
        color: #808080;
        margin-top: 1.5625VW;
}
</style>
