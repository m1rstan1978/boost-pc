<template>
  <div class="system">
    <div class="system__content">
        <div class="system__description" v-for="listPhSystem in allListPhSystem" :key="listPhSystem.id">
            <p class="system__title" v-html="listPhSystem.title"></p>
            <p class="system__info" v-html="listPhSystem.info"></p>
            <p class="system__text" v-html="listPhSystem.text"></p>
            <div class="system__oplata">
                <div class="system__purchase"><button @click="nextStep" class="system__btn" v-html="listPhSystem.btn"></button>
                </div>
                <div class="system__line"> <img src="../assets/system/line.svg"></div>
                <p class="system__price" v-html="listPhSystem.price"></p>
            </div>
        </div>
        <div class="system__img"><img src="../assets/system/card.webp"></div>
    </div>
<div class="system__content_mob">
    <div class="system__description" v-for="listPhSystem in allListPhSystem" :key="listPhSystem.id">
        <p class="system__title" v-html="listPhSystem.title"></p>
        <p class="system__info" v-html="listPhSystem.info"></p>
        <p class="system__text" v-html="listPhSystem.text"></p>
        <div class="system__des">
            <div class="system__oplata">
                <div class="system__purchase"><button @click="nextStep" class="system__btn" v-html="listPhSystem.btn"></button>
                </div>
                <div class="system__line"> <img src="../assets/system/line.svg"></div>
                <p class="system__price" v-html="listPhSystem.price"></p>
            </div>
            <div class="system__img"><img src="../assets/system/card.webp"></div>
        </div>
    </div>
</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        listSystemTweakingRu:[
            {
                title:`Представляем полноценную настройку системы для геймеров, которым важен стабильный FPS и
                низкая системная задержка.`,
                info:`
            1. Чистая установка Windows 10 21H2 Pro и ее дальнейшая настройка<br>
            2. Настройка параметров BIOS и отключение энергосберегающих функций процессора<br>
            3. Советы по обновлению комплектующих + постоянная поддержка от наших специалистов<br>
            4. Настройка OBS для записи видео / стриминга (Если нужно)<br>
            5. Выпиливание ненужных приложений Microsoft и отключение служб, которые не использует обычный пользователь Windows`,
                text:`В данный момент, это лучший продукт на рынке оптимизации систем по мнению многих наших клиентов, это связано с тем, что<br>
            наша команда энтузиастов тщательно тестирует все параметры на AVG / 0,1% / 1% FPS, поэтому мы и можем ручаться за<br>
            качественный подход к настройке вашего оборудования<br>`,
                btn:'Приобрести',
                price:'990 ₽'
            }
        ],
        listSystemTweakingEn: [
            {
                title: `Presenting a complete system setup for gamers who<br> want stable FPS and low system latency.`,
                info: `
            1. Clean installation of Windows 10 21H2 Pro and its further setup<br>
            2. Adjusting BIOS settings and disabling the power-saving features of the processor <br>
            3. Tips for upgrading accessories + ongoing support from our experts<br>
            4. Setting up OBS for video recording/streaming (If needed)<br>
            5. Cutting out unnecessary Microsoft applications and disabling services that are not used by the<br> average Windows user `,
                text: `At the moment, this is the best product on the market of system optimization according to many of our customers, this is<br> 
                due to the fact that our team of enthusiasts carefully tests all 
                the parameters on AVG / 0.1% / 1% FPS, so we can vouch for the<br> quality approach while setting up your hardware`,
                btn: 'Purchase',
                price: '35 €'
            }
        ],
    }
  },
  methods: {
    nextStep () {
      if(localStorage.getItem('en') === null) {
          this.$emit('payment')
          this.$store.state.price = 990
          this.$store.state.overclock = false
      }
      else {
          this.$emit('payment')
          this.$store.state.priceEn = 35
          this.$store.state.overclock = false
      }
    }
  },
  computed:{
    allListPhSystem() {
        if(localStorage.getItem('en') === null) {
            return this.listSystemTweakingRu
        }
        else {
            return this.listSystemTweakingEn
        }
    }
  }
}
</script>

<style scoped>
.system {
    min-height: 36.45833333333333VW;
}
.system__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.system__description {
    margin-left: 8.958333333333334VW;
    margin-top: 3.6458333333333335VW;
}
.system__title {
    font-weight: 500;
    font-size: 1.4583333333333333VW;
    line-height: 140%;
    color: #FFFFFF;
    margin-bottom: 1.40625VW;
    width:40VW ;
}
.system__info {
    font-weight: 300;
    font-size: 0.8333333333333334VW;
    line-height: 180%;
    color: #E1E1E1;
    margin-bottom: 0.78125VW;
}
.system__text {
    font-weight: 300;
        font-size: 0.7291666666666666VW;
        line-height: 180%;
        color: #9E9E9E;
        margin-bottom: 4.270833333333333VW
}
.system__img img {
margin-right: 3.125VW;
margin-bottom: 3.125VW;
}
.system__line img {
height: 4.375VW;
}
.system__oplata {
    display: flex;
    align-items: center;
}
.system__btn {
    border: 1px solid #FFFFFF;
    background: none;
    padding: 0.78125VW 1.8229166666666667VW;
    font-weight: 400;
    font-size: 0.8333333333333334VW;
    color: #FFFFFF;
    transition: all 0.3s ease;
    cursor: pointer;
}
.system__btn:hover {
    background: #fff;
    color:#070200;
}
.system__line {
    margin: 0 3.6458333333333335VW;
}
.system__price {
    font-weight: 600;
    font-size: 1.7708333333333333VW;
    color: #FFFFFF;
}
.system__content_mob {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    display: none;
}
@media (max-width: 1620px) {
    .system__img img {
        width: 23.4375VW;
    }
}
@media (max-width: 500px) {
    .system__content {
        display: none;
    }
    .system__content_mob {
        display: block;
    }
    .system__title {
        text-align: center;
        font-size: 18px;
        width:85vw;
        margin-left:-5px;
    }
    .system__info {
        font-weight: 300;
        font-size: 2.33333333333334VW;
        line-height: 180%;
        color: #E1E1E1;
        margin-bottom: 5.78125VW;
        margin-top: 20px;
        margin-right: 50px;
        text-align: center;
    }
        .system__text {
            font-weight: 300;
            font-size: 2.5291666666666666VW;
            line-height: 180%;
            color: #9E9E9E;
            margin-bottom: 4.270833333333333VW;
            text-align: center;
            margin-right: 50px;
        }
        .system__des {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }
        .system__oplata {
            order: 1;
            margin-left: -75px;
        }
                .system__btn {
                    border: 0.2VW solid #FFFFFF;
                    padding: 0.78125VW 1.8229166666666667VW;
                    font-weight: 400;
                    font-size: 2.8333333333333334VW;
                }
                                .system__price {
                                    font-weight: 600;
                                    font-size: 3.7708333333333333VW;
                                    color: #FFFFFF;
                                }
                     .system__line img {
                      height: 9.375VW;
                     }
                .system__img img {
                    margin-top: 20px;
                    width: 50.4375VW;
                    margin-left: -40px;
                }
}
</style>
