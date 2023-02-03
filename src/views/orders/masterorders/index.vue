<template>
  <main-header/>
  	<div class="container content-area">
						<div class="row mt-5">
							<div class="col-12">
								<div class="card shadow">
									<div class="card-header bg-transparent border-0">
										<div>
											<h3 class="card-title mb-0">Master Orders Management</h3>
										</div>
									</div>
									<div class="">
										<div class="grid-margin">
											<div class="">
												<div class="table-responsive">
													<table class="table card-table table-vcenter text-nowrap  align-items-center">
														<thead class="thead-light">
															<tr>
																<th>Id</th>
                                <th>MID</th>
																<th>Pickup Date</th>
																<th>Truck Id</th>
																<th>Trailer Id</th>
																<th>Carrier</th>
                                <th>Type</th>
                                <th>Delivery Date</th>
                                <th>Actions</th>
															</tr>
														</thead>
														<tbody>
                              <tr>
																<td>1</td>
																<td>Abc 1</td>
                                <td>22-12-22</td>
																<td>01</td>
																<td>03</td>
                                <td>California</td>
                                <td>inbound</td>
                                <td>22-12-23</td>
																<td class="text-nowrap"><a class="btn btn-app btn-primary" data-toggle="modal" data-target="#exampleModal3">
                                <i class="fa fa-edit"></i> 
                               </a>&nbsp;
                                <a class="btn btn-app btn-primary">
                                <i class="fa fa-trash"></i>
                              </a>
                              </td>
															</tr>

                               <tr>
																<td>1</td>
																<td>Abc 1</td>
                                <td>22-12-22</td>
																<td>02</td>
																<td>02</td>
                                <td>California</td>
                                <td>outbound</td>
                                <td>22-12-23</td>
																<td class="text-nowrap"><a class="btn btn-app btn-primary" data-toggle="modal" data-target="#exampleModal3">
                                <i class="fa fa-edit"></i> 
                               </a>&nbsp;
                                <a class="btn btn-app btn-primary">
                                <i class="fa fa-trash"></i>
                              </a>
                              </td>
															</tr>

                               <tr>
																<td>1</td>
																<td>Abc 1</td>
                                <td>22-12-22</td>
																<td>03</td>
																<td>01</td>
                                <td>California</td>
                                <td>inbound</td>
                                <td>22-12-23</td>
																<td class="text-nowrap"><a class="btn btn-app btn-primary" data-toggle="modal" data-target="#exampleModal3">
                                <i class="fa fa-edit"></i> 
                               </a>&nbsp;
                                <a class="btn btn-app btn-primary">
                                <i class="fa fa-trash"></i>
                              </a>
                              </td>
															</tr>

														</tbody>
													</table>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
				</div>

          <div class="modal fade" id="exampleModal3" tabindex="-1" role="dialog"  aria-hidden="true">
						<div class="modal-dialog" role="document">
							<div class="modal-content">
								<div class="modal-header">
									<h5 class="modal-title" id="example-Modal3">Edit Master Order</h5>
									<button type="button" class="close" data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div class="modal-body">
									<form>
										<div class="form-group">
											<input type="text" class="form-control" id="recipient-name" value="0123SDA">
                      <label for="recipient-name" class="form-control-label">MID:</label>
										</div>
                    
                    <div class="form-group">
											<input type="date" class="form-control" id="recipient-name" value="0123SDA">
                      <label for="recipient-name" class="form-control-label">Pickup Date:</label>
										</div>

                    <div class="form-group">
											<input type="text" class="form-control" id="recipient-name" value="#123">
                       <label for="recipient-name" class="form-control-label">Truck ID:</label>
										</div>

                    <div class="form-group">
											<input type="text" class="form-control" id="recipient-name" value="#123">
                      <label for="recipient-name" class="form-control-label">Trailer ID:</label>
										</div>

                      <div class="form-group">
											<input type="text" class="form-control" id="recipient-name" value="California">
                      	<label for="recipient-name" class="form-control-label">Carrier:</label>
										</div>

                      <div class="form-group">
											<input type="text" class="form-control" id="recipient-name" value="inbound">
                      	<label for="recipient-name" class="form-control-label">Type:</label>
										</div>

                    <div class="form-group">
											<input type="text" class="form-control" id="recipient-name" value="Beverly Hills">
                      	<label for="recipient-name" class="form-control-label">Address:</label>
										</div>
                      <div class="form-group">
											<input type="date" class="form-control" id="recipient-name" value="20-12-23">
                      	<label for="recipient-name" class="form-control-label">Delivery Date:</label>
										</div>
									</form>
								</div>
								<div class="modal-footer">
									<button type="button" class="btn btn-success" data-dismiss="modal">Close</button>
									<button type="button" class="btn btn-success">Update</button>
								</div>
							</div>
						</div>
					</div>
</template>
<script>
import { reactive, ref } from '@vue/reactivity';
import axios from "axios";
import { useToast } from "vue-toastification";
import MainHeader from "../../../core/header/index.vue";
import Sidebar from "../../../core/sidebar/index.vue";
export default {
    components: {
    MainHeader,
    Sidebar,
    },
    setup() {
        const toast = useToast();
        const weeks = ref([]);
        const bookings = ref([]);
        const booking = reactive([]);
        const tabHome = ref(true);
        const tabDoor = ref(false);
        const containers = ref([]);
        const vehicles_types = ref([]);
        const other_vehicles = ref([]);
        const partners = ref([]);
        const drivers = ref([]);
        const terminals = ref([]);
        const errors   = ref();


      // onMounted(() => {
      //     getBookingData();
      //     getWeeks();
      // })

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
                   other_vehicles.value = response.data;
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
          other_vehicles,
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