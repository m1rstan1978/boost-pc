<template>
    <div class="version">
        <div class="page">
            <div class="main" id="main">
                <header>
                    <div class="main__content">
                        <p class="main__logo ">
                            <router-link :to="'/en'">Phantom</router-link>
                        </p>
                        <div class="main__info">
                        </div>
                        <div class="main__languages" @click="engLang">
                            <p class="main__language" v-if="lang === null">RU</p>
                            <p class="main__language" v-else><router-link :to="'/'">EN</router-link></p>
                        </div>
                    </div>
                </header>
                <div class="main__description">
                    <div class="main__img" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out"
                        data-aos-once="true"><img class="main__icon" src="../assets/main/phantom.svg"></div>
                    <p class="main__title" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out"
                        data-aos-once="true">FASTER THAN YOUR OS</p>
                    <router-link :to="'phantom-system/en'" data-aos="fade-up" data-aos-duration="800"
                        data-aos-easing="ease-in-out" data-aos-once="true"><button class="main__btn">Download</button>
                    </router-link>
                </div>
                <div class="main__bottom">
                    <img src="../assets/main/perehod.webp">
                </div>
                <div class="main__arrow"><a href="#info"><img data-aos="fade-up" data-aos-duration="800"
                            data-aos-easing="ease-in-out" data-aos-once="true" src="../assets/main/arrow.svg"></a></div>
            </div>
            <info></info>
            <windows></windows>
            <services></services>
            <test></test>
            <find></find>
            <faq></faq>
            <Footer />
        </div>
        <div class="mobile">
            <div class="mobile__sections" v-if="payment === false">
                <header>
                    <div class="mobile__content">
                        <p class="mobile__title"><router-link :to="'/'">Phantom</router-link></p>
                        <div class="mobile__img">
                            <img src="../assets/headerMob/logo.png">
                        </div>
                        <div class="mobile__lang">
                            <p class="mobile__langa">EN</p>
                        </div>
                    </div>
                </header>
                <mobile-services @GoStepFirst="payment = true"></mobile-services>
                <mobile-test></mobile-test>
                <MobileWhyUs></MobileWhyUs>
                <mobile-discord></mobile-discord>
                <footer>
                    <div class="footer__content">
                        <div class="footer__img">
                            <a href="https://vk.com/phantomboost"><img src="../assets/SystemMobile/vk.png"></a>
                        </div>
                        <div class="footer__img">
                            <a href="https://discord.gg/bQkY2sRVne"><img src="../assets/SystemMobile/ds.png"></a>
                        </div>
                        <div class="footer__img">
                            <a href="https://www.youtube.com/@PhantomBoost/featured"><img
                                    src="../assets/SystemMobile/youtube.png"></a>
                        </div>
                    </div>
                </footer>
            </div>
            <div class="mobile__steps" v-else>
                <mobile-first-step v-if="stepFirst === true" @goNext="stepFirst = false;stepSec = true" @close="payment = false"></mobile-first-step>
                <mobile-sec-step v-else @close="payment = false"></mobile-sec-step>
            </div>
        </div>
    </div>
</template>

<script>
import Info from './Info.vue'
import Services from './Services.vue'
import Windows from './Windows.vue'
import Test from './Test.vue'
import Find from './Find.vue'
import Reviews from './Reviews.vue'
import Faq from './Faq.vue'
import Footer from './Footer.vue'
import MobileServices from './MobileServices.vue'
import MobileTest from './MobileTest.vue'
import MobileWhyUs from './MobileWhyUs.vue'
import MobileDiscord from './MobileDiscord.vue'
import MobileFirstStep from './MobileFirstStep.vue'
import MobileSecStep from './MobileSecStep.vue'
export default {
    data() {
        return {
            lang: false,
            payment:false,
            stepFirst: true,
            stepSec: false,
        }
    },
    methods: {
        engLang() {
            if (this.$route.path !== '/en') {
                localStorage.getItem('en') === null ? localStorage.setItem('en', 'en') : localStorage.clear()
                location.reload()
            }
        },
    },
    beforeMount() {
        localStorage.setItem('en', 'en')
    },
    mounted() {
        this.lang = localStorage.getItem('en')
    },
    components: { Info, Windows, Services, Test, Find, Reviews, Faq, Footer, MobileServices, MobileTest, MobileWhyUs, MobileDiscord, MobileFirstStep, MobileSecStep }
}
</script>

<style scoped>
.page {
    background: #070200;
    overflow: hidden;
}

.main {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    overflow: hidden;

}

header {
    width: 100%;
}

.main__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2.1vw 1.98vw;
}

.main__logo a {
    font-weight: 700;
    font-size: 1.25VW;
    color: #FFFFFF;
    text-decoration: none;
}

.main__languages {
    border: 1px solid #FFFFFF;
    background: none;
    transition: all 0.3s ease;
    cursor: pointer;
}
.main__languages a {
    color:#fff;
    text-decoration: none;
    transition: all 0.3s ease;
}
.main__languages:hover {
    background: #fff;
}

.main__language {
    font-weight: 600;
    font-size: 0.8333333333333334VW;
    padding: 0.5729166666666666VW;
    transition: all 0.3s ease;
    color: #FFFFFF;
}

.main__languages:hover a {
    color: #070200;
}

.main__info {
    display: flex;
    align-items: center;
}

.main__phantom {
    font-weight: 500;
    font-size: 0.8333333333333334VW;
    color: #E7EAF3;
    margin-right: 50px;
    cursor: pointer;
}

.main__about {
    font-weight: 500;
    font-size: 0.8333333333333334VW;
    color: #E7EAF3;
    cursor: pointer;
}

.main__description {
    width: 42.395833333333336VW;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.main__icon {
    margin-bottom: 2.083333333333333VW;
    width: 3.6458333333333335VW;
}

.main__title {
    margin-bottom: 1.5625VW;
    font-weight: 700;
    font-size: 2.5VW;
    color: #FFFFFF;
}

.main__description a {
    width: 100%;
}

.main__btn {
    border: 1px solid #FFFFFF;
    border-radius: 5px;
    width: 100%;
    padding: 0.46875VW 0;
    font-weight: 500;
    font-size: 1.0416666666666665VW;
    color: #FFFFFF;
    background: none;
    transition: all 0.3s ease;
    cursor: pointer;
}

.main__btn:hover {
    background: #fff;
    color: #070200;
}

.main__bottom img {
    width: 100vw;
}

.main__arrow {
    position: absolute;
    left: 48.5VW;
    bottom: 20%;
    transition: all 0.3s ease;
    width: 1.0416666666666665VW;
    padding: 10px;
}

.main__arrow img {
    cursor: pointer;
}

.main__arrow img:hover {
    transform: scale(0.95);
    opacity: 0.7;
}
.mobile {
    display: none;
    background: #070200;
    min-height: 100vh;
}

.mobile__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 24px;

}

.mobile__content img {
    margin-right: 45px;
}

.mobile__title {
    font-weight: 600;
    font-size: 18px;
    color: #FFFFFF
}

.mobile__title a {
    text-decoration: none;
    color: #FFFFFF
}

.mobile__langa {
    text-decoration: none;
    color: #fff;
    font-weight: 600;
    font-size: 12px;
    border: 1px solid #FFFFFF;
    background: none;
    padding: 6px;
    transition: all 0.3s ease;
    cursor: pointer;
}

.mobile__langa:hover {
    color: #070200;
    background: #fff;
}

.footer__content {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 0;
    border-top: 1px solid #FF0000;
}

.footer__content img {
    margin: 0 10px;
}
@media (max-width:500px) {
    .mobile {
        display: block;
    }
    .page{
        display: none;
    }
}
</style>
