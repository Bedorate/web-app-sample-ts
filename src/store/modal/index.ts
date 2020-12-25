import { Module } from "vuex";
import { mutations } from "./mutations";
import { getters } from "./getters";
import { actions } from "./actions";
import { RootState } from "../RootState";
import { ModalState, IModalState } from "./models";



const namespaced = true;

export const state: IModalState = new ModalState();

export const modal: Module<IModalState, RootState> = {
  //定数authに型を書いてるだけ、tsの基本。interfaceを２つ書いてる
  //modelのインターフェイス、IauthStateからRootStateのauthに分けてるauthだよって特定している
  namespaced,
  state,
  mutations,
  getters,
  actions
};