import { createVNode, Component, render, VNode } from 'vue'
import MLAlert from './components/customs/ml-alert.vue'

let config = {
    ALERT_GAP: 12,
    TIMEOUT: 5000
}

let alerts: any = []

let alertId = 0

export const createAlert = (options: any): { close: () => void }  => {
    const id = alertId++;
    setupVNode(id, options)

    return {
        close: () => close(id)
    }
}

export const setupVNode = (id: number, options: any) => {
    setTimeout(() => {
        const verticalOffset = moveAlertsOnAdd(options, alerts, config.ALERT_GAP)
        console.log("Offset: ", verticalOffset)

        const container = document.createElement('div')
        document.body.appendChild(container)

        let alertVNode;

        options.id = id
        options.onCloseHandler = close
        options.position = 'fixed'
        options.right = 0,
        options.offset = verticalOffset

        alertVNode = createVNode(
            MLAlert,
            options,
            'foo'
        )

        render(alertVNode, container)

        alerts.push({alertVNode, container})

        if (alertVNode.component) {
            alertVNode.component.props.visible = true
        }

    }, 1)
}

export const moveAlertsOnAdd = (options: any, alerts: any, alertGap: number): number => {
    let verticalOffset = alertGap
  
    alerts.forEach(({ alertVNode }: {alertVNode: any}) => {
      const offsetHeight = (alertVNode.el as HTMLElement).offsetHeight + alertGap
      verticalOffset += offsetHeight || 0
    })
    return verticalOffset
}

export const moveAlertsOnClose = (
    index: number,
    alertArr: any,
    alertHeight: number
  ) => {
    for (let i = index; i < alertArr.length; i++) {
      const { alertVNode } = alertArr[i]
  
      if (!alertVNode.el) return
  
      const verticalPos: string = 'top'
      const pos =
        parseInt(alertVNode.el.style[verticalPos], 10) - alertHeight - config.ALERT_GAP
  
      if (!alertVNode.component) return
      alertVNode.component.props.offset = pos
    }
}

export const close = (id: number) => {
    const alertArr = alerts

    const index = alertArr.findIndex(
        ({alertVNode}: {alertVNode: any}) => alertVNode.props && id === alertVNode.props.id
    )

    if(index === -1) return
    const { container, alertVNode } = alertArr[index]
    if (!alertVNode.el) return
    const height = alertVNode.el.offsetHeight

    alerts.splice(index, 1)
    moveAlertsOnClose(index, alertArr, height)

    if (!alertVNode.component) return
    alertVNode.component.props.visible = false

    setTimeout(() => {
        render(null, container)
        document.body.removeChild(container)
    }, 1000)
}