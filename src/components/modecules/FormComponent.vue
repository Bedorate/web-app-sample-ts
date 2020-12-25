<template>
  <div class="form-component">
    <div class="form-component-label">{{ form.label }}</div>
    <div class="form-component-content">
      <keep-alive>
        <component
          :is="form.formType"
          :value="form.value"
          :id="form.id"
          :formNumber="formNumber"
          @change-value="changeValue"
        />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import TextField from "@/components/atoms/TextField.vue";
import PassField from "@/components/atoms/PassField.vue";
import NumberField from "@/components/atoms/NumberField.vue";
export default {
  name: "FormComponent",
  components: {
    TextField,
    PassField,
    NumberField
  },
  props: {
    form: Object,
    formNumber: Number,
  },
  methods: {
    changeValue(formNumber, key, value) {
      this.$emit("change-value", formNumber, key, value);
    },
  },
};
</script>

<style lang="scss" scoped>
.form-component {
  padding: 8px;
  &-label {
    padding: 8px;
  }
  &-content {
    padding: 8px;
  }
}
</style>
