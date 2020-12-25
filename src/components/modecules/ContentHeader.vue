<template>
  <div class="content-header">
    <div>
     <slot name="left"></slot>
    </div>
    <div>
     <slot name="right"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ContentHeader",
});
</script>

<style lang="scss" scoped>
.content-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 85px;
  padding: 0px 32px;
}
</style>