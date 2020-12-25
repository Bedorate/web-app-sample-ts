<template>
  <div class="tab-component">
    <div
      class="tab"
      v-for="tab in list"
      :key="tab.id"
      :class="setClassSelected(tab.id)"
      @click="clickEvent(tab.id)"
    >
      {{ tab.label }}
    </div>
  </div>
</template>

<script>
export default {
  name: "TabComponent",
  props: {
    list: Array,
    selected: Number,
  },
  computed:{
    setClassSelected(){
      const selected = this.selected;
      return function(id){
        return selected === id ? "selected" :"";
      }
    },
  },
  methods: {
    clickEvent(id) {
      this.$emit("click-event", id);
    },
  },
};
</script>

<style lang="scss" scoped>
.tab-component {
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: white;
  border: 1px solid black;
  user-select: none;
  .tab {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    height: 100%;
    cursor: pointer;
    &:not(:last-child) {
      border-right: 1px solid black;
    }
  }
  .selected {
    background: black !important;
    color: white !important;
  }
}
</style>