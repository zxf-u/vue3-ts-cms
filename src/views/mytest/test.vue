<template>
  <div class="nav-menus">
    <el-menu default-active="2" class="el-menu-vertical">
      <!-- <el-sub-menu index="1">
        <template #title>
          <i class="el-icon-location"></i>
          <span>Navigator One</span>
        </template>
      </el-sub-menu> -->
      <template v-for="subMenu in userMenus" :key="subMenu.id">
        <template v-if="subMenu.type === 1">
          <el-sub-menu :index="subMenu.id + ''">
            <template #title>
              <i :class="subMenu.icon"></i>
              <span>{{ subMenu.name }}</span>
            </template>
          </el-sub-menu>
          <template v-for="item in subMenu.children" :key="item.id">
            <el-menu-item>
              <template #title>
                <i :class="item.icon"></i>
                <span>{{ item.name }}</span>
              </template>
            </el-menu-item>
          </template>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

export default defineComponent({
  setup() {
    const store = useStore()
    const userMenus = computed(() => store.state.loginModule.userMenus)
    return {
      userMenus
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
