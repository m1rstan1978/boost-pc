<template>
  <div class="stepfirst">
    <div class="stepfirst__under">
        <div class="stepfirst__list">
            <p class="stepfirst__header">{{ Questionnaire }}</p>
            <p class="stepfirst__h">{{ title }}</p>
        </div>
    <p v-if="check === true" class="stepfirst__wrong">{{fields}}</p>
    </div>
    <div class="stepfirst__content" v-if="langRu === true">
        <div class="stepfirst__left">
            <div class="stepfirst__href">
                <span class="stepfirst__span">Укажите ссылку на вашу социальную сеть ( VK, Telegram, Discord)</span>
                <input class="stepfirst__input" type="text" placeholder="Введите ссылку " v-model="inputDiscord" :class="{wrongInput : checkInputDiscord === true}">
            </div>
            <div class="stepfirst__href">
                <span class="stepfirst__span">Основные игры под которые нужно настроить систему?</span>
                <input class="stepfirst__input" type="text" placeholder="Введите название игры" v-model="inputMainGames"
                :class="{ wrongInputMainGames : checkInputMainGames === true }">
            </div>
            <div class="stepfirst__href" v-if="$store.state.overclock === false">
                <span class="stepfirst__span" >Нужно ли настроить систему под стриминг / запись ?</span>
                <div class="stepfirst__radio" > 
                    <div class="stepfirst__yes">
                        <input class="stepfirst__check" type="radio" name="check" value="Да" v-model="radio">
                        <span class="stepfirst__span">Да</span>
                    </div>
                    <div class="stepfirst__yes">
                        <input class="stepfirst__check" type="radio" name="check" value="Нет" v-model="radio">
                        <span class="stepfirst__span">Нет</span>
                    </div>
                </div>
            </div>
            <div class="stepfirst__href">
                <span class="stepfirst__span">Напишите комплектующие вашего ПК ( CPU, GPU, RAM, Motherboard )</span>
                <textarea class="stepfirst__input" type="text" v-model="inputPcSettings" :class="{ wrongInputPcSettings : checkInputPcSettings === true }"></textarea>
            </div>
        </div>
        <div class="stepfirst__right">
            <div class="stepfirst__checkbox">
                <p class="stepfirst__red">Отметьте checkBox<span class="stepfirst__checking">*</span></p>
                <div class="stepfirst__question">
                    <input type="checkbox" value="false" v-model="usb">
                    <span class="stepfirst__spans">- У вас есть USB накопитель на 8GB +</span>
                </div>
                <div class="stepfirst__question">
                    <input type="checkbox" value="false" v-model="discord">
                    <span class="stepfirst__spans">- У вас есть Discord на вашем ПК</span>
                </div>
                <div class="stepfirst__question">
                    <input type="checkbox" value="false" v-model="phone">
                    <span class="stepfirst__spans">- У вас есть Discord на вашем Телефоне</span>
                </div>
                <div class="stepfirst__question">
                    <input type="checkbox" value="false" v-model="camera">
                    <span class="stepfirst__spans">- У вас есть телефон с камерой</span>
                </div>
                <div class="stepfirst__question">
                    <input type="checkbox" value="false" v-model="save">
                    <span class="stepfirst__spans">- Вы сохранили важные файлы на облачное хранилище / жесткий диск</span>
                </div>
                <div class="stepfirst__question">
                    <input type="checkbox" value="false" v-model="join">
                    <span class="stepfirst__spans">- Вы вступили в Discord
                        <a class="stepfirst__ssilka" href="https://dsc.gg/phantom9" target='_blank'>Phantom</a></span>
                </div>
            </div>
            <div class="stepfirst__href">
                <span class="stepfirst__span">Напишите свой никнейм или имя</span>
                <input class="stepfirst__inputsec" type="text" placeholder="Введите ваше имя" v-model="inputName" :class="{wrongInput : checkInputName === true}">
            </div>
            <button class="stepfirst__btn" @click="nextSlide">Перейти к оплате</button>
        </div>
    </div>
    <div class="stepfirst__content" v-else>
        <div class="stepfirst__left">
            <div class="stepfirst__href">
                <span class="stepfirst__span">Provide any of your social media (Discord, Twitter, Telegram, Snapchat)</span>
                <input class="stepfirst__input" type="text" placeholder="Enter link" v-model="inputDiscord"
                    :class="{wrongInput : checkInputDiscord === true}">
            </div>
            <div class="stepfirst__href">
                <span class="stepfirst__span">The main games for which you need to configure the system?</span>
                <input class="stepfirst__input" type="text" placeholder="Enter the name of the game" v-model="inputMainGames"
                    :class="{ wrongInputMainGames : checkInputMainGames === true }">
            </div>
            <div class="stepfirst__href" v-if="$store.state.overclock === false">
                <span class="stepfirst__span">Does the system need to be configured for streaming/recording ?</span>
                <div class="stepfirst__radio">
                    <div class="stepfirst__yes">
                        <input class="stepfirst__check" type="radio" name="check" value="Да" v-model="radio">
                        <span class="stepfirst__span">Yes</span>
                    </div>
                    <div class="stepfirst__yes">
                        <input class="stepfirst__check" type="radio" name="check" value="Нет" v-model="radio">
                        <span class="stepfirst__span">No</span>
                    </div>
                </div>
            </div>
            <div class="stepfirst__href">
                <span class="stepfirst__span">Write your PC components ( CPU, GPU, RAM, Motherboard )</span>
                <textarea class="stepfirst__input" type="text" v-model="inputPcSettings"
                    :class="{ wrongInputPcSettings : checkInputPcSettings === true }"></textarea>
            </div>
        </div>
        <div class="stepfirst__right">
            <div class="stepfirst__checkbox">
                <p class="stepfirst__red">checkBox<span class="stepfirst__checking">*</span></p>
                <div class="stepfirst__question">
                    <input type="checkbox" value="false" v-model="usb">
                    <span class="stepfirst__spans">- You have an 8GB USB flash drive +</span>
                </div>
                <div class="stepfirst__question">
                    <input type="checkbox" value="false" v-model="discord">
                    <span class="stepfirst__spans">- You have Discord on your PC</span>
                </div>
                <div class="stepfirst__question">
                    <input type="checkbox" value="false" v-model="phone">
                    <span class="stepfirst__spans">- You have Discord on your phone</span>
                </div>
                <div class="stepfirst__question">
                    <input type="checkbox" value="false" v-model="camera">
                    <span class="stepfirst__spans">- You have a phone with a camera</span>
                </div>
                <div class="stepfirst__question">
                    <input type="checkbox" value="false" v-model="save">
                    <span class="stepfirst__spans">- You saved important files and are ready for clean Windows installation</span>
                </div>
                <div class="stepfirst__question">
                    <input type="checkbox" value="false" v-model="join">
                    <span class="stepfirst__spans">- You joined Phantom Discord
                        <a class="stepfirst__ssilka" href="https://dsc.gg/phantom9" target='_blank'>Phantom</a></span>
                </div>
            </div>
            <div class="stepfirst__href">
                <span class="stepfirst__span">Write your name / nickname</span>
                <input class="stepfirst__inputsec" type="text" placeholder="Enter your name" v-model="inputName"
                    :class="{wrongInput : checkInputName === true}">
            </div>
            <button class="stepfirst__btn" @click="nextSlide">Proceed to payment</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      usb: false,
      discord: false,
      phone: false,
      camera: false,
      save: false,
      join: false,
      radio: '',
      inputDiscord: '',
      inputMainGames: '',
      inputPcSettings: '',
      inputName: '',
      check: false,
      checkInputDiscord: false,
      checkInputMainGames: false,
      checkInputPcSettings: false,
      checkInputName: false,
      langRu:true,
      Questionnaire: 'Заполните Анкету:',
      title:'Пожалуйста, внимательно прочитайте и ответьте на вопросы',
      fields:'Пожалуйста заполните все поля',
    }
  },
  methods: {
    nextSlide () {
      if (this.inputDiscord == '') {
        this.checkInputDiscord = true
      } else {
        this.checkInputDiscord = false
      }
      if ( this.inputMainGames === '') {
        this.checkInputMainGames = true
      } else {
        this.checkInputMainGames = false
      }
      if (this.inputPcSettings == '') {
        this.checkInputPcSettings = true
      } else {
        this.checkInputPcSettings = false
      }
      if (this.inputName == '') {
        this.checkInputName = true
      } else {
        this.checkInputName = false
      }
      this.checkRadio()

      if (this.usb !== false && this.discord !== false && this.phone !== false && this.camera !== false && this.save !== false && this.join !== false && 
          this.checkRadio() !== '' &&  this.inputDiscord !== '' && this.inputMainGames !== '' && this.inputPcSettings !== '' && this.inputName !== '') {
        this.$store.state.link = this.inputDiscord
        this.$store.state.games = this.inputMainGames
        this.$store.state.strim = this.radio
        this.$store.state.pc = this.inputPcSettings
        this.$emit('load')
      } else {
        this.check = true
      }
    },
    checkRadio() {
        if (this.radio !== '' || this.$store.state.overclock === true) {
            return this.radio = 'Нет'
        }
        else {
            return this.radio = ''
        }
    },
    checkLang() {
        if (localStorage.getItem('en') === null) {
            this.langRu = true
            this.Questionnaire = 'Заполните Анкету:'
            this.title = 'Пожалуйста, внимательно прочитайте и ответьте на вопросы'
            this.fields = 'Пожалуйста заполните все поля'
        }
        else {
            this.langRu = false
            this.Questionnaire = 'Fill out the form:'
            this.title = 'Please read carefully and answer the questions'
            this.fields = 'Please fill in all fields'
        }
    }
  },
  mounted() {
      this.checkLang()
  }
}
</script>

<style scoped>
.stepfirst {
    overflow: hidden;
    background: #070200;
    margin-left: 9.010416666666666VW;
}
.stepfirst__under {
    display: flex;
    justify-content: space-between;
}
.stepfirst__header {
    font-weight: 600;
    font-size: 1.9791666666666665VW;
    color: #FFFFFF;
}

.stepfirst__h {
    font-weight: 400;
    font-size: 0.7291666666666666VW;
    color: #9B9B9B;
}
.stepfirst__wrong {
    color:red;
    font-weight: 400;
    font-size: 0.625VW;
    margin-right:4.6875VW;
}
.stepfirst__content {
    display: flex;
    margin-top: 2.7604166666666665VW;
}
.stepfirst__href {
    display: flex;
    flex-direction: column;
}
.stepfirst__span {
    font-weight: 400;
    font-size: 0.8333333333333334VW;
    color: #FFFFFF;
    margin-bottom: 0.8333333333333334VW;
}
.stepfirst__input {
    width: 34.583333333333336VW;
    outline: none;
    border: 1px solid #FFFFFF;
    padding: 0.8854166666666666VW 1.40625VW;
    font-weight: 400;
        font-size: 0.8333333333333334VW;
        margin-bottom: 2.1354166666666665VW;
}
.stepfirst__radio {
    display: flex;
    margin-bottom: 2.1354166666666665VW;
}
.stepfirst__yes {
margin-right: 2.2395833333333335VW;

}
.stepfirst__check {
    margin-right: 0.5VW;
    vertical-align: middle;
    cursor: pointer;
}
.stepfirst__right {
    margin-left: 6.406249999999999VW;
}
.stepfirst__checkbox {
    margin-bottom: 2.1354166666666665VW;
}
.stepfirst__red {
    font-weight: 400;
    font-size: 0.8333333333333334VW;
    color: #FFFFFF;
    margin-bottom: 0.8333333333333334VW;
}
.stepfirst__checking {
color: red;
}
.stepfirst__question {
    margin-bottom: 0.5208333333333333VW;
}
.stepfirst__spans {
    font-weight: 400;
    font-size: 0.8333333333333334VW;
    color: #FFFFFF;
    margin-bottom: 0.5208333333333333VW;
    margin-left: 0.5729166666666666VW;
}
.stepfirst__question input {
    vertical-align:middle;
}
.stepfirst__ssilka {
    font-weight: 400;
    font-size: 0.8333333333333334VW;
    color: #FFFFFF;
    text-decoration: underline;
}
.stepfirst__btn {
    background: none;
    border:1px solid #fff;
    padding: 0.9375VW 1.8229166666666667VW;
    font-weight: 400;
    font-size: 16;
    color: #fff;
    transition: all 0.3s ease;
    cursor: pointer;
}
.stepfirst__btn:hover {
    color:#070200;
    background: #fff;
}
.stepfirst__inputsec {
width: 34.583333333333336VW;
    outline: none;
    border: 1px solid #FFFFFF;
    padding: 0.8854166666666666VW 1.40625VW;
    font-weight: 400;
    font-size:0.8333333333333334VW;
    margin-bottom:3.295VW;
}
.wrongInput {
    border:2px solid red !important;
}
.wrongInputMainGames {
border: 2px solid red !important;
}
.wrongInputPcSettings {
    border: 2px solid red !important;
}
</style>
