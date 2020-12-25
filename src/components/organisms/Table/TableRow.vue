<template>
  
  <div class="table-row">
    <div
      class="table-row-item"
      v-for="(item, index) in row"
      :key="index"
      :style="`width: ${item.width}%`"
    >
      {{ dataItem[item.key] }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TableRow",
  props: {
    dataItem: Object,
    row: Array,
  },
});
</script>

<style lang="scss" scoped>
.table-row {
  display: flex;
  align-items: center;
  height: 44px;
  border-bottom: 1px solid gray;
  &-item {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
}
</style>