<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap');

.button-font {
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
}
.ml-button {
    padding-inline: 12px;
    padding-block: 6px;
}
.ml-button-shadow:hover {
    box-shadow: 0 6px 10px 2px #d4d4d4
}

.ml-button-shadow:focus {
    box-shadow: 0 6px 10px 2px #d4d4d4
}

.ml-button-shadow[disabled] {
    box-shadow: 0 0 0 0
}

.testo {
   color: #049b04
}

</style>

<template>
    <div>
        <!-- #region primary button-->
        <button v-if="type == 'primary'" class="ml-button ml-button-shadow
        rounded-md"
        :disabled="state == 'disabled'"
        :class="[state == 'disabled' ? 'bg-gray-200 cursor-not-allowed' : '', 
        `${buttonStyle().primaryDefault}`, `${buttonStyle().primaryHover}`, `${buttonStyle().primaryFocus}`]">
            <span class="button-font
            space-x-2 flex"
            :class="[state == 'disabled' ? 'text-gray-400' : '',
            type2 == 'default' || type2 =='info' || state == 'disabled' ? '' : 'text-slate-200']">
                <p v-if="variation == 'left-icon-text'">{{ text }}</p>
                <svg v-if="variation != 'text-only'" enable-background="new 0 0 32 32" style="height: 24px; width: 24px;" id="" version="1.1" viewBox="0 0 32 32"  xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path clip-rule="evenodd" 
                    d="M32,16.009c0-0.267-0.11-0.522-0.293-0.714  l-9.899-9.999c-0.391-0.395-1.024-0.394-1.414,0c-0.391,0.394-0.391,1.034,0,1.428l8.193,8.275H1c-0.552,0-1,0.452-1,1.01  s0.448,1.01,1,1.01h27.586l-8.192,8.275c-0.391,0.394-0.39,1.034,0,1.428c0.391,0.394,1.024,0.394,1.414,0l9.899-9.999  C31.894,16.534,31.997,16.274,32,16.009z" 
                    :fill="type2 == 'default' || type2 =='info' ? '#121313' : '#e2e8f0'" fill-rule="evenodd" id="Arrow_Forward"/><g/><g/><g/><g/><g/><g/>
                </svg>
                <p v-if="variation == 'right-icon-text' || variation == 'text-only'">{{ text }}</p>
            </span>
        </button>
        <!-- #endregion -->

        <!-- #region secondary button-->
        <button v-if="type == 'secondary'" class="ml-button ml-button-shadow
        outline outline-1 rounded-lg"
        :disabled="state == 'disabled'"
        :class="[state == 'disabled' ? 'outline-gray-300 cursor-not-allowed' : '',
        `${buttonStyle().secondaryDefault}`, `${buttonStyle().secondaryHover}`]">
            <span class="button-font
            space-x-2 flex text-custom-orange-500"
            :class="[state == 'disabled' ? 'text-gray-400' : '',
            `${buttonStyle().secondaryText}`]">
                <p v-if="variation == 'left-icon-text'">{{ text }}</p>
                <svg v-if="variation != 'text-only' && variation != 'right-icon-text'" enable-background="new 0 0 32 32" style="height: 24px; width: 24px;" id="" version="1.1" viewBox="0 0 32 32"  xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path clip-rule="evenodd" d="M32,16.009c0-0.267-0.11-0.522-0.293-0.714  l-9.899-9.999c-0.391-0.395-1.024-0.394-1.414,0c-0.391,0.394-0.391,1.034,0,1.428l8.193,8.275H1c-0.552,0-1,0.452-1,1.01  s0.448,1.01,1,1.01h27.586l-8.192,8.275c-0.391,0.394-0.39,1.034,0,1.428c0.391,0.394,1.024,0.394,1.414,0l9.899-9.999  C31.894,16.534,31.997,16.274,32,16.009z" 
                    fill="currentColor" fill-rule="evenodd" id="Arrow_Forward"/><g/><g/><g/><g/><g/><g/>
                </svg>
                <svg v-if="variation != 'text-only' && variation == 'right-icon-text'" xmlns="http://www.w3.org/2000/svg" style="height: 24px; width: 24px;"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
                <p v-if="variation == 'right-icon-text' || variation == 'text-only'">{{ text }}</p>
            </span>
        </button>
        <!-- #endregion -->
    </div>
</template>

<script lang="ts">

export default {
    /*
     * Props list which determines style and content of the button
     * @props {string} variation - variation of the button 
     * 👉 left-icon-text, right-icon-text, text-only, icon-only
     * @props {string} type - types of the button 
     * 👉 primary, secondary
     * @props {string} type2 - types (criticality) of the button 
     * 👉 info/default, warning, error, success
     * @props {sting} state - default states of the button
     * 👉 default: no states, hover, clicked, disable 
     * @props {string} text - action text that will be shown inside button
     */
    props: {
        variation: {
            type: String,
            default: 'icon-only'
        },
        type: {
            type: String,
            default: 'primary'
        },
        type2: {
            type: String,
            default: 'info'
        },
        state: {
            type: String,
            default: 'default'
        },
        text: {
            type: String,
            default: 'Action'
        },
    },
    data() {
        return {
            typeObj: [ // <-- class for type2
                {
                    type: 'info', 
                    primaryDefault: 'bg-custom-orange-100', primaryHover: 'enabled:hover:bg-custom-orange-200', primaryFocus: 'enabled:focus:bg-custom-orange-200', 
                    secondaryDefault: 'enabled:outline-custom-orange-400', secondaryHover: 'enabled:hover:border-custom-orange-400', secondaryText: 'text-custom-orange-500'
                },
                {
                    type: 'warning', 
                    primaryDefault: 'bg-custom-warning-300', primaryHover: 'enabled:hover:bg-custom-warning-500', primaryFocus: 'enabled:focus:bg-custom-warning-500', 
                    secondaryDefault: 'enabled:outline-custom-warning-300', secondaryHover: 'enabled:hover:border-custom-warning-300', secondaryText: 'text-custom-warning-500',
                },
                {
                    type: 'error', 
                    primaryDefault: 'bg-custom-error-200', primaryHover: 'enabled:hover:bg-custom-error-500', primaryFocus: 'enabled:focus:bg-custom-error-500', 
                    secondaryDefault: 'enabled:outline-custom-error-200', secondaryHover: 'enabled:hover:border-custom-error-200', secondaryText: 'text-custom-error-500'
                },
                {
                    type: 'success', 
                    primaryDefault: 'bg-custom-success-300', primaryHover: 'enabled:hover:bg-custom-success-500', primaryFocus: 'enabled:focus:bg-custom-success-500', 
                    secondaryDefault: 'enabled:outline-custom-success-300', secondaryHover: 'enabled:hover:border-custom-success-300', secondaryText: 'text-custom-success-500'
                },
            ]
        }
    },
    methods: {
        isDisabled() {

        },
        buttonStyle() {
            let result = this.typeObj.filter((o) => {
                return o.type == this.type2
            })
            return result[0]
        },
    }
}

</script>