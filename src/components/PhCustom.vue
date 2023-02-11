<template>
    <div class="custom">
      <div class="custom__pag">
        <div class="custom__pagination" v-for="item in pagination" :key="item">
          <p @click="addBtns(item)" class="custom__numbers" :class="{active  : currentPage === item}">{{ item }}</p>
        </div>
      </div>
      <div class="custom___for" v-for=" key in customList" :key="key.id">
      <div class="custom__content">
        <div class="custom__left">
          <p class="custom__title" v-html="key.title"></p>
          <p class="custom__text" v-html="key.text"></p>
          <p class="custom__info" v-html="key.info"></p>
        </div>
        <div class="custom__right" >
          <img class="custom__icon" :src="key.img">
        </div>
      </div>
      </div>
      <div class="custom__oplata">
        <div class="custom__purchase"><button class="custom__btn" @click="nextStep">{{btn}}</button></div>
        <div class="custom__line"> <img src="../assets/system/line.svg"></div>
        <p class="custom__price">{{price}}</p>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      windows: true,
      ram: false,
      test: false,
      cpu: false,
      list: [
        {
          title: 'Чистая установка Windows 10<br> 22H2 Pro & Настройка BIOS:',
          text: `1. Установка всех драйвер на Ethernet / SATA / NVMe / Chipset / GPU<br>
            2. Настройка параметров реестра и отключение ненужных служб <br>
            3. Удаление неиспользуемых приложений и компонентов от Microsoft <br>
            4. Настройка системы под стримы и запись видео (OBS / NVIDIA ShadowPlay) `,
          img: '../custom/1.webp'
        },
        {
          title: 'Разгон RAM (DDR4 / DDR5): ',
          text: `1. Повышение частоты оперативной памяти и тюнинг первичных, вторичных и третичных<br> таймингов + настройка RTL блока <br> 
            2. На Ryzen повышение частоты шины FCLK и подбор CAD_BUS / procODT<br> 
            3. Подбор напряжений на контроллер памяти: SA / IO (Intel), SOC (Ryzen)<br> 
            4. Подбор напряжения на ОЗУ в зависимости от чипов памяти и охлаждения, в редких случаях<br>  подбор сопротивлений на платформе Intel`,
          info: 'В случае разгона на DDR5 подбор напряжений CPU MC / CPU SA / CPU VDDQ TX / DRAM VDD, VDDQ',
          img: '../custom/2.webp'
        },
        {
          title: 'Разгон CPU (Intel / Ryzen): ',
          text: `1. Повышение частоты ядер и кольцевой шины процессора<br>
            2. Подбор напряжения CPU Vcore / Load-Line Callibration Level<br>
            3. Настройка лимитов процессора PL1 / PL2 и отключение энергосберегающих параметров<br>
            4. Изменений настроек VRM материнской платы (Настройка CPU & DRAM Current Capability / VRM <br> Switching Frequency / Spread Spectrum)`,
          img: '../custom/3.webp'
        },
        {
          title: 'Тестирование системы на <br>стабильность:',
          text: `1. Стресс-тест процессора, оперативной памяти и контроллера памяти процессора в тяжелых<br> программах с быстрой сменой алгоритмов тестирования:<br> 
            Linpack Xtreme / OCCT / Prime95 / Cinebench R23 / Y-Cruncher / MemTestPro / TM5<br>
            2. Корректировки напряжений и дополнительных опций для стабилизации системы `,
          img: '../custom/4.webp'
        }
      ],
      listEn:[
        {
          title: 'Clean installation of Windows<br> 10 22H2 Pro & BIOS setup:',
          text: `1.  Installing all Ethernet / SATA / NVMe / Chipset / GPU drivers<br>
2. Adjusting registry settings and disabling unnecessary services<br>
3. Removing unused applications and components from Microsoft, as well as disabling all telemetry<br> and Windows data collection <br>
4. Configuring system for streaming and video recording (OBS / NVIDIA ShadowPlay) `,
          img: '../custom/1.webp'
        },
        {
          title: 'Overclocking RAM (DDR4 / DDR5): ',
          text: `1. Increasing RAM frequency and tuning primary, secondary and tertiary timings + RTL<br>
block tuning <br>
2. On Ryzen increasing FCLK bus frequency and selecting CAD_BUS / procODT<br>
3. Memory controller voltage selection: SA / IO (Intel), SOC (Ryzen)<br>
4. Selecting the voltage on the RAM depending on the memory chips and cooling, in rare cases<br> the selection of resistors on the Intel platform`,
          info: 'In case of overclocking on DDR5 voltage selection CPU MC / CPU SA / CPU VDDQ TX / DRAM VDD, VDDQ ',
          img: '../custom/2.webp'
        },
        {
          title: 'Overclocking CPU (Intel / Ryzen):',
          text: `1. Increasing the frequency of cores and the processor ring bus <br>
2. CPU Vcore / Load-Line Callibration Level<br>
3. Setting processor limits PL1 / PL2 and disabling power saving settings<br>
4. Changing the motherboard VRM settings (CPU & DRAM Current Capability / VRM Switching<br> Frequency / Spread Spectrum)`,
          img: '../custom/3.webp'
        },
        {
          title: `System stability testing:`,
          text: `1. Stress test of CPU, RAM and CPU memory controller in heavy programs with fast change of testing<br> algorithms: <br>
Linpack Xtreme / OCCT / Prime95 / Cinebench R23 / Y-Cruncher / MemTestPro / TM5<br>
2. Adjustments of voltages and additional options to stabilize the system<br>
`,
          img: '../custom/4.webp'
        }
      ],
      startIdx: 0,
      endIdx: 1,
      currentPage: 1,
      btn:'Приобрести',
      price:'2490 ₽'
    }
  },
  methods: {
    nextStep () {
      if(localStorage.getItem('en') === null) {
        this.$emit('payment')
        this.$store.state.price = 2490
        this.$store.state.overclock = false
      }
      else {
        this.$emit('payment')
        this.$store.state.priceEn = 85
        this.$store.state.overclock = false
      }
    },
    addBtns (key) {
      this.startIdx = (key - 1) * 1
      this.endIdx = key * 1
      this.currentPage = key
    },
    checkLang() {
      if(localStorage.getItem('en') === null) {
        this.btn = 'Приобрести'
        this.price = '2490 ₽'
      }
      else {
        this.btn = 'Purchase'
        this.price = '85 €'
      }
    }
  },
  computed: {
    pagination () {
      if(localStorage.getItem('en') === null) {
        return Math.ceil(this.list.length / 1)
      }
      else {
        return Math.ceil(this.listEn.length / 1)
      }
    },
    customList () {
      if(localStorage.getItem('en') === null) {
        return this.list.slice(this.startIdx, this.endIdx)
      }
      else {
        return this.listEn  .slice(this.startIdx, this.endIdx)
      }
    }
  },
  mounted() {
    this.checkLang()
  }

}
</script>

<style scoped>
.custom {
    height: 36.45833333333333VW;
    overflow: hidden;
}
.custom__pag {
  display: flex;
  margin-top: 2.3958333333333335VW;
  margin-left: 8.958333333333334VW;
}
.custom__numbers {
    border: 0.10416666666666667VW solid #FFF;
    border-radius: 5px;
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
.custom__numbers:hover {
    background: #FFF;
    color:#070200;
}

.Active {
background: #FFF;
color: #070200;
}
.custom__content {
  display: flex;
  justify-content: space-between;

  margin-left: 9.010416666666666VW;

}
.custom__title {
  margin-top: 3.854166666666667VW;
  font-weight: 400;
  font-size: 1.875VW;
  color: #FFFFFF;
  margin-bottom: 0.9375VW;
}
.custom__text {
  font-weight: 300;
  font-size: 0.8333333333333334VW;
  line-height: 180%;
color: #E1E1E1;
}
.custom__info {
  font-weight: 400;
    font-size: 0.7291666666666666VW;
    color: #9E9E9E;
    margin-top: 0.5208333333333333VW;
}
.custom__oplata {
  display: flex;
  align-items: center;
  margin-left: 9.010416666666666VW;
}

.custom__btn {
  border: 1px solid #FFFFFF;
  background: none;
  padding: 0.78125VW 1.8229166666666667VW;
  font-weight: 400;
  font-size: 0.8333333333333334VW;
  color: #FFFFFF;
  transition: all 0.3s ease;
  cursor: pointer;
}

.custom__btn:hover {
  background: #fff;
  color: #070200;
}
.custom__line img {
  height: 4.375VW;
}
.custom__line {
  margin: 0 3.6458333333333335VW;
}
.custom__price {
  font-weight: 600;
  font-size: 1.7708333333333333VW;
  color: #FFFFFF;
}
.custom__right {
 margin-right: 7.8125VW;
 height: 23.4375VW;
}

.active  {
  background: #FFF;
    color: #070200;
}

@media (max-width:1620px) {
  .custom__right img {
      width: 24.4375VW;
    }
}
@media (max-width:1300px) {
.custom__right img {
  width: 23.4375VW;
}
}
</style>
