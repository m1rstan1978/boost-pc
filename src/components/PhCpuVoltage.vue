<template>
    <div class="cpu">
        <p class="cpu__header">Настройки BIOS необходимые при разгоне оперативной памяти</p>
        <div class="cpu__content">
            <div class="cpu__lines">
                <p class="cpu__voltage">Максимальные напряжения<br> CPU SA / IO Voltages:</p>
                <div class="cpu__img">
                    <img src="../assets/bios/2.webp">
                </div>
            </div>
            <div class="cpu__about">
                <div class="cpu__lakes">
                    <p class="cpu__text">Coffee Lake Refresh - 1.35 V / 1.25 V<span class="cpu__span">(9th Gen)</span></p>
                </div>
                <div class="cpu__lakes">
                    <p class="cpu__text">Rocket Lake - 1.45 V / 1.35 V<span class="cpu__span">(10th Gen)</span></p>
                </div>
                <div class="cpu__lakes">
                    <p class="cpu__text">Rocket Lake - 1.45 V / 1.35 V<span class="cpu__span">(11th Gen)</span></p>
                </div>
                <div class="cpu__lakes">
                    <p class="cpu__textsec">Alder Lake - 1.35 V / 1.45 V (VDDQ)<span class="cpu__span">(12th Gen)</span></p>
                    <p class="cpu__under">На Alder Lake нет напряжения CPU IO, также на ADL я рекомендую не превышать 1.35V для <br> SA, но VDDQ может достигать 1.45V
                    на памяти с двумя рангами.</p>
                </div>
            </div>
        </div>
        <p class="cpu__ram">Память с двумя рангами требует большего напряжения на IMC, в самом конце мы снизим напряжение на контроллере памяти для
        улучшения стабильности.<br>
        Рекомендую перед разгоном максимально увеличить напряжение SA / IO, чтобы устранить потенциальные проблемы при запуске и
        прохождении POST /<br> стабилизации разгона. Не забывайте, что высокие напряжения SA / IO, также могут убить стабильность.
        </p>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.cpu {
    height: 28.645833333333332VW;
}
.cpu__header {
    text-align: center;
        font-weight: 500;
        font-size: 1.4583333333333333VW;
        color: #FFFFFF;
}
.cpu__content {
    display: flex;
    margin-left: 17.864583333333332VW;
    margin-top: 2.1875VW;
}
.cpu__lines {
    display: flex;
    align-items: center;
    margin-top: 1.5625VW;
    height: 11.979166666666668VW;
} 
.cpu__voltage {
font-weight: 500;
    font-size: 1.2583333333333333VW;
    color: #FFFFFF;
    margin-bottom: 1.0416666666666665VW;
    margin-right: 1.0416666666666665VW;
    text-align: center;
}
.cpu__about {
    margin-top: 1.3020833333333335VW;
    margin-left: 2.3958333333333335VW;
}
.cpu__lakes {
    margin-bottom: 2.083333333333333VW;
}
.cpu__text {
    font-weight: 400;
        font-size: 1.0416666666666665VW;
        line-height: 1.5104166666666667VW;
        color: #FFFFFF;
}
.cpu__textsec {
font-weight: 400;
    font-size: 1.0416666666666665VW;
    line-height: 1.5104166666666667VW;
    color: #FFFFFF;
}
.cpu__under {
    font-weight: 300;
    font-size: 0.7291666666666666VW;
    color: #9E9E9E;
}
.cpu__ram {
    text-align: center;
    margin-top: 1.6666666666666667VW;
    font-weight: 300;
    font-size: 0.7291666666666666VW;
    color: #9E9E9E;
}
</style>
