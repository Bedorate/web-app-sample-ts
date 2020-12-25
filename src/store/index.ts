import VueX from 'vuex';
import { auth } from "./auth/index";
import { common } from "./common/index";
import { canvas } from "./canvas/index";
import { modal } from "./modal/index";
//store永続化
import createPersistedState from "vuex-persistedstate";

// Vue.use(VueX);

export default new VueX.Store({
  //storeをモジュールに分割している
  modules: {
    auth,
    canvas,
    common,
    modal,
  },
  plugins: [
    //vuexの永続化、リロードとかしてもログイン情報が保持される
    createPersistedState()
  ]
});