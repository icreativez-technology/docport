<template>
    <div class="modal fade" id="addFiles" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
  <div class="modal-dialog addBooking" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h6 style="color:black;">Add Files</h6>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
        <div class="modal-body">
       <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <button class="nav-link active">Files</button>
        </div>
      </nav>
       <div class="tabcontent">
           <form @submit.prevent="addBooking">
            <div class="form-row">
              <div class="form-group col-md-4">
                <label for="inputEmail4">Condition Number</label>
                   <select class="form-control" v-model="booking.week_number">
                    <option v-for="(week,index) in weeks" :key="index"  :value="week.id">{{week.name}}</option>>
                   </select>
              </div>
              <div class="form-group col-md-4">
                <label for="inputPassword4">Condition Type</label>
                    <select class="form-control" v-model="booking.week_number">
                    <option v-for="(week,index) in weeks" :key="index"  :value="week.id">{{week.name}}</option>>
                   </select>
              </div>
              <div class="form-group col-md-4">
                <label for="inputPassword4">Condition Class</label>
                    <select class="form-control" v-model="booking.week_number">
                    <option v-for="(week,index) in weeks" :key="index"  :value="week.id">{{week.name}}</option>>
                   </select>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-12">
                <label for="inputPassword4">Side / Broken</label>
                    <textarea name="" id="" cols="5" rows="5" class="form-control"></textarea>
              </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-6">
                <label for="inputPassword4">Damage Outside / Inside</label>
                         <select class="form-control" v-model="booking.seal_id">
                            <option v-for="(item,index) in 10" :key="index"  :value="item">{{item}}</option>
                        </select>

                          <select class="form-control" v-model="booking.seal_id">
                            <option v-for="(item,index) in 10" :key="index"  :value="item">{{item}}</option>
                        </select>

                          <select class="form-control" v-model="booking.seal_id">
                            <option v-for="(item,index) in 10" :key="index"  :value="item">{{item}}</option>
                        </select>

                          <select class="form-control" v-model="booking.seal_id">
                            <option v-for="(item,index) in 10" :key="index"  :value="item">{{item}}</option>
                        </select>
                </div>
                <div class="form-group col-md-6">
                <label for="inputPassword4">Damage Type</label>
                         <select class="form-control" v-model="booking.seal_id">
                            <option v-for="(item,index) in 10" :key="index"  :value="item">{{item}}</option>
                        </select>

                          <select class="form-control" v-model="booking.seal_id">
                            <option v-for="(item,index) in 10" :key="index"  :value="item">{{item}}</option>
                        </select>

                          <select class="form-control" v-model="booking.seal_id">
                            <option v-for="(item,index) in 10" :key="index"  :value="item">{{item}}</option>
                        </select>

                          <select class="form-control" v-model="booking.seal_id">
                            <option v-for="(item,index) in 10" :key="index"  :value="item">{{item}}</option>
                        </select>
                </div>
            </div>

        <div class="form-row">
            <div class="form-group col-md-12">
                    <input type="checkbox" class="form-control"  v-model="booking.order_time">Fixed by BalticRail
            </div>
        </div>


      <button type="submit" class="general-btn d-inline-block">Add Booking</button>
          </form>
       </div>
      </div>
    </div>
  </div>
</div>
</template>\
<script>
import {onMounted } from "vue";
import { reactive, ref } from '@vue/reactivity';
import { useRoute } from 'vue-router';
import axios from "axios";
export default {
    setup() {
        const route = useRoute();
        const weeks = ref([]);
        const bookings = ref([]);
        const booking = reactive([]);
        const tabHome = ref(true);
        const tabDoor = ref(false);
        const containers = ref([]);
        const vehicles_types = ref([]);
        const ospaner_vehicles = ref([]);
        const partners = ref([]);
        const drivers = ref([]);
        const terminals = ref([]);
        const errors   = ref();


      onMounted(() => {
          getBookings();
          getBookingData();
          getWeeks();
      })

        const getWeeks = async()=>{
                try{
                let response = await axios.get("front/weeks");
                    if(response.data){
                    weeks.value = response.data;
                    }  
                }catch(error){
                    console.log(error)
                }
            }
        const getBookings = async()=>{
            try{
              let response = await axios.get("user/bookings");
                if(response.data){
                  bookings.value = response.data.data
                }  
            }catch(error){
                 console.log(error)
            }
        }
        const getBookingData = async()=>{
            try{
              let response = await axios.get("front/get_booking_data");
                if(response.data){
                   containers.value = response.data.containers;
                   partners.value   = response.data.partners;
                   terminals.value  = response.data.terminals;
                   vehicles_types.value = response.data.vehicles_types;
                   drivers.value  =  response.data.drivers;
                }  
            }catch(error){
                 console.log(error)
            }
        }
       const getTransport = async() =>{
           try{
                let response = await axios.get("front/get_vehicles/"+booking.transport_type_id);
            if(response.data){
                   ospaner_vehicles.value = response.data;
                }  
            }catch(error){
               console.log(error)
            }
       }
       
      const addBooking = async() =>{

           try{
            let response = await axios.post("user/bookings",{...booking});
            if(response.data){
                toast.success(response.data.message, {
                    timeout: 2000
                });
                $('#addBooking').modal('hide');
                getBookings();
                booking = "";
                
            }  
            }catch(error){
                console.log(error)
            }
       }

        const tab = (tabId) =>{
            if(tabId == 2){
              tabHome.value = false;
              tabDoor.value = true; 
            }if(tabId == 1){
              tabDoor.value = false; 
              tabHome.value = true;
            }
            
        }
        
        return{
          weeks,
          bookings,
          booking,
          containers,
          partners,
          drivers,
          terminals,
          vehicles_types,
          ospaner_vehicles,
          tabHome,
          tabDoor,
          errors,
          addBooking,
          tab,
          getTransport
        }
    }
}
</script>