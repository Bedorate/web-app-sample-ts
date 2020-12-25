<template>
  <div class="table-header">
    <div
      v-for="(item, index) in data"
      :key="index"
      class="table-header-item"
      :style="`width: ${item.width}%`"
    >
      {{ item.label }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TableHeader",
  props: {
    data: Array,
  },
});
</script>

<style lang="scss" scoped>
.table-header {
  display: flex;
  width: 100%;
  height: 44px;
  border: 1px solid white;
  &-item {
    border: 1px solid red;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    padding: 0px 8px;
    background: black;
    color: white;
    // &:not(:last-child) {
    //   border-right: 1px solid white;
    // }
  }
}
</style>