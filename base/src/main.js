import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { registerMicroApps, start } from 'qiankun';

Vue.config.productionTip = false

Vue.use(ElementUI)

registerMicroApps([
  {
    name: 'app-vue2', // app name registered
    entry: '//localhost:8001',
    container: '#subapp',
    activeRule: '/app-vue2',
  },
  {
    name: 'app-vue3', // app name registered
    entry: '//localhost:8002',
    container: '#subapp',
    activeRule: '/app-vue3',
  },
  {
    name: 'app-react', // app name registered
    entry: '//localhost:8003',
    container: '#subapp',
    activeRule: '/app-react',
  }
], {
  beforeLoad: () => {console.log('加载前')},
  beforeMount:() => {console.log('挂载前')},
  afterMount:() => {console.log('挂载后')},
  beforeUnmount:() => {console.log('卸载前')},
  afterUnmount:() => {console.log('卸载后')},
});
start({
  sandbox: {
    experimentalStyleIsolation: true
  }
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
