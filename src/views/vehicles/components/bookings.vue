<template>
<div class="row">
                                            <div class="col-sm-12">
                                                <table class="table table-borderless dataTable">
                                                    <thead>
                                                        <tr>
                                                              <th class="sorting">Id</th>
                                                              <th class="sorting">Inbound order date</th>
                                                              <th class="sorting">Terminal</th>
                                                              <th class="sorting">Cargo owner</th>
                                                              <th class="sorting">Container owner</th>
                                                              <th class="sorting">Forwarder</th>
                                                              <th class="sorting">Receiver</th>
                                                              <th class="sorting">Trucking Co OUT</th>
                                                              <th class="sorting">Comments</th>
                                                              <th class="sorting">Door delivery</th>
                                                              <th class="sorting">Booking Type</th>
                                                              <th class="sorting">Container</th>
                                                              <th class="sorting">Transport out</th>
                                                              <th class="sorting">Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr v-for="(booking,index) in bookings.data" :key="index">
                                                          <td>{{booking.id}}</td>
                                                          <td>{{booking.order_date}}</td>
                                                          <td>{{booking.terminal ? booking.terminal.name : 'N/A'}}</td>
                                                          <td>{{booking.cargo_owner ? booking.cargo_owner.company_name : 'N/A' }}</td>
                                                          <td>{{booking.container_owner ? booking.container_owner.company_name : 'N/A'}}</td>
                                                          <td>{{booking.forwarder ? booking.forwarder.company_name : 'N/A'}}</td>
                                                          <td>{{booking.receiver ? booking.receiver.company_name : 'N/A'}}</td>
                                                          <td>{{booking.trucking_company_out ? booking.trucking_company_out : 'N/A'}}</td>
                                                          <td>{{booking.comments ? booking.comments : 'N/A' }}</td>
                                                          <td>{{booking.door_delivery ? booking.door_delivery : 'N/A'}}</td>
                                                          <td>{{booking.booking_type ? booking.booking_type : 'N/A' }}</td>
                                                          <td>{{booking.container ? booking.container.name : 'N/A' }}</td>
                                                          <td>{{booking.transport_second ? booking.transport_second.name : 'N/A'}}</td>
                                                            <td>
                                                                <div class="btn-group ml-1">
                                                                    <button type="button" class="btn dropdown-toggle"
                                                                        data-toggle="dropdown">
                                                                        <i class="fa fa-ellipsis-v"></i>
                                                                    </button>
                                                                    <div class="dropdown-menu">
                                                                        <a class="dropdown-item"
                                                                            href="javascript:void(0)" @click="deleteBooking(booking.id)"><i
                                                                                class="fa fa-trash" aria-hidden="true"></i>Delete</a>
                                                                        <a class="dropdown-item"
                                                                            href="javascript:void(0)" data-toggle="modal" data-target="#addCondition"><i
                                                                               class="fa fa-first-order" aria-hidden="true"></i>Condition</a>
                                                                        <a class="dropdown-item"
                                                                            href="javascript:void(0)" data-toggle="modal" data-target="#addGoods"><i
                                                                                class="fa fa-eye"></i>Goods</a>
                                                                        <a class="dropdown-item"
                                                                            href="javascript:void(0)" data-toggle="modal" data-target="#addService"><i
                                                                                class="fa fa-wrench" aria-hidden="true"></i>Services</a>
                                                                        <a class="dropdown-item"
                                                                            href="javascript:void(0)" data-toggle="modal" data-target="#addFiles"><i
                                                                               class="fa fa-files-o" aria-hidden="true"></i>Files</a>                                       
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                               <Pagination :data="bookings" align="right"  @pagination-change-page="getFilteredBooking" />
                                            </div>
                                            <Condition />
                                            <Goods />
                                            <Services />
                                            <Files />
</div>
</template>
<script>
import { reactive, ref } from '@vue/reactivity';
import {onMounted } from "vue";
import { useToast } from "vue-toastification";
import Pagination from 'laravel-vue-pagination';
import axios from "axios";
import Condition from "./condition.vue";
import Goods from "./goods.vue";
import Files from "./files.vue";
import Services from "./services.vue";
export default {
    components: {
    Pagination,
    Condition,
    Goods,
    Files,
    Services
    },
    setup() {
      
      const toast = useToast();
      const bookings = ref([]);

      onMounted(() => {
          getBookings();
      })

         const getBookings = async(page = 1)=>{
            try{
              let response = await axios.get("user/bookings?page="+page);
                if(response.data){
                  bookings.value = response.data;
                  current_page.value = response.data.current_page;
                }  
            }catch(error){
                 console.log(error)
            }
        }

       const getFilteredBooking = async(page) =>{
           try{
            let response  = await axios.post("front/get_filtered_bookings?page="+page,{...booking});
            if(response.data){
                bookings.value = response.data 
              }  
            }catch(error){
                 toast.error(error, {
                    timeout: 2000
                 });
            }
       }

        const deleteBooking = async(id)=>{
            try{
              let response = await axios.delete("user/bookings/"+id);
                if(response.data){
                  getBookings();
                   toast.success(response.data.message, {
                    timeout: 2000
                  });
                }  
            }catch(error){
                 console.log(error)
            }
        }
       
       return{bookings,deleteBooking,getFilteredBooking}
    },
}
</script>