<template>
  <div class="mobfirst">
    <header>
        <div class="mobfirst__logo">
            <div class="mobfirst__image">
            <router-link :to="'/en'"><img @click="$emit('close')" src="../assets/headerMob/logo2.png"></router-link>
            </div>
        </div>
    </header>
    <div class="mobfirst__steps">
        <p class="mobfirst__order">Order payment</p>
        <div class="mobfirst__step">
            <p class="mobfirst__first">1</p>
            <div class="mobfirst__line">
                <img src="../assets/SystemMobile/stepsline.svg">
            </div>
            <p class="mobfirst__sec">2</p>
        </div>
    </div>
    <div class="mobfirst__quest">
        <p class="mobfirst__fill">Fill out the Questionnaire:</p>
        <p class="mobfirst__read">Please read carefully and answer the questions</p>
    </div>
    <div class="mobfirst__content">
        <div class="mobfirst__inputs">
            <label class="mobfirst__label">Provide a link to your social network</label>
            <input class="mobfirst__input" type="text" placeholder="Enter link" v-model="network" :class="{wrongInput : click === true && network === ''}">
        </div>
        <div class="mobfirst__inputs">
            <label class="mobfirst__label">The main games for which you need to<br> configure the system?</label>
            <input class="mobfirst__input" type="text" placeholder="Enter link" v-model="games" :class="{wrongInput : click === true && games === ''}">
        </div>
        <div class="mobfirst__radios">
            <label class="mobfirst__label" :class="{ wrongLabel : click === true && streaming === 'empty'}">Does the system need to be configured for streaming/recording ?</label>
            <div class="mobfirst__card">
                <div class="mobfirst__yes">
                    <input class="mobfirst__radio" type="radio" name="system" value="yes" v-model="streaming">
                    <span class="mobfirst__span">Yes</span>
                </div>
                <div class="mobfirst__yes">
                    <input class="mobfirst__radio" type="radio" name="system" value="no" v-model="streaming">
                    <span class="mobfirst__span">No</span>
                </div>
            </div>
        </div>
        <div class="mobfirst__inputs">
            <label class="mobfirst__label">Write your PC components ( CPU, GPU,<br> RAM, Motherboard )</label>
            <input class="mobfirst__input" type="text" placeholder="Enter link" v-model="pc" :class="{ wrongInput: click === true && pc === ''}">
        </div>
        <div class="mobfirst__checkbox">
            <p class="mobfirst__name" :class="{ wrongCheckBox: (click === true) && (flash === false || discordPc === false || discordPhone === false || camera === false || files === false || discord === false)}">
                CheckBox<span class="mobfirst__star">*</span></p>
            <div class="mobfirst__check">
                <input type="checkbox" class="mobfirst__inputs_checkbox" v-model="flash">
                <p class="mobfirst__text">- Do you have an 8GB USB flash drive +</p>
            </div>
            <div class="mobfirst__check">
                <input type="checkbox" class="mobfirst__inputs_checkbox" v-model="discordPc">
                <p class="mobfirst__text">- You have Discord on your PC</p>
            </div>
            <div class="mobfirst__check">
                <input type="checkbox" class="mobfirst__inputs_checkbox" v-model="discordPhone">
                <p class="mobfirst__text">- You have Discord on your phone</p>
            </div>
            <div class="mobfirst__check">
                <input type="checkbox" class="mobfirst__inputs_checkbox" v-model="camera">
                <p class="mobfirst__text">- Do you have a phone with a camera</p>
            </div>
            <div class="mobfirst__check">
                <input type="checkbox" class="mobfirst__inputs_checkbox" v-model="files">
                <p class="mobfirst__text">- You saved important files to the hard drive</p>
            </div>
            <div class="mobfirst__check">
                <input type="checkbox" class="mobfirst__inputs_checkbox" v-model="discord">
                <p class="mobfirst__text">- You joined Discord Phantom</p>
            </div>
        </div>
        <div class="mobfirst__inputs">
            <label class="mobfirst__label" >You agree that the service cannot be<br> canceled and is non-refundable<br>
            (Sign your name as consent)</label>
            <input class="mobfirst__input" type="text" placeholder="Enter your name" v-model="agree" :class="{ wrongInput: click === true && agree === ''}">
        </div>
        <button class="mobfirst__next" @click="goNext">Proceed to payment</button>
    </div>
  </div>
</template>

<script>
export default {
data() {
    return {
        network:'',
        games:'',
        streaming:'empty',
        pc:'',
        flash:false,
        discordPc:false,
        discordPhone:false,
        camera:false,
        files:false,
        discord:false,
        agree:'',
        click:false,
    }
},
methods:{
    goNext() {
        this.click = true
        if(this.network !== '' && this.games !== '' && this.streaming !== 'empty' 
        && this.pc !== '' && this.flash === true && this.discordPc === true && this.discordPhone === true 
        && this.camera === true && this.files === true && this.discord === true && this.agree !== '') {
            this.$store.state.link = this.network
            this.$store.state.games = this.games
            this.$store.state.strim = this.streaming
            this.$store.state.pc = this.pc
            this.$emit('goNext')
        }
    }
}
}
</script>

<style scoped>
.mobfirst {
    background: #070200;
    min-height: 100vh;
    width: 100%;
}
.mobfirst__logo {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.mobfirst__logo {
    padding: 4VW 0;
}
.mobfirst__order {
    text-align: center;
    margin-top: 5VW;
    font-weight: 600;
    font-size: 6.800000000000001VW;    
    color: #FFFFFF;
}
.mobfirst__step {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 4VW;
}
.mobfirst__step img {
    display: flex;
    align-items: center;
}
.mobfirst__first {
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 3.5999999999999996VW;
    width: 7.000000000000001VW;
    height: 7.000000000000001VW;
    border-radius: 100%;
    color: #131313;
}
.mobfirst__sec {
    background: #474747;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 3.5999999999999996VW;
    width: 7.000000000000001VW;
    height:7.000000000000001VW;
    border-radius: 100%;
    color: #fff;
}
.mobfirst__fill {
    margin-top: 10VW;
    margin-bottom: 1.4000000000000001VW;
    font-weight: 500;
    font-size: 3.5999999999999996VW;
    text-align: center;
    color: #E7E6E6;
}
.mobfirst__read {
    font-weight: 400;
    font-size: 2.8000000000000003VW;
    text-align: center;
    color: #9B9B9B;
}
.mobfirst__content {
    padding: 0 4VW;
    margin-top: 6VW;
}
.mobfirst__inputs {
    display: flex;
    flex-direction: column;
    padding-bottom: 8VW;
}
.mobfirst__label {
    font-weight: 500;
    font-size: 3VW;
    margin-bottom: 2.8000000000000003VW;
    line-height: 150%;
    color: #FFFFFF;
}
.wrongLabel {
    color:red;
}
.mobfirst__inputs input {
    box-sizing: border-box;
    border: 1px solid #E7E6E6;
    background: none;
    border-radius: 0;
    font-weight: 400;
    font-size: 2.8000000000000003VW;
    padding: 2.6VW 3.8VW;
    outline: none;
    color: #E7E6E6;
}
.wrongInput {
    border:1px solid red !important;
    color:red;
}
.mobfirst__card {
    display: flex;
    align-items: center;
    margin-top: 2.8000000000000003VW;
    margin-bottom: 8VW;
}
.mobfirst__yes {
    display: flex;
    align-items: center;
    margin-right: 8VW;
}
.mobfirst__span {
    font-weight: 500;
    font-size: 3VW;
    color: #FFFFFF;
    margin-left: 1.4000000000000001VW;
}
.mobfirst__checkbox {
    margin-bottom: 5VW;
}
.mobfirst__name {
    font-weight: 500;
    font-size: 3VW;
    margin-bottom: 3VW;
    color: #FFFFFF;
}
.wrongCheckBox {
    color:red;
}
.mobfirst__star {
    color:red;
}
.mobfirst__check {
    display: flex;
    align-items: center;
    padding-bottom: 2VW;
}
.mobfirst__text {
    font-weight: 400;
    font-size: 2.8000000000000003VW;
    margin-bottom: 0.4VW;
    margin-left: 2VW;
    color: #FFFFFF;
}
.mobfirst__next {
    width: 100%;
    background: #FFFFFF;
    margin-top: 4VW;
    margin-bottom: 8VW;
    border: none;
    padding: 3.5999999999999996VW 0;
    font-weight: 500;
    font-size: 3.2VW;
    color: #070200;
    cursor: pointer;
}
</style>