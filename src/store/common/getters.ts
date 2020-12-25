import { GetterTree } from "vuex";
import { IcommonState } from "./models";
import { RootState } from "../RootState";

export const getters: GetterTree<IcommonState, RootState> = {
 selectedTab: state => {
  return state.selectedTab;
 },
};