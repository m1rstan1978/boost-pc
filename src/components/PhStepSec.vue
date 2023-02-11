<template>
  <div class="stepsec">
    <div class="stepsec__content" v-for="listPhStepSec in allListPhStepSec" :key="listPhStepSec.id">
        <div class="stepsec__description">
            <p class="stepsec__title" v-html="listPhStepSec.title"></p>
            <p class="stepsec__first" v-html="listPhStepSec.first"></p>
            <p class="stepsec__sec" v-html="listPhStepSec.sec"></p>
                <p class="stepsec__warning" v-html="listPhStepSec.warging"></p>
                <div class="stepsec__rules">
                    <input type="checkbox" value="false" v-model="checkbox">
                    <p class="stepsec__text">{{accept}} <router-link :to="'policy'">{{policy}}</router-link></p>
                </div>
        </div>
        <div class="stepsec__right">
            <div class="stepsec__cards">
                <div class="stepsec__card">
                    <div class="stepsec__handshake"> <img src="../assets/payment/1.svg"></div>
                    <p class="stepsec__about" v-html="listPhStepSec.firstText"></p>
                </div>
                <div class="stepsec__card">
                    <div class="stepsec__handshake"> <img src="../assets/payment/2.svg"></div>
                    <p class="stepsec__about" v-html="listPhStepSec.secText"></p>
                </div>
                <div class="stepsec__card">
                    <div class="stepsec__handshake"> <img src="../assets/payment/3.svg"></div>
                    <p class="stepsec__about" v-html="listPhStepSec.thirdText"></p>
                </div>
            </div>
        </div>
    </div>
<div class="stepsec__button">
    <div class="stepsec__oplata" v-if="ru === true">
        <div class="stepsec_purchase"><button @click="buy" class="stepsec__btn" :class="{disable : checkbox === false}">Приобрести</button></div>
        <div class="stepsec__line"> <img src="../assets/system/line.svg"></div>
        <p class="stepsec__price">{{$store.state.price}} ₽</p>
    </div>
    <div class="stepsec__oplata" v-else>
        <div class="stepsec_purchase" v-if="$store.state.priceEn === 85">
            <div class="stepsec__active" v-if="checkbox === true">
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_s-xclick">
                    <input type="hidden" name="hosted_button_id" value="TMG5WCW83QNXU">
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit"
                        alt="PayPal - The safer, easier way to pay online!">
                    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
                </form>
            </div>
            <div class="stepsec__disable" v-else>
                <input type="hidden" name="cmd" value="_s-xclick">
                <input type="hidden" name="hosted_button_id" value="TMG5WCW83QNXU">
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit"
                    alt="PayPal - The safer, easier way to pay online!">
                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
            </div>
        </div>
        <div class="stepsec_purchase" v-else-if="$store.state.priceEn === 40">
            <div class="stepsec__active" v-if="checkbox === true">
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_s-xclick">
                    <input type="hidden" name="hosted_button_id" value="JNQE3EU6AV3E2">
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit"
                        alt="PayPal - The safer, easier way to pay online!">
                    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
                </form>
            </div>
            <div class="stepsec__disable" v-else>
                <input type="hidden" name="cmd" value="_s-xclick">
                <input type="hidden" name="hosted_button_id" value="TMG5WCW83QNXU">
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit"
                    alt="PayPal - The safer, easier way to pay online!">
                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
            </div>
        </div>
        <div class="stepsec_purchase" v-else-if="$store.state.priceEn === 65">
            <div class="stepsec__active" v-if="checkbox === true">
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_s-xclick">
                    <input type="hidden" name="hosted_button_id" value="BC4TDAD5UVKWW">
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit"
                        alt="PayPal - The safer, easier way to pay online!">
                    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
                </form>
            </div>
            <div class="stepsec__disable" v-else>
                <input type="hidden" name="cmd" value="_s-xclick">
                <input type="hidden" name="hosted_button_id" value="TMG5WCW83QNXU">
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit"
                    alt="PayPal - The safer, easier way to pay online!">
                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
            </div>
        </div>
        <div class="stepsec_purchase" v-else-if="$store.state.priceEn === 45">
            <div class="stepsec__active" v-if="checkbox === true">
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_s-xclick">
                    <input type="hidden" name="hosted_button_id" value="NQQK4248JUUY2">
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit"
                        alt="PayPal - The safer, easier way to pay online!">
                    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
                </form>
            </div>
            <div class="stepsec__disable" v-else>
                <input type="hidden" name="cmd" value="_s-xclick">
                <input type="hidden" name="hosted_button_id" value="TMG5WCW83QNXU">
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit"
                    alt="PayPal - The safer, easier way to pay online!">
                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
            </div>
        </div>
        <div class="stepsec_purchase" v-else-if="$store.state.priceEn === 35">  
            <div class="stepsec__active" v-if="checkbox === true">
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_s-xclick">
                    <input type="hidden" name="hosted_button_id" value="99KVRVYM5M862">
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit"
                        alt="PayPal - The safer, easier way to pay online!">
                    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
                </form>
            </div>
            <div class="stepsec__disable" v-else>
                <input type="hidden" name="cmd" value="_s-xclick">
                <input type="hidden" name="hosted_button_id" value="TMG5WCW83QNXU">
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit"
                    alt="PayPal - The safer, easier way to pay online!">
                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
            </div>
        </div>
        <div class="stepsec_purchase" v-else-if="$store.state.priceEn === 20">
            <div class="stepsec__active" v-if="checkbox === true">
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_s-xclick">
                    <input type="hidden" name="hosted_button_id" value="622HY7RMHS2YA">
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit"
                        alt="PayPal - The safer, easier way to pay online!">
                    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
                </form>
            </div>
            <div class="stepsec__disable" v-else>
                <input type="hidden" name="cmd" value="_s-xclick">
                <input type="hidden" name="hosted_button_id" value="622HY7RMHS2YA">
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit"
                    alt="PayPal - The safer, easier way to pay online!">
                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
            </div>
        </div>
        <div class="stepsec__line"> <img src="../assets/system/line.svg"></div>
        <p class="stepsec__price">{{ $store.state.priceEn }} €</p>
    </div>
</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      checkbox: false,
      listPhStepSecRu:[
        {
              title:'Эта услуга предоставляется только для одного ПК.',
              first:`1. При оплате в поле "Введите свой ник", укажите ваш никнейм в Discord'e, например Scandaal#9154,<br> чтобы мы могли с вами
            связаться, поле "Введите сообщение" можете оставить пустым.`,
              sec:`2. В поле “Сумма доната”, вы должны указать точную сумму на которую вы сделали заказ.`,
              third:`3. Оплатив услугу, вы попадаете в очередь, после чего мы свяжемся с вами в Discord’e чтобы<br> выполнить заказ.`,
              warging:`Примерное время ожидания 3-4 дня`,
              firstText:'После покупки услуги вы получите<br> тех.поддержку в течение 30 дней',
              secText:'Мы ценим ваше время и выполняем<br> свою работу в кратчайшие сроки',
              thirdText:`Мы предоставляем полную<br> безопасность и защиту наших услуг`
        }
      ],
        listPhStepSecEn: [
            {
                title: 'This service is provided for one PC only.',
                first: `After clicking “Buy Now” you will be redirected to PayPal purchase page to pay. However if you can’t pay via<br> PayPal or 
                credit card then you can DM Scandaal#9154 on Discord and ask for other payment method.`,
                sec: `After you pay for the service, you get in a queue, after which we will contact you<br> by the social media you provided in form.`,
                warging: `Approximate waiting time 1-10 hours.`,
                firstText: 'After purchasing the service you will<br> get technical support for 30 days',
                secText: 'We value your time and do our work in<br> the shortest possible time',
                thirdText: `We provide complete security and<br> protection for our services`
            }
        ],
        accept:'Я принимаю',
        policy:'Политику Конфидициальности',
        ru:true,
    }
  },
    methods: {
    buy () {
      if (this.checkbox === true) {
          axios.post('https://phantomboost.org/api/user/forgot', {
          link: this.$store.state.link,
          games: this.$store.state.games,
          strim: this.$store.state.strim,
          pc: this.$store.state.pc
        })
        .then (res => {
            window.location.href = 'https://donate.qiwi.com/payin/PhantomPC'
        })
      }
    },
    checkLang() {
        if(localStorage.getItem('en') === null) {
            this.accept = 'Я принимаю'
            this.policy = 'Политику Конфидициальности'
            this.ru = true
        }
        else {
            this.accept = 'I accept'
            this.policy = 'Privacy Policy'
            this.ru = false
        }
    }
  },
  computed: {
      allListPhStepSec() {
        if(localStorage.getItem('en') === null) {
            return this.listPhStepSecRu
        }
        else {
            return this.listPhStepSecEn
        }
      }
  },
  mounted () {
      this.checkLang()
  }
}
</script>

<style scoped>
.stepsec {
    overflow: hidden;
    position: relative;
}
.stepsec__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 9.010416666666666VW;
}
.stepsec__title {
    font-weight: 500;
    font-size: 1.875VW;
    color: #FFFFFF;
    margin-bottom: 2.083333333333333VW;
}
.stepsec__first {
    font-weight: 300;
    font-size: 0.8333333333333334VW;
    line-height: 180%;
    color: #E1E1E1;
    margin-bottom: 1.3020833333333335VW;
}
.stepsec__sec {
    font-weight: 300;
    font-size: 0.8333333333333334VW;
    line-height: 180%;
    color: #E1E1E1;
    margin-bottom: 1.3020833333333335VW;
}
.stepsec__third{
    font-weight: 300;
    font-size: 0.8333333333333334VW;
    line-height: 180%;
    color: #E1E1E1;
    margin-bottom: 0.26041666666666663VW;
}
.stepsec__warning {
    font-weight: 400;
    font-size: 0.7291666666666666VW;
    color: #9E9E9E;
    margin-bottom: 1.5104166666666667VW;
}
.stepsec__rules {
    display: flex;
}
.stepsec__text {
    font-weight: 300;
    font-size: 0.7291666666666666VW;
    color: #FFFFFF;
    margin-left: 0.7291666666666666VW;
}
.stepsec__text a {
    font-weight: 300;
        font-size: 0.7291666666666666VW;
        color: #FFFFFF;
}
.stepsec__right {
    background: url('../assets/payment/back.svg') no-repeat;
    width: 36.45833333333333VW;
    height: 600px;
        display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
}
.stepsec__card {
    display: flex;
    align-items: center;
    margin-left: 7.34375VW;
    margin-bottom: 2.083333333333333VW;
}
.stepsec__about {
    margin-left: 1.5625VW;
    text-align: center;
    font-weight: 300;
        font-size: 0.8333333333333334VW;
        line-height: 140%;
        color: #FFFFFF;
}
.stepsec__handshake img {
    width: 4.0625VW;
}
.stepsec__button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}
.stepsec__oplata {
    display: flex;
    align-items: center;
}

.stepsec__btn {
    border: 1px solid #FFFFFF;
    background: none;
    padding: 0.78125VW 1.8229166666666667VW;
    font-weight: 400;
    font-size: 16px;
    color: #FFFFFF;
    transition: all 0.3s ease;
    cursor: pointer;
}
.stepsec__btn a {
    color: #FFFFFF;
    text-decoration: none;
}
.stepsec__btn a:hover {
    color: #070200;
}
.stepsec__btn:hover a {
    color: #070200;
}
.stepsec__btn:hover {
    background: #fff;
    color: #070200;
}
.disable{
    opacity: 0.5 !important;
    cursor: auto;
}   

.disable:hover {
    color: #fff !important;
}
.disable:hover {
    background: none;
    color:#070200;
}
.stepsec__line {
    margin: 0 3.6458333333333335VW;
}

.stepsec__price {
    font-weight: 600;
    font-size: 1.7708333333333333VW;
    color: #FFFFFF;
}
.stepsec__disable {
    opacity: 0.3;
    cursor: auto;
}
</style>
