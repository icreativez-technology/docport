import { reactive } from "vue";

const cmr = reactive({
    order:{
        goods:[],
        files:[],
        customerbill:{},
        isReadOnly:true,
        IsConsigneeSameAsPickup:false,
        IsConsigneeSameAsDelivery:false
    },
    versions:[],
    cmrDetails:{},
    companies:[],
    countries:[],
    cities:[],
    vehicles:[],
    orderTypes:[],
    orderStatus:[],
    isOrderEditable:true,
    isSave:true,
    isReadOnly:true,
    orders:[]
})

export default cmr


