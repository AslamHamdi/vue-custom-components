import { h, createVNode, Component, render, VNode } from 'vue'
import MLAlert from './components/customs/Alert.vue'
//import MLAlert from './components/customs/Alert.vue'

export const createAlert = (options: any): { close: () => void }  => {
    setupVNode(options)

    return {
        close: () => close()
    }
}

export const setupVNode = (options: any) => {
    setTimeout(() => {
        const container = document.createElement('div')
        document.body.appendChild(container)
        let alertVNode;
        console.log("ALERT VNODE: ", options)
        console.log("CREATING ALERT")
        alertVNode = createVNode(
            MLAlert,
            options,
            'foo'
        )

        render(alertVNode, container)
    }, 1)
}

export const close = () => {
    return null
}