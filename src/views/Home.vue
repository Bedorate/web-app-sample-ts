<template>
  <div class="home">
    <div class="home-top">
      <router-link to="about">about</router-link> 
      <!--toは URLの一番最後にaboutを付ける toに書いてあるpathに遷移してくれる-->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
}
</script>

<style lang="scss" scoped>
  .home{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
</style>
