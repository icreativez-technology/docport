import { reactive } from "vue";

const cmr = reactive({
    order:{
        goods:[],
        files:[],
        profitrevenue:[],
        profitexpense: [],
        customerbill:{},
        isReadOnly:true,
        IsConsigneeSameAsPickup:false,
        IsConsigneeSameAsDelivery:false,
        ShipmentOrderStatusId:0
    },
    versions:[],
    cmrDetails:{},
    cmrPDFVersion:{},
    cmrXMLVersion:{},
    companies:[],
    countries:[],
    ShipperCities:[],
    ConsigneeCities:[],
    PickupCities:[],
    DeliveryCities:[],
    CustomCities:[],
    CustomerCities:[],
    CustomerBillCities:[],
    vehicles:[],
    orderTypes:[],
    orderStatus:[],
    isOrderEditable:true,
    isSave:true,
    isReadOnly:true,
    orders:[],
    cities:[],
    isCMRdownload:false
})

export default cmr


