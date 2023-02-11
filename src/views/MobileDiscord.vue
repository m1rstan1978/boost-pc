<template>
  <div class="mobds">
    <div class="mobds__header">
        <div class="mobds__img">
            <a href="https://discord.gg/bQkY2sRVne"><img src="../assets/SystemMobile/dsImage.png"></a>
        </div>
        <p class="mobds__text"><a href="https://discord.gg/bQkY2sRVne">Our Discord Server</a></p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.mobds {
    margin-top: 100px;
    background: url('../assets/SystemMobile/back.png') no-repeat;
    background-size: cover;
    height: 390px;
    width: 100%;
}
.mobds__header {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.mobds__text a {
    text-align: center;
    font-weight: 500;
        font-size: 18px;
        margin-top: 20px;
        text-decoration: none;
        color: #FFFFFF;
}
</style>