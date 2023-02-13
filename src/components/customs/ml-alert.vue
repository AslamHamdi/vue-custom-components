<template>
    <transition name="fade">
        <div :style="{position: position, right: right + 'px', top: offset + 'px'}">
            <div v-if="visible" class="flex items-center justify-center border-2 rounded-sm" 
            :class="[alertStyle().border, alertStyle().inner]"
            style="max-width: 450px; border-radius: 5px;">
                <div class="m-4">
                    <div class="grid grid-flow-col">
                        <div class="row-span-3 mr-2" style="width: 25px">
                            <svg v-if="type == 'info'"  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="#2c75dd" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-info"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="8"></line></svg>
                            <svg v-if="type == 'error'" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="#d66257" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-info rotate-180"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="8"></line></svg>
                            <svg v-if="type == 'warning'"  viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#d1671c" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><g id="Icon"><g><path d="M10.47,3.709c-1.91,3.439 -6.435,11.584 -8.3,14.941c-0.301,0.542 -0.293,1.203 0.021,1.737c0.315,0.535 0.888,0.863 1.508,0.863l16.602,-0c0.62,-0 1.193,-0.328 1.508,-0.863c0.314,-0.534 0.322,-1.195 0.021,-1.737l-8.3,-14.941c-0.309,-0.555 -0.894,-0.9 -1.53,-0.9c-0.636,0 -1.221,0.345 -1.53,0.9l0,0Zm1.53,12.791c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1Zm1.385,-7.006c0.03,-0.385 -0.103,-0.765 -0.365,-1.049c-0.263,-0.284 -0.632,-0.445 -1.019,-0.445c-0.001,0 -0.001,0 -0.002,0c-0.387,-0 -0.756,0.161 -1.019,0.445c-0.262,0.284 -0.395,0.664 -0.365,1.049c0.097,1.259 0.232,3.02 0.314,4.083c0.04,0.521 0.474,0.923 0.997,0.923c0.049,0 0.099,0 0.148,0c0.523,0 0.957,-0.402 0.997,-0.923c0.082,-1.063 0.217,-2.824 0.314,-4.083Z"/></g></g></svg>
                            <svg v-if="type == 'success'" version="1.1" id="Livello_1" fill="#049b04" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve"><g><rect class="st0" style="fill: none" width="100" height="100"/></g><path d="M50,15c-19.33,0-35,15.67-35,35s15.67,35,35,35s35-15.67,35-35S69.33,15,50,15z M44.401,65.572L29.564,50.735l5.109-5.109l9.728,9.728l20.926-20.926l5.109,5.109L44.401,65.572z"/></svg>
                        </div>
                        <div v-if="variation != 'content-only'" class="col-span-2 mb-2">
                            <h1 class="font-semibold">{{ header }}</h1>
                        </div>
                        <div v-if="variation != 'title-only'"  class="col-span-2 mb-2">
                            <p class="text-left">
                                {{ content }}
                            </p>
                        </div>
                        <div v-if="variation == 'all'" class="col-span-2">
                            <div class="flex flex-wrap">
                                <!-- <slot></slot>    -->
                                <ml-button class="pt-4 pr-4" type="secondary" variation="text-only" :type2="type" :text="textButton1"/>
                                <ml-button class="pt-4 pr-4" variation="text-only" :type2="type" :text="textButton2"/>
                            </div>
                        </div>
                        <div @click="handleClick" class="row-span-3 ml-2" style="width: 20px">
                            <button class="h-fit w-full">
                                <svg enable-background="new 0 0 32 32"  id="Слой_1" version="1.1" viewBox="0 0 32 32"  xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M17.459,16.014l8.239-8.194c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.391-1.034-0.391-1.428,0  l-8.232,8.187L7.73,6.284c-0.394-0.395-1.034-0.395-1.428,0c-0.394,0.396-0.394,1.037,0,1.432l8.302,8.303l-8.332,8.286  c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.428,0l8.325-8.279l8.275,8.276c0.394,0.395,1.034,0.395,1.428,0  c0.394-0.396,0.394-1.037,0-1.432L17.459,16.014z" fill="rgb(148 163 184)" id="Close"/><g/><g/><g/><g/><g/><g/></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script lang="ts">

import { defineComponent } from 'vue'  
import mlButton from './ml-button.vue'

export default defineComponent({
    name: 'MLAlert',
    mounted(){

    },
    /*
     * Props list which determines style and content of the button
     * @props {string} variation - variation of the alert
     * 👉 all, title-only, content-only, title-content
     * @props {string} type - types of the button 
     * 👉 info, error, warning, success
     * @props {string} header - alert's header
     * @props {sting} content - alert's content
     */
    props: {
        variation: {
            type: String,
            default: 'all'
        },
        type :{
            type: String,
            default: 'info'
        },
        header: {
            type: String,
            default: "This is header"
        },
        content: {
            type: String,
            default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat laboriosam tempore iste error sed dolore ipsa, id quis! Accusantium'
        },
        textButton1: {
            type: String,
            default: "Click 1"
        },
        textButton2: {
            type: String,
            default: "Click 2"
        },
        id: {
            type: Number,
        },
        visible: Boolean,
        onCloseHandler: {
            type: Function,
        },
        offset: {
            default: 0
        },
        right: {
            default: 0
        },
        position: {
            default: 'static' as const
        }
    },
    data() {
        return {
            typeObj: [
                { type: 'info', border: 'border-custom-info-500', inner: 'bg-custom-info-100' },
                { type: 'error', border: 'border-custom-error-500', inner: 'bg-custom-error-100' },
                { type: 'warning', border: 'border-custom-warning-300', inner: 'bg-custom-warning-100' },
                { type: 'success', border: 'border-custom-success-300', inner: 'bg-custom-success-100' },
            ]
        }
    },
    methods: {
        alertStyle() {
            let result: any = this.typeObj.filter((o) => {
                return o.type == this.type
            })
            return result[0]
        },
        handleClick(){
            if(this.onCloseHandler){
                this.onCloseHandler(this.id)
            }else{
                console.log("CLOSED")
            }
        }
    },
    setup(props, ctx){

    },
    components: {
        'ml-button': mlButton
    }
})

</script>

<style>
  .fade-enter-from {
    opacity: 0;
  }
  .fade-enter-to {
    opacity: 1;
  }
  .fade-enter-active {
    transition: all 2s ease;
  }
  .fade-leave-from {
    opacity: 1;
  }
  .fade-leave-to {
    opacity: 0;
  }
  .fade-leave-active {
    transition: all 2s ease;
  }
</style>