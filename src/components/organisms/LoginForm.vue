<template>
  <div class="login-form">
    <form-component
      v-for="(form, index) in formData"
      :key="index"
      :form="form"
      @change-value="changeValue"
    />
    <div class="login-form-footer">
      <div class="password-resend-label">
        <div v-if="itemData.footerPasswordResendLabel">
          {{ itemData.footerPasswordResendLabel }}
        </div>
      </div>
      <common-button :label="itemData.label" @click-event="authEvent" />
    </div>
  </div>
</template>

<script>
import CommonButton from "@/components/atoms/CommonButton.vue";

import FormComponent from "@/components/modecules/FormComponent.vue";

export default {
  name: "LoginForm",
  components: {
    CommonButton,
    FormComponent,
  },
  props: {
    formData: Array,
    itemData: Object,
  },
  methods: {
    changeValue(key, value) {
      this.$emit("change-value", key, value);
    },
    authEvent() {
      if(this.$selectTab === 1){
        this.$emit("sign-in");
      } else {
        this.$emit("sign-up");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login-form {
  width: 100%;
  &-footer {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    padding: 16px;
    .password-resend-label {
      font-size: 12px;
      width: 50%;
    }
  }
}
</style>