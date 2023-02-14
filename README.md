# Vue 3 custom components

Custom component and plugins build for Vue 3

## What's included ?

1. Button
2. Alert

## How to install ?

1. Start a new project
2. Run 'npm intall mindlens-components' or 'yarn add mindlens-components' in terminal at root dir

## How to use the plugins and components ?
1. Open main.ts
2. Insert code below to register the plugins and components

```
import mindlens from 'mindlens-components'
import 'mindlens-components/styles.css'

import App from './App.vue'

createApp(App)
.use(mindlens)
.mount('#app')
```

3. To use the button, use <ml-button/> component:

```
<ml-button variation="left-icon-text"/>
<ml-button variation="text-only"/>

<ml-button type="secondary" variation="right-icon-text"/>
<ml-button type="secondary" variation="icon-only"/>
```
4. To use the alert, use MLAlert plugin. Need to inject the plugin into the component as below: 
```
export default {
    inject: ['MLAlert'],
    data() {
      return {
        mlAlert: this.MLAlert
      }
    },
    methods: {
      showAlert(type: string, variation: string){
        this.mlAlert({
            header: 'This is header',
            type: type,
            variation: variation,
            content: 'This is a content. Content is a subject or ideas contained in something written, said...
            textButton1: "Btn 1",
            textButton2: "Btn 2"
        })
      },
    }
}
```

## props

1. Button component:

| Props         | Description                   | Value                                                 |
| ------------- | ----------------------------- | ----------------------------------------------------- |
| variation     | vVriation of the button       | left-icon-text, right-icon-text, text-only, icon-only |
| type          | Button style type             | primary, secondary                                    |
| type2         | Button criticality style type | info(default), warning, error, success                |
| text          | Button text content           | String value                                          |


