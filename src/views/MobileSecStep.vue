<template>
  <div class="mobsec">
<header>
    <div class="mobsec__logo">
        <div class="mobsec__image">
            <router-link :to="'/en'"><img @click="$emit('close')" src="../assets/headerMob/logo2.png"></router-link>
        </div>
    </div>
</header>
<div class="mobsec__steps">
    <p class="mobsec__order">Order payment</p>
    <div class="mobsec__step">
        <p class="mobsec__first">1</p>
        <div class="mobsec__line">
            <img src="../assets/SystemMobile/stepsline.svg">
        </div>
        <p class="mobsec__sec">2</p>
    </div>
</div>
      <div class="mobsec__about">
        <p class="mobsec__service">This service is provided for one PC only.</p>
        <p class="mobsec__text">1. When paying in the field "Enter your nickname", specify your nickname in Discord, for example Scandaal#9154, so we
        can contact you, the field "Enter message" can be left blank.</p>
        <p class="mobsec__text">2. In the "Amount of donation" field, you must specify the exact amount for which you made the order.</p>
        <p class="mobsec__text">3. When you pay for the service, you get in a queue, after which we will contact you in Discord to fulfill the order.</p>
      </div>
      <p class="mobsec__deadline">Approximate waiting time 3-4 days</p>
      <div class="mobsec__rules">
        <div class="mobsec__menu">
            <input type="checkbox" class="mobsec__checkbox" v-model="checkbox" value="false">
            <p class="mobsec__agree">I accept <router-link :to="'/policy'">Privacy Policy</router-link></p>
        </div>
      </div>
      <div class="mobsec__choice">
        <div class="mobsec__or">
            <input type="radio" class="mobsec__radio" value="paypal" v-model="radio">
            <p class="mobsec__pay">Paypal</p>
        </div>
        <div class="mobsec__or">
            <input type="radio" class="mobsec__radio" value="qiwidonate" v-model="radio">
            <p class="mobsec__pay">Qiwi Donate</p>
        </div>
      </div>
      <div class="mobsec__paypal" v-if="radio === 'paypal'">
        <div class="mobsec__list">
            <div class="mobsec__button"  @click="pay">
                <div class="stepsec_purchase" v-if="$store.state.priceEn === 85" :class="{ disable : checkbox === false}">
                    <div class="stepsec__active" v-if="checkbox === true">
                        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                            <input type="hidden" name="cmd" value="_s-xclick">
                            <input type="hidden" name="hosted_button_id" value="TMG5WCW83QNXU">
                            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0"
                                name="submit" alt="PayPal - The safer, easier way to pay online!">
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
                <div class="stepsec_purchase" v-else-if="$store.state.priceEn === 40" :class="{ disable : checkbox === false}">
                    <div class="stepsec__active" v-if="checkbox === true">
                        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                            <input type="hidden" name="cmd" value="_s-xclick">
                            <input type="hidden" name="hosted_button_id" value="JNQE3EU6AV3E2">
                            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0"
                                name="submit" alt="PayPal - The safer, easier way to pay online!">
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
                <div class="stepsec_purchase" v-else-if="$store.state.priceEn === 65" :class="{ disable : checkbox === false}">
                    <div class="stepsec__active" v-if="checkbox === true">
                        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                            <input type="hidden" name="cmd" value="_s-xclick">
                            <input type="hidden" name="hosted_button_id" value="BC4TDAD5UVKWW">
                            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0"
                                name="submit" alt="PayPal - The safer, easier way to pay online!">
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
                <div class="stepsec_purchase" v-else-if="$store.state.priceEn === 45" :class="{ disable : checkbox === false}">
                    <div class="stepsec__active" v-if="checkbox === true">
                        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                            <input type="hidden" name="cmd" value="_s-xclick">
                            <input type="hidden" name="hosted_button_id" value="NQQK4248JUUY2">
                            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0"
                                name="submit" alt="PayPal - The safer, easier way to pay online!">
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
                <div class="stepsec_purchase" v-else-if="$store.state.priceEn === 35" :class="{ disable : checkbox === false}">
                    <div class="stepsec__active" v-if="checkbox === true">
                        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                            <input type="hidden" name="cmd" value="_s-xclick">
                            <input type="hidden" name="hosted_button_id" value="99KVRVYM5M862">
                            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0"
                                name="submit" alt="PayPal - The safer, easier way to pay online!">
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
                <div class="stepsec_purchase" v-else-if="$store.state.priceEn === 20" :class="{ disable : checkbox === false}">
                    <div class="stepsec__active" v-if="checkbox === true">
                        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                            <input type="hidden" name="cmd" value="_s-xclick">
                            <input type="hidden" name="hosted_button_id" value="622HY7RMHS2YA">
                            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0"
                                name="submit" alt="PayPal - The safer, easier way to pay online!">
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
            </div>

            <div class="mobsec__line">
                <img src="../assets/SystemMobile/line.svg">
            </div>
            <p class="mobsec__money_first">{{ $store.state.priceEn }} €</p>
        </div>
      </div>
    <div class="mobsec__purshase" v-else>
        <div class="mobsec__list">
    <div class="mobsec__button">
        <button class="mobsec__go" @click="pay" :class="{ disable : checkbox === false}">Pay</button>
    </div>
            <div class="mobsec__line">
                <img src="../assets/SystemMobile/line.svg">
            </div>
            <p class="mobsec__money">{{ $store.state.priceEn }} $</p>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
data() {
    return {
        checkbox:false,
        radio:'paypal'
    }
},
methods:{
    pay() {
        if (this.checkbox === true) {
            if(this.radio === 'paypal') {
                axios.post('https://phantomboost.org/api/user/forgot', {
                    link: this.$store.state.link,
                    games: this.$store.state.games,
                    strim: this.$store.state.strim,
                    pc: this.$store.state.pc
                })
            }
            else {
                axios.post('https://phantomboost.org/api/user/forgot', {
                    link: this.$store.state.link,
                    games: this.$store.state.games,
                    strim: this.$store.state.strim,
                    pc: this.$store.state.pc
                })
                    .then(res => {
                        window.location.href = 'https://donate.qiwi.com/payin/PhantomPC'
                    })
            }
        }
    }
},
mounted() {
    console.log(this.$store.state.priceEn)
}
}
</script>

<style scoped>
.mobsec {
    background: #070200;
    min-height: 100vh;
    width: 100%;
}

.mobsec__logo {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.mobsec__logo {
    padding: 4VW 0;
}
.mobsec__order {
    text-align: center;
    margin-top: 5VW;
    font-weight: 600;
    font-size: 6.800000000000001VW;
    color: #FFFFFF;
}

.mobsec__step {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 4VW;
}

.mobsec__step img {
    display: flex;
    align-items: center;
}

.mobsec__first {
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 3.5999999999999996VW;
    width: 7.000000000000001VW;
    height: 7.000000000000001VW;
    border-radius: 100%;
    color: #131313;
}

.mobsec__sec {
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 3.5999999999999996VW;
    width: 7.000000000000001VW;
    height: 7.000000000000001VW;
    border-radius: 100%;
    color: #131313;
}
.mobsec__service {
    font-weight: 500;
    font-size: 3.5999999999999996VW;
    text-align: center;
    margin-top: 10VW;
    margin-bottom: 3VW;
    color: #FFFFFF;
}
.mobsec__text {
    margin: 0 4VW 4VW 4VW;
    font-weight: 400;
    font-size: 2.8000000000000003VW;
    line-height: 180%;
    text-align: center;
    color: #E1E1E1;
}
.mobsec__deadline {
    margin-bottom: 3.2VW;
    margin-top: 8VW;
    font-weight: 400;
    font-size: 2.8000000000000003VW;
    text-align: center;
    color: #E1E1E1;
}
.mobsec__rules {
    display: flex;
    align-items: center;
    justify-content: center;
}
.mobsec__menu {
    display: flex;
    align-items: center;
}
.mobsec__agree {
    margin-left: 2.8000000000000003VW;
    font-weight: 400;
    font-size: 2.8000000000000003VW;
    color: #9E9E9E;
}
.mobsec__agree a {
    color: #9E9E9E;
}
.mobsec__choice {
    margin-left: 18VW;
    margin-top: 10VW;
}
.mobsec__or {
    display: flex;
    align-items: center;
    padding-bottom: 2VW;
}
.mobsec__pay {
    margin-left: 2.8000000000000003VW;
    margin-bottom: 0.4VW;
    font-weight: 500;
    font-size: 2.8000000000000003VW;
    color: #FFFFFF;
}
.mobsec__purshase {
    margin-left: 12VW;
    margin-top: 8VW;
    padding-bottom: 8VW;
}
.mobsec__paypal {
    margin-left: 2VW;
    margin-top: 8VW;
    padding-bottom: 8VW;
}
.mobsec__list {
    display: flex;
    align-items: center;
}
.mobsec__button {
margin-right: 10VW;
}
.stepsec_purchase {
    transition: all 0.3s ease;
}
.mobsec__go {
    border: 1px solid #D9D9D9;
    background: none;
    padding: 2VW 7.3999999999999995VW;
    font-weight: 500;
    font-size: 2.8000000000000003VW;
    color: #FFFFFF;
    transition: all 0.3s ease;
    cursor: pointer;
}

.disable {
    opacity: 0.4;
}
.mobsec__money {
    font-weight: 600;
    font-size: 3.5999999999999996VW;
    margin-left: 10VW;
    color: #FFFFFF;
}
.mobsec__money_first {
    font-weight: 600;
    font-size: 3.5999999999999996VW;
    margin-left: 10VW;
    color: #FFFFFF;
}
</style>