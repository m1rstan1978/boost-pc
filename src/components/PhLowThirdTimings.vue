<template>
    <div class="lowthird">
        <p class="lowthird__header">Понижение третичных таймингов</p>
        <div class="lowthird__content">
            <div class="lowthird__information">
                <div class="lowthird__box">
                <p class="lowthird__text">1. Установите третичные тайминги tRDRD, tWRWR sg/dg/dr/dd = 7/4/7/7, эти тайминги связаны с<br> таймингами tCCDL и tCCDS и
                должны быть равны им</p>
                    <p class="lowthird__last">2. Установите tRDWR_sg/dg/dr/dd = 12/12/12/12, на более высоких частотах могут потребоваться<br> более высокие значения
                    tRDWR</p>
                <p class="lowthird__des">По тестам занижение этого тайминга может уменьшить среднее значение FPS в играх</p>
                <p class="lowthird__last">3. Далее я рекомендую установить тайминг tWRRD_sg/dg = 6+tCWL+tWTRLS(S), как говорилось до<br> этого через него
                устанавливаются тайминги tWTRS и tWTRL, поэтому вам нужно подставить в<br> формулу значение этих таймингов, которое вы
                хотите установить.</p>
                    <p class="lowthird__ssilka">Тайминги, оканчивающиеся на _dr, нужны только для памяти с двумя рангами, поэтому вы можете<br> установить их = 1(0), а
                    тайминги, оканчивающиеся на _dd, нужны только для четырех плиток ОЗУ, поэтому<br> вы также можете установить их = 1(0)</p>

                </div>
            </div>

            <div class="lowthird__img">
                <img src="../assets/stability/4.webp">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.lowthird {
        margin-top: 2.8125VW;
}
.lowthird__header {
    font-weight: 600;
    font-size: 1.9791666666666665VW;
    color: #FFFFFF;
    margin-left: 20.3VW;
}

.lowthird__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 3.0208333333333335VW;
}

.lowthird__information {
    display: flex;
    align-items: center;
    width: 49.47916666666667VW;
    height: 23.4375VW;
    margin-left: 2.864583333333333VW;
}
.lowthird__box {
    height: 23.4375VW;
}
.lowthird__arrow {
    margin-left: 1.0416666666666665VW;
}

.lowthird__text {
    font-weight: 300;
    font-size: 0.8333333333333334VW;
    line-height: 180%;
    color: #FFFFFF;
    margin-bottom: 1.3020833333333335VW;
}

.lowthird__des {
    font-weight: 300;
    font-size: 14px;
    line-height: 180%;
    color: #808080;
    margin-bottom: 25px;
}

.lowthird__ssilka {
    font-weight: 300;
    font-size: 0.7291666666666666VW;
    line-height: 180%;
    color: #808080;
    margin-bottom: 1.3020833333333335VW;
}

.lowthird {
    font-weight: 300;
    font-size: 0.8333333333333334VW;
    line-height: 180%;
    color: #FFFFFF;
    margin-bottom: 0.4166666666666667VW;
}

.lowthird__img {
    margin-left: 6.25VW;
}
@media (max-width:1620px) {
    .lowthird__img img {
            width: 18.177083333333332VW;
        }
}
</style>
