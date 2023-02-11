<template>
    <div class="services">
        <p class="services__title">{{titleName}}</p>
        <div class="services__choice">
            <p @click="tweaking = true;overclocking = false;custom = false" class="services__text" :class="{Active : tweaking === true }">SYSTEM-TWEAKING</p>
            <p class="services__text" @click="tweaking = false;overclocking = true;custom = false" :class="{ Active: overclocking === true }">OVERCLOCKING</p>
            <p class="services__text" @click="tweaking = false;overclocking = false;custom = true" :class="{ Active: custom === true }">CUSTOM-TWEAKING</p>
            
        </div>
        <PhSystemTweaking v-if="tweaking === true" @payment="payment = true; tweaking = false;"></PhSystemTweaking>
        <PhOverclocking v-else-if="overclocking === true" @payment="payment = true; overclocking = false;"></PhOverclocking>
        <PhCustom v-else-if="custom === true" @payment="payment = true;custom = false;"></PhCustom>
        <PaymentStepFirst v-else @close="payment = false;tweaking = true;overclocking = false;custom = false"></PaymentStepFirst>
    </div>
</template>

<script>
import PhSystemTweaking from '@/components/PhSystemTweaking.vue'
import PhOverclocking from '@/components/PhOverclocking.vue'
import PhCustom from '@/components/PhCustom.vue'
import PaymentStepFirst from './PaymentStepFirst.vue'
export default {
  components: { PhSystemTweaking, PhOverclocking, PhCustom, PaymentStepFirst },
  data () {
    return {
      tweaking: true,
      overclocking: false,
      custom: false,
      payment: false,
      titleName:''
    }
  },
  methods:{
    getNameLang() {
        if(localStorage.getItem('en') === null) {
            this.titleName = 'Услуги'
        }
        else {
            this.titleName = 'Services'
        }
    } 
  },
  mounted() {
      this.getNameLang()
  }
}
</script>

<style scoped>
.services {
    margin: 0 auto;
}
.services__title {
    margin-top: 5.208333333333334VW;
    text-align: center;
    font-weight: 600;
    font-size: 2.5VW;
    color: #FFFFFF;
}
.services__choice {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.6145833333333335VW;
}
.services__text {
    font-weight: 500;
    font-size: 1.25VW;
    color: #636363;
    margin: 0 2.7083333333333335VW;
    padding: 1.0416666666666665VW 1.3020833333333335VW;
    cursor: pointer;
}
.Active {
color:#fff;
border-bottom: 0.15625VW solid #FF0200;
}
@media (max-width:500px) {
    .services__title {
            margin-top: 5.208333333333334VW;
            margin-bottom: 5vw;
            font-size: 10.5VW;
        }

    .services__choice {
        flex-direction: column;
    }
    .services__text {
    font-size: 3.25VW;
    font-weight: 300;
    margin: 0 1.7083333333333335VW 2vw 1.7083333333333335VW;
    }
    
}
</style>
