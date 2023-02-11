<template>
  <div class="mobsystem">
    <div class="mobsystem__img">
        <img src="../assets/SystemMobile/video.png">
    </div>
    <div class="mobsystem__info">
        <p class="mobsystem__text">1. Clean installation of Windows 10 21H2 Pro and its further setup</p>
        <p class="mobsystem__text">2. Tips for upgrading accessories + ongoing support from experts</p>
        <p class="mobsystem__text">3. Setting up OBS for video recording/streaming (If needed)</p>
        <p class="mobsystem__text">4. Cutting out unnecessary Microsoft applications and disabling<br> services that are not used by the average Windows user</p>
    </div>
    <div class="mobsystem__purshase">
        <button class="mobsystem__btn" @click="nextStep">Purchase</button>
        <div class="mobsystem__image">
            <img src="../assets/SystemMobile/line.svg">
        </div>
        <p class="mobsystem__money">35 €</p>
    </div>
  </div>
</template>

<script>
export default {
data() {
    return {

    }
},
methods:{
    nextStep() {
        this.$emit('payment')
        this.$store.state.priceEn = 35
        this.$store.state.overclock = false
    }
}
}
</script>

<style scoped>
.mobsystem {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 7.000000000000001VW;
}
.mobsystem__info {
    margin-top: 4VW;
}
.mobsystem__text {
    font-weight: 400;
        font-size: 2.6VW;
        margin: 0 4VW 1VW 4VW;
        line-height: 150%;
        text-align: center;    
        color: #E1E1E1;
}
.mobsystem__purshase {
    display: flex;
    align-items: center;
    margin-top: 8VW;
    margin-right: 12VW;
}
.mobsystem__btn {
    font-weight: 500;
        font-size: 2.8000000000000003VW;
        padding: 2.6VW 3.4000000000000004VW;
        border: 1px solid #D9D9D9;
        background: none;
        margin-right: 21.5VW;
        color: #FFFFFF;
}
.mobsystem__money {
font-weight: 600;
    font-size: 4.5999999999999996VW;
    margin-left: 21.5VW;
    color: #FFFFFF;
}
.mobsystem__img img {
    width: 60VW;
}
</style>