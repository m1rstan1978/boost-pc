<template>
    <div class="system">
        <p class="system__header">Тестирование стабильности системы</p>
        <div class="system__content">
            <div class="system__test">
                <p class="system__text">1. Для теста стабильности памяти запустите TM5 с конфигурациям Extreme / Absolut / PCBDestroyer Anta777 и пройдите их<br>
                полностью (Для 16 ГБ ОЗУ тест длится 2 часа / 32 ГБ - 4 часа / 64 ГБ - 8 часов).</p>
                <div class="system__img">
                    <img src="../assets/bios/line.webp">
                </div>
            </div>
            <div class="system__test">
                <p class="system__text">2. Используем OCCT для тестирования контроллера памяти процессора,
                    запускаем тест CPU + AVX2 + Large + Normal +<br> Variable на 1 час, я считаю, что это лучший тест стабильности контроллера памяти и ОЗУ,
                    так как во время теста идет большая<br> нагрузка на IMC,
                    что позволяет быстрее подобрать правильные значения SA / IO напряжения. </p>
                <div class="system__img">
                    <img src="../assets/bios/line.webp">
                </div>
            </div>
            <div class="system__test">
                <p class="system__text">Далее синхронно снижаем SA / IO на 30 мВ попутно запуская тест описанный выше, например, если было 1,30В / 1,25В, то<br>
                ставим 1,27В / 1,22В, затем продолжаем снижать до самых низких стабильных значений</p>
                <div class="system__img">
                    <img src="../assets/bios/line.webp">
                </div>
            </div>
            <p class="system__text">Тренировку памяти при запуске можно отключить через Memory Fast Boot - No Training / Enabled.</p>
            <p class="system__des">Тайминги, с которыми связано большинство ошибок - tCL / tRCD / tRFC / tREFI / Command Rate = 1, также<br> огромное
            количество ошибок при запуске теста может быть связано с жестким обучением RTL-IOL</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.system__header {
    text-align: center;
        font-weight: 700;
        font-size: 1.4583333333333333VW;
        color: #FFFFFF;
        margin-top: 2.2916666666666665VW;
}
.system__content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 2.083333333333333VW;
}
.system__test {
    display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-bottom: 0.8333333333333334VW;
}
.system__text {
    font-weight: 400;
    font-size: 0.8333333333333334VW;
    line-height: 180%;
    text-align: center;
    color: #FFFFFF;
}
.system__des {
    text-align: center;
    font-weight: 300;
        font-size: 0.7291666666666666VW;
        line-height: 180%;
        color: #808080;
        margin-top: 2.083333333333333VW;
}
.system__img img {
    width: 2.65625VW;
}
</style>
