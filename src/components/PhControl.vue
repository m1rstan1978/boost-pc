<template>
  <div class="control">
    <div class="control__first" v-if="first === true">
      <p class="control__header">Настройка сопротивлений RTT (ODT)</p>
      <div class="control__content">
        <div class="control__cards">
          <div class="control__card">
            <div class="control__menu">
              <p class="control__name">WR</p>
              <p class="control__text">Динамическое<br> сопротивление записи на<br> кристалле</p>
            </div>
          </div>
          <div class="control__card">
            <div class="control__menu">
              <p class="control__name">PARK</p>
              <p class="control__text">Полное сопротивление<br> оконечного устройства на<br> кристалле</p>
            </div>
          </div>
          <div class="control__card">
            <div class="control__menu">
              <p class="control__name">NOM</p>
              <p class="control__text">Номинальное сопротивление<br> оконечного устройства на<br> кристалле</p>
            </div>
          </div>
        </div>
        <div class="control__about">
          <p class="control__info">
            Если RTT Nom = 0, RTT Park будет выше, также RTT Park помогает предотвратить потерю целостности сигнала.
            Anta777 советует поддерживать<br> RTT Park на минимальном ненулевом уровне.
          </p>
          <div class="control__img"><img src="../assets/bios/line.webp"></div>
          <p class="control__info">
            Регулировка ODT значительно помогает снизить напряжение на памяти и в некоторых случаях позволяет увеличить
            частоту
            оперативной памяти.<br> Для теста сопротивлений вам понадобится GSAT, записанный на флешку через Rufus (Настройки
            дефолт,
            MBR / FAT32).
          </p>
          <p class="control__des">RTT Park и RTT Nom принимают значения - 240/120/80/48/40/34/0</p>
        </div>
      </div>
    </div>
    <div class="control__sec" v-if="sec === true">
      <p class="control__header">Подбор сопротивлений RTT WR / RTT PARK / RTT NOM:</p>
      <div class="control__content">
        <div class="control__box">
          <p class="control__textsec">1. Зайдите в BIOS и установите все сопротивления на Auto</p>
          <div class="control__img"><img src="../assets/bios/line.webp"></div>
        </div>
        <div class="control__box">
          <p class="control__textsec">2. Найдите минимальное напряжение, при котором появляются ошибки в GSAT (Обратите внимание на количество<br> ошибок)</p>
          <div class="control__img"><img src="../assets/bios/line.webp"></div>
        </div>
        <div class="control__box">
          <p class="control__textsec">3. В начале подбора напряжений я рекомендую держать RTT WR > RTT PARK > RTT NOM, бывают редкие случаи, когда<br> RTT NOM>RTT
          PARK, также иногда необходимо провести тестирование, начиная с RTT WR = 120
</p>
          <div class="control__img"><img src="../assets/bios/line.webp"></div>
        </div>
        <div class="control__box">
          <p class="control__textsec">4. Переберите все варианты с RTT WR = 80, увеличивая с нестабильностью RTT PARK, начните с сопротивлений - 80/34/0
</p>
          <div class="control__img"><img src="../assets/bios/line.webp"></div>
        </div>
        <div class="control__box">
          <p class="control__textsec">5. Установите сопротивления с наименьшими ошибками или сопротивления на которых ошибок нет, если таких<br> сопротивлений
          несколько, то выберите сопротивления с наименьшим RTT PARK / RTT NOM
</p>
          <div class="control__img"><img src="../assets/bios/line.webp"></div>
        </div>
        <div class="control__box">
          <p class="control__textsec">6. Затем добавляем 40 мВ к Dram Voltage, если вы тестировали сопротивления на 1,38V, то установите 1.42V</p>
          <div class="control__img"><img src="../assets/bios/line.webp"></div>
        </div>
        <div class="control__box">
          <p class="control__desec"><a href="https://www.overclock.net/threads/running-gsat-in-windows-10-with-windows-subsystem-for-linux-wsl.1747674/">Запуск GSAT из под Windows</a></p>
        </div>
      </div>
    </div>
<div class="control__pagination">
  <p @click="first = true;sec = false" class="control__numbers" :class="{active : first === true}" >1</p>
  <p @click="first = false;sec = true" class="control__numbers" :class="{active : sec === true}" >2</p>
</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      first: true,
      second: false
    }
  }
}
</script>

<style scoped>
.control {
  position: relative;
  height: 100vh;
}
.control__header {
  font-weight: 600;
 font-size: 1.9791666666666665VW;
  text-align: center;
  color: #FFFFFF;
  margin-top: 2.2916666666666665VW;
  margin-bottom: 2.2916666666666665VW;
}
.control__content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.control__cards {
  display: flex;
  align-items: center;
}
.control__card {
  border: 0.052083333333333336VW solid #FFFFFF;
    border-radius: 0.5208333333333333VW;
    background: none;
    margin-right: 1.5625VW;
}
.control__menu {
  padding: 0px 0.9375VW;
}
.control__name {
  font-weight: 600;
  font-size: 1.4583333333333333VW;
  text-align: center;
  color: #FFFFFF;
  margin-top: 1.3020833333333335VW;
  margin-bottom: 2.083333333333333VW;
}
.control__text {
font-weight: 300;
  font-size: 0.7291666666666666VW;
  text-align: center;
  margin-bottom: 3.0729166666666665VW;
  color: #C1C1C1;
}
.control__textsec {
  font-weight: 400;
    font-size: 0.9375VW;
    text-align: center;
    margin-bottom: 1.0416666666666665VW;
    color: #FFF;
}
.control__pagination {
position: absolute;
top:13%;
left:6.354166666666666VW;
}
.control__about {
  margin-top: 1.5625VW;
}
.control__info {
  text-align: center;
  font-weight: 300;
    font-size: 0.8333333333333334VW;
    line-height: 180%;
   color: #FFFFFF;
   margin-bottom: 0.78125VW;
}
.control__img {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5208333333333333VW;
}
.control__img img {
  width: 2.65625VW;
}
.control__des {
  font-weight: 300;
  font-size: 0.7291666666666666VW;
  text-align: center;
  color: #808080;
}
.control__desec {
margin-top: 1.0416666666666665VW;
font-weight: 300;
  font-size: 0.7291666666666666VW;
  text-align: center;
}
.control__desec a {
  color: #808080;
}
.control__box {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.control__numbers {
  border: 0.10416666666666667VW solid #FFF;
  margin-bottom: 1.3020833333333335VW;
  border-radius: 0.26041666666666663VW;
  padding: 0.78125VW;
  width: 1.5625VW;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25VW;
  color: #FFFFFF;
  margin-right: 1.6666666666666667VW;
  transition: all 0.3s ease;
  cursor: pointer;
}
.control__numbers:hover {
  background: #FFF;
  color: #070200;
}
.active {
  background: #fff;
  color:#070200;
}
</style>
