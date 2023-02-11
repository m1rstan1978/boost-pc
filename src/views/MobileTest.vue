<template>
  <div class="mobtest">
    <div class="mobtest__img">
        <img src="../assets/SystemMobile/underprice.svg">
    </div>
    <div class="mobtest__header">
        <p class="mobtest__title">Performance gains from buying<br> Custom Tweaking</p>
        <p class="mobtest__game">Call of Duty®: Warzone</p>
        <div class="mobtest__line">
            <img src="../assets/SystemMobile/underavg.svg">
        </div>
        <div class="mobtest__menu">
            <div class="mobtest__list">
                <div class="mobtest__average">
                    <div class="mobtest__image">
                        <img src="../assets/SystemMobile/el1.svg">
                    </div>
                    <p class="mobtest__fps">Average FPS</p>
                </div>
                <div class="mobtest__average">
                    <div class="mobtest__image">
                        <img src="../assets/SystemMobile/el2.svg">
                    </div>
                    <p class="mobtest__fps">1% percentile FPS</p>
                </div>
                <div class="mobtest__average">
                    <div class="mobtest__image">
                        <img src="../assets/SystemMobile/el3.svg">
                    </div>
                    <p class="mobtest__fps">0.1% percentile FPS</p>
                </div>
            </div>
        </div>
    </div>
    <div class="mobtest__content">
        <div class="mobtest__card">
            <p class="mobtest__name">Default Windows</p>
            <div class="mobtest__img1">
                <img src="../assets/SystemMobile/1.png">
            </div>
        </div>
        <div class="mobtest__card">
            <p class="mobtest__name">RAM / GPU OC</p>
            <div class="mobtest__img2">
                <img src="../assets/SystemMobile/2.png">
            </div>
        </div>
        <div class="mobtest__card">
            <p class="mobtest__name">RAM OC</p>
            <div class="mobtest__img3">
                <img src="../assets/SystemMobile/3.png">
            </div>
        </div>
        <div class="mobtest__card">
            <p class="mobtest__name">Windows 21H2 Stock</p>
            <div class="mobtest__img4">
                <img src="../assets/SystemMobile/4.png">
            </div>
        </div>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.mobtest {
    margin-top: 40px;
}
.mobtest__img {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 25.2VW;
}
.mobtest__img img {
    width: 25.599999999999998VW;
}
.mobtest__title{
    text-align: center;
    font-weight: 700;
        font-size: 4.8VW;
        margin-top: 6VW;
        margin-bottom: 4VW;
        color: #FFFFFF;
}
.mobtest__game {
    font-weight: 400;
        font-size: 3.3VW;
        margin-bottom: 6VW;
        text-align: center;    
        color: #fff;
}
.mobtest__line {
    display: flex;
    align-items: center;
    justify-content: center;
}

.mobtest__menu {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 4VW;
    margin-bottom: 10VW;
}
.mobtest__average {
    display: flex;
    align-items: center;
    margin-bottom: 2VW;
}
.mobtest__average img {
    display: flex;
    align-items: center;
}
.mobtest__fps {
    font-weight: 500;
        font-size: 2.8000000000000003VW;
        margin-left: 4VW;
        color: #9D9D9D;
}
.mobtest__content {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
}
.mobtest__card {
    width: 100%;
    margin-bottom: 8VW;
}
.mobtest__card img {
    margin-left: 4VW;
}
.mobtest__name {
    width: 100%;
    text-align: center;
    font-weight: 600;
        font-size: 3.5999999999999996VW;
        margin-bottom: 3.2VW;
        color: #FFFFFF;
}
.mobtest__img1 img {
    width: 83.39999999999999VW;
}
.mobtest__img2 img {
    width: 76.8VW;
}
.mobtest__img3 img {
    width: 72.6VW;
}
.mobtest__img4 img {
    width: 67.80000000000001VW;
}
</style>