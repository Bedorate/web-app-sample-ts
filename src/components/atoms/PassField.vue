<template>
  <div class="pass-field">
    <input type="password" v-model="innerValue" />
  </div>
</template>

<script>
export default {
  name: "PassField",
  props: {
    value: String,
    id: Number,
    formNumber: Number,
  },
  computed: {
    innerValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("change-value", this.formNumber, this.id, value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.pass-field {
  width: 100%;
  position: relative;
  height: 24px;
  &::before {
    width: 100%;
    height: 8px;
    bottom: 0;
    content: "";
    //下３つと上のpositionがないと擬似要素は使えない
    display: inline-block;
    position: absolute;
    border-left: 1px solid black;
  }
  &:after {
    width: 100%;
    height: 8px;
    right: 0;
    bottom: 0;
    content: "";
    display: inline-block;
    position: absolute;
    border-right: 1px solid black;
  }
}
input[type="password"] {
  width: 100%;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  padding: 0px 8px;
  height: 23px;
}
</style>