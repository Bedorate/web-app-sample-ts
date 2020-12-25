<template>
  <div class="login-form">
    <form-component
      v-for="(form, index) in formData"
      :key="index"
      :form="form"
      :formNumber="itemData.id"
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
    selectedTab: Number,
  },
  methods: {
    changeValue(formNumber, key, value) {
      this.$emit("change-value", formNumber, key, value);
    },
    authEvent() {
      if (this.selectedTab === 1) {
        this.$emit("sign-in");
      } else if (this.selectedTab === 2) {
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
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    .password-resend-label {
      font-size: 12px;
      width: 50%;
    }
  }
}
</style>