<template>
  <modal-flame size="L">
    <template v-slot:header><div>編集</div></template>
    <template v-slot:content>
      <dic class="form">
        <form-component
          v-for="(form, index) in formValue"
          :key="index"
          :form="form"
          @change-value="changeValue"
        />
      </dic>
    </template>
    <template v-slot:footerLeft>
      <div></div>
    </template>
    <template v-slot:footerRight>
      <common-button label="編集" @click="updateCanvas" />
    </template>
  </modal-flame>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import CommonButton from "@/components/atoms/CommonButton.vue";
import FormComponent from "@/components/modecules/FormComponent.vue";
import ModalFlame from "@/components/organisms/Modal/ModalFlame.vue";

export default defineComponent({
  name: "AddCanvas",
  components: {
    ModalFlame,
    CommonButton,
    FormComponent,
  },
  computed: {
    formValue() {
      return (this as any).$store.state.canvas.canvas;
    },
  },

  methods: {
    changeValue(formNumber: number, key: number, value: any) {
      (this as any).$store.commit("canvas/changeCanvasValue", { key, value });
    },
   async updateCanvas() {
      await (this as any).$store.dispatch("canvas/updateCanvas");
      await (this as any).$store.dispatch("canvas/getCanvas");
      await (this as any).$store.dispatch("modal/closeModal");
    },
  },
});
</script>

<style lang="scss" scoped>
</style>