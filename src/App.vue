<template>
  <div class="app">
    <div class="app-wrapper" v-if="$route.path !== '/'">
      <global-header :label="linkLabel" @sign-out="signOut" />
      <div class="app-content">
        <global-aside />
        <router-view />
      </div>
    </div>
    <router-view v-else />
    <modal v-show="$store.state.modal.state" />
  </div>
</template>

<script lang="ts">
import GlobalHeader from "@/components/layouts/GlobalHeader.vue";
import GlobalAside from "@/components/layouts/GlobalAside.vue";

import Modal from "@/components/organisms/Modal/index.vue";
export default {
  name: "App",
  components: {
    GlobalHeader,
    GlobalAside,
    Modal,
  },
  props: {
    linkLabel: String,
  },
  created() {
    (this as any).$store.dispatch("auth/onAuthChanged");
    (this as any).$store.dispatch("modal/closeModal");
  },
  computed: {
    authState(): number {
      return (this as any).$store.state.auth.state;
    },
  },
  watch: {
    authState(value: boolean) {
      //valueはauthStateそのもの。どの画面にいてもvalueがfalse（＝つまりログアウトした）なら"/"に遷移する
      if (value) {
        (this as any).$router.replace("/home");
      } else {
        (this as any).$router.replace("/");
      }
    },
  },
  methods: {
    signOut() {
      (this as any).$store.dispatch("auth/signOut");
    },
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
    .app-content {
      display: flex;
      height: calc(100% - 72px);
      position: relative;
      top: 72px;
      .page {
        overflow-x: hidden;
        overflow-y: auto;
        height: 100%;
        flex: 1;
      }
    }
  }
}
</style>