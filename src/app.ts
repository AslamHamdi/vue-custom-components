import { ref, onMounted, watch, inject } from 'vue'

export default {
    inject: ['MLAlert'],
    mounted(){

        // this.MLAlert({
        //     header: 'Inject header',
        //     variation: 'content-only'
        // })

        // setTimeout(() => {
        //     this.MLAlert({
        //         header: 'Inject header2',
        //         variation: 'all'
        //     })
        // }, 900)

    },
    setup(){
    
    },
    methods: {

    }
}