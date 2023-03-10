import axios from "axios";
import cmr from "../../store/states/index";
export default {
    async getCompanies() {
        try {
           var response = await axios.get("Companies");
             return response.data.companyresp;
        } catch (e) {
            console.log(e)
            return e.response
        }
    },
    async getVehicles() {
        try {
            var response = await axios.get("Vehicles");
            return response;
          } catch (e) {
            console.log(e)
            return e.response
        }
    },
    async getCountries() {
        try {
            var response = await axios.get("Common/getCountries");
            return response.data.country;
          } catch (e) {
            console.log(e)
            return e.response
        }
    },
    async getStates(id) {
        try {
            var response = await axios.get("Common/getState?CountryId="+id);
            return response.data.common;
          } catch (e) {
            console.log(e)
            return e.response
        }
    },
    async getCities(id) {
        try {
            var response = await axios.get("Common/getCities?CountryId="+id);
            return response.data.common;
          } catch (e) {
            console.log(e)
            return e.response
        }
    },
    async getOrderType() {
        try {
            var response = await axios.get("Common/GetShipmentOrderType");
            return response.data.common;
          } catch (e) {
            console.log(e)
            return e.response
        }
    },
    async getOrderStatus() {
        try {
            var response = await axios.get("Common/GetShipmentOrderStatus");
            return response.data.common;
          } catch (e) {
            console.log(e)
            return e.response
        }
    },
    async getVehicleTypes() {
        try {
            var response = await axios.get("Common/GetVehicleType");
            return response.data.common;
          } catch (e) {
            console.log(e)
            return e.response
        }
    },
    async getGetNextOrderId() {
        try {
            var response = await axios.post("ShippingOrder/GetNextOrderId");
            return response.data.OrderId;
          } catch (e) {
            console.log(e)
            return e.response
        }
    },
    async getOrders() {
        try {
            var response = await axios.get("ShippingOrder/GetOrders");
            return response.data.order;
          } catch (e) {
            console.log(e)
            return e.response
        }
    },
    async getVehicles() {
        try {
            var response = await axios.get("Vehicles");
            return response.data.vehicle;
          } catch (e) {
            console.log(e)
            return e.response
        }
    },
    async getAllCities() {
        try {
            var response = await axios.get("Common/GetAllCities");
            cmr.cities = response.data.common
          } catch (e) {
            console.log(e)
            return e.response
        }
    },
    async getCMRPDFVersion(id){
        try{
         var response =  await axios.get('CMR/GetCMRByVersionNo?VersionNumber='+id);
          if(response.data){
            cmr.cmrPDFVersion = response.data
            var element = document.getElementById('cmrContent'); 
            var opt = 
            {
            margin:       1,
            filename:     'cmr.pdf',
            image:        { type: 'jpeg', quality: 100 },
            html2canvas:  { scale: 1   },
            jsPDF:        { unit: 'mm', format: 'a4', orientation: 'p' }
            };
            html2pdf().set(opt).from(element).save();
         }  
         }catch(error){
            console.log(error)
         }
    },
    async getCMRXMLVersion(id){
        try{
         var response =  await axios.get('CMR/GetCMRInXMLByVersionNo?VersionNumber='+id);
          if(response.data){
            cmr.cmrXMLVersion = response.data
         }  
         }catch(error){
            console.log(error)
         }
    }  
}
