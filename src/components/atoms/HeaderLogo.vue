<template>
  <div class="header-logo" @click="transHome">Web App Sample</div>
</template>

<script>
export default {
  name: "HeaderLogo",
  methods: {
    transHome(){
      this.$router.push("/home")
    }
  }
}
</script>

<style lang="scss" scoped>
.header-logo{
  font-size: 24px;
  color: white;
}
</style>