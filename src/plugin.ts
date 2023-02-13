import { App } from '@vue/runtime-core'
import { createAlert } from "./createAlert";
import './css/tailwind.css'

const componentFiles = import.meta.glob(
    './components/customs/*.vue'
    , { eager: true }
);

export default {
    install: (app: App) => {
        Object.entries(componentFiles).forEach(([path, m]:[path: any, m: any] ) => {
            const componentName = path.split('/')!.pop()!.replace(/\.\w+$/, '');
      
            app.component(
              `${componentName}`, m?.default!
            );
        })

        app.config.globalProperties.$MLAlert = createAlert
        app.provide('MLAlert', createAlert)
        return app
    }
}