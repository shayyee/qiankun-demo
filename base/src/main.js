import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { registerMicroApps, start, runAfterFirstMounted, initGlobalState, setDefaultMountApp} from 'qiankun';

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

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

const { onGlobalStateChange, setGlobalState } = initGlobalState({
  user: 'qiankun',
});

onGlobalStateChange(
    (value, prev) => console.log('[onGlobalStateChange - master]:', value, prev)
);

setGlobalState({
  ignore: 'master',
  user: {
    name: 'master',
  },
});
// 设置默认进入的子应用
setDefaultMountApp('/app-vue3');

start({
  sandbox: {
    experimentalStyleIsolation: true
  }
});
runAfterFirstMounted(() => {
  console.log('[MainApp] first app mounted');
});

