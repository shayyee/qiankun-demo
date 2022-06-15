// 路由变化后需要做的事
import {getApps} from "@/micro-cli/index";
import {importHTML} from "@/micro-cli/import-html";
import {getNextRoute, getPrevRoute} from "@/micro-cli/watch-router";

export const handleRouter = async () => {
    // console.log('handleRouter', window.location.pathname)
    // 2.匹配子应用
    const apps = getApps()
    const prevApp = apps.find(app => getPrevRoute().startsWith(app.activeRule))
    const app = apps.find(app => getNextRoute().startsWith(app.activeRule))
    if(prevApp) {
        await unmount(prevApp)
    }
    // console.log(app)
    if(!app) return
    // 3.加载子应用
    //    请求获取子应用的HTML CSS JS
    // const html = await fetch(app.entry).then(res => res.text())
    // // console.log(html)
    const container = document.querySelector(app.container)
    // container.innerHTML = html
    const {template, getExternalScripts, execScripts} = await importHTML(app)

    container.appendChild(template)

    // 配置全局变量
    window.__POWERED_BY_QIANKUN__ = true
    window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ = app.entry + '/'

    const appExports = await execScripts()
    app.bootstrap = appExports.bootstrap
    app.mount = appExports.mount
    app.unmount = appExports.unmount
    // 4.渲染子应用
    await bootstrap(app)
    await mount(app)

    async function bootstrap(app) {
        app.bootstrap && (await app.bootstrap())
    }
    async function mount(app) {
        app.mount && (await app.mount({container}))
    }
    async function unmount(app) {
        app.unmount && (await app.unmount({container}))
    }
}
