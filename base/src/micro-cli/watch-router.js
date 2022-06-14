import {handleRouter} from "@/micro-cli/handle-router";

let prevRoute = ''
let nextRoute = window.location.pathname

export const watchRouter = () => {
    //     hash路由：onhashchange
    //     history路由：
    //         onpopstate(history.go/history.back/history.forward),
    //         pushState,replaceState 需要通过函数重写的方式进行劫持
    window.addEventListener('popstate', () => {
        // popstate 触发时 路由已经完成导航了
        prevRoute = nextRoute
        nextRoute = window.location.pathname
        handleRouter()
    })
    const originPushState = window.history.pushState
    window.history.pushState = (...args) => {
        // 导航前
        prevRoute = window.location.pathname
        originPushState.apply(window.history, args)// 这是在真正的改变历史记录
        nextRoute = window.location.pathname
        // 导航后
        // console.log('pushState')
        handleRouter()
    }

    const originReplaceState = window.history.replaceState
    window.history.replaceState = (...args) => {
        prevRoute = window.location.pathname
        originReplaceState.apply(window.history, args)
        nextRoute = window.location.pathname
        // console.log('replaceState')
        handleRouter()
    }
}

export const getPrevRoute = () => prevRoute
export const getNextRoute = () => nextRoute
