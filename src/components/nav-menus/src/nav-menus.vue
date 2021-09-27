<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span class="title">Vue3 + TS</span>
    </div>
    <el-menu
      default-active="2"
      class="el-menu el-menu-vertical"
      :collapse="collapse"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
    >
      <!-- <el-sub-menu index="1">
        <template #title>
          <i class="el-icon-location"></i>
          <span>Navigator One</span>
        </template>
      </el-sub-menu> -->
      <template v-for="item in userMenus" :key="item.id">
        <template v-if="item.type === 1">
          <ElSubmenu :index="item.id + ''">
            <template #title>
              <i :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </template>
            <template v-if="item.children">
              <template v-for="subItem in item.children" :key="subItem.id">
                <ElMenuItem
                  :index="subItem.id + ''"
                  @click="handelItemClick(subItem)"
                >
                  <template #title>
                    <i :class="subItem.icon"></i>
                    <span>{{ subItem.name }}</span>
                  </template>
                </ElMenuItem>
              </template>
            </template>
          </ElSubmenu>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

import { useStore } from '@/store'
import router from '@/router'

export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const store = useStore()
    const userMenus = computed(() => store.state.loginModule.userMenus)

    const handelItemClick = (subItem: any) => {
      console.log(subItem)
      router.push(subItem.url)
    }
    return {
      userMenus,
      handelItemClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }

  .el-menu {
    border-right: none;
  }

  // 目录
  .el-submenu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  ::v-deep .el-submenu__title {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
