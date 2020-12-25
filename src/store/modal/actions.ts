import { ActionTree } from "vuex";
import { IModalState } from "./models";
import { RootState } from "../RootState";
import firebase from "firebase";

export const actions: ActionTree<IModalState, RootState> = {
  setModal({ commit }, payload) {
    commit("setState", true);
    commit("setPath", payload);
  },
  closeModal({ commit }) {
    commit("setState", false);
    commit("setPath", "");
  },

};
//処理を行うとこ APIを叩く場所 APIとはクライアント側からDBとかにアクセスすること