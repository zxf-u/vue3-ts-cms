import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'

import router from './router'
import store from './store'

import './assets/css/index.less'

// 全局导入，将element-plus中的所有组件导入，会消耗大量的资源
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

// 按需导入
// import { ElButton } from 'element-plus'

import { globalRegister } from './global/index'
import { setupStore } from './store'

const app = createApp(App)

app.use(globalRegister)
app.use(router)
app.use(store)
setupStore()
app.mount('#app')
