import Vue from 'vue';
import VueX from 'vuex';

//store永続化
import createPersistedState from "vuex-persistedstate";

// Vue.use(VueX);

export default new VueX.Store({
  modules: {
    common;
  },
  plugins: {
    createPersistedState()
  }
});