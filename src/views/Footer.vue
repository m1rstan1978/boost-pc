<template>
  <div class="footer">
    <div class="footer__content">
        <div class="footer__logo" v-if="en === true">
            <router-link :to="'/'"><img src="../assets/footer/logo.svg"></router-link>
        </div>
        <div class="footer__logo" v-else>
            <router-link :to="'/en'"><img src="../assets/footer/logo.svg"></router-link>
        </div>
        <div class="footer__btn">
            <button class="footer__up"><a class="footer__href" href="#main">
                <div class="footer__indent">
                    <div class="footer__arrow">
                        <img src="../assets/footer/arrow.svg">
                    </div>
                    <p class="footer__go">{{btn}}</p>
                </div>
            </a>
            </button>
        </div>
        <div class="footer__icons">
            <div class="footer__icon"><a href="https://vk.com/phantomboost" target="_blank"><img src="../assets/footer/vk.svg"></a></div>
            <div class="footer__icon"> <a href="https://dsc.gg/phantom9" target="_blank"><img src="../assets/footer/discord.svg"></a></div>
            <div class="footer__icon"> <a href="https://www.youtube.com/channel/UCAVUVdPVSSMfzhEa9QAXVFQ" target="_blank"><img src="../assets/footer/youtube.svg"></a></div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
data() {
    return {
        btn:'Наверх страницы',
        en:true
    }
},
methods:{
    checkLang(){
        localStorage.getItem('en') === null ? this.btn = 'Наверх страницы' : this.btn = 'Top of page'
    }
},
mounted(){
    this.checkLang()
    if(localStorage.getItem('en') === null) {
        this.en = true
    }
    else {
        this.en = false
    }
}
}
</script>

<style scoped>
.footer {
    margin-top: 5VW;
    border-top: 1px solid #920100;
}
.footer__content {
    padding: 2.864583333333333VW 10.885416666666666VW;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.footer__logo img {
    width: 1.9791666666666665VW;
}
.footer__up {
    border: 1px solid #FFFFFF;
    background: none;
    transition: all 0.3s ease;
    cursor: pointer;
}
.footer__up:hover {
    transform: scale(0.98);
}
.footer__indent {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0.5208333333333333VW 1.0416666666666665VW 0.5208333333333333VW 1.0416666666666665VW;
}
.footer__href {
    text-decoration: none;
}
.footer__arrow img {
    width: 1.0416666666666665VW;
}
.footer__go {
    margin-top: 0.3645833333333333VW;
    font-weight: 300;
    font-size: 0.7291666666666666VW;
    color: #FFFFFF;
}
.footer__icons {
    display: flex;
    align-items: center;
}
.footer__icon img {
    width: 1.5625VW;
}
.footer__icon {
    margin-left: 1.1458333333333333VW;
}
</style>
