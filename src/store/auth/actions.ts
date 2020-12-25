import { ActionTree } from "vuex";
import { IauthState } from "./models";
import { RootState } from "../RootState";
import firebase from "firebase";

export const actions: ActionTree<IauthState, RootState> = {
  onAuthChanged({commit}){
    firebase.auth().onAuthStateChanged(user =>{
      console.log(user)
      const userData: any = user ? user :{};
      commit('setUserData', userData);
      commit('setSignInState', userData.uid ? true: false);
    });
  },
  //11/19の復習はここのcommitについて、検証のaplicationのvuexのstateとuserにtrueとメアドが入るか確認する事
  //入力された情報をfirebase側に登録する処理
  signUp( {}, payload) {
    //↑commitとstateするよ〜ってい意味。{}で囲う必要がある。
    firebase
      .auth()
      .createUserWithEmailAndPassword(
        payload.id,
        payload.password
      )
      .then()
      // .then(users => {//成功時の処理
      //   // console.log(users.user?.email);
      //   commit("setUserData", users.user);
      //   //usersってオブジェクトのuser
      //   commit("setSignInState", true);
      //   // console.log(state);
      // })
      .catch((error) => {//エラー時の処理
        alert(error.message);
      });
  },
  signIn({ }, payload) {
    firebase
      .auth()
      .signInWithEmailAndPassword(
        payload.id,
        payload.password
      )
      .then()
      // .then(user => {
      //   console.log(user.user?.email);
      //   commit("setUserData", user.user);
      //   commit("setSignInState", true);
      //   alert("success");
      //   console.log(user);
      // })
      .catch(error => {
        alert(error.message);
      })
  },
  signOut(){
    firebase.auth().signOut()
    .catch(error =>{
      alert(error.message);
    })
  },
  error({ commit }, payload) {
    commit("setErrorMessage", payload);
  }
};
//処理を行うとこ APIを叩く場所 APIとはクライアント側からDBとかにアクセスすること