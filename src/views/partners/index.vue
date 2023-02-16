<template>
  <main-header/>
  	<div class="container content-area">
						<div class="row mt-5">
							<div class="col-12">
								<div class="card shadow">
									<div class="card-header bg-transparent border-0">
										<div>
											<h3 class="card-title mb-1">Partners Management</h3>
                       <span>Show <select v-model="size" @change="changeSize">
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </select>
                      </span>
										</div>
                    <div class="card-options">
                       Search: <input type="text" class="form-control ml-2" v-model="search" @change="changeSize">&nbsp;
											<button type="button" class="btn btn-app btn-success mr-2 mt-1 mb-1" data-toggle="modal" data-target="#createEditPartner" data-backdrop="static" @click="addPartner"><i class="fe fe-plus mr-2"></i>add</button>
										</div>
									</div>
									<div class="">
										<div class="grid-margin">
                       <div class="dimmer active" v-if="isLoading">
                          <div class="lds-hourglass"></div>
                        </div>
											<div class="">
												<div class="table-responsive">
													<table class="table table-striped table-bordered text-nowrap w-100" id="partnersTable">
														<thead class="thead-light">
															<tr>
																<th>Id</th>
                                <th>Company</th>
																<th>Reg No</th>
																<th>Private Person</th>
																<th>Country</th>
																<th>Town/City</th>
                                <th>Postal Code</th>
                                <th>Address</th>
                                <th>Client Address</th>
                                <th>Actions</th>
															</tr>
														</thead>
														<tbody>
                              <tr v-if="partners.length > 0" v-for="(partner,index) in partners" :key="index">
																<td>{{partner.ID}}</td>
																<td>{{partner.CompanyName}}</td>
                                <td>{{partner.RegNo}}</td>
																<td>{{partner.PrivatePerson}}</td>
																<td>{{partner.Country}}</td>
                                <td>{{partner.State}}</td>
                                <td>{{partner.PostalCode}}</td>
                                <td>{{partner.CompanyAddress}}</td>
                                <td>{{partner.ClientAddress}}</td>
																<td class="text-nowrap"><a class="btn btn-app btn-primary" data-toggle="modal" data-backdrop="static" data-target="#createEditPartner" @click="show(partner.ID)">
                                <i class="fa fa-edit"></i> 
                              </a>&nbsp;
                                <a class="btn btn-app btn-primary" @click="deletee(partner.ID)">
                                <i class="fa fa-trash"></i>
                              </a>
                              </td>
															</tr>
                              <tr v-else>
                                <td colspan="10" align="center">No Records Found</td>
                              </tr>
														</tbody>
													</table>
                            <ul class="pagination" v-if="paginations >= 1">
                            <li class="page-item page-prev disabled">
                              <a class="page-link" @click="onPageChange(currentPage -1)">Prev</a>
                            </li>
                            <li v-for="(paginate,index) in paginations" :key="index" :id="index"><a class="page-link" @click="onPageChange(paginate)">{{paginate}}</a></li>
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

          <div class="modal fade" id="createEditPartner" tabindex="-1" role="dialog"  aria-hidden="true">
						<div class="modal-dialog" role="document">
							<div class="modal-content">
								<div class="modal-header">
									<h5 class="modal-title" id="example-Modal3">{{isEditable ? 'Edit Partner' : 'Add New Partner'}}</h5>
									<button type="button" class="close" data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div class="modal-body">
									<form @submit.prevent="createOrUpdate(isEditable ? 'update' : 'create')">
										<div class="form-group">
											<input type="text" class="form-control" id="recipient-name" v-model="partner.CompanyName">
                      	<label for="recipient-name" class="form-control-label">Name:</label>
										</div>
                    
                    <div class="form-group">
											<input type="text" class="form-control" id="recipient-name" v-model="partner.RegNo">
                      	<label for="recipient-name" class="form-control-label">Reg No:</label>
										</div>

                    <div class="form-group">
											<input type="text" class="form-control" id="recipient-name" v-model="partner.PrivatePerson">
                      <label for="recipient-name" class="form-control-label">PRIVATE PERSON:</label>
										</div>
                    
                     <div class="form-group">
											<select name="" id="" class="form-control" v-model="partner.CountryId" @change="getStates(1)">
                        <option v-for="(county,index) in countries" :key="index" :value="county.ID">{{county.Name}}</option>
                      </select>
                      <label class="form-control-label">COUNTRY:</label>
										</div>

                     <div class="form-group">
											<select name="" id="" class="form-control" v-model="partner.StateId">
                        <option v-for="(state,index) in states" :key="index" :value="state.ID">{{state.Name}}</option>
                      </select>
                      <label class="form-control-label">STATE / CITY:</label>
										</div>

                      <div class="form-group">
											<input type="text" class="form-control" id="recipient-name" v-model="partner.PostalCode">
                      <label for="recipient-name" class="form-control-label">Postal Code:</label>
										</div>

                    <div class="form-group">
											<input type="text" class="form-control" id="recipient-name" v-model="partner.CompanyAddress">
                      	<label for="recipient-name" class="form-control-label">Address:</label>
										</div>

                    <div class="form-group">
											<input type="text" class="form-control" id="recipient-name" v-model="partner.ClientAddress">
                      	<label for="recipient-name" class="form-control-label">Client Address:</label>
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
import {onMounted} from "vue";
import { useToast } from "vue-toastification";
import MainHeader from "../../core/header/index.vue";
import Sidebar from "../../core/sidebar/index.vue";
import ApiResource from "../../store/actions";
export default {
    components: {
    MainHeader,
    Sidebar
    },
  setup() {
        const toast = useToast();
        const partners = ref([]);
        const partner = ref({});
        const countries = ref([]);
        const states = ref([]);
        const cities = ref([]);
        const size   = ref(10);
        const search   = ref(" ");
        const paginations = ref();
        const isEditable  = ref(false);
        const isLoading   = ref(false)
        const responseData = ref(); 
        const totalRecords = ref(0);
        const currentPage = ref(0);

        onMounted(() => {
            fetch();
        })

       const filterData = () => {
        let d = responseData.value.slice(currentPage.value * size.value, (currentPage.value + 1) * size.value )
        partners.value  = d;
       }
       const changeSize = () => {
          currentPage.value = 0;
          filterData();
          paginations.value = (Math.round(totalRecords.value/size.value));
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

       const fetch = async()=>{
           isLoading.value = true;
         try{
            var params = {
              route:'Companies'
            }
            let response = await ApiResource.getAll(params)
            if(response.data){
                totalRecords.value = response.data.total; 
                responseData.value = response.data.companyresp;
                changeSize();
            }
           }catch(error){
                console.log(error)
          }finally{
            isLoading.value = false;
          }
       } 

       const getCountries = async() =>{
           try{
            var params = {
              route:'Common/getCountries'
            }
            var response = await ApiResource.getAll(params)
              if(response.data){
                 countries.value = response.data.country
                }  
              }catch(error){
                console.log(error)
              }
       }
        const getStates = async(id) =>{
            try{
              var params = {
                route:'Common/getState?CountryId='+id
              }
              var response = await ApiResource.getAll(params)
                if(response.data){
                  states.value = response.data.common
                  }  
                }catch(error){
                  console.log(error)
                }
        }
        const getCities = async(id) =>{
           try{
            var params = {
              route:'Common/GetCities?CountryId'+id
            }
            var response = await ApiResource.getAll(params)
              if(response.data){
                 cities.value = response.data.common
                }  
              }catch(error){
                console.log(error)
              }
       }
       
      const addPartner = async()=>{
        partner.value = {};
        isEditable.value = false;
        getCountries();
      }
       const show = async(id) =>{
          isEditable.value = true;
           try{
            var params = {
              route:'Companies/'+id
            }
            var response = await ApiResource.get(params)
              if(response.data){
                 partner.value = response.data
                 getCountries();
                }  
              }catch(error){
                console.log(error)
              }
       }

        const createOrUpdate = async(action) =>{
           try{
            var params = {
              route:isEditable.value ? 'Companies/PutCompany' : 'Companies/PostCompanies',
              data:partner.value
            }
             var response = (action == 'create') ? await ApiResource.store(params) : await ApiResource.update(params)
            if(response.data){
                partner.value = {};
                fetch();
                $('#createEditPartner').css("display","none");
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

        const deletee = async(id) =>{
           isLoading.value = true
           $(".table-responsive").css("display","none");
           try{
            var params = {
              route:'Companies/'+id
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
                isLoading.value = false
                $(".table-responsive").css("display","block");
              }
       }


       return{
          partners,
          partner,
          countries,
          states,
          isEditable,
          size,
          paginations,
          search,
          isLoading,
          currentPage,
          fetch,
          onPageChange,
          changeSize,
          createOrUpdate,
          getStates,
          addPartner,
          show,
          deletee
       }
    }  
}
</script>