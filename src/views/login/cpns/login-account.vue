<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import { ElForm } from 'element-plus'
import { useStore } from 'vuex'

import { rules } from '../config/account-config'

import loacalCache from '@/utils/cache'

export default defineComponent({
  setup() {
    const store = useStore()

    const account = reactive({
      name: 'coderwhy',
      password: '123456'
    })

    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          // 1. 存储账号和密码
          if (isKeepPassword) {
            loacalCache.setCache('name', account.name)
            loacalCache.setCache('password', account.password)
          }
        }
        store.dispatch('loginModule/accountLoginAction', { ...account })
      })
    }

    return {
      account,
      formRef,
      rules,
      loginAction
    }
  }
})
</script>

<style scoped></style>
