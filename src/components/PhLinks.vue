<template>
  <div class="links">
    <p class="links__header">Полезная информации по разгону DDR4</p>
    <div class="links__content">
        <p class="links__text"><a href="https://www.youtube.com/watch?v=5eIk84mF9tE&t=8595s" target="_blank">Иван Бабенко (Asus Apex 4400 CL17 CR1 Dual Rank Stream)</a></p>
        <p class="links__text"><a href="https://www.tweaktown.com/guides/7481/tweaktowns-ultimate-intel-skylake-overclocking-guide/index.html#GIGABYTE-Z170-Overclocking:-Z170X-SOC-Force" target="_blank">TweakTown Ultimate Intel Skylake Overclocking Guide</a></p>
        <p class="links__text"><a href="https://forums.overclockers.ru/index.php" target="_blank">Форум Overclockers.ru (Anta777)</a></p>
        <p class="links__text"><a href="https://github.com/integralfx/MemTestHelper/blob/oc-guide/DDR4%20OC%20Guide.md" target="_blank">Integralfx DDR4 OC Guide</a></p>
        <p class="links__text"><a href="https://www.hardwareluxx.de/community/threads/intel-ddr4-ram-oc-thread-guides-und-tipps.1230518/" target="_blank">Форум Hardwareluxx</a></p>
        <p class="links__text"><a href="http://www.softnology.biz/pdf/JESD79-4B.pdf" target="_blank">Jedec DDR4 SDRAM</a></p>
        <p class="links__text"><a href="https://community.hwbot.org/" target="_blank">Форум HWBOT</a></p>
        <p class="links__text"><a href="https://forum.ixbt.com/" target="_blank">Форум IXBT</a></p>
        <div class="links__img">
            <div class="links__image">
                <img @click="development" src="../assets/links/1.svg">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    development () {
      this.$router.push('/developer')
    }
  }
}
</script>

<style scoped>
.links__header {
    margin-top: 2.2916666666666665VW;
    font-weight: 600;
        font-size: 1.9791666666666665VW;
        text-align: center;
        color: #FFFFFF;
        margin-bottom: 1.1458333333333333VW;
}
.links__text {
    font-weight: 300;
    font-size: 0.8333333333333334VW;
        text-align: center;
        color: #FFFFFF;
        margin-bottom: 0.5208333333333333VW;
}
.links__text a {
    color:#fff;
}
.links__img {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3.166666666666666VW;
}
.links__image {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15.625VW;
}
.links__img img {
    transition: all 0.3s ease;
    cursor: pointer;
    padding: 1.5625VW 0;
    width: 15.364583333333334VW;
}
.links__image:hover img {
    opacity: 0;
    animation-duration: 1s;
    animation-name: nanex;
    animation-iteration-count: infinite;
}
@keyframes nanex {
    0% {
        transform: rotate(25deg);
        opacity: 0.2;
    }
        50% {
            transform: rotate(-25deg);
            opacity: 0.9;
        }
                100% {
                    transform: rotate(25deg);
                    opacity: 0.2;
                }
}
</style>
