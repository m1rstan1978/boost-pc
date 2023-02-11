<template>
    <div class="command">
        <p class="command__header">Установка Command Rate = 1</p>
        <div class="command__content">
            <div class="command__information">
                <div class="command__box">
                    <p class="command__last">Command Rate - это время, необходимое контроллеру для декодирования команд и адресов.<br>
                         При 1T команда распознается за 1 тактовый цикл, при 2T - за 2 тактовых цикла.</p>
                    <p class="command__des">На платах Z490 запустить CR1 не так просто, и не каждая материнская плата способна это сделать,
                        также<br> может потребоваться добавить напряжения SA / IO
                        для запуска CR1, кроме этого пробуем устанавливать<br> соотношение N:1 / N:1 = 1 (3), логически N:1 отличается от 1N.</p>
                    <p class="command__last">Параметры, которые могут помочь сделать CR1:</p>
                    <p class="command__text">Trace Centering - Enabled, этот параметр доступен только на платах ASUS ROG, может помочь<br> сделать CR1 на печатной плате
                    A2 RAM по информации с форумов, я рекомендую проверить<br> значения Disabled и Enabled у этой опции, в случае если никакого
                    положительного эффекта нету,<br> то опции следует отключить.</p>
                    <p class="command__text">Vref Voltage - это напряжение сигнала CPU к RAM, устанавливается как множитель, по <br>
                        умолчанию на платах ASUS Z490 -
                        0.600X, также связан с параметром Rank Margin Tool,<br> напряжение Vref определяет высокий или низкий сигнал, я
                        рекомендую
                        перейти к его<br> настройке в случае, если вы уперлись в возможности вашего контроллера памяти</p>
                        <p class="command__text">Maximus Tweak - Mode 2, это предустановленные параметры/алгоритмы памяти для разгона<br> оперативной памяти (Настройка
                        доступна только на платах ASUS ROG)</p>
                        <p class="command__text">Late (Early) Command Training - Enabled (Позднее обучение памяти), в некоторых случаях<br> помогает сделать CR1, также
                        попробуйте переключить Early Command Training для запуска<br> Command Rate 1
</p>

                </div>
            </div>

            <div class="command__img">
                <img src="../assets/stability/5.webp">
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
::-webkit-scrollbar {
    width: 0.3645833333333333VW;
}
::-webkit-scrollbar-thumb {
    background: #FF0000;
    border-radius: 0.3645833333333333VW;
}
::-webkit-scrollbar-track {
    background: #8F8F8F;
    border-radius: 0.3645833333333333VW;
}
.command__header {
    font-weight: 600;
    font-size: 1.9791666666666665VW;
    color: #FFFFFF;
    margin-left: 23.2VW;
    margin-top: 2.2916666666666665VW;
}

.command__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 3.0208333333333335VW;
}

.command__information {
    display: flex;
    margin-left: 2.864583333333333VW;
    height: 20.833333333333336VW;
    padding-right: 2.604166666666667VW;
    overflow: auto;
}
.command__arrow {
    margin-left: 1.0416666666666665VW;
}

.command__text {
    font-weight: 300;
    font-size: 0.8333333333333334VW;
    line-height: 180%;
    color: #FFFFFF;
    margin-bottom: 1.3020833333333335VW;
}

.command__des {
    font-weight: 300;
    font-size: 0.7291666666666666VW;
    line-height: 180%;
    color: #808080;
    margin-bottom: 1.3020833333333335VW;
}

.command__ssilka {
    font-weight: 300;
    font-size: 0.7291666666666666VW;
    line-height: 180%;
    color: #808080;
    margin-bottom: 1.3020833333333335VW;
}

.command__last {
    font-weight: 300;
    font-size: 0.8333333333333334VW;
    line-height: 180%;
    color: #FFFFFF;
    margin-bottom: 0.4166666666666667VW;
}

.command__img {
    margin-left: 10.416666666666668VW;
}
@media (max-width:1620px) {
    .command__img img {
            width: 18.177083333333332VW;
        }
}
</style>
