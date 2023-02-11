<template>
  <div class="windows">
    <div class="windows__content">
        <div class="windows__description" v-for="listWindEn in allListWindows" :key="listWindEn.id">
            <p class="windows__phantom" data-aos="fade-up"
    data-aos-duration="800"
    data-aos-easing="ease-in-out"
    data-aos-once="true" >PHANTOM SYSTEM</p>
            <p class="windows__about" data-aos="fade-up"
    data-aos-duration="800"
    data-aos-easing="ease-in-out"
    data-aos-once="true" v-html="listWindEn.text"></p>
           <router-link v-if="langRu === true" :to="'phantom-system'">
        <button class="windows__btn" data-aos="fade-up"
    data-aos-duration="800"
    data-aos-easing="ease-in-out"
    data-aos-once="true">{{ listWindEn.btn}}</button></router-link>
    <router-link v-else :to="'phantom-system/en'">
        <button class="windows__btn" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out"
            data-aos-once="true">{{ listWindEn.btn}}</button>
    </router-link>
        </div>
        <div class="windows__system">
            <img src="../assets/windows/system.webp">
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            langRu:true,
            listWindowsRu: [
                {
                    text: `
            - Изменено более 150 настроек NTLite и удалено более 400 компонентов<br>
            - Предустановлены необходимые инструменты для настройки системы<br>
            - Повышение производительности ISO за счет удаления лишнего ПО<br>
            - Удаленный сбор данных Microsoft, который увеличивает нагрузку на систему<br>
            - Интегрированы последние обновления Windows (SSU + Cumulative)<br>
            - Эксклюзивный дизайн кастомной сборки в стилистике проекта Phantom<br>`,
                    btn:'Перейти на страницу загрузки',
             }
            ],
            listWindowsEn: [
                {
                    text: `
            - Changed more than 150 NTLite settings and removed more than 400 components<br>
            - Necessary tools for system configuration are pre-installed<br>
            - Increased ISO performance by removing unnecessary software<br>
            - Removed Microsoft data collection, which increases the load on the system<br>
            - Windows updates integrated (SSU + Cumulative) <br>
            - Exclusive custom build design in the style of the Phantom System<br>
            - Optimized system performance by adjusting registry settings<br>`,
                    btn: 'Go to the download page',
                }
            ]
        }
    },
    computed:{
        allListWindows() {
            if(localStorage.getItem('en') === null) {
                return this.listWindowsRu
            }
            else {
                return this.listWindowsEn
            }
        }
    },
    mounted() {
        if(localStorage.getItem('en') === null) {
            this.langRu = true
        }
        else {
            this.langRu = false
        }
    }
}
</script>

<style scoped>
.windows {
    border-bottom: 3px solid #700200;
    border-top:3px solid #700200 ;
}
.windows__content {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
}
.windows__description {
    margin-left: 15.104166666666666VW;
}
.windows__phantom{
    font-weight: 500;
        font-size: 1.9791666666666665VW;
        color: #FFFFFF;
        margin-bottom: 1.5104166666666667VW;
}
.windows__about {
    font-weight: 300;
    font-size: 0.8333333333333334VW;
    line-height: 180%;
    color: #C7C4C4;
    margin-bottom: 3.6979166666666665VW;
}
.windows__btn {
    border: 1px solid #FFFFFF;
    background: none;
    padding: 0.78125VW 1.3020833333333335VW;
    font-weight: 400;
    font-size: 0.7291666666666666VW;
    color: #FFFFFF;
    transition: all 0.3s ease;
    cursor: pointer;
}
.windows__btn:hover {
    background: #fff;
    color:#070200;
}
.windows__system {
    border-left:3px solid #700200;
    margin: 0;
}
.windows img {
    display: block;
    width: 38.072916666666664VW;
}
</style>
