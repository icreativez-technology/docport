import { reactive } from "vue";

const cmr = reactive({
    order:{
        goods:[],
        files: [
            {
              "FilePath": "adadsadsadsadsadsadsa"
            }
        ],
        customerbill:{},
        IsConsigneeSameAsPickup:false,
        IsConsigneeSameAsDelivery:false
    },
    orders:[]
})

export default cmr


