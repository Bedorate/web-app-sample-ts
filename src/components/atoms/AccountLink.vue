<template>
  <div class="top-link" @click="transTop">ログアウト</div>
</template>

<script lang="ts">
export default {
  name: "AccountLink",
  methods:{
    transTop(): void{
      console.log("2");
      (this as any).$emit("click-event");
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