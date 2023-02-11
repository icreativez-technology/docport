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
                                <div class="col-md-4">
                                    <select class="form-control" v-model="status">
                                        <option value="all">All</option>
                                        <option value="planned">Planned</option>
                                        <option value="unplanned">Unplanned</option>
                                        <option value="intransit">In Transit</option>
                                        <option value="old">Old</option>
                                    </select>
                                </div>
                                <div class="col-md-4">
                                    <input type="text" class="form-control" placeholder="Search Here...." />
                                </div>
                                <div class="card-options">
                                    <button type="button" class="btn btn-app btn-success mr-2 mt-1 mb-1" data-toggle="modal" data-target="#order-form"><i class="fe fe-plus mr-2"></i>Order</button>
                                </div>
                            </div>
                            <div class="">
                                <div class="grid-margin">
                                    <div class="dimmer active" v-if="isLoading">
                                    <div class="lds-hourglass"></div>
                                    </div>
                                    <div class="">
                                        <div class="table-responsive">
                                            <table class="table table-striped table-bordered text-nowrap w-100">
                                                <thead class="thead-light">
                                                    <tr>
                                                        <th><input type="checkbox" name="" id="" /></th>
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
                                                <tbody>

                                                    <tr v-for="(order,index) in orders" :key="index">
                                                        <td><input type="checkbox" name="" id="" :value="order.ID"/></td>
                                                        <td>{{order.Status}}</td>
                                                        <td>{{order.ID}}</td>
                                                        <td><i :class="order.PickupCountryCode" data-toggle="tooltip" :title="order.PickupCountryCode"></i></td>
                                                        <td>{{order.PickupDateTime}}</td>
                                                        <td><i :class="order.DeliveryCountryCode" data-toggle="tooltip" :title="order.DeliveryCountryCode"></i></td>
                                                        <td>{{order.DeliveryDateTime}}</td>
                                                        <td>{{order.Qty}}</td>
                                                        <td>{{order.CustomReference}}</td>
                                                        <td>{{order.Units}}</td>
                                                        <td>{{order.Carrier}}</td>
                                                        <td class="text-nowrap">
                                                            <a class="btn btn-app btn-primary" @click="show(order.ID)" data-toggle="modal" data-target="#order-form">
                                                                <i class="fa fa-edit"></i>
                                                            </a>
                                                            &nbsp;
                                                            <button type="button" class="btn btn-app btn-purple mr-2 mt-1 mb-1" data-toggle="modal" @click="cmrForm" data-target="#cmrForm">CMR</button>
                                                            <button type="button" class="btn btn-cyan" data-toggle="modal" data-target="#exampleModal0"><i class="fa fa-share-alt mr-2"></i></button>
                                                            &nbsp;
                                                            <a class="btn btn-app btn-gray"   @click="copyOrder(order.ID)">
                                                                <i class="fa fa-copy"></i>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="12">
                                                            <a class="btn btn-app btn-success">
                                                                <i class="fa fa-trash"></i>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                             <ul class="pagination" v-if="paginations > 1">
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
        <OrderForm :isOrderEditable="isOrderEditable"/>
        <CmrForm />
    </div>
</template>
<script>
import { reactive, ref } from '@vue/reactivity';
import { useRoute } from 'vue-router';
import { useToast } from "vue-toastification";
import { onMounted } from "vue";
import MainHeader from "../../core/header/index.vue";
import Sidebar from "../../core/sidebar/index.vue";
import OrderForm from "./components/create.vue";
import CmrForm from "./components/cmr.vue";
import ApiResource from "../../store/actions";
export default {
    components: {
    MainHeader,
    Sidebar,
    OrderForm,
    CmrForm
    },
    setup() {
        const toast = useToast();
        const orders = ref([]);
        const isOrderEditable = ref(false)
        const orderr = ref({});
        const status  = ref('all');
        const size   = ref(10);
        const search   = ref(" ");
        const paginations = ref();
        const responseData = ref(); 
        const totalRecords = ref(0);
        const currentPage = ref(0);
        const isLoading   = ref(false)
        
        onMounted(() => {
            fetch();
        })
       const filterData = () => {
        let d = responseData.value.slice(currentPage.value * size.value, (currentPage.value + 1) * size.value )
        orders.value  = d;
       }
       const changeSize = () => {
          currentPage.value = 0;
          filterData();
          paginations.value = (Math.round(totalRecords.value/size.value));
      
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
              route:'ShippingOrder/GetOrders'
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

        const show = async(id) =>{
            isOrderEditable.value = true
           try{
            var params = {
              route:'ShippingOrder/GetOrderbyId?id='+id
            }
            var response = await ApiResource.get(params)
              if(response.data){
                 orderr.value = response.data
                 orderr.value.DeliveryDateTime = "2023-02-11";
                }  
              }catch(error){
                console.log(error)
              }
         }
        
        return{
          orders,
          size,
          search,
          status,
          isOrderEditable,
          orderr,
          onPageChange,
          show
        }
    }
}
</script>