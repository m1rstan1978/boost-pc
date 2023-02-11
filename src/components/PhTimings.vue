<template>
  <div class="timings">
    <div class="timings__content">
        <div class="timings__pagination">
            <p @click="all = true; stabilityRam = false; lowFirst = false; lowSec = false; lowThird = false; command = false" class="timings__numbers" :class="{active : all === true}">1</p>
            <p @click="all = false; stabilityRam = true; lowFirst = false; lowSec = false; lowThird = false; command = false" class="timings__numbers" :class="{active : stabilityRam === true}">2</p>
            <p @click="all = false; stabilityRam = false; lowFirst = true; lowSec = false; lowThird = false; command = false"  class="timings__numbers" :class="{active : lowFirst === true}">3</p>
            <p @click="all = false; stabilityRam = false; lowFirst = false; lowSec = true; lowThird = false; command = false" class="timings__numbers" :class="{active : lowSec === true}">4</p>
            <p @click="all = false; stabilityRam = false; lowFirst = false; lowSec = false; lowThird = true; command = false" class="timings__numbers" :class="{active : lowThird === true}">5</p>
            <p @click="all = false; stabilityRam = false; lowFirst = false; lowSec = false; lowThird = false; command = true" class="timings__numbers" :class="{active : command === true}">6</p>
        </div>
        <div class="timings__menu">
            <ph-timings-all v-if="all === true"></ph-timings-all>
            <ph-stability-ram v-if="stabilityRam === true"></ph-stability-ram>
            <ph-low-first-timings v-if="lowFirst === true"></ph-low-first-timings>
            <ph-low-sec-timings v-if="lowSec === true"></ph-low-sec-timings>
            <ph-low-third-timings v-if="lowThird === true"></ph-low-third-timings>
            <ph-command v-if="command === true"></ph-command>
        </div>
    </div>
  </div>
</template>

<script>
import PhCommand from './PhCommand.vue'
import PhLowFirstTimings from './PhLowFirstTimings.vue'
import PhLowSecTimings from './PhLowSecTimings.vue'
import PhLowThirdTimings from './PhLowThirdTimings.vue'
import PhStabilityRam from './PhStabilityRam.vue'
import PhTimingsAll from './PhTimingsAll.vue'
export default {
  components: { PhTimingsAll, PhStabilityRam, PhLowFirstTimings, PhLowSecTimings, PhLowThirdTimings, PhCommand },
  data () {
    return {
      all: true,
      stabilityRam: false,
      lowFirst: false,
      lowSec: false,
      lowThird: false,
      command: false
    }
  }
}
</script>

<style scoped>
.timings__content {
    display: flex;
    margin-left: 6.354166666666666VW;
}
.timings__pagination {
margin-top: 2.4479166666666665VW;
}
.timings__numbers {
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

.timings__numbers:hover {
    background: #FFF;
    color: #070200;
}
.active {
    background: #fff;
    color:#070200;
}
</style>
