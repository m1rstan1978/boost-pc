<template>
  <div class="mobwhy">
    <p class="mobwhy__header">Why Us?</p>
    <div class="mobwhy__content">
        <div class="mobwhy__card">
            <div class="mobwhy__img">
                <img src="../assets/SystemMobile/icon1.svg">
            </div>
            <p class="mobwhy__text">Our team consists of enthusiasts and<br> developers in the field of computer system<br> optimization</p>
        </div>
        <div class="mobwhy__line">
            <img src="../assets/SystemMobile/underavg.svg">
        </div>
        <div class="mobwhy__card">
            <div class="mobwhy__img">
                <img src="../assets/SystemMobile/icon2.svg">
            </div>
            <p class="mobwhy__text">We provide democratic prices for our<br> services, so that every user has the<br> opportunity to purchase their</p>
        </div>
        <div class="mobwhy__line">
            <img src="../assets/SystemMobile/underavg.svg">
        </div>
        <div class="mobwhy__card">
            <div class="mobwhy__img">
                <img src="../assets/SystemMobile/icon3.svg">
            </div>
            <p class="mobwhy__text">All settings and options have been<br> thoroughly tested and are aimed at<br> optimizing CPU and RAM performance</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.mobwhy__header {
    font-weight: 700;
        font-size: 24px;
        text-align: center;
        margin-top: 40px;
        margin-bottom: 60px;
        color: #FFFFFF;
}
.mobwhy__content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.mobwhy__card{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.mobwhy__line {
    margin:20px 0;
}
.mobwhy__card img {
    margin-bottom: 15px;
}
.mobwhy__text {
    text-align: center;
    font-weight: 400;
        font-size: 14px;
        line-height: 140%;    
        color: #FFFFFF;
}
</style>