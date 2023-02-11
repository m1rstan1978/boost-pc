<template>
 <div class="version">
    <div class="page">
        <div class="main" id="main">
            <header>
                <div class="main__content">
                    <p class="main__logo "><router-link :to="'/'">Phantom</router-link></p>
                    <div class="main__info">
                    </div>
                    <div class="main__languages">
                        <p class="main__language" v-if="lang === null"><router-link :to="'/en'">RU</router-link></p>
                        <p class="main__language" v-else>EN</p>
                    </div>
                </div>
            </header>
            <div class="main__description">
                <div class="main__img" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out"
                    data-aos-once="true"><img class="main__icon" src="../assets/main/phantom.svg"></div>
                <p class="main__title" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out"
                    data-aos-once="true">FASTER THAN YOUR OS</p>
                <router-link :to="'phantom-system'" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out"
                    data-aos-once="true"><button class="main__btn">Download</button></router-link>
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
                        <a href="https://www.youtube.com/@PhantomBoost/featured"><img src="../assets/SystemMobile/youtube.png"></a>
                    </div>
                </div>
            </footer>
        </div>
        <div class="mobile__steps" v-else>
            <mobile-first-step v-if="stepFirst === true" @goNext="stepFirst = false;stepSec = true"  @close="payment = false"></mobile-first-step>
            <mobile-sec-step v-else  @close="payment = false"></mobile-sec-step>
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
            lang:false,
            payment:false,
            stepFirst:true,
            stepSec:false,
        }
    },
    methods:{
    },
    beforeMount(){
        localStorage.clear()
    },
    mounted(){
        this.lang = null
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
    color: #fff;
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
    left:48.5VW;
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
header {
width: 100%;
}
.mobile__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4VW 4.8VW;

}
.mobile__content img {
    width: 10VW;
    margin-right: 9VW;
}
.mobile__title {
    font-weight: 600;
    font-size: 3.5999999999999996VW;
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
    font-size: 2.4VW;
    border: 0.2VW solid #FFFFFF;
    background: none;
    padding: 1.2VW;
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
    padding: 6VW 0;
    border-top: 0.2VW solid #FF0000;
}
.footer__content img {
    margin: 0 2VW;
}
@media (max-width:500px) {
    .page {
        display: none;
    }
    .mobile {
        display: block;
    }
                .main__content {
                padding: 7.1vw 6.98vw;
                }
                .main__logo a {
                    font-size:4.8VW;
                }
                .main__description {
                    margin-bottom: 55vw;
                }
                .main__language {
                font-weight: 600;
                font-size: 3.533333333333334VW;
                padding: 2.5729166666666666VW;
                transition: all 0.3s ease;
                color: #FFFFFF;
                }
                .main__icon {
                margin-bottom: 9.083333333333333VW;
                margin-left: 5vw;
                width: 15.6458333333333335VW;
                }
                .main__title {
                margin-bottom: 5.5625VW;
                font-size: 5.9VW;
                width: 550px;
                text-align: center;
                 }
        .main__btn {
            padding: 2VW 0;
            font-size: 4.0416666666666665VW;
        }
        .main__arrow {
            left: 44.5VW;
            bottom: 20%;
            width: 0.0116666666666665VW;
        }
        .main__bottom img {
            width: 200vw;
        }
}
</style>
