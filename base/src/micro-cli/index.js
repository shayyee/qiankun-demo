import {watchRouter} from "@/micro-cli/watch-router";
import {handleRouter} from "@/micro-cli/handle-router";

let _apps = []
// 获取子应用
export const getApps = () => _apps
export const registerMicroApps = (apps) => {
    // 获取apps注册列表
    console.log(apps)
    _apps = apps
}

export const start = () => {
    // 微前端运行原理：
    // 1.监视路由变化
    // 2.匹配子应用
    // 3.加载子应用
    // 4.渲染子应用
    watchRouter()
    // 初始执行匹配
    handleRouter()
}
