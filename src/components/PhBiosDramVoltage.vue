<template>
  <div class="dram">
    <p class="dram__header">Настройки BIOS необходимые при разгоне оперативной памяти</p>
    <div class="dram__content">
        <div class="dram__lines">
            <p class="dram__voltage">DRAM Voltage</p>
            <div class="dram__img">
                <img src="../assets/bios/1.webp">
            </div>
        </div>
        <div class="dram__about">
            <div class="dram__des">
                <p class="dram__text">Для зеленых плашек без радиаторов рекомендуемое<br> максимальное напряжение - 1,35 V</p>
                <p class="dram__under">Можно поставить до 1.4V, если нет деградации чипов</p>
            </div>
            <div class="dram__des">
                <p class="dram__text">Для ОЗУ с радиаторами рекомендуемое максимальное<br> напряжение - 1,42 V / 1,45 V</p>
                <p class="dram__under">На Samsung B-Die - 1,5 V, если температура ОЗУ ~ 30-40°</p>
            </div>
            <div class="dram__des">
                <p class="dram__text">Для оперативной памяти, находящейся под<br> вентилятором, можно установить напряжение - 1,60 V</p>
                <p class="dram__under">В этом случае обязательно отслеживайте температуру памяти</p>
            </div>
        </div>
    </div>
    <p class="dram__ram">Не забывайте, что перегрев памяти или недостаток напряжения может вызвать ошибки тестирования или<br> нестабильность,
    обязательно посмотрите в интернете максимальное напряжение ваших чипов, потому что<br> есть чипы, которые могут
    деградировать от напряжения выше 1,35 В, например, Samsung C-Die
</p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.dram {
    height: 28.645833333333332VW;
}
.dram__header {
    text-align: center;
    font-weight: 500;
    font-size: 1.4583333333333333VW;
    color: #FFFFFF;
}
.dram__content {
    display: flex;
    margin-left: 17.864583333333332VW;
    margin-top: 2.1875VW;
}
.dram__lines {
    display: flex;
    align-items: center;
    margin-top: 1.5625VW;
    height: 11.979166666666668VW;
}
.dram__voltage {
    font-weight: 500;
    font-size: 1.4583333333333333VW;
    color: #FFFFFF;
    margin-bottom: 1.0416666666666665VW;
    margin-right: 1.0416666666666665VW;
}
.dram__about {
    margin-left: 2.3958333333333335VW;
}
.dram__img img {
    width: 11.458333333333332VW;
}
.dram__des {
    margin-bottom: 2.083333333333333VW;
}
.dram__text {
    font-weight: 400;
        font-size: 1.0416666666666665VW;
        line-height: 1.5104166666666667VW;
        color: #FFFFFF;
}
.dram__under {
    font-weight: 300;
    font-size: 0.7291666666666666VW;
    color: #9E9E9E;
}
.dram__ram {
    text-align: center;
    margin-top: 1.6666666666666667VW;
    font-weight: 300;
        font-size: 0.7291666666666666VW;
        color: #9E9E9E;
}
</style>
