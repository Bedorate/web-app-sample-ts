<template>
  <div>
    <table-row 
    v-for="(dataItem, index) in data"
    :key="index"
    :dataItem="dataItem"
    :row="row"
    @click="clickRow(dataItem)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TableRow from "@/components/organisms/Table/TableRow.vue";

export default defineComponent({
  name: "TableContent",
  components: {
    TableRow,
  },
  props: {
    data: Array,
    row: Array,
  },
  methods:{
    clickRow(data:object):void{
      (this as any).$emit("click-row", data)
    }
  }
});
</script>

<style>
</style>