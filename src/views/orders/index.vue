<template>
  <div class="page">
      <div class="page-main">
          <main-header />
          <div class="container content-area">
              <div class="row mt-5">
                  <div class="col-12">
                      <div class="card shadow">
                          <div class="card-header bg-transparent border-0">
                               <span>Show <select v-model="size" @change="changeSize" >
                                  <option value="10">10</option>
                                  <option value="20">20</option>
                                  <option value="50">50</option>
                                  <option value="100">100</option>
                              </select>
                              </span>&nbsp; &nbsp;
                              <h3 class="card-title mb-0">Orders Management</h3>
                              <div class="col-md-4 mt-5">
                                      <select name="" id="" class="form-control" v-model="cmr.order.ShipmentOrderStatusId" @change="fetch">
                                          <option v-for="(odrstatus,index) in cmr.orderStatus" :key="index" :value="odrstatus.ID">{{odrstatus.Name}}</option>
                                     </select>
                                      <label class="form-control-label">Select Status</label>
                              </div>
                              <div class="col-md-4 mt-5">
                                  <input type="text" class="form-control" v-model="search" placeholder="Search Here...." @keyup="fetch"/>
                                  <label class="form-control-label">Search Here</label>
                              </div>
                              <div class="card-options">
                                  <button type="button" class="btn btn-app btn-success mr-2 mt-1 mb-1" data-toggle="modal" data-target="#order-form" data-backdrop="static" @click="addOrder"><i class="fe fe-plus mr-2"></i>Order</button>
                              </div>
                          </div>
                          <div class="">
                              <div class="grid-margin">
                                  <div class="dimmer active" v-if="isLoading">
                                  <div class="lds-hourglass"></div>
                                  </div>
                                  <div class="">
                                      <div class="table-responsive">
                                          <table class="table table-striped table-bordered w-100">
                                              <thead class="thead-light">
                                                  <tr>
                                                      <th><input type="checkbox"  v-model="allSelected" @click="selectAll" /></th>
                                                      <th>Status</th>
                                                      <th>ID</th>
                                                      <th>Pickup</th>
                                                      <th>Pickup Date</th>
                                                      <th>Delivery</th>
                                                      <th>Delivery Date</th>
                                                      <th>Qty</th>
                                                      <th>Reference</th>
                                                      <th>Units</th>
                                                      <th>Carrier</th>
                                                      <th>Actions</th>
                                                  </tr>
                                              </thead>
                                              <tbody v-if="cmr.orders != null">
                                                  <tr v-for="(order,index) in cmr.orders" :key="index">
                                                      <td><input type="checkbox" v-model="orderIds" :value="order.ID"   @change="select"/></td>
                                                      <td>{{order.Status}}</td>
                                                      <td>{{order.ID}}</td>
                                                      <td><i :class="order.PickupCountryCode" data-toggle="tooltip" :title="order.PickupCountryCode"></i></td>
                                                      <td>{{order.PickupDateTime ? order.PickupDateTime : 'N/A'}}</td>
                                                      <td><i :class="order.DeliveryCountryCode" data-toggle="tooltip" :title="order.DeliveryCountryCode"></i></td>
                                                      <td>{{order.DeliveryDateTime ? order.DeliveryDateTime : 'N/A'}}</td>
                                                      <td>{{order.Qty}}</td>
                                                      <td>{{order.CustomReference}}</td>
                                                      <td>{{order.Units}}</td>
                                                      <td>{{order.Carrier}}</td>
                                                      <td class="text-nowrap">
                                                          <a class="btn btn-app btn-primary" @click="show(order.ID)" data-toggle="modal" data-target="#order-form" data-backdrop="static">
                                                              <i class="fa fa-edit"></i>
                                                          </a>
                                                          &nbsp;
                                                          <button type="button" class="btn btn-app btn-purple mr-2 mt-1 mb-1" data-toggle="modal" data-backdrop="static"  @click="cmrForm(order.ID)" data-target="#cmrForm">CMR</button>
                                                          <button type="button" class="btn btn-cyan" data-toggle="modal" data-target="#exampleModal0"><i class="fa fa-share-alt mr-2"></i></button>
                                                          &nbsp;
                                                          <a class="btn btn-app btn-gray"   @click="copyOrder(order.ID)">
                                                              <i class="fa fa-copy"></i>
                                                          </a>
                                                      </td>
                                                  </tr>
                                                  <tr>
                                                      <td colspan="12">
                                                          <a class="btn btn-app btn-success" @click.prevent="deleteOrders">
                                                              <i class="fa fa-trash"></i>
                                                          </a>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                               <tr v-else>
                                                <td colspan="12" align="center">No Records Found</td>
                                              </tr>
                                          </table>

                                           <ul class="pagination" v-if="paginations >= 1">
                                              <li class="page-item page-prev disabled">
                                              <a class="page-link" href="#" @click="onPageChange(currentPage -1)">Prev</a>
                                              </li>
                                              <li v-for="(paginate,index) in paginations" :key="index" :id="`li-`+index"><a class="page-link" @click="onPageChange(paginate)">{{paginate}}</a></li>
                                              <li class="page-item page-next">
                                              <a class="page-link" @click="onPageChange(currentPage +2)">Next</a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <OrderForm/>
      <CmrForm />
  </div>
</template>
<script>
import {ref } from '@vue/reactivity';
import { useToast } from "vue-toastification";
import { onMounted } from "vue";
import MainHeader from "../../core/header/index.vue";
import Sidebar from "../../core/sidebar/index.vue";
import OrderForm from "./components/create.vue";
import CmrForm from "./components/cmr.vue";
import ApiResource from "../../store/actions";
import cmr from"../../store/states/index";
import Common from '../../core/common/common';
import axios from "axios";
export default {
  components: {
  MainHeader,
  Sidebar,
  OrderForm,
  CmrForm,
  Common
  },
  setup() {
      const toast = useToast();
      const allSelected = ref(false)
      const orderIds = ref([]);
      const status  = ref('all');
      const size   = ref(10);
      const search   = ref(" ");
      const paginations = ref();
      const responseData = ref(); 
      const totalRecords = ref(0);
      const currentPage = ref(0);
      const token  = ref();
      const isLoading   = ref(false)
      
      onMounted(async() => {
          token.value = localStorage.getItem("token");
          axios.defaults.headers.common = {'Authorization': `Bearer ${token.value}`} 
          cmr.orderStatus    = await Common.getOrderStatus();
          Common.getAllCities();
          fetch();
          
      })
     const filterData = () => {
      let d = (responseData.value) ? responseData.value.slice(currentPage.value * size.value, (currentPage.value + 1) * size.value) : null
      cmr.orders  = d;
     }
     const changeSize = () => {
        currentPage.value = 0;
        filterData();
        paginations.value = (Math.round(totalRecords.value/size.value)); 
        console.log(paginations.value)     
     }
     const searchData = ()=>{
        alert(search.value)
     }
      const onPageChange =(page)=>{
        currentPage.value = page -1;
        if(page <0){
          currentPage.value = paginations.value -1
        }else if(page > paginations.value){
            currentPage.value = 0;
        }
        filterData();
     }
     const fetch = async() =>{
        isLoading.value = true;
        try{
          var params = {
            route:'ShippingOrder/GetOrders?search='+search.value+"&StatusId="+cmr.order.ShipmentOrderStatusId
          }
          var response = await ApiResource.getAll(params)
            if(response.data){      
               totalRecords.value = response.data.total;
               responseData.value = response.data.order;
               changeSize();
              }  
            }catch(error){
              console.log(error)
          }
          finally{
            isLoading.value = false
          }
     }

      const addOrder = async() =>{

        $('input').attr('disabled', false);
        $('select').attr("disabled", false); 

        cmr.isOrderEditable = false
        cmr.isReadOnly = false
        cmr.isSave     = false

        cmr.ShipperCities = cmr.cities;
        cmr.ConsigneeCities = cmr.cities;
        cmr.PickupCities = cmr.cities;
        cmr.DeliveryCities = cmr.cities;
        cmr.CustomCities = cmr.cities;
        cmr.CustomerCities = cmr.cities;
        cmr.CustomerBillCities = cmr.cities;

       }

      const show = async(id) =>{
          
          cmr.isOrderEditable = true
          cmr.isReadOnly = true
          cmr.isSave     = true

          $('input').attr('disabled', true);
          $('select').attr("disabled", true);
          
          isLoading.value = true
          
         try{
          var params = {
            route:'ShippingOrder/GetOrderbyId?id='+id
          }
          var response = await ApiResource.get(params)
            if(response.data){

                await cmrForm(id);

                cmr.ShipperCities = cmr.cities;
                cmr.ConsigneeCities = cmr.cities;
                cmr.PickupCities = cmr.cities;
                cmr.DeliveryCities = cmr.cities;
                cmr.CustomCities = cmr.cities;
                cmr.CustomerCities = cmr.cities;
                cmr.CustomerBillCities = cmr.cities;
                
                cmr.order  = response.data

                cmr.cmrDetails.ShipmentOrderId       = cmr.cmrDetails.ShipmentOrderId ? cmr.cmrDetails.ShipmentOrderId : cmr.order.Id
                cmr.cmrDetails.IndexRegister         = cmr.cmrDetails.IndexRegister ? cmr.cmrDetails.IndexRegister : cmr.order.IndexRegister
                cmr.cmrDetails.ShipmentOrderTypeId   = cmr.cmrDetails.ShipmentOrderTypeId ? cmr.cmrDetails.ShipmentOrderTypeId : cmr.order.ShipmentOrderTypeId
                cmr.cmrDetails.ShipmentOrderStatusId = cmr.cmrDetails.ShipmentOrderStatusId ? cmr.cmrDetails.ShipmentOrderStatusId : cmr.order.ShipmentOrderStatusId
                cmr.cmrDetails.SenderInfo            = cmr.cmrDetails.SenderInfo ? cmr.cmrDetails.SenderInfo :  cmrCompnayDetails(cmr.order.ShipperCompanyId) +", "+ cmrCountryDetails(cmr.order.ShipperCountryId) +", "+ cmr.order.ShipperAddress
                cmr.cmrDetails.ConsigneeInfo         = cmr.cmrDetails.ConsigneeInfo ? cmr.cmrDetails.ConsigneeInfo :  cmrCompnayDetails(cmr.order.ConsigneeCompanyId) +", "+ cmrCountryDetails(cmr.order.ConsigneeCountryId) +", "+ cmr.order.ConsigneeAddress
                cmr.cmrDetails.CarrierInfo           = cmr.cmrDetails.CarrierInfo ? cmr.cmrDetails.CarrierInfo :  cmr.order.CustomsDescription +", "+ cmrCountryDetails(cmr.order.CustomCountryId) +", "+ cmr.order.CustomAddress
                cmr.cmrDetails.PlaceOfTackingOfGoods = cmr.cmrDetails.PlaceOfTackingOfGoods ? cmr.cmrDetails.PlaceOfTackingOfGoods :  cmr.order.PickupAddress +", "+ cmrCountryDetails(cmr.order.PickupCountryId); 
                cmr.cmrDetails.PlaceOfDeliveyOfGoods = cmr.cmrDetails.PlaceOfDeliveyOfGoods ? cmr.cmrDetails.PlaceOfDeliveyOfGoods :  cmr.order.DeliveryAddress +", "+cmrCountryDetails(cmr.order.DeliveryCountryId);
             }  
            }catch(error){
              console.log(error)
            }finally{
               isLoading.value = false
            }
       }


       const cmrCompnayDetails =(companyId)=>{
          for(var i=0; i<cmr.companies.length; i++){
                  if(companyId == cmr.companies[i].ID){
                      return  cmr.companies[i].CompanyName
                  }
              }
       }

       const cmrCountryDetails =(countryId)=>{
          for(var i=0; i<cmr.countries.length; i++){
                  if(countryId == cmr.countries[i].ID){
                      return  cmr.countries[i].Name
                  }
              }
       }

       const selectAll =()=>{
          orderIds.value = [];
          if(!allSelected.value){
              for(var i=0; i<=cmr.orders.length; i++){
                  orderIds.value.push(cmr.orders[i].ID);
           }
          }else{
             orderIds.value = []; 
          }
       }
       
       const select = () =>{
          allSelected.value = false;
       } 

      const copyOrder = async(id) =>{
          isLoading.value = true;
         try{
          var params = {
            route:'ShippingOrder/CopyOrder?id='+id,
            data:id
          }
          var response = await ApiResource.copy(params)
            if(response.data){
                 await fetch()
                 toast.success(response.data,{
                  timeout: 2000
                });
              }  
            }catch(error){
              console.log(error)
            }finally{
              isLoading.value = false
            }
       }
       

      const deleteOrders = async() =>{
          isLoading.value = true;
         try{
          var params = {
            route:'ShippingOrder/DeleteOrder',
            data:orderIds.value
          }
          console.log(JSON.stringify(orderIds.value))
          var response = await ApiResource.deleteOrders(params)
            if(response.data){
               fetch()
                 toast.success(response.data,{
                  timeout: 2000
                });
              }  
            }catch(error){
              console.log(error)
            }finally{
              isLoading.value = false
            }
       }

       const cmrForm = async(id) =>{
          isLoading.value = true;
          $('input').attr('disabled', true);
          $('select').attr("disabled", true);
         
          try{
          var params = {
            route:'CMR/GetCMRById?ShipmentOrderId='+id,
            data:id
          }
          var response = await ApiResource.get(params)
            if(response.data){
                  cmr.cmrDetails = response.data
              }  
            }catch(error){
              console.log(error)
            }finally{
              isLoading.value = false
            }
       }

       const orderByStatus = ()=>{
          for(var i=0; i<cmr.orders.length; i++){
             if(cmr.orders[i].Status == status.value){
                cmr.orders = cmr.orders;
              }
          }
       } 
      
      return{
        cmr,
        size,
        search,
        status,
        isLoading,
        currentPage,
        paginations,
        allSelected,
        selectAll,
        orderIds,
        select,
        fetch,
        show,
        addOrder,
        copyOrder,
        deleteOrders,
        changeSize,
        onPageChange,
        orderByStatus,
        cmrForm
      }
  }
}
</script>