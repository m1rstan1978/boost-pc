<template>
    <div class="lowfirst">
        <p class="lowfirst__header">Понижение первичных таймингов</p>
        <div class="lowfirst__content">
            <div class="lowfirst__information">
                <p class="lowfirst__text">1. Начинайте уменьшать tCL до тех пор, пока в тесте не появится ошибки, после того, как вы<br> нашли рабочий tCL, переходите
                к настройке tRCD-tRP, также не забывайте, что tCWL = tCL, или<br> tCWL = tCL - 1</p>
                <p class="lowfirst__text">2. Уменьшайте синхронно tRCD-tRP на единицу, пока не появится нестабильность.<br> На большинстве чипов tRCD-tRP больше
                tCL,
                кроме чипов Samsung B-Die, на них можно сделать<br> ровные tCL и tRCD-tRP</p>
                <p class="lowfirst__last">3. Установите tRAS = tCL + tRCD + 4(2), на большинстве ОЗУ это будет верная формула, потому что<br> установка значений ниже
                может привести к потере производительности.</p>
                <p class="lowfirst__des">На материнских платах ASUS tRCD и tRP обозначены как один тайминг, на других платах при установке разных<br> значений tRP и
                tRCD будет выставлено наибольшее из них. Если вы установите tRCD равным 18, а tRP равным 19,<br> оба будут работать в более
                высокое время 19.</p>
            </div>
            <div class="lowfirst__img">
                <img src="../assets/stability/2.webp">
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.lowfirst__header {
    font-weight: 600;
    font-size: 1.9791666666666665VW;
    color: #FFFFFF;
    margin-left: 20.3VW;
    margin-top: 2.2916666666666665VW;
}

.lowfirst__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 3.0208333333333335VW;
}

.lowfirst__information {
    margin-left: 2.864583333333333VW;
}

.lowfirst__text {
    font-weight: 300;
    font-size: 0.8333333333333334VW;
    line-height: 180%;
    color: #FFFFFF;
    margin-bottom: 1.3020833333333335VW;
}

.lowfirst__textsec {
    font-weight: 300;
    font-size: 0.8333333333333334VW;
    line-height: 180%;
    color: #FFFFFF;
    margin-bottom: 0.4166666666666667VW;
}

.lowfirst__des {
    font-weight: 300;
    font-size: 0.7291666666666666VW;
    line-height: 180%;
    color: #808080;
    margin-bottom: 1.3020833333333335VW;
}

.lowfirst__last {
    font-weight: 300;
    font-size: 0.8333333333333334VW;
    line-height: 180%;
    color: #FFFFFF;
    margin-bottom: 0.4166666666666667VW;
}

.lowfirst__img {
    margin-left: 12.5VW;
}
@media (max-width:1300px) {
    .lowfirst__img img {
            width: 21.041666666666668VW;
        }
}
</style>
