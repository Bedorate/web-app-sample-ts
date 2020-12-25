import { ActionTree } from "vuex";
import { ICanvasState } from "./models";
import { RootState } from "../RootState";
import firebase from "firebase";

export const actions: ActionTree<ICanvasState, RootState> = {
  async getCanvas({ commit }) {
    const canvasList: any = [];
    await firebase.firestore().collection('canvas').get().then((snapShot: any) => {
      snapShot.forEach((doc: any) => {
        canvasList.push(doc.data());
        //下３行がシノウィンさん追加分
        // const canvasData = {
        //   ...doc.data(),
        //   id: doc.id,
        // }
      });
      //定型文なので覚えて。スナップショットがgetAPIで取った配列のこと。そこでそれを回してdocって名前のやつに入れてる。
    }).catch((error: any) => {
      console.log("Error getting document:", error);
    });
    commit("setCanvasList", canvasList);
  },
  //async（エーシンク）をfunctionの前に書くとawaitの順に処理してくれる。
  //今回は関係ないけど覚えとこう
  async addCanvas({ state, commit }) {
    const data: any = await {}
    // console.log(data);
    await state.canvas.forEach((item: any) => {
      data[item.keyName] = item.value;
    })
    console.log(data);
    await firebase.firestore().collection("canvas").add({
      data
    }).then(function (docRef) {
      console.log("Document written with ID:", docRef);
    })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });

    await commit("initCanvas");
  },

  setCanvasValue({ state, commit }, payload) {
    for (let i in state.canvas) {
      commit("changeCanvasValue", {
        key: state.canvas[i].id,
        value: payload[state.canvas[i].keyName],
        //ここのvalueについて
        //例えば１回目のループでは、state.canvas[1]のkeyName、textを指定している
        //そして、ここのpayloadはdataItemであり、dataItemのstate.canvas[1]のkeyNameにあったvalue(値)のことである。
      });
    }
  },
  async updateCanvas({ state, commit }) {
    const data: any = {};
    state.canvas.forEach((item: any) => {
      data[item.keyName] = item.value;
    })

    await firebase.firestore().collection('canvas').doc(state.currentDocId).update(
      data
    ).then(() => {
      commit("initCurrentDocId");
      commit("initCanvas");
    }).catch(error => {
      console.error(error);
    });
  },

  error({ commit }, payload) {
    commit(("setErrorMessage"), payload);
  }

};
//処理を行うとこ APIを叩く場所 APIとはクライアント側からDBとかにアクセスすること