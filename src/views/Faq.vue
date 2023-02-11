<template>
  <div class="faq">
    <p class="faq__header">{{titleName}}</p>
    <div class="faq__content">
        <div class="faq__card" @click="install = install != true">
            <div class="faq__indent">
                <p class="faq__question">{{firstQuest}}</p>
                <div class="faq__arrow">
                    <img class="faq__img" src="../assets/faq/arrow.svg" :class="{activeImg : install === true}">
                </div>
            </div>
            <div class="faq__inner" :class="{active : install === true}" >
                <p class="faq__text">{{firstfaq}}</p>
            </div>
        </div>
        <div class="faq__card" @click="update = update != true">
            <div class="faq__indent">
                <p class="faq__question">{{secQuest}}</p>
                <div class="faq__arrow">
                    <img class="faq__img" src="../assets/faq/arrow.svg" :class="{ activeImg: update === true}">
                </div>
            </div>
            <div class="faq__inner" :class="{ active: update === true}">
                <p class="faq__text">{{secfaq}}</p>
            </div>
        </div>
        <div class="faq__card" @click="boost = boost != true">
            <div class="faq__indent">
                <p class="faq__question">{{thirdQuest}}</p>
                <div class="faq__arrow">
                    <img class="faq__img" src="../assets/faq/arrow.svg" :class="{ activeImg: boost === true}">
                </div>
            </div>
            <div class="faq__inner" :class="{ active: boost === true}">
                <p class="faq__text">{{thirdfaq}}</p>
            </div>
        </div>
        <div class="faq__card" @click="need = need != true">
            <div class="faq__indent">
                <p class="faq__question">{{fourthQuest}}</p>
                <div class="faq__arrow">
                    <img class="faq__img" src="../assets/faq/arrow.svg" :class="{ activeImg: need === true}">
                </div>
            </div>
            <div class="faq__inner" :class="{ active: need === true}">
                <p class="faq__text">{{fourthfaq}}</p>
            </div>
        </div>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      install: false,
      update: false,
      boost: false,
      need:false,
      pc: false,
        titleName:'Вопросы и ответы',
      firstQuest:'Что дает настройка системы / разгон обычному пользователю ?',
      firstfaq: `У вас будет выше производительность в рабочих задачах и играх, а картинка будет ощущаться плавной за счет более
                высоких редких кадров, также будет ниже системная задержка или как принято называть сейчас "Inputlag"`,
                
        secQuest: 'В каких случаях стоит покупать Custom Tweaking ?',
        secfaq: `Данный тип настройки подходит для конфигураций в которых возможен разгон процессора 
        и оперативной памяти. В случае если у вас процессор Intel, то 
        он должен обладать маркировкой "K", кроме этого понадобятся материнская плата с чипсетом маркировки «Z».`,
                
        thirdQuest: 'Что делать если возникли какие-то проблемы после настройки ?',
        thirdfaq: `Все зависит от конкретного случая, обычно мы предоставляем 
        нашим клиентам техническую поддержку в течении 90 дней на решение возникших проблем.`,

        fourthQuest: 'Что делать если услуга не помогла и прироста производительности не было ?',
        fourthfaq: `В таком случае мы вернем вам 50% от потраченных средств и будем должны сделать 
        бенчмаркинг вашей системы, чтобы удостовериться, что прироста производительности у вас нету.`,

    }
  },
  methods:{
      checkLang() {
        if(localStorage.getItem('en') === null) {
            this.titleName = 'Вопросы и ответы'
            this.firstQuest = 'Что дает настройка системы / разгон обычному пользователю ?'
            this.firstfaq = `У вас будет выше производительность в рабочих задачах и играх, а картинка будет ощущаться плавной за счет более
                высоких редких кадров, также будет ниже системная задержка или как принято называть сейчас "Inputlag"`

            this.secQuest = 'В каких случаях стоит покупать Custom Tweaking ?'
            this.secfaq = `Данный тип настройки подходит для конфигураций в которых возможен разгон процессора 
        и оперативной памяти. В случае если у вас процессор Intel, то 
        он должен обладать маркировкой "K", кроме этого понадобятся материнская плата с чипсетом маркировки «Z».`,

                this.thirdQuest = 'Что делать если возникли какие-то проблемы после настройки ?'
            this.thirdfaq = `Все зависит от конкретного случая, обычно мы предоставляем 
        нашим клиентам техническую поддержку в течении 90 дней на решение возникших проблем.`

            this.fourthQuest = 'Что делать если услуга не помогла и прироста производительности не было ?'
            this.fourthfaq = `В таком случае мы вернем вам 50% от потраченных средств и будем должны сделать 
        бенчмаркинг вашей системы, чтобы удостовериться, что прироста производительности у вас нету.`
                

        }

        else {
            this.titleName = 'Questions and answers'
            this.firstQuest = 'What does system tuning / overclocking do for the average user?'
            this.firstfaq = `You will have better performance in work tasks and games, and the picture will feel smoother due to the
                The system lag or as it is called now "Inputlag" will also be lower.`

            this.secQuest = 'When should I buy Custom Tweaking?'
            this.secfaq = `This type of setup is suitable for configurations in which it is possible to overclock the CPU 
        and RAM can be overclocked. If you have an Intel processor, then 
        it must be marked "K", besides you need a motherboard with chipset marked "Z".`,

                this.thirdQuest = 'What to do if there are any problems after setting up?'
            this.thirdfaq = `It depends on the individual case, we usually provide 
        our customers technical support within 90 days to solve any problems that arise.`

            this.fourthQuest = 'What to do if the service did not help and there was no performance gain?'
            this.fourthfaq = `In this case we will provide you with full refund (doesn't apply to overclock service).`

        }
      }
  },
  mounted() {
    this.checkLang()
  }
}
</script>

<style scoped>
.faq {
background: url('../assets/faq/back.svg') no-repeat;
background-size: cover;
overflow: hidden;
}
.faq__header {
    padding-top: 5.208333333333334VW;
    padding-bottom: 3.854166666666667VW;
    text-align: center;
    font-weight: 600;
    font-size: 2.5VW;
    color: #FFFFFF;
}
.faq__content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.faq__card {
    background: #fff;
    border-radius: 0.5208333333333333VW;
    width: 49.47916666666667VW;
    margin-bottom: 2.03125VW;
    transition: all 0.3s ease;
    cursor: pointer;
}
.faq__cardsec {
background: #fff;
    border-radius: 0.5208333333333333VW;
    width: 49.47916666666667VW;
    margin-bottom: 5VW;
    transition: all 0.3s ease;
    cursor: pointer;
}
.faq__card:hover {
    opacity: 0.9;
}
.faq__indent {
    padding: 0.9375VW 1.5625VW 0.9375VW 1.5625VW;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.faq__question {
    font-weight: 600;
    font-size: 1.0416666666666665VW;
    color: #070200;
}
.faq__inner {
    height: 0px;
    overflow: hidden;
    transition: all 0.3s ease;
}
.faq__text {
    font-weight: 400;
    font-size: 0.7291666666666666VW;
    line-height: 1.0416666666666665VW;
    color: #676767;
    padding: 0px 2.34375VW 1.3020833333333335VW 2.34375VW;

}
.faq__img {
    width: 1.0416666666666665VW;
    transition: all 0.3s ease;
}
.active {
    height: 3.8458333333333335VW;
}
.activeImg {
    transform: rotate(180deg);
}
</style>
