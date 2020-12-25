<template>
  <div class="modal-flame" :class="setClassSize">
    <div class="modal-header">
      <slot name="header"> </slot>
      <div class="close">
        <img :src="closeUrl" @click="closeForm" />
      </div>
    </div>

    <div class="modal-content">
      <slot name="content"></slot>
    </div>

    <div class="modal-footer">
      <slot name="footerLeft"></slot>
      <slot name="footerRight"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ModalFlame",
  props: {
    size: String,
  },
  data() {
    return {
      closeUrl: require("@/assets/icon/clear.svg"),
    };
  },
  computed: {
    setClassSize() {
      return `size-${(this as any).size}`;
    },
  },
  methods: {
    closeForm() {
      (this as any).$store.dispatch("modal/closeModal");
    },
  },
});
</script>

<style lang="scss" scoped>
.modal-flame {
  z-index: 1000;
  width: 320px;
  height: 320px;
  background: white;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  .modal-header {
    padding: 0px 16px;
    height: 52px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .close {
      width: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 24px;
        cursor: pointer;
      }
    }
  }
  .modal-content {
    flex: 1;
  }
  .modal-footer {
    height: 52px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.size-S {
  height: 160px;
}
.size-M {
  height: 320px;
}
.size-L {
  height: 480px;
}
</style>