<template>
  <main-header/>
  	<div class="container content-area">
						<div class="row mt-5">
							<div class="col-12">
								<div class="card shadow">
									<div class="card-header bg-transparent border-0">
										<div class="header-options">
											<h3 class="card-title mb-1">Vehicles Management</h3>
                       <span>Show <select v-model="size" @change="changeSize">
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </select>
                      </span>
										</div>
                      <div class="card-options">
                        Search: <input type="text" class="form-control ml-2" v-model="search" @keyup="searchData">&nbsp;
											<button type="button" class="btn btn-app btn-success mr-2 mt-1 mb-1" data-toggle="modal" data-backdrop="static" data-target="#editVehicle" @click="addVehicle"><i class="fe fe-plus mr-2"></i>add</button>
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
																<th>Id</th>
                               	<th>Name</th>
																<th>Number</th>
																<th>Type</th>
																<th>Description</th>
																<th>Action</th>
															</tr>
                            </thead>
                            	<tbody>
															<tr v-for="(vehicle,index) in vehicles" :key="index">
																<td>{{vehicle.ID}}</td>
																<td class="text-sm font-weight-600">{{vehicle.VehicleName}}</td>
                                <td>{{vehicle.RegNumber}}</td>
																<td>{{vehicle.VehicleType}}</td>
																<td>{{vehicle.Description}}</td>
																<td class="text-nowrap"><a class="btn btn-app btn-primary" data-toggle="modal" data-backdrop="static" data-target="#editVehicle" @click="show(vehicle.ID)">
                                <i class="fa fa-edit"></i> 
                                </a>&nbsp;
                                <a class="btn btn-app btn-primary" @click="deletee(vehicle.ID)">
                                <i class="fa fa-trash"></i>
                              </a>
                              </td>
															</tr>
														</tbody>
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

        <div class="modal fade" id="editVehicle" tabindex="-1" role="dialog"  aria-hidden="true">
						<div class="modal-dialog" role="document">
							<div class="modal-content">
								<div class="modal-header">
									<h5 class="modal-title" id="example-Modal3">{{isEditable ? 'Edit Vehicle' : 'Add Vehicle'}}</h5>
									<button type="button" class="close" data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div class="modal-body">
									<form @submit.prevent="createOrUpdate(isEditable ? 'update' : 'create')">
										<div class="form-group">
											<input type="text" class="form-control" id="recipient-name" v-model="vehicle.VehicleName">
                      <label for="recipient-name" class="form-control-label">Name:</label>
										</div>
                    <div class="form-group">
											<input type="text" class="form-control" id="recipient-name"  v-model="vehicle.RegNumber">
                      	<label for="recipient-name" class="form-control-label">Number:</label>
										</div>
                      <div class="form-group">
											<select name="" id="" class="form-control" v-model="vehicle.VehicletypeId">
                        <option v-for="(vtype,index) in vehicleTypes" :key="index" :value="vtype.ID">{{vtype.Name}}</option>
                      </select>
                      <label class="form-control-label">Type</label>
										</div>
                    <div class="form-group">
											<input type="text" class="form-control" id="recipient-name"  v-model="vehicle.Description">
                      <label for="recipient-name" class="form-control-label">Description:</label>
										</div>
                    <div class="modal-footer">
									<button type="button" class="btn btn-success" data-dismiss="modal">Close</button>
									<button type="submit" class="btn btn-success">{{isEditable ? 'Update' : 'Add'}}</button>
								   </div>
									</form>
								</div>
							</div>
						</div>
				</div>
</template>
<script>
import { ref } from '@vue/reactivity';
import { onMounted } from "vue";
import { useToast } from "vue-toastification";
import MainHeader from "../../core/header/index.vue";
import Sidebar from "../../core/sidebar/index.vue";
import ApiResource from "../../store/actions";
import $ from "jquery";
export default {
    components: {
    MainHeader,
    Sidebar
    },
    setup() {
        const toast = useToast();
        const size   = ref(10);
        const search   = ref(" ");
        const vehicles = ref([]);
        const vehicleTypes = ref([]);
        const vehicle  = ref({});
        const isEditable  = ref(false);
        const paginations = ref();
        const isLoading   = ref(false)
        const responseData = ref(); 
        const totalRecords = ref(0);
        const currentPage = ref(0);
        onMounted(() => {
            fetch();
            fetchVehicleTypes();
        })
       const filterData = () => {
        let d = responseData.value.slice(currentPage.value * size.value, (currentPage.value + 1) * size.value )
        vehicles.value  = d;
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
              route:'Vehicles'
            }
            var response = await ApiResource.getAll(params)
              if(response.data){      
                 totalRecords.value = response.data.total; 
                 responseData.value = response.data.vehicle;
                 changeSize();
                }  
              }catch(error){
                console.log(error)
            }
            finally{
              isLoading.value = false
            }
       }
      const fetchVehicleTypes = async() =>{
           try{
            var params = {
              route:'Common/GetVehicleType'
            }
            var response = await ApiResource.getAll(params)
              if(response.data){
                 vehicleTypes.value = response.data.common
                }  
              }catch(error){
                console.log(error)
              }
       }

      const addVehicle = async()=>{
        vehicle.value = {};
        isEditable.value = false;
      }
      const createOrUpdate = async(action) =>{
           try{
            var params = {
              route:isEditable.value ? 'Vehicles' : 'Vehicles/PostVehicles',
              data:vehicle.value
            }
             var response = (action == 'create') ? await ApiResource.store(params) : await ApiResource.update(params)
            if(response.data){
                fetch();
                vehicle.value = {};
                $('#editVehicle').css("display","none");
                $("body").removeClass("modal-open");
                $('.modal-backdrop').remove();
                toast.success(response.data,{
                    timeout: 2000
                });
              }  
              }catch(error){
                console.log(error)
              }
        }  
       const show = async(id) =>{
            isEditable.value = true;
           try{
            var params = {
              route:'Vehicles/'+id
            }
            var response = await ApiResource.get(params)
              if(response.data){
                 vehicle.value = response.data
                }  
              }catch(error){
                console.log(error)
              }
       }

        const deletee = async(id) =>{
          isLoading.value = true
          $(".table-responsive").css("display","none");
           try{
            var params = {
              route:'Vehicles/'+id
            }
            var response = await ApiResource.delete(params)
              if(response){
                  fetch();
                   toast.success(response.data,{
                        timeout: 2000
                    });
                }  
              }catch(error){
                console.log(error)
              }finally{
                $(".table-responsive").css("display","block");
                isLoading.value = false;
              }
       }

       return{
          vehicles,
          vehicle,
          vehicleTypes,
          isEditable,
          size,
          paginations,
          search,
          isLoading,
          currentPage,
          addVehicle,
          createOrUpdate,
          show,
          deletee,
          fetch,
          changeSize,
          searchData,
          onPageChange
       }
    }
}
</script>