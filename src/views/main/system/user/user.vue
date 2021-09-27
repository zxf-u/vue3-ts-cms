<template>
  <div class="user">
    <div class="form">
      <xf-form :formItems="searchFormConfig"></xf-form>
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { searchFormConfig } from './config/search.config'

import XfForm from '@/base-ui'

export default defineComponent({
  name: 'user',
  components: {
    XfForm
  },
  setup() {
    return {
      searchFormConfig
    }
  }
})
</script>

<style scoped lang="less"></style>
