<template>
    <div class="overclocking">
        <div class="overclocking__content">
            <div class="overclocking__description" v-for="listOverclock in allListOverclocking" :key="listOverclock.title">
                <p class="overclocking__title" v-html="listOverclock.title"></p>
                <p class="overclocking__info"  v-html="listOverclock.info"></p>
                <div class="overclocking__oplata" >
                    <div class="overclocking__purchase"><button class="overclocking__btn"  @click="buy" v-html="listOverclock.btn"></button></div>
                    <div class="overclocking__line"> <img src="../assets/system/line.svg"></div>
                    <div class="overclocking__money">
                        <div class="overclocking__accessories">
                            <p class="overclocking__comp">RAM</p>
                            <input type="checkbox" value="false" @change="getRam" v-model="inputRam">
                            <p class="oveclocking__price" v-html="listOverclock.priceRam"></p>
                        </div>
                        <div class="overclocking__accessories">
                            <p class="overclocking__comp">GPU</p>
                            <input type="checkbox" value="false"  @change="getGpu" v-model="inputGpu">
                            <p class="oveclocking__price" v-html="listOverclock.priceGpu"></p>
                        </div>
                        <div class="overclocking__accessories">
                            <p class="overclocking__comp">CPU</p>
                            <input type="checkbox" value="false" @change="getCpu" v-model="inputCpu">
                            <p class="oveclocking__price" v-html="listOverclock.priceCpu"></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="overclocking__img" > <img src="../assets/overclocking/motherboard.webp"></div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      inputRam: false,
      inputGpu: false,
      inputCpu: false,
      listOverclockingRu:[
        {
          title:`Разгон комплектующих для<br> повышения производительности ПК`,
          info:`1. Разгон RAM (DDR4 / DDR5) - повышение частоты памяти, настройка первичных, вторичных, третичных таймингов, подбор
                напряжения на память и контроллер памяти, настройка RTL-IOL блока, в редких случая подбор ODT, тестирование на
                стабильность в TM5 / OCCT / MemTest Pro и т.д.<br>
                2. Разгон GPU - разгон частоты ядра / памяти, снятие лимитов энергопотребления, подбор напряжения на ядро, настройка
                скорости вентиляторов, стресс-тест видеокарты в нагруженных программах.<br>
                3. Разгон CPU - повышение частоты ядер процессора и кольцевой шины, подбор уровня LLC, настройка VRM материнской платы,
                установка схемы питания и стресс-тест процессора в Prime95 / OCCT / Cinebench R23 / Linpack Xtreme`,
          btn:'Приобрести',
          priceRam:'1290 ₽',
          priceGpu: '590 ₽',
          priceCpu:'590 ₽',
        }
      ],
      listOverclockingEn: [
        {
          title: `Overclocking components to improve<br> PC performance`,
          info: `1. Overclocking RAM (DDR4 / DDR5) - increase the frequency of memory, setting primary,<br>
          secondary, tertiary timings, voltage selection on the memory and memory controller, setting<br> RTL-IOL block, in rare cases, the selection of ODT, 
          stability testing in the 
          TM5 / OCCT / MemTest Pro etc.<br>
                2. GPU overclocking - overclocking the core / memory frequency, removing the power<br> consumption 
                limits, selecting the voltage per core, adjusting the fan speed, video card stress test<br> in loaded programs.<br>
                3. CPU overclocking - increasing CPU core and ring frequency, selecting LLC level, motherboard<br> VRM setup, 
                power scheme setup and CPU stress test in Prime95 / OCCT / Cinebench R23 /<br> Linpack Xtreme`,
          btn: 'Purchase',
          priceRam: '45 €',
          priceGpu: '20 €',
          priceCpu: '20 €',
        }
      ],
    }
  },
  methods: {
    buy () {
      if(localStorage.getItem('en') === null) {
        if (this.inputRam === true || this.inputGpu === true || this.inputCpu === true) {
          const summ = this.getRam() + this.getGpu() + this.getCpu()
          this.$emit('payment')
          this.$store.state.price = summ
          this.$store.state.overclock = true
        }
      }
      else {
        if (this.inputRam === true || this.inputGpu === true || this.inputCpu === true) {
          const summ = this.getRam() + this.getGpu() + this.getCpu()
          this.$emit('payment')
          this.$store.state.priceEn = summ
          this.$store.state.overclock = true
        }
      }
    },
    getRam () {
      if(localStorage.getItem('en') === null) {
        if (this.inputRam === true) {
          return 1290
        } else {
          return false
        }
      }
      else {
        if (this.inputRam === true) {
          return 45
        } else {
          return false
        }
      }
    },
    getGpu () {
     if(localStorage.getItem('en') === null) {
       if (this.inputGpu === true) {
         return 590
       } else {
         return false
       }
     }
     else {
       if (this.inputGpu === true) {
         return 20
       } else {
         return false
       }
     }
    },
    getCpu () {
      if (localStorage.getItem('en') === null) {
        if (this.inputCpu === true) {
          return 590
        } else {
          return false
        }
      }
      else {
        if (this.inputCpu === true) {
          return 20
        } else {
          return false
        }
      }
    }
  },
  computed:{
    allListOverclocking() {
      if(localStorage.getItem('en') === null) {
        return this.listOverclockingRu
      }
      else {
        return this.listOverclockingEn
      }
    }
  }
}
</script>

<style scoped>
.overclocking {
    min-height: 36.45833333333333VW;
}

.overclocking__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.overclocking__description {
    margin-left: 8.958333333333334VW;
    margin-top: 5.208333333333334VW;
}

.overclocking__title {
    font-weight: 500;
    font-size: 1.4583333333333333VW;
    line-height: 140%;
    color: #FFFFFF;
    margin-bottom: 1.40625VW;
}

.overclocking__info {
    font-weight: 300;
    font-size: 0.8333333333333334VW;
    line-height: 180%;
    color: #E1E1E1;
    width: 45.46875VW;
    margin-bottom: 4.270833333333333VW;
}

.overclocking__oplata {
    display: flex;
    align-items: center;
}

.overclocking__btn {
    border: 1px solid #FFFFFF;
    background: none;
    padding: 0.78125VW 1.8229166666666667VW;
    font-weight: 400;
    font-size: 0.8333333333333334VW;
    color: #FFFFFF;
    transition: all 0.3s ease;
    cursor: pointer;
}

.overclocking__btn:hover {
    background: #fff;
    color: #070200;
}

.overclocking__line img {
    height: 4.375VW;
}
.overclocking__img {
  margin-right: 7.8125VW;
}
.overclocking__img img {
  width: 23.4375VW;
}
.overclocking__line {
    margin: 0 1.875VW 0 3.6458333333333335VW;
}
.overclocking__accessories {
    display: flex;
}
.overclocking__comp {
    font-weight: 600;
    font-size: 0.7291666666666666VW;
    color: #444141;
    min-width: 1.8229166666666667VW;
    margin-right: 1.9791666666666665VW;
    margin-top: 2px;
}
.oveclocking__price {
    font-weight: 500;
    font-size: 0.9375VW;
    color: #FFFFFF;
    margin-left: 0.78125VW;
}
</style>
