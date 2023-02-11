import axios from "axios";
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
    }
}
