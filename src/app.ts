import { ref, onMounted, watch, inject } from 'vue'

export default {
    // inject: ['MLAlert'],
    mounted(){

        this.$MLAlert({
            header: 'Inject header',
            variation: 'content-only'
        })

        this.$MLAlert({
            header: 'Inject header2',
            variation: 'all'
        })
    },
    setup(){
    
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