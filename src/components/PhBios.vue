<template>
  <div class="bios">
    <div class="bios__pagination">
      <p @click="dram = true;cpu = false;fast = false" class="bios__numbers" :class="{active : dram === true}">1</p>
      <p @click="dram = false;cpu = true;fast = false" class="bios__numbers" :class="{active : cpu === true}">2</p>
      <p @click="dram = false;cpu = false;fast = true" class="bios__numbers" :class="{active : fast === true}">3</p>
    </div>
    <div class="bios__content" >
      <div class="bios__menu">
        <ph-bios-dram-voltage v-if="dram === true"></ph-bios-dram-voltage>
        <ph-cpu-voltage v-if="cpu === true"></ph-cpu-voltage>
        <PhMemory v-if="fast === true"></PhMemory>
      </div>
    </div>
  </div>
</template>

<script>
import PhBiosDramVoltage from './PhBiosDramVoltage.vue'
import PhCpuVoltage from './PhCpuVoltage.vue'
import PhMemory from './PhMemory.vue'

export default {
  components: { PhBiosDramVoltage, PhCpuVoltage, PhMemory },
  data () {
    return {
      dram: true,
      cpu: false,
      fast: false
    }
  },
  methods: {
  },
  computed: {
  }
}
</script>

<style scoped>
.bios {
position: relative;
  margin-top: 2.1875VW;
}
.bios__header {
  font-weight: 500;
  font-size: 1.4583333333333333VW;
  line-height: 1.7708333333333333VW;
  text-align: center;
  color: #FFFFFF;
}
.bios__content {
  margin-top: 3.125VW;
}

.bios__pagination {
  position: absolute;
  top:18%;
  margin-left: 6.354166666666666VW;
  color:#fff;
}

.bios__right {
  display: flex;
  align-items: center;
}
.bios__numbers {
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
.bios__numbers:hover {
  background: #FFF;
  color: #070200;
}
.bios__footer {
  font-weight: 300;
    font-size: 0.7291666666666666VW;
    line-height: 0.9375VW;
    text-align: center;
    margin-top: 3.28125VW;
    color: #9E9E9E;
}
.active {
  background:#FFF;
  color:#070200;
}
.activeText {
  margin-bottom: 0 !important;
}
</style>
