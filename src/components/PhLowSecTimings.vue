<template>
    <div class="lowsec">
        <p class="lowsec__header">Понижение вторичных таймингов</p>
        <div class="lowsec__content">
            <div class="lowsec__information" v-if="first === true">
                <div class="lowsec__box">
                    <div class="lowsec__block">
                        <p class="lowsec__last">1. Установите tWR = 16 и tRTP = 8, так как на частотах выше 4000Mhz+ низкие tWR / tRTP могут<br> вызвать нестабильность,
                        связанную с потерей данных памяти</p>
                        <p class="lowsec__des">Если вы работаете на более низких частотах, вы можете попробовать эти значения tWR и tRTP = 14 и 7 / 12 и 6</p>
                    </div>
                    <div class="lowsec__block">
                        <p class="lowsec__last">2. Установите tCCDL = 7 и tCCDS = 4,Integralfx пишет, что tCCDL = 8 помог ему со стабильностью<br> выше 3600Mhz</p>
                        <p class="lowsec__des">На платах ASUS эти тайминги отсутствуют</p>
                    </div>
                    <div class="lowsec__block">
                        <p class="lowsec__last">3. Найдите самое низкое рабочее значение tRFC, затем умножьте его на 1.04 и округлите до<br> числа кратного 8, также можете
                        установить по формуле ns * ddr_freq / 2000, взяв наносекунды из<br> таблицы Reous / integralFX</p>
                        <p class="lowsec__des">Тайминг сильно влияет на температуру памяти, поэтому обязательно отследите нестабильность в случае его<br> сильного
                        занижения</p>
                    </div>
                    <p class="lowsec__ssilka">Таблица tRFC - <a href="https://cdn.discordapp.com/attachments/952206841738305589/1041460871618109470/unknown.png" target="_blanck">Reous</a> /<a href="https://cdn.discordapp.com/attachments/952206841738305589/1041460741540171897/image.png" target="_blanck">integralFX</a></p>

                </div>
                <div class="lowsec__arrow" @click="first = false; sec = true">
                    <img src="../assets/stability/next.svg">
                </div>
            </div>
            <div class="lowsec__information" v-if="sec === true">
                <div class="lowsec__box">
                    <p class="lowsec__text">4. tWTRS и tWTRL задаем через третичные тайминги tWRRD_sg/dg, поэтому вы установите их<br> позже. Рекомендуемые значения
                    tWTRS = 4, tWTRL = 8</p>
                    <p class="lowsec__text">5. Далее можем уставить любое значение tREFI, но я рекомендую воспользоваться таблицей<br> значений tREFI от Anta777,
                    выставляем сначала максимальное значение, если на нем есть<br> ошибки, то понижаем до значения на котором ошибок нет :<br>
                    65024 / 43349 / 32512 / 26009 / 21674 / 18578 / 16256</p>
                    <p class="lowsec__last">6. Установите tCWL = tCL / tCWL = tCL-1, на большинстве материнских плат я рекомендую держать<br> его равным tCL или меньше
                    на единицу чтобы он был четным</p>
                                <p class="lowsec__ssilka">Таблица tRFC - <a href="https://cdn.discordapp.com/attachments/952206841738305589/1041460871618109470/unknown.png" target="_blanck">Reous</a> /<a  href="https://cdn.discordapp.com/attachments/952206841738305589/1041460741540171897/image.png" target="_blanck">integralFX</a></p>
                </div>
                <div class="lowsec__arrow" @click="first = true; sec = false">
                    <img src="../assets/stability/prev.svg">
                </div>
            </div>

            <div class="lowsec__img">
                <img src="../assets/stability/3.webp">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      first: true,
      sec: false
    }
  }
}
</script>

<style scoped>
.lowsec__header {
    font-weight: 600;
    font-size: 1.9791666666666665VW;
    color: #FFFFFF;
    margin-left: 20.3VW;
    margin-top: 2.2916666666666665VW;
}

.lowsec__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 3.0208333333333335VW;
}

.lowsec__information {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 2.864583333333333VW;
    width: 49.47916666666667VW;
    height: 23.4375VW;

}
.lowsec__arrow {
    margin-left: 1.0416666666666665VW;
}
.lowsec__arrow img {
    transition: all 0.3s ease;
    cursor: pointer;
}
.lowsec__arrow img:hover {
    opacity: 0.7;
    transform: scale(0.98);
}
.lowsec__text {
    font-weight: 300;
    font-size: 0.8333333333333334VW;
    line-height: 180%;
    color: #FFFFFF;
    margin-bottom: 1.3020833333333335VW;
}

.lowsec__des {
    font-weight: 300;
    font-size: 0.7291666666666666VW;
    line-height: 180%;
    color: #808080;
    margin-bottom: 1.3020833333333335VW;
}
.lowsec__ssilka {
    font-weight: 300;
    font-size: 0.7291666666666666VW;
    line-height: 180%;
    color: #808080;
    margin-bottom: 1.3020833333333335VW;
}
.lowsec__ssilka a {
    color: #808080;
}

.lowsec__last {
    font-weight: 300;
    font-size: 0.8333333333333334VW;
    line-height: 180%;
    color: #FFFFFF;
    margin-bottom: 0.4166666666666667VW;
}
.lowsec__img {
    margin-left: 6.25VW;
}
@media (max-width:1620px) {
    .lowsec__img img {
    width: 18.177083333333332VW;
}
}
</style>
