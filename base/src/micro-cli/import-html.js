import {fetchResource} from "@/micro-cli/fetch-resource";

export const importHTML = async (url) => {
    const template = document.createElement('div')
    const html = await fetchResource(url)
    template.innerHTML = html
    // 获取所有script标签的代码
    const scripts = template.querySelectorAll('script')

    function getExternalScripts() {
        // console.log(scripts)
        return Promise.all(Array.from(scripts).map(script => {
            const src = script.getAttribute('src')
            if(!src) {
                return Promise.resolve(script.innerHTML)
            } else {
                return fetchResource(src.startsWith('http') ? src : `${url}${src}`)
            }
        }))
    }

    // 获取并执行所有script脚本代码
    async function execScripts() {
        const scripts = await getExternalScripts()
        console.log(scripts)
        // 手动构造一个commonjs加载环境
        const module = {exports: {}}
        const exports = module.exports
        scripts.forEach(code => {
            eval(code)
        })
        console.log(module.exports)
        return module.exports
    }

    return {
        template,
        getExternalScripts,
        execScripts
    }
}

