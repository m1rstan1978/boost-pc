<template>
    <div>
        <div class="info" id="info">
            <div class="info__content">
                    <div class="info__card" v-for="enInfoList in allListInfEn" :key="enInfoList.id" 
                    data-aos="fade-up" 
                    data-aos-duration="800" 
                    data-aos-easing="ease-in-out" 
                        data-aos-once="true">
                        <div class="info__img"><img :src="enInfoList.img"></div>
                        <p class="info__text" v-html="enInfoList.text"></p>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
data() {
    return {
        listInfRu:[
            { img:'../info/1.webp', text:'Наша команда состоит из<br>энтузиастов и разработчиков в<br> сфере оптимизации компьютерных<br>систем'},
            { img: '../info/2.webp', text: 'Мы предоставляем демократичные <br> цены на наши услуги, чтобы каждый <br> пользователь имел возможность<br> приобрести их' },
            { img: '../info/3.webp', text: 'Все настройки и опции тщательно<br> протестированы и направлены на<br> оптимизацию работы процессора и <br> оперативной памяти' },
        ],
        listInfEn: [
            { img: '../info/1.webp', text: 'Our team consists of enthusiasts and<br> developers in the field of computer<br> system optimization' },
            { img: '../info/2.webp', text: 'We provide democratic prices for our<br> services, so that every user has the<br> opportunity to afford the purchase' },
            { img: '../info/2.webp', text: 'All settings and options have been<br> thoroughly tested and are aimed at<br> optimizing CPU and RAM performance' },
        ]
    }
},
computed:{
    allListInfEn() {
        if (localStorage.getItem('en') === null) {
            return this.listInfRu
        }
        else {
            return this.listInfEn
        }
    }
}
}
</script>

<style scoped>
.info {
    width: 100%;

}
.info__content {
    display: flex;
        align-items: center;
        justify-content: center;
        padding: 5.833333333333333VW 0;
}
.info__card {
    text-align: center;
    margin:0 4.479166666666667VW;
}
.info__img img {
    width: 4.0625VW;
}
.info__text {
    margin-top: 0.6770833333333334VW;
    font-weight: 300;
    font-size: 0.8333333333333334VW;
    line-height: 140%;
    color: #FFFFFF;
}
</style>
