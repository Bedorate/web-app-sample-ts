<template>
  <div class="form-component">
    <div class="form-component-label">{{ form.label }}</div>
    <div class="form-component-content">
      <keep-alive>
        <component
          :is="form.formType"
          :value="form.value"
          :id="form.id"
          @change-value="changeValue"
        />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import TextField from "@/components/atoms/TextField.vue";
import PassField from "@/components/atoms/PassField.vue";

export default {
  name: "FormComponent",
  components: {
    TextField,
    PassField,
  },
  props: {
    form: Object,
  },
  methods: {
    changeValue(key, value) {
      this.$emit("change-value", key, value);
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