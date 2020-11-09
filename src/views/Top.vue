<template>
  <div class="top">
    <div class="top-wrapper">
      <!-- {{ formData }} -->
      <div class="top-title" @click="transHome">Web App Sample</div>
      <div class="tab-wrapper">
        <tab-component
          :list="tabList"
          :selected="selectedTab"
          @clcik-event="selectTab"
        />
      </div>
      <login-form
        v-for="item in tabList"
        :key="item.id"
        v-show="selectedTab === item.id"
        :formData="formData"
        :itemData="item"
        @change-value="changeValue"
        @sign-up="signUp"
        @sign-in="signIn"
      />
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/organisms/LoginForm.vue";
import TabComponent from "@/components/modecules/TabComponent.vue";

import firebase from 'firebase'
export default {
  name: "Top",
  components: {
    TabComponent,
    LoginForm,
  },
  data() {
    return {
      selectedTab: 1,
      tabList: [
        {
          id: 1,
          label: "ログイン",
          footerPasswordResendLabel: "パスワードをお忘れの場合はこちら",
        },
        {
          id: 2,
          label: "新規登録",
        },
      ],
      formData: [
        {
          id: 1,
          label: "ID",
          keyName: "id",
          value: "",
          formType: "TextField",
        },
        {
          id: 2,
          label: "パスワード",
          keyName: "password",
          value: "",
          formType: "PassField",
        },
      ],
    };
  },
  created() {
    console.log(firebase.auth());
  },
  methods: {
    transHome() {
      this.$router.push("/home");
      //router-linkと動きは同じ htmlかjavascriptか
      //pushをreplaceに変えてみてね
    },
    changeValue(key, value) {
      this.formData[key - 1].value = value;
    },
    selectTab(id) {
      return (this.selectedTab = id);
    },
    signUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(
          this.formData[1][0].value,
          this.formData[1][1].value
        )
        .then((user) => {
          console.log(user);
        })
        .catch((error) => {
          alert(error.message);
        });
    },
    signIn() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(
          this.formData[0][0].value,
          this.formData[0][1].value
        )
        .then(() => {
          firebase.auth().currentUser
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &-wrapper {
    width: 480px;
    .top-title {
      text-align: center;
      font-size: 36px;
      cursor: pointer;
    }
    .tab-wrapper {
      margin: 24px 16px;
    }
  }
}
</style>