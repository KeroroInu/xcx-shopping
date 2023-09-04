// new Vue() 创建一个应用实例对像
import { createApp } from 'vue'
import App from './App.vue'
// 1.以 App 作为参数生成一个应用实例对想
// 2.挂载到 id 为 app 的节点上
createApp(App).mount('#app')
