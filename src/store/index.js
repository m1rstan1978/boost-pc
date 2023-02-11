import Vue from 'vue'
import Vuex from 'vuex'
import price from './modules/price'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    price: 0,
    priceEn: 0,
    link: '',
    games: '',
    strim: '',
    pc: '',
    overclock:false,
  }
})
