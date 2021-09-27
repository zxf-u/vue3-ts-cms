<template>
  <div class="xf-from">
    <el-form label-width="100px">
      <el-row>
        <template v-for="item in formItems.formItems" :key="item.label">
          <el-col :span="formItems.colLayout">
            <el-form-item
              :label="item.label"
              :rules="item.rules"
              :style="itemStyle"
            >
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select :placeholder="item.placeholder" style="width: 100%">
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker style="width: 100%"></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import { IFormItem } from '@/base-ui/type'

export default defineComponent({
  props: {
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => []
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.xf-form {
  padding-top: 22px;
}
</style>
