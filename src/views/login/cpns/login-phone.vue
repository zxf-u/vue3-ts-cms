<template>
  <div class="login-phone">
    <el-form label-width="60px">
      <el-form-item label="手机号" props="num">
        <el-input model="phone.num" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item label="验证码" props="code" class="">
        <div class="get-code">
          <el-input model="phone.code" placeholder="请输入验证码"></el-input>
          <el-button type="primary" class="get-btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const phone = reactive({
      num: '',
      code: ''
    })

    return {
      phone
    }
  }
})
</script>

<style scoped lang="less">
.get-code {
  display: flex;
  justify-content: space-between;
}

.get-btn {
  margin-left: 8px;
}
</style>
