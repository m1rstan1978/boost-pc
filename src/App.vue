<template>
  <div id="app" :class="{active : $store.state.overflow === true}">
      <router-view/>
  </div>
</template>
<script>

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');
* {
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}
</style>
