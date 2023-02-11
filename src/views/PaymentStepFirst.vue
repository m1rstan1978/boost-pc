<template>
  <div class="paymentfirst">
    <div class="paymentfirst__header">
      <div @click="$emit('close')" class="paymentfirst__back">
        <img class="paymentfirst__close" src="../assets/payment/arrow.svg">
      </div>
      <p class="paymentfirst__title">{{payment}}</p>
    </div>
    <div class="paymentfirst__center">
      <div class="paymentfirst__pagination">
        <p class="paymentfirst__number">1</p>
        <div class="paymentfirst__line"><img src="../assets/payment/line.svg"></div>
        <p class="paymentfirst__number" :class="{disable : step2 === false}">2</p>
      </div>
    </div>
    <div class="paymentfirst__content">
      <ph-step-first v-if="step1 === true" @load="step1 = false; step2 = true"></ph-step-first>
      <ph-step-sec v-if="step2 === true"></ph-step-sec>
    </div>
  </div>
</template>

<script>
import PhStepFirst from '@/components/PhStepFirst.vue'
import PhStepSec from '@/components/PhStepSec.vue'
export default {
  components: { PhStepFirst, PhStepSec },
  data () {
    return {
      step1: true,
      step2: false,
      payment: 'Оплата заказа'
    }
  },
  methods:{
    checkLang() {
      if(localStorage.getItem('en') === null) {
        this.payment = 'Оплата заказа'
      }
      else {
        this.payment = 'Order payment'
      }
    }
  },
  mounted(){
    this.checkLang()
  }
}
</script>

<style scoped>
.paymentfirst {
  width: 100%;

  min-height: 44.583333333333336VW;
}
.paymentfirst__header {
  margin-top: 3.229166666666667VW;
  display: flex;
  align-items: center;
  margin-left: 9.010416666666666VW;
}
.paymentfirst__title {
  text-align: center;
  margin-left: 28.125VW;
  font-weight: 600;
  font-size: 2.5VW;
  color: #FFFFFF;

}
.paymentfirst__back img {
  display: flex;
  align-items: center;
}
.paymentfirst__center {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.7187500000000002VW;
}
.paymentfirst__pagination {
  display: flex;
  align-items: center;

}
.paymentfirst__number {
  background: #fff;
  padding: 0.26041666666666663VW 0;
  font-weight: 600;
  font-size: 0.9375VW;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.6145833333333335VW;
  border:none;
  border-radius: 100%;
  color: #131313;
}
.paymentfirst__line img {

  display: flex;
  align-items: center;
}
.disable {
  background: #474747;
  color:#fff;
}
.paymentfirst__close {
  transition: all 0.3s ease;
  cursor: pointer;
}
.paymentfirst__close:hover {
  opacity: 0.5;
}
</style>
