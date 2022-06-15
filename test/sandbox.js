// 快照沙箱
class SnapshotSandBox{
    windowSnapshot = {};
    modifyPropsMap = {};
    active(){
        for(const prop in window){
            this.windowSnapshot[prop] = window[prop];
        }
        Object.keys(this.modifyPropsMap).forEach(prop=>{
            window[prop] = this.modifyPropsMap[prop];
        });
    }
    inactive(){
        for(const prop in window){
            if(window[prop] !== this.windowSnapshot[prop]){
                this.modifyPropsMap[prop] = window[prop];
                window[prop] = this.windowSnapshot[prop];
            }
        }
    }
}

// proxy沙箱
class ProxySandBox{
    proxyWindow;
    isRunning = false;
    active(){
        this.isRunning = true;
    }
    inactive(){
        this.isRunning = false;
    }
    constructor(){
        const fakeWindow = Object.create(null);
        this.proxyWindow = new Proxy(fakeWindow,{
            set:(target, prop, value, receiver)=>{
                if(this.isRunning){
                    target[prop] = value;
                }
            },
            get:(target, prop, receiver)=>{
                return  prop in target ? target[prop] : window[prop];
            }
        });
    }
}
