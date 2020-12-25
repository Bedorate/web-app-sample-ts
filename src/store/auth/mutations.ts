import { MutationTree } from "vuex";
import { AuthState, IauthState } from "./models";
import firebase from "firebase";

export const mutations: MutationTree<IauthState> = {
  // 初期化
  init(state: IauthState, dispatch) {
    Object.assign(state, new AuthState());
    //stateにnew AuthState()を割り当ててる
    // dispatch("onAuth");
  },
  setUserData(state, payload){
    state.user=payload;
  },
  setSignInState(state,payload){
    //ニコ目のstateはfalse
    state.state = payload;
  },
  onAuthStateChanged(commit) {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user)
    })
  }
};
//変数を書き換える場所