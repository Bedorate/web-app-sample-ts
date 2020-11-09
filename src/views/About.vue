<template>
  <div>
    <header-logo />
    <div class="about">
    <h1>This is an about page</h1>
  </div>
  </div>
  
  
</template>

<script>
import HeaderLogo from "@/components/atoms/HeaderLogo.vue"

export default {
  name: "About",
  components:{
    HeaderLogo,
  }
}
</script>