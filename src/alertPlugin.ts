import { App } from '@vue/runtime-core'
import { createAlert } from "./createAlert";

export default {
    install: (app: App) => {  
        app.config.globalProperties.$MLAlert = createAlert
        console.log("INSTALLING PLUGIN", app)
        app.provide('MLAlert', createAlert)
        app.config.globalProperties.testFn = () => {
            console.log('install global properties')
        }
        return app
    }
}