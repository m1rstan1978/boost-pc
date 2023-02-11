<template>
  <div class="mobcustom">
    <div class="mobcustom__pagination">
        <p v-for="item in pagination" :key="item" @click="addBtns(item)" class="mobcustom__pag" :class="{active  : currentPage === item}">{{ item }}</p>
    </div>
    <div class="mobcustom__for" v-for="(listmobru, idx) in customList" :key="listmobru.id">
      <div class="mobcustom__content">
        <div class="mobcustom__img">
            <img :src="listmobru.src" :class="{activeImg : idx === 2}">
        </div>
        <p class="mobcustom__text" v-html="listmobru.inf"></p>
      </div>
    </div>
    <div class="mobcustom__purshase">
        <button class="mobcustom__btn" @click="goNext">Purchase</button>
        <div class="mobcustom__image">
            <img src="../assets/SystemMobile/line.svg">
        </div>
        <p class="mobcustom__money">85 €</p>
    </div>
  </div>
</template>

<script>
export default {
data() {
    return {
        listMobCUstomRu:[
            {
                inf:`1.  Installing all Ethernet / SATA / NVMe / Chipset / GPU drivers<br>
2. Adjust registry settings and disable unnecessary services<br>
3. Removing unused applications and components from Microsoft,<br> as well as disabling all telemetry and Windows data collection <br>
4. Configuring the system for streaming and video recording (OBS<br> / NVIDIA ShadowPlay) `,
                src:'mobcustom/1.png'
            },
            {
                inf: `1. Increase the frequency of cores and the processor ring bus <br>
2. CPU Vcore / Load-Line Callibration Level<br>
3. Setting processor limits PL1 / PL2 and disabling power saving settings<br>
4. Changing the motherboard VRM settings (CPU & DRAM Current Capability / VRM Switching Frequency / Spread Spectrum`,
                src: 'mobcustom/2.png'
            },
            {
                inf: `1. Increase RAM frequency and tuning primary, secondary and tertiary timings.<br>
2. On Ryzen increasing FCLK bus frequency and selecting CAD_BUS / procODT
<br>
3. Memory controller voltage selection: SA / IO (Intel), SOC (Ryzen)`,
                src: 'mobcustom/3.png'
            },
            {
                inf: `1. Stress test of CPU, RAM and CPU memory controller in heavy programs with fast change of testing algorithms: <br>
Linpack Xtreme / OCCT / Prime95 / Cinebench R23<br> / Y-Cruncher / MemTestPro / TM5<br>
2. Adjustments of voltages and additional options to stabilize the system`,
                src: 'mobcustom/4.png'
            },

        ],
        startIdx:0,
        endIdx:1,
        currentPage: 1,
    }
},
methods:{
    goNext(){
        this.$emit('payment')
        this.$store.state.priceEn = 85
        this.$store.state.overclock = false
    },
    nextStep() {
        this.$emit('payment')
        this.$store.state.priceEn = 85
        this.$store.state.overclock = false
    },
    addBtns(key) {
        this.startIdx = (key - 1) * 1
        this.endIdx = key * 1
        this.currentPage = key
    },
    checkLang() {
        this.btn = 'Purchase'
        this.price = '85 €'
    }
},
computed:{
    pagination() {
        return Math.ceil(this.listMobCUstomRu.length / 1)
    },
    customList() {
        return this.listMobCUstomRu.slice(this.startIdx, this.endIdx)
    }
}
}
</script>

<style scoped>
.mobcustom__pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 8VW;
}
.mobcustom__pag {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.6VW 2.4VW;
    background: none;
    border: 1px solid #FFFFFF;
    border-radius: 0.4VW;
    font-weight: 600;
    font-size: 3.2VW;    
    margin: 0 2VW;
    color: #FFFFFF;
    width: 2VW;
    cursor: pointer;
}
.mobcustom__content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.mobcustom__img {
    margin-top: 8VW;
    margin-bottom: 4VW;
}
.mobcustom__text {
    font-weight: 400;
        font-size: 2.6VW;
        text-align: center;
        line-height: 180%;
        margin: 0 4VW;
    color: #E1E1E1;
}
.mobcustom__purshase {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 8VW;
    margin-right: 10VW;
}

.mobcustom__btn {
    font-weight: 500;
    font-size: 2.8000000000000003VW;
    padding: 2.6VW 3.4000000000000004VW;
    border: 1px solid #D9D9D9;
    background: none;
    margin-right: 21VW;
    color: #FFFFFF;
}

.mobcustom__money {
    font-weight: 600;
    font-size: 4.5999999999999996VW;
    margin-left: 21VW;
    color: #FFFFFF;
}
.active {
    background: #fff;
    color: #070200;
}
</style>