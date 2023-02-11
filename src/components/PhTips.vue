<template>
  <div class="tips">
    <p class="tips__header">Рекомендации по разгону оперативной памяти</p>
    <div class="tips__content">
    <div class="tips__menu">
        <p class="tips__text">1. Выставите Power Down Mode - Disabled, для других плат установите PPD = 0, отключение PPD
            сделает тайминги<br>
            tXP / tCKE неактивными.</p>
        <p class="tips__text">2. На материнских платах MSI ODT Finetune / Rx,Tx Equalization может обеспечить стабильность на высоких частотах, один
        из пользователей форума написал, что Rx Equalization = 31 и ODT Finetune = 14 помогли ему стабилизировать память на
        высоких частотах.

        </p>
        <p class="tips__text">3. Отключите неиспользуемые слоты оперативной памяти в BIOS и выключите RGB-подсветку, это поможет снизить напряжение
        памяти и стабилизировать разгон.

        </p>
        <p class="tips__text">4. При выборе оперативной памяти рекомендую покупать платы с ревизией A2, поскольку эта ревизия печатной платы имеет
        самую низкую латентность - 13.13ns.

        </p>
        <p class="tips__text">5. Не используйте высокие напряжения CPU IO Voltage, так как коррекция ошибок может повлиять на игровой процесс и
        производительность, также соблюдайте низкие температуры плашек памяти, это также может повлиять на геймплей.

        </p>
        <p class="tips__text">6. На материнских платах Gigabyte для стабилизации высоких частот необходимо установить напряжение опорной шины VTT =
        DRAM Voltage / 2 + 20mV.
        </p>
        <p class="tips__text">7. На Asus Apex XII используйте кастомный BIOS 0088 от Danske для разгона памяти. Только на этой версии, я помог
        участнику форума сделать 4500 CL15 CR1 Dual Rank.

        </p>
        <p class="tips__text">8. На платах ASUS включение Round Trip Latency предотвращало запуск ПК из-за слишком жесткого обучения.
        </p>
        <p class="tips__text">9. Попробуйте поиграться со значениями Dllbwen на высоких частотах ОЗУ, рекомендую попробовать значения 0 / 2.
        </p>
        <p class="tips__text">10. На материнских платах ASUS, если у вас частоты выше 4000Mhz+, попробуйте эти сопротивления для стабилизации разгона:
        </p>
        <p class="tips__text">- 80 / 48 / 48<br>
        - 80 / 48 / 40<br>
        - 80 / 48 / 0
        </p>
        <p class="tips__textsec">12. Есть материнские платы MSI, где tCL 14 = tCL 15, а tCL 13 = tCL 14
        </p>
        <p class="tips__des">Это можно отследить по RTL блоку, в случае перехода с tCL 15 на tCL 14 значения RTL остаются такими же</p>
        <p class="tips__text">13. Многие материнские платы Gigabyte Z390 не принимает настройку RTL-IOL вручную, поэтому обязательно поставьте Memory
        Enchancement = Normal и найдите частоту на которой плата ставит адекватные значения RTL блока.

        </p>

    </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.tips ::-webkit-scrollbar {
    width: 0.3125VW;
}
.tips ::-webkit-scrollbar-thumb {
background: #FF0000;
    border-radius: 5.208333333333334VW;
}
.tips ::-webkit-scrollbar-track {
    background: #8F8F8F;
        border-radius: 5.208333333333334VW;
}
.tips__header {
    margin-top: 2.2916666666666665VW;
    font-weight: 600;
        font-size: 1.9791666666666665VW;
        text-align: center;
        color: #FFFFFF;
}
.tips__content {
    margin-top: 2.65625VW;
    margin-left: 17.864583333333332VW;
}
.tips__menu {
width: 57.552083333333336VW;
height: 20.833333333333336VW;
overflow: auto;
}
.tips__text {
    font-weight: 300;
        font-size: 0.8333333333333334VW;
        line-height: 180%;
        color: #FFFFFF;
        margin-bottom: 1.1625VW;
        width: 52.083333333333336VW;
}
.tips__text a {
    color: #FFFFFF;
}
.tips__textsec {
        font-weight: 300;
        font-size: 0.8333333333333334VW;
        line-height: 180%;
        color: #FFFFFF;
        margin-bottom: 0px;
        width: 52.083333333333336VW;
}
.tips__des {
    font-weight: 400;
        font-size: 0.7291666666666666VW;
        line-height: 180%;
        color: #808080;
        margin-bottom: 1.1625VW;
}
</style>
