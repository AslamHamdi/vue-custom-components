import { ref, onMounted, watch, inject } from 'vue'

export default {
    // inject: ['MLAlert'],
    mounted(){
        // this.MLAlert({
        //     header: 'inject header'
        // })
        console.log("THIS? ", this)
        this.$MLAlert({
            header: 'Inject header'
        })
    },
    setup(){
        // const globalVar = inject('MLAlert')
        // //globalVar()
        // console.log("GLOBAL VAR: ", globalVar)
        // // globalVar()
        // return globalVar
    },
    methods: {
        testo() {
            console.log("siniiii")
        },
        ml_ShowInfoAlert() {

        },
        ml_ShowErrorAlert() {

        },
        ml_ShowWarningAlert() {

        },
        ml_ShowSuccessAlert() {

        }
    }
}