<template>
  <div class="global-aside" :class="setClassOpen">
    <div class="global-aside-header">
      <div class="arrow" :class="setClassOpen" @click="handleAside"></div>
    </div>
    <div class="global-aside-content">
      <router-link
        class="aside-menu"
        v-for="(item, index) in asideMenuList"
        :key="index"
        :to="item.path"
      >
        <img :src="require(`@/assets/icon/${item.icon}.svg`)" />
        <div class="aside-menu-label">{{ item.label }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { ASIDE_MENU_LIST } from "@/mixins/asideMenuList.js";

export default {
  name: "GlobalAside",
  data() {
    return {
      open: false,
      asideMenuList: ASIDE_MENU_LIST,
    };
  },
  computed: {
    setClassOpen() {
      return this.open ? "open" : "";
    },
  },
  methods: {
    handleAside() {
      this.open = !this.open;
    },
  },
};
</script>

<style lang="scss" scoped>
.global-aside {
  height: 100%;
  width: 48px;
  background: black;
  transition: all 0.4s ease;
  &-header {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 8px 16px;
    border-top: 1px white solid;
    border-bottom: 1px white solid;
    .arrow {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 24px;
      height: 24px;
      margin-left: 8px;
      &:hover {
        &:before {
          border-color: blue;
        }
      }
      &:before {
        //擬似要素
        content: "";
        position: absolute;
        display: inline-block;
        width: 16px;
        height: 16px;
        border-left: 2px white solid;
        border-top: 2px white solid;
        transform: rotate(-45deg);
        transition: all 0.4s ease;
      }
    }
  }
  &-content {
    .aside-menu {
      color: white;
      text-decoration: none;
      display: flex;
      align-items: center;
      height: 40px;
      border-bottom: 1px solid white;
      img {
        width: 20px;
        height: 20px;
        margin-left: 8px;
      }
      &-label {
        font-size: 8px;
        margin-left: 24px;
        text-overflow: ellipsis; //...の部分
        overflow: hidden; //表示領域が狭すぎる場合ははみ出たぶんを隠す
        white-space: nowrap; //
        flex: 1;
      }
    }
  }
}
.open {
  .arrow {
    &:before {
      transform: rotate(-225deg);
    }
  }
}

.open {
  width: 160px;
}
</style>