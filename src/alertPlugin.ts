import { App } from '@vue/runtime-core'
import { createAlert } from "./createAlert";
const componentFiles = import.meta.globEager(
    './components/customs/*.vue'
);

export default {
    install: (app: App) => {
        Object.entries(componentFiles).forEach(([path, m]:[path: any, m: any] ) => {
            const componentName = path.split('/')!.pop()!.replace(/\.\w+$/, '');

            console.log("NAMEL : ", componentName)
      
            app.component(
              `${componentName}`, m?.default!
            );
        })
        app.config.globalProperties.$MLAlert = createAlert
        app.provide('MLAlert', createAlert)
        return app
    }
}