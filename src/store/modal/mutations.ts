import { MutationTree } from "vuex";
import { ModalState, IModalState } from "./models";
import firebase from "firebase";

export const mutations: MutationTree<IModalState> = {
init(state: IModalState){
  Object.assign(state, new ModalState());
},
setState(state, payload){
  state.state = payload;
},
setPath(state, payload){
  state.path = payload;
},

};
//変数を書き換える場所