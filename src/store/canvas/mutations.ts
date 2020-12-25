import { MutationTree } from "vuex";
import { CanvasState, ICanvasState } from "./models";

export const mutations: MutationTree<ICanvasState> = {
  // 初期化
  init(state: ICanvasState) {
    Object.assign(state, new CanvasState());
  },
  changeCanvasValue(state, payload: { key: number, value: any }) {
    state.canvas[payload.key - 1].value = payload.value;
  },
  //モーダル内初期化
  initCanvas(state){
    // console.log(CanvasState);
    state.canvas = new CanvasState().canvas;
  },
  setCanvasList(state, payload){
    state.canvasList = payload;
    // console.log(payload);
    // console.log(state.canvasList);
  },
  setCurrentDocId(state: ICanvasState, payload:{docId: string}){
    state.currentDocId = payload.docId;
  },
  initCurrentDocId(state: ICanvasState){
    state.currentDocId = "";
  },
};
//変数を書き換える場所