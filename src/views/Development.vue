<template>
  <div class="development">
    <div class="development__content">
        <div class="development__center">
            <p class="development__name">Development by M1rstan</p>
        </div>
    </div>
    <p class="development__guys">Отдельная благодарность за информацию по разгону: Alamut, StaticWayne, A42</p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.development {
    position: relative;
    height: 100vh;
    background: #070200;
}
.development__content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
}
.development__name {
    text-align: center;
    font-weight: 700;
    font-size: 3.5416666666666665VW;
    color: #FFFFFF;

}
.development__guys {
    text-align: center;
    font-weight: 400;
    font-size: 0.7291666666666666VW;
    color: #686868;
}
.development__guys {
    position: absolute;
    bottom: 5%;
    left:34.33333333333333VW;
}
</style>
