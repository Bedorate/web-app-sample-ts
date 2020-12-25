import { ActionTree } from "vuex";
import { IcommonState } from "./models";
import { RootState } from "../RootState";


export const actions: ActionTree<IcommonState, RootState> = {
  error({ commit }, payload) {
    commit("setErrorMessage", payload);
  }
};
//処理を行うとこ APIを叩く場所 APIとはクライアント側からDBとかにアクセスすること
//commit はmutationsを実行する動詞