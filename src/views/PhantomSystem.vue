<template>
  <div class="phantom">
    <div class="phantom__pagination">
        <p @click="download = true;info = false;" class="phantom__numbers" :class="{active : download === true}">1</p>
        <p @click="download = false;info = true;" class="phantom__numbers" :class="{active : info === true}">2</p>
    </div>
    <p class="phantom__title"><router-link :to="'/'">Phantom</router-link></p>
    <div class="phantom__content" v-if="download === true">
        <div class="phantom__logo">
            <img src="../assets/phantom/logo.webp">
        </div>
       <div class="phantom__file">
        <div class="phantom__system">
            <p class="phantom__about" v-html="about"></p>
            <div class="phantom__requirements">
                <div class="phantom__box">
                    <div class="phantom__minimal">
                        <p class="phantom__systemic" v-html="systemic"></p>
                        <div class="phantom__icons" v-for="list in allListCheckLang" :key="list.id">
                            <div class="phantom__mark">
                                <div class="phantom__img">
                                    <img :src="list.img">
                                </div>
                                <p class="phantom__periphery">{{ list.text }}</p>
                            </div>
                        </div>
        
                    </div>
                    <div class="phantom__center">
                        <img src="../assets/phantom/line.svg">
                    </div>
                    <div class="phantom__questions">
                        <p class="phantom__stayed" v-html="stayed"></p>
                        <p class="phantom__discord" v-if="langRu === true">
                            Зайдите в наш <a href="https://dsc.gg/phantom9">Discord Phantom</a> и
                            перейдите в<br>
                            канал Questions-ISO, где вам
                            помогут<br> пользователи или администраторы сервера
                            с<br> решением вашей проблемы
                        </p>
                        <p class="phantom__discord" v-else >
                            Go to our <a href="https://dsc.gg/phantom9">Discord Phantom</a> and go to the<br>
                            Questions-ISO channel, where you can get help from<br>
                            users or server administrators with
                            solve your problem
                        </p>
                    </div>
                </div>
                <div class="phantom__windows">
                    <div class="phantom__wind">
                        <p class="phantom__inf">Phantom System</p>
                        <div class="phantom__icon">
                            <img src="../assets/phantom/wind.webp">
                        </div>
                        <p class="phantom__inf">Windows 10 20H2</p>
                    </div>
                    <div class="phantom__november">
                        <div class="phantom__left">
                            <p class="phantom__des">2022 November 15</p>
                            <p class="phantom__recommend" v-if="langRu === true">Установка рекомендуется только на системы с SSD/NMVE</p>
                            <p class="phantom__recommend" v-else>Installation is recommended only on SSD/NMVE systems</p>
                        </div>
                        <div class="phantom__right">
                            <p class="phantom__clear" v-html="clearInstall"></p>
                            <div class="phantom__btn" v-if="langRu === true">
                                <a href="https://drive.google.com/file/d/1SYA32XFloM1sC_e5clG8BtMtbupYwlbk/view">
                                    <button class="phantom__download">Скачать (Google Drive)</button></a> 
                            </div>
                            <div class="phantom__btn" v-else>
                                <a href="https://drive.google.com/file/d/1SYA32XFloM1sC_e5clG8BtMtbupYwlbk/view">
                                    <button class="phantom__download">Download (Google Drive)</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div>
       <p class="phantom__below">
        <a v-if="langRu === true" href="https://youtu.be/JPxz3P8aS38">Установка Windows без флешки</a>
        <a v-else href="https://youtu.be/JPxz3P8aS38">How to install Windows without a flash drive</a>
    </p>
    </div>
    <div class="phantom__management" v-else>
        <div class="phantom__logo">
            <img src="../assets/phantom/logo.webp">
        </div>
        <p class="phantom__management_text" v-html="managment"></p>
        <div class="phantom__steps">
            <p class="phantom__ventoy" v-if="langRu === true">1. Скачайте <a href="https://github.com/ventoy/Ventoy/releases">Ventoy</a> (Нужна версия для Windows)</p>
            <p class="phantom__ventoy" v-else>1. Download <a href="https://github.com/ventoy/Ventoy/releases">Ventoy</a> (Windows version required)</p>
            <div class="phantom__image">
                <img src="../assets/phantom/lineUnder.webp">
            </div>
        </div>
        <div class="phantom__steps">
            <p class="phantom__ventoy" v-html="ventoy"></p>
            <div class="phantom__image">
                <img src="../assets/phantom/lineUnder.webp">
            </div>
        </div>
        <div class="phantom__steps">
            <p class="phantom__ventoy" v-html="installBtn" ></p>
            <div class="phantom__image">
                <img src="../assets/phantom/lineUnder.webp">
            </div>
        </div>
        <div class="phantom__steps">
            <p class="phantom__ventoy" v-html="openBoot"></p>
            <div class="phantom__image">
                <img src="../assets/phantom/lineUnder.webp">
            </div>
        </div>
        <div class="phantom__steps">
            <p class="phantom__ventoy" v-html="saveLink"></p>
            <div class="phantom__image">
                <img src="../assets/phantom/lineUnder.webp">
            </div>
        </div>
        <div class="phantom__steps">
            <p class="phantom__ventoy" v-html="ssd"></p>
            <div class="phantom__image">
                <img src="../assets/phantom/lineUnder.webp">
            </div>
        </div>
        <div class="phantom__steps">
            <p class="phantom__ventoy" v-if="langRu === true" >7. После установки на рабочем столе будет ссылка на архив 
                <a href="https://drive.google.com/file/d/1b6Se0PlI_BI6AsIzgH1Aq5Y55DDpYGbB/view?usp=share_link">Phantom System Optimization</a><br>
            со всеми нужными инструментами по настройке сборки</p>
            <p class="phantom__ventoy" v-else>7. After installation on the desktop there will be a link to the 
                <a href="https://drive.google.com/file/d/1b6Se0PlI_BI6AsIzgH1Aq5Y55DDpYGbB/view?usp=share_link">Phantom System
                Optimization</a><br>
            with all the tools you need to customize your build</p>
        </div>
    </div>
    <div class="phantom__perehod">
        <img src="../assets/phantom/perehod.webp">
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            langRu:true,
            about:`Phantom System - это кастомный ISO подходящий для плавного геймплея и лучшего
                игровог оопыта, система подойдет для
                пользователей, которым важен FPS и низкая задержка. Главной целью было добиться максимальных результатов в
                игровых
                бенчмарках.`,
              systemic:'Минимальные системные требования:'
                ,
            stayed:'Остались вопросы по Phantom System?'
                ,
            clearInstall:'Чистая установка',
            managment:'Руководство по установке системы:',
            ventoy:'2. Зайдите в опции и выберите стиль раздела GPT и выберите ваше USB устройство (8GB+)',
            installBtn:'3. Нажмите кнопку установить и после установки перенесите ISO файл в раздел Ventoy',
            openBoot:'4. Откройте Boot Menu и выберите ваше USB устройство (Boot in Normal Mode)',
            saveLink: `5. Обязательно сохраните на флешке установщик браузера и драйвер на LAN с сайта<br>
      материнской платы, поскольку в системе полностью удалены Intenet Explorer и Microsoft Edge.`,
            ssd:'6. Сделайте чистую установку системы для вашего SSD/NVME накопителя',
            circleList:[
                { img: '../phantom/circle.webp', text:'Двухъядерный процессор с частотой 1 ГГц или выше',},
                { img: '../phantom/circle.webp', text: '2 ГБ оперативной памяти памяти (RAM)', },
                { img: '../phantom/circle.webp', text:'20-25 ГБ свободного дискового пространства',},
            ],
            circleListEn:[
                { img: '../phantom/circle.webp', text: 'Dual-core processor with 1 GHz or higher', },
                { img: '../phantom/circle.webp', text: '2 GB of memory (RAM)', },
                { img: '../phantom/circle.webp', text: '20-25 GB of free disk space', }, 
            ],
            download:true,
            info:false,
        }
    },
    methods:{
        checkEng() {
            if(localStorage.getItem('en') === null) {
                this.langRu = true
                this.about = `Phantom System - это кастомный ISO подходящий для плавного геймплея и лучшего
                игровог оопыта, система подойдет для
                пользователей, которым важен FPS и низкая задержка. Главной целью было добиться максимальных результатов в
                игровых
                бенчмарках.`
                this.systemic = 'Минимальные системные требования:'
                this.stayed = 'Остались вопросы по Phantom System?'
                this.discord = `Зайдите в наш <a href="https://dsc.gg/phantom9">Discord Phantom</a> и
                            перейдите в<br>
                            канал Questions-ISO, где вам
                            помогут<br> пользователи или администраторы сервера
                            с<br> решением вашей проблемы`
                this.clearInstall = 'Чистая установка'
                this.managment = 'Руководство по установке системы:'
                this.ventoy = '2. Зайдите в опции и выберите стиль раздела GPT и выберите ваше USB устройство (8GB+)'
                this.installBtn =  '3. Нажмите кнопку установить и после установки перенесите ISO файл в раздел Ventoy'
                this.openBoot =  '4. Откройте Boot Menu и выберите ваше USB устройство (Boot in Normal Mode)'
                this.saveLink =  `5. Обязательно сохраните на флешке установщик браузера и драйвер на LAN с сайта<br>
материнской платы, поскольку в системе полностью удалены Intenet Explorer и Microsoft Edge.`
                this.ssd =  '6. Сделайте чистую установку системы для вашего SSD/NVME накопителя'
            }
            else {
                this.langRu = false
                this.about = `The Phantom System is a custom ISO suitable for smooth gameplay and a better
                gaming experience, the system is suitable for
                users who care about FPS and low latency. The main goal was to get the best results in
                gaming
                benchmarks.`
                this.systemic = 'Minimum system requirements:'
                this.stayed = 'Still have questions about the Phantom System?'
                this.clearInstall = 'Clean Installation'
                this.managment = 'System installation guide:'  
                this.ventoy = '2. Go to options and select GPT partition style and select your USB device (8GB+)'
                this.installBtn = '3. Click the install button and after installation transfer the ISO file to Ventoy'
                this.openBoot = '4. Open the Boot Menu and select your USB device (Boot in Normal Mode)'
                this.saveLink = `5. Be sure to save the browser installer and LAN driver from the<br>
motherboard, because Intenet Explorer and Microsoft Edge have been completely removed from the system.`
                this.ssd = '6. Do a clean system installation for your SSD/NVME drive'
            }
        }
    },
    computed:{
        allListCheckLang() {
            if(localStorage.getItem('en') === null) {
                return this.circleList
            }
            else {
                return this.circleListEn
            }
        }
    },
    beforeMount(){
        localStorage.clear()
    },
    mounted(){
        this.checkEng()
    }
}
</script>

<style scoped>
.phantom {
    position: relative;
    height: 100vh;
    background: #070200;
    overflow: hidden;
}
.phantom__a  {
    color:#fff !important;
}

.phantom__title {
    font-weight: 700;
        font-size: 1.25VW;
        color: #FFFFFF;
    padding: 2.45vw 1.98vw;
}
.phantom__title a {
    color: #FFFFFF;
    text-decoration: none;
}
.phantom__content {
    display: flex;
  justify-content: center;
  align-items: center;
    flex-direction: column;
}
.phantom__logo {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.9791666666666665VW;
}
.phantom__logo img {
    width: 5.260416666666667VW;
}
.phantom__file {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.phantom__about {
    font-weight: 400;
        font-size: 0.8333333333333334VW;
        line-height: 1.1458333333333333VW;
        margin-bottom: 1.9791666666666665VW;
        color: #B1B1B1;
        width: 50.78125VW;
}
.phantom__box {
    display: flex;
}
.phantom__minimal {
    margin-right: 2.864583333333333VW;
}
.phantom__systemic {
    font-weight: 400;
        font-size: 0.9375VW;
        margin-bottom: 0.625VW;
        color: #FFFFFF;
}
.phantom__icons {
    margin-bottom: 0.46875VW;
}
.phantom__icon img {
    width: 1.7708333333333333VW;

}
.phantom__mark {
    display: flex;
    align-items: center;
}
.phantom__img img {
    display: flex;
    align-items: center;
    width: 0.8333333333333334VW;
}
.phantom__periphery {
    font-weight: 400;
        font-size: 0.7291666666666666VW;
        margin-left: 0.3125VW;
        color: #CACACA;
}
.phantom__questions {
    margin-left: 2.864583333333333VW;
}
.phantom__center img {
    height: 6.71875VW;
}
.phantom__stayed {
    font-weight: 400;
     font-size: 0.9375VW;
    margin-bottom: 0.625VW;
        color: #FFFFFF;
        
}
.phantom__discord {
    font-weight: 400;
        font-size: 0.7291666666666666VW;
        line-height: 135%;
        color: #CACACA;
}
.phantom__discord a {
color: #CACACA;
}
.phantom__windows {
    margin-top: 1.9791666666666665VW;
}
.phantom__wind {
    display: flex;
    align-items: center;
}
.phantom__inf {
    font-weight: 600;
        font-size: 1.25VW;
        line-height: 1.5104166666666667VW;
        color: #FFFFFF;
}
.phantom__icon {
    margin: 0 2.083333333333333VW;
}
.phantom__icon img {
    display: flex;
    align-items: center;
}
.phantom__november {
    display: flex;
    margin-top: 1.40625VW;
}
.phantom__des {
    font-weight: 600;
        font-size: 0.9375VW;
        margin-bottom: 1.40625VW;
        color: #FFFFFF;
}
.phantom__right {
    margin-left: 5.572916666666667VW;
}
.phantom__recommend {
    font-weight: 600;
        font-size: 0.9375VW;
        color: #FFFFFF;
}
.phantom__clear {
    font-weight: 600;
        font-size: 0.9375VW;
        margin-bottom: 0.5208333333333333VW;
        color: #FFFFFF;
}
.phantom__download {
border: 1px solid #D9D9D9;
background: none;
padding: 0.4166666666666667VW 2.864583333333333VW;
font-weight: 500;
font-size: 0.7291666666666666VW;
line-height: 140%;
transition: all 0.3s ease;
cursor: pointer;
color: #FFFFFF;
}
.phantom__download:hover {
    background: #fff;
    color:#070200;
}
.phantom__perehod {
    position: absolute;
    bottom: 0;
    left:0;
}
.phantom__perehod img {
    width: 100vw;
}
.phantom__pagination {
    position: absolute;
    left:12.708333333333332VW;
    top:21.041666666666668VW;
}
.phantom__numbers {
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

.phantom__numbers:hover {
    background: #FFF;
    color: #070200;
}
.active {
    background: #FFF;
    color: #070200;
}
.phantom__management {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.phantom__steps {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 0.4208333333333333VW;
}
.phantom__management_text {
    font-weight: 600;
        font-size: 1.875VW;
        color: #FFFFFF;
        margin-bottom: 1.3541666666666667VW;
}
.phantom__ventoy {
    font-weight: 400;
        font-size: 0.8333333333333334VW;
        line-height: 180%;
        color: #FFFFFF;
        text-align: center;
}
.phantom__ventoy a {
    color: #FFFFFF;
}
.phantom__image img {
    width: 2.65625VW;
}
.phantom__below {
    text-align: center;
    margin-top: 5.729166666666666VW;
}
.phantom__below a {
    font-weight: 400;
        font-size: 0.7291666666666666VW;
        color: #9E9E9E;
}
</style>
