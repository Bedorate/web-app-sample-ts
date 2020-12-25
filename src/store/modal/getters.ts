import { GetterTree } from "vuex";
import { IModalState } from "./models";
import { RootState } from "../RootState";

export const getters: GetterTree<IModalState, RootState> = {
modal:state=>{
  return state;
}
};
//stateの値を取得するためのgetter