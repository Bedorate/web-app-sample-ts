<template>
  <div class="top-link" @click="transTop">ログアウト</div>
</template>

<script>
export default {
  name: "AccountLink",
  methods:{
    transTop(){
      this.$router.push("/")
    }
  }
}
</script>

<style lang="scss" scoped>
.top-link{
 color:white;
 font-size: 12px;
}
</style>