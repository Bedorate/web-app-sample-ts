<template>
  <div class="app">
    <div class="app-wrapper" v-if="$route.path !== '/'">
      <global-header />
      <div class="app-content">
        <global-aside />
        <router-view />
      </div>
    </div>
    <router-view v-else />
  </div>
</template>

<script>
import GlobalHeader from "@/components/layouts/GlobalHeader.vue";
import GlobalAside from "@/components/layouts/GlobalAside.vue";
export default {
  name: "App",
  components: {
    GlobalHeader,
    GlobalAside,
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

html,
body,
#app,
.app {
  height: 100%;
  width: 100%;
  margin: 0;
  .app-wrapper {
    height: 100%;
    width: 100%;
    margin: 0;
    .app-content {
      height: calc(100% - 72px);
      display: flex;
      position: relative;
      top: 72px;
      .page {
        overflow-x: hidden;
        overflow: auto;
        height: 100%;
        flex: 1;
      }
    }
  }
}
</style>