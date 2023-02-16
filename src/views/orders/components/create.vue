<template>
    <div>
        <div class="modal fade" id="order-form" tabindex="-1" role="dialog" aria-hidden="true">
            
            <div class="modal-dialog custom" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeModal">
                                <span aria-hidden="true">&times;</span>
                            </button>
                    </div>
                      <div class="panel panel-default">
                         <div class="tab-menu-heading">
                            <div class="tabs-menu">
                                <ul class="nav panel-tabs">
                                 <li><a href="#editOrder" class="active" data-toggle="tab">Edit Order</a></li>
                                 <li><a href="#cmr" data-toggle="tab">CMR</a></li>                                                        
                               </ul>
                           </div>
                         </div>
                           <div class="panel-body tabs-menu-body">
                                <div class="tab-content">
                                    <div class="tab-pane active" id="editOrder">
                                       <div class="modal-body">
                                           <div class="dimmer active" v-if="isLoading">
                                            <div class="lds-hourglass"></div>
                                           </div>
                                          <div class="panel panel-primary">
                                            <form @submit.prevent="createOrUpdate(cmr.isOrderEditable ? 'update' : 'create')" enctype="multipart/form-data">
                                                <div class="row">
                                                    <div class="col-md-3 feild">
                                                        <div class="form-group">
                                                            <input type="text" class="form-control" readonly :value="cmr.isOrderEditable ? cmr.order.Id : newOrderId" />
                                                            <label class="form-control-label">ID</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3 feild">
                                                        <div class="form-group">
                                                            <input type="text" class="form-control" v-model="cmr.order.IndexRegister" />
                                                            <label class="form-control-label">Index Register</label>
                                                        </div>
                                                    </div>

                                                    <div class="col-md-3 feild">
                                                        <div class="form-group">
                                                            <select name="" id="" class="form-control" v-model="cmr.order.ShipmentOrderTypeId">
                                                                <option v-for="(odrtype,index) in orderTypes" :key="index" :value="odrtype.ID">{{odrtype.Name}}</option>
                                                            </select>
                                                            <label class="form-control-label">Type</label>
                                                        </div>
                                                    </div>

                                                    <div class="col-md-3 feild">
                                                        <div class="form-group">
                                                            <select name="" id="" class="form-control" v-model="cmr.order.ShipmentOrderStatusId">
                                                                <option v-for="(odrstatus,index) in orderStatus" :key="index" :value="odrstatus.ID">{{odrstatus.Name}}</option>
                                                            </select>
                                                            <label class="form-control-label">Status</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row seprater">
                                                    <div class="col-md-6">
                                                        <div class="expanel expanel-default">
                                                            <div class="expanel-heading clearfix align-items-center">
                                                                Shipper
                                                                <div class="float-right">
                                                                    <button class="btn btn-sm btn-default" type="button" data-toggle="collapse" data-target="#shipper" aria-expanded="false" aria-controls="shipper"><i class="fa fa-bars"></i></button>
                                                                </div>
                                                            </div>
                                                            <div class="expanel-body collapse show" id="shipper">
                                                                <div class="form-group">
                                                                    <div class="col-md-12 feild">
                                                                        <select id="shipper" name="shipper" class="form-control" v-model="cmr.order.ShipperCompanyId">
                                                                            <option v-for="(company,index) in companies" :key="index" :value="company.ID">{{company.CompanyName}}</option>
                                                                        </select>
                                                                    </div>
                                                                    <p id="add-new-partner" data-toggle="modal" data-target="#addNewPartner" data-backdrop="static"><i class="ion-plus" data-toggle="tooltip" title="" data-original-title="ion-plus"></i></p>
                                                                    <label class="form-control-label">Shipper</label>
                                                                </div>
                                                                <div class="col-md-3 feild">
                                                                    <div class="form-group">
                                                                        <select id="shipper" name="shipper" class="form-control" v-model="cmr.order.ShipperCountryId" @change="getCities('Shipper')">
                                                                            <option v-for="(country,index) in countries" :key="index" :value="country.ID">{{country.Name}}</option>
                                                                        </select>
                                                                        <label class="form-control-label">Country</label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-3 feild">
                                                                    <div class="form-group">
                                                                        <select id="shipper" name="shipper" class="form-control" v-model="cmr.order.ShipperCityId">
                                                                            <option v-for="(city,index) in cities" :key="index" :value="city.ID">{{city.Name}}</option>
                                                                        </select>

                                                                        <label class="form-control-label">City</label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-3 feild">
                                                                    <div class="form-group">
                                                                        <input type="text" class="form-control" v-model="cmr.order.ShipperIndex" />
                                                                        <label class="form-control-label">Index</label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-3 feild">
                                                                    <div class="form-group">
                                                                        <input type="text" class="form-control" v-model="cmr.order.ShipperAddress" />
                                                                        <label class="form-control-label">Address</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="expanel expanel-default">
                                                            <div class="expanel-heading clearfix align-items-center">
                                                                Consignee
                                                                <div class="float-right">
                                                                    <button class="btn btn-sm btn-default" type="button" data-toggle="collapse" data-target="#consignee" aria-expanded="false" aria-controls="consignee"><i class="fa fa-bars"></i></button>
                                                                </div>
                                                            </div>
                                                            <div class="expanel-body collapse show" id="consignee">
                                                                <div class="form-group">
                                                                    <select id="shipper" name="shipper" class="form-control" v-model="cmr.order.ConsigneeCompanyId">
                                                                        <option v-for="(company,index) in companies" :key="index" :value="company.ID">{{company.CompanyName}}</option>
                                                                    </select>
                                                                    <label class="form-control-label">Consignee</label>
                                                                </div>
                                                                <div class="col-md-3 feild">
                                                                    <div class="form-group">
                                                                        <select id="shipper" name="shipper" class="form-control" v-model="cmr.order.ConsigneeCountryId" @click="getCities('Consignee')">
                                                                            <option v-for="(country,index) in countries" :key="index" :value="country.ID">{{country.Name}}</option>
                                                                        </select>
                                                                        <label class="form-control-label">Country</label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-3 feild">
                                                                    <div class="form-group">
                                                                        <select id="shipper" name="shipper" class="form-control" v-model="cmr.order.ConsigneeCityId">
                                                                            <option v-for="(city,index) in cities" :key="index" :value="city.ID">{{city.Name}}</option>
                                                                        </select>
                                                                        <label class="form-control-label">City</label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-3 feild">
                                                                    <div class="form-group">
                                                                        <input type="number" class="form-control" v-model="cmr.order.ConsigneeIndex" />
                                                                        <label class="form-control-label">Index</label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-3 feild">
                                                                    <div class="form-group">
                                                                        <input type="text" class="form-control" v-model="cmr.order.ConsigneeAddress" />
                                                                        <label class="form-control-label">Address</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row seprater">
                                                    <div class="col-md-6 pickup-dilavey">
                                                        <input type="checkbox" v-model="cmr.order.IsConsigneeSameAsPickup" class="mt-3 mb-3" /> Check this box, if consignee is the same as pickup
                                                        <div class="expanel expanel-default">
                                                            <div class="expanel-heading clearfix align-items-center">
                                                                Pickup
                                                                <div class="float-right">
                                                                    <button class="btn btn-sm btn-default" type="button" data-toggle="collapse" data-target="#pickup" aria-expanded="false" aria-controls="pickup"><i class="fa fa-bars"></i></button>
                                                                </div>
                                                            </div>
                                                            <div class="expanel-body collapse" id="pickup">
                                                                <div class="form-group">
                                                                    <select id="shipper" name="shipper" class="form-control" v-model="cmr.order.PickupCompanyId" :disabled="cmr.order.IsConsigneeSameAsPickup ? true : false">
                                                                        <option v-for="(company,index) in companies" :key="index" :value="company.ID">{{company.CompanyName}}</option>
                                                                    </select>
                                                                    <label class="form-control-label">Company</label>
                                                                </div>

                                                                <div class="col-md-4 feild">
                                                                    <div class="form-group">
                                                                        <input type="date" class="form-control" v-model="cmr.order.PickupDateTime" :disabled="cmr.order.IsConsigneeSameAsPickup ? true : false" />
                                                                        <label class="form-control-label">Date</label>
                                                                    </div>
                                                                </div>

                                                                <div class="col-md-4 feild">
                                                                    <div class="form-group">
                                                                        <input type="time" class="form-control" v-model="cmr.order.PickupTimePromise" :disabled="cmr.order.IsConsigneeSameAsPickup ? true : false" />
                                                                        <label class="form-control-label">Time</label>
                                                                    </div>
                                                                </div>

                                                                <div class="col-md-4 feild">
                                                                    <div class="form-group">
                                                                        <input type="time" class="form-control" v-model="cmr.order.PickupTimePromise" :disabled="cmr.order.IsConsigneeSameAsPickup ? true : false" />
                                                                        <label class="form-control-label">Time Promise</label>
                                                                    </div>
                                                                </div>

                                                                <div class="col-md-3 feild">
                                                                    <div class="form-group">
                                                                        <select id="shipper" name="shipper" class="form-control" v-model="cmr.order.PickupCountryId" @change="getCities('Pickup')" :disabled="cmr.order.IsConsigneeSameAsPickup ? true : false">
                                                                            <option v-for="(country,index) in countries" :key="index" :value="country.ID">{{country.Name}}</option>
                                                                        </select>
                                                                        <label class="form-control-label">Country</label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-3 feild">
                                                                    <div class="form-group">
                                                                        <select id="shipper" name="shipper" class="form-control" v-model="cmr.order.PickupCityId" :disabled="cmr.order.IsConsigneeSameAsPickup ? true : false">
                                                                            <option v-for="(city,index) in cities" :key="index" :value="city.ID">{{city.Name}}</option>
                                                                        </select>
                                                                        <label class="form-control-label">City</label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-3 feild">
                                                                    <div class="form-group">
                                                                        <input type="number" class="form-control" v-model="cmr.order.PickupIndex" :disabled="cmr.order.IsConsigneeSameAsPickup ? true : false" />
                                                                        <label class="form-control-label">Index</label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-3 feild">
                                                                    <div class="form-group">
                                                                        <input type="text" class="form-control" v-model="cmr.order.PickupAddress" :disabled="cmr.order.IsConsigneeSameAsPickup ? true : false" />
                                                                        <label class="form-control-label">Address</label>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group">
                                                                    <input type="text" class="form-control" v-model="cmr.order.PickupComment" :disabled="cmr.order.IsConsigneeSameAsPickup ? true : false" />
                                                                    <label class="form-control-label">Comment</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 pickup-dilavey">
                                                        <input type="checkbox" v-model="cmr.order.IsConsigneeSameAsDelivery" class="mt-3 mb-3" /> Check this box, if consignee is the same as delivery
                                                        <div class="expanel expanel-default">
                                                            <div class="expanel-heading clearfix align-items-center">
                                                                Delivery
                                                                <div class="float-right">
                                                                    <button class="btn btn-sm btn-default" type="button" data-toggle="collapse" data-target="#delivery" aria-expanded="false" aria-controls="delivery"><i class="fa fa-bars"></i></button>
                                                                </div>
                                                            </div>
                                                            <div class="expanel-body collapse" id="delivery">
                                                                <div class="form-group">
                                                                    <select id="shipper" name="shipper" class="form-control" v-model="cmr.order.DeliveryCompanyId" :disabled="cmr.order.IsConsigneeSameAsDelivery ? true : false">
                                                                        <option v-for="(company,index) in companies" :key="index" :value="company.ID">{{company.CompanyName}}</option>
                                                                    </select>
                                                                    <label class="form-control-label">Company</label>
                                                                </div>

                                                                <div class="col-md-4 feild">
                                                                    <div class="form-group">
                                                                        <input type="date" class="form-control" v-model="cmr.order.DeliveryDateTime" :disabled="cmr.order.IsConsigneeSameAsDelivery ? true : false" />
                                                                        <label class="form-control-label">Date</label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4 feild">
                                                                    <div class="form-group">
                                                                        <input type="time" class="form-control" v-model="cmr.order.DeliveryTimePromise" :disabled="cmr.order.IsConsigneeSameAsDelivery ? true : false" />
                                                                        <label class="form-control-label">Time</label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4 feild">
                                                                    <div class="form-group">
                                                                        <input type="time" class="form-control" v-model="cmr.order.DeliveryTimePromise" :disabled="cmr.order.IsConsigneeSameAsDelivery ? true : false" />
                                                                        <label class="form-control-label">Time Promise</label>
                                                                    </div>
                                                                </div>

                                                                <div class="col-md-3 feild">
                                                                    <div class="form-group">
                                                                        <select id="shipper" name="shipper" class="form-control" v-model="cmr.order.DeliveryCountryId" @change="getCities('Delivery')" :disabled="cmr.order.IsConsigneeSameAsDelivery ? true : false">
                                                                            <option v-for="(country,index) in countries" :key="index" :value="country.ID">{{country.Name}}</option>
                                                                        </select>
                                                                        <label class="form-control-label">Country</label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-3 feild">
                                                                    <div class="form-group">
                                                                        <select id="shipper" name="shipper" class="form-control" v-model="cmr.order.DeliveryCityId" :disabled="cmr.order.IsConsigneeSameAsDelivery ? true : false">
                                                                            <option v-for="(city,index) in cities" :key="index" :value="city.ID">{{city.Name}}</option>
                                                                        </select>
                                                                        <label class="form-control-label">City</label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-3 feild">
                                                                    <div class="form-group">
                                                                        <input type="number" class="form-control" v-model="cmr.order.DeliveryIndex" :disabled="cmr.order.IsConsigneeSameAsDelivery ? true : false" />
                                                                        <label class="form-control-label">Index</label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-3 feild">
                                                                    <div class="form-group">
                                                                        <input type="text" class="form-control" v-model="cmr.order.DeliveryAddress" :disabled="cmr.order.IsConsigneeSameAsDelivery ? true : false" />
                                                                        <label class="form-control-label">Address</label>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group">
                                                                    <input type="text" class="form-control" v-model="cmr.order.DeliveryComment" :disabled="cmr.order.IsConsigneeSameAsDelivery ? true : false" />
                                                                    <label class="form-control-label">Comment</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row seprater">
                                                    <div class="col-md-6">
                                                        <div class="expanel expanel-default">
                                                            <div class="expanel-heading clearfix align-items-center">
                                                                Customs
                                                                <div class="float-right">
                                                                    <button class="btn btn-sm btn-default" type="button" data-toggle="collapse" data-target="#customs" aria-expanded="false" aria-controls="customs"><i class="fa fa-bars"></i></button>
                                                                </div>
                                                            </div>
                                                            <div class="expanel-body collapse show" id="customs">
                                                                <div class="form-group">
                                                                      <input type="text" class="form-control" v-model="cmr.order.CustomsDescription" />
                                                                    <label class="form-control-label">Customs</label>
                                                                </div>

                                                                <div class="col-md-4 feild">
                                                                    <div class="form-group">
                                                                        <input type="date" class="form-control" v-model="cmr.order.CustomDateTime" />
                                                                        <label class="form-control-label">Date</label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4 feild">
                                                                    <div class="form-group">
                                                                        <input type="time" class="form-control" v-model="cmr.order.CustomTimePromise" />
                                                                        <label class="form-control-label">Time</label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4 feild">
                                                                    <div class="form-group">
                                                                        <input type="time" class="form-control" v-model="cmr.order.CustomTimePromise" />
                                                                        <label class="form-control-label">Time Promise</label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-3 feild">
                                                                    <div class="form-group">
                                                                        <select id="shipper" name="shipper" class="form-control" v-model="cmr.order.CustomCountryId" @change="getCities('Custom')">
                                                                            <option v-for="(country,index) in countries" :key="index" :value="country.ID">{{country.Name}}</option>
                                                                        </select>
                                                                        <label class="form-control-label">Country</label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-3 feild">
                                                                    <div class="form-group">
                                                                        <select id="shipper" name="shipper" class="form-control" v-model="cmr.order.CustomCityId">
                                                                            <option v-for="(city,index) in cities" :key="index" :value="city.ID">{{city.Name}}</option>
                                                                        </select>
                                                                        <label class="form-control-label">City</label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-3 feild">
                                                                    <div class="form-group">
                                                                        <input type="number" class="form-control" v-model="cmr.order.CustomIndex" />
                                                                        <label class="form-control-label">Index</label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-3 feild">
                                                                    <div class="form-group">
                                                                        <input type="text" class="form-control" v-model="cmr.order.CustomAddress" />
                                                                        <label class="form-control-label">Address</label>
                                                                    </div>
                                                                </div>

                                                                <div class="col-md-6 feild">
                                                                    <div class="form-group">
                                                                        <input type="text" class="form-control" v-model="cmr.order.CustomReference" />
                                                                        <label class="form-control-label">Reference</label>
                                                                    </div>
                                                                </div>

                                                                <div class="col-md-6 feild">
                                                                    <div class="form-group">
                                                                        <input type="text" class="form-control" v-model="cmr.order.CustomRemarks" />
                                                                        <label class="form-control-label">Remark</label>
                                                                    </div>
                                                                </div>

                                                                <div class="col-md-4 feild">
                                                                    <div class="form-group">
                                                                        <input type="text" class="form-control" v-model="cmr.order.CustomTerms" />
                                                                        <label class="form-control-label">Terms</label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4 feild">
                                                                    <div class="form-group">
                                                                        <input type="text" class="form-control" v-model="cmr.order.CustomSourceDoc">
                                                                        <label class="form-control-label">Source Doc</label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4 feild">
                                                                    <div class="form-group">
                                                                        <input type="text" class="form-control" v-model="cmr.order.CustomUser" />
                                                                        <label class="form-control-label">User</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="expanel expanel-default">
                                                            <div class="expanel-heading clearfix align-items-center">
                                                                Master
                                                                <div class="float-right">
                                                                    <button class="btn btn-sm btn-default" type="button" data-toggle="collapse" data-target="#master" aria-expanded="false" aria-controls="master"><i class="fa fa-bars"></i></button>
                                                                </div>
                                                            </div>
                                                            <div class="expanel-body collapse show" id="master">
                                                                <div class="col-md-4 feild">
                                                                    <div class="form-group">
                                                                        <input type="text" class="form-control" v-model="cmr.order.MasterMID" />
                                                                        <label class="form-control-label">MID</label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4 feild">
                                                                    <div class="form-group">
                                                                    <select id="shipper" name="shipper" class="form-control" v-model="cmr.order.MasterCompanyId">
                                                                        <option v-for="(company,index) in companies" :key="index" :value="company.ID">{{company.CompanyName}}</option>
                                                                    </select>
                                                                        <label class="form-control-label">Choose Carrier</label>
                                                                    </div>
                                                                </div>   
                                                            
                                                                <div class="col-md-4 feild">
                                                                    <div class="form-group">
                                                                    <select name="" id="" class="form-control" v-model="cmr.order.MasterVehicleTypeId">
                                                                        <option v-for="(vtype,index) in vehicles_types" :key="index" :value="vtype.ID">{{vtype.Name}}</option>
                                                                    </select>
                                                                        <label class="form-control-label">Master Vehcile Type</label>
                                                                    </div>
                                                                </div>

                                                                <div class="col-md-4 feild">
                                                                    <div class="form-group">
                                                                    <input type="text" class="form-control" v-model="cmr.order.MasterVehicleName"/>
                                                                        <label class="form-control-label">Vehicle Name</label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4 feild">
                                                                    <div class="form-group">
                                                                    <input type="text" class="form-control" v-model="cmr.order.MasterVehicleRegNo"/>
                                                                        <label class="form-control-label">Vehicle Registration No</label>
                                                                    </div>
                                                                </div>
                                                            
                                                                <div class="col-md-4 feild">
                                                                    <div class="form-group">
                                                                        <input type="text" class="form-control" v-model="cmr.order.MasterDriverName"/>
                                                                        <label class="form-control-label">Driver</label>
                                                                    </div>
                                                                </div>

                                                                <div class="col-md-4 feild">
                                                                    <div class="form-group">
                                                                    <select name="" id="" class="form-control" v-model="cmr.order.VehicleId">
                                                                        <option v-for="(vtype,index) in vehicles" :key="index" :value="vtype.ID">{{vtype.VehicleName}}</option>
                                                                    </select>
                                                                        <label class="form-control-label">Type</label>
                                                                    </div>
                                                                </div>

                                                                <div class="col-md-4 feild">
                                                                    <div class="form-group">
                                                                        <input type="date" class="form-control" v-model="cmr.order.MasterPickupDate"/>
                                                                        <label class="form-control-label">Pickup Date</label>
                                                                    </div>
                                                                </div>

                                                                <div class="col-md-4 feild">
                                                                    <div class="form-group">
                                                                        <input type="date" class="form-control" v-model="cmr.order.MasterDelivaryDate"/>
                                                                        <label class="form-control-label">Delivary Date</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-sm-12">
                                                        <div class="panel panel-default">
                                                            <div class="tab-menu-heading">
                                                                <div class="tabs-menu">
                                                                    <!-- Tabs -->
                                                                    <ul class="nav panel-tabs">
                                                                        <li><a href="#good" class="active" data-toggle="tab">Good</a></li>
                                                                        <li><a href="#cmrVersions" data-toggle="tab">CMR Versions</a></li>
                                                                        <li><a href="#profit" data-toggle="tab">Profit</a></li>
                                                                        <li><a href="#files" data-toggle="tab">Files</a></li>
                                                                        <li><a href="#customer" data-toggle="tab">Customer / Bill</a></li>
                                                                        <li><a href="#tracking" data-toggle="tab">Tracking</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div class="panel-body tabs-menu-body">
                                                                <div class="tab-content">
                                                                    <div class="tab-pane active" id="good">
                                                                        <div class="table-responsive">
                                                                            <table id="example" class="table table-striped table-bcmr.ordered text-nowrap w-100 dataTable no-footer" role="grid" aria-describedby="example_info">
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>
                                                                                            <input type="checkbox" name="" id="" > &nbsp; <i class="fa fa-ban" data-toggle="tooltip" @click="clearGoods" data-original-title="fa fa-ban"></i> &nbsp;
                                                                                            <i class="ion-plus" data-toggle="tooltip" :disabled="cmr.isReadOnly ? true : false"  @click="addGoods" title="" data-original-title="ion-plus"></i>
                                                                                        </th>
                                                                                        <th class="wd-15p sorting_asc" style="width: 10%;">Qty</th>
                                                                                        <th class="wd-15p sorting_asc" style="width: 10%;">Units</th>
                                                                                        <th class="wd-15p sorting_asc" style="width: 10%;">Kg Calc</th>
                                                                                        <th class="wd-15p sorting_asc" style="width: 10%;">LDM</th>
                                                                                        <th class="wd-15p sorting_asc" style="width: 10%;">Value</th>
                                                                                        <th class="wd-15p sorting_asc" style="width: 10%;">Description</th>
                                                                                        <th class="wd-15p sorting_asc" style="width: 10%;">Volume (m3)</th>
                                                                                        <th class="wd-15p sorting_asc" style="width: 10%;">Length (cm)</th>
                                                                                        <th class="wd-15p sorting_asc" style="width: 10%;">Width (cm)</th>
                                                                                        <th class="wd-15p sorting_asc" style="width: 10%;">Height (cm)</th>
                                                                                        <th></th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    <tr v-for="(goods,index) in cmr.order.goods" :key="index">
                                                                                        <td class="text-center"><input type="checkbox" v-model="goodIds"  :disabled="cmr.isReadOnly ? true : false"/></td>
                                                                                        <td><input type="number" minlength="1" class="form-control" id="row-1-age" v-model="goods.qty" :disabled="cmr.isReadOnly ? true : false"/></td>
                                                                                        <td>
                                                                                            <select class="form-control" v-model="goods.unitid" :disabled="cmr.isReadOnly ? true : false">
                                                                                                <option value="1">EUR</option>
                                                                                                <option value="2">EUR</option>
                                                                                                <option value="3">EUR</option>
                                                                                            </select>
                                                                                        </td>
                                                                                        <td><input type="number" minlength="1" class="form-control" id="row-1-age" v-model="goods.kgcalc"  :disabled="cmr.isReadOnly ? true : false"/></td>
                                                                                        <td><input type="number" minlength="1" class="form-control" id="row-1-position" v-model="goods.ldm"  :disabled="cmr.isReadOnly ? true : false"/></td>
                                                                                        <td><input type="number" minlength="1" class="form-control" id="row-1-position" v-model="goods.value" :disabled="cmr.isReadOnly ? true : false"/></td>
                                                                                        <td><input type="text" class="form-control" id="row-1-position" v-model="goods.description" :disabled="cmr.isReadOnly ? true : false"/></td>
                                                                                        <td><input type="number" class="form-control" id="row-1-position" v-model="goods.volumem3" :disabled="cmr.isReadOnly ? true : false"/></td>
                                                                                        <td><input type="number" class="form-control" id="row-1-position" v-model="goods.lengthcm" :disabled="cmr.isReadOnly ? true : false"/></td>
                                                                                        <td><input type="number" class="form-control" id="row-1-position" v-model="goods.widthcm" :disabled="cmr.isReadOnly ? true : false"/></td>
                                                                                        <td><input type="number" class="form-control" id="row-1-position" v-model="goods.heightcm" :disabled="cmr.isReadOnly ? true : false" /></td>
                                                                                        <td>
                                                                                            <a class="btn btn-app btn-success" :disabled="cmr.isReadOnly ? true : false" @click="removeGood(index)"><i class="fa fa-trash"></i></a>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                            <hr />
                                                                            <div class="row">
                                                                                <div class="col-sm-6 col-lg-6 col-xl-3">
                                                                                    <div class="card text-center">
                                                                                        <div class="card-body">
                                                                                            <img class="avatar avatar-md brround cover-image" :src="baseUrl+`/assets/images/dashboard.png`" />
                                                                                            <h4><input type="checkbox" class="mt-4" v-model="cmr.order.TempSensitive" :disabled="cmr.isReadOnly ? true : false"/> Temp. Sensitive</h4>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-sm-6 col-lg-6 col-xl-3">
                                                                                    <div class="card text-center">
                                                                                        <div class="card-body">
                                                                                            <img class="avatar avatar-md brround cover-image" :src="baseUrl+`/assets/images/adrr.png`" />
                                                                                            <h4><input type="checkbox" class="mt-4" v-model="cmr.order.ADRCarriage" :disabled="cmr.isReadOnly ? true : false"/> ADR Carriage</h4>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-sm-6 col-lg-6 col-xl-3">
                                                                                    <div class="card text-center">
                                                                                        <div class="card-body">
                                                                                            <img class="avatar avatar-md brround cover-image" :src="baseUrl+`/assets/images/handle.png`" />
                                                                                            <h4><input type="checkbox" class="mt-4" v-model="cmr.order.FargileCarriage" :disabled="cmr.isReadOnly ? true : false"/> Fargile Carriage</h4>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div class="tab-pane" id="cmrVersions">
                                                                                        <div class="table-responsive">
                                                                                            <table class="table card-table table-vcenter text-nowrap">
                                                                                                <thead>
                                                                                                    <tr>
                                                                                                        <th><input type="checkbox" name="" id="" /></th>
                                                                                                        <th>Version nr</th>
                                                                                                        <th>Date / Time</th>
                                                                                                        <th>Created By</th>
                                                                                                        <th>Download</th>
                                                                                                        <th></th>
                                                                                                    </tr>
                                                                                                </thead>
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td><input type="checkbox" name="" id="" /></td>
                                                                                                        <td>Version 1</td>
                                                                                                        <td>27.11.2022 / 10:55</td>
                                                                                                        <td>Jaan Saan</td>
                                                                                                        <td><a href="#" class="btn btn-success">Download</a></td>
                                                                                                        <td><i class="fa fa-trash" aria-hidden="true"></i></td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td><input type="checkbox" name="" id="" /></td>
                                                                                                        <td>Version 2</td>
                                                                                                        <td>27.11.2022 / 10:55</td>
                                                                                                        <td>John Simth</td>
                                                                                                        <td><a href="#" class="btn btn-success">Download</a></td>
                                                                                                        <td><i class="fa fa-trash" aria-hidden="true"></i></td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td><input type="checkbox" name="" id="" /></td>
                                                                                                        <td>Version 3</td>
                                                                                                        <td>27.11.2022 / 10:55</td>
                                                                                                        <td>Jaan Saan</td>
                                                                                                        <td><a href="#" class="btn btn-success">Download</a></td>
                                                                                                        <td><i class="fa fa-trash" aria-hidden="true"></i></td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td colspan="7"><i class="fa fa-trash" aria-hidden="true"></i></td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </div>
                                                                    </div>

                                                                <div class="tab-pane" id="profit">
                                                                        <button type="button" class="btn btn-default pb-2" :disabled="cmr.isReadOnly ? true : false" @click="addRevenue"><i class="fe fe-plus mr-2"></i>Add</button>
                                                                        <p><strong>Revenue</strong></p>
                                                                        <table class="table text-nowrap">
                                                                            <thead class="thead-light">
                                                                                <tr>
                                                                                    <th>Code</th>
                                                                                    <th>Price</th>
                                                                                    <th>Qty</th>
                                                                                    <th>Sum</th>
                                                                                    <th>Value</th>
                                                                                    <th>Currency</th>
                                                                                    <th>Description</th>
                                                                                    <th>Date</th>
                                                                                    <th>Carrier</th>
                                                                                    <th>Country</th>
                                                                                    <th>Transport</th>
                                                                                    <th>Invoice</th>
                                                                                    <th>Action</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr v-for="(revenue,index) in cmr.order.profitrevenue" :key="index">
                                                                                    <td><input type="text" class="form-control" v-model="revenue.Code" :disabled="cmr.isReadOnly ? true : false"/></td>
                                                                                    <td><input type="number" minlength="1" class="form-control" v-model="revenue.Price" :disabled="cmr.isReadOnly ? true : false"/></td>
                                                                                    <td><input type="number" minlength="1" class="form-control" v-model="revenue.Qty" :disabled="cmr.isReadOnly ? true : false"/></td>
                                                                                    <td><input type="number" minlength="1" class="form-control" v-model="revenue.Sum" :disabled="cmr.isReadOnly ? true : false"/></td>
                                                                                    <td><input type="number" minlength="1" class="form-control" v-model="revenue.Value" :disabled="cmr.isReadOnly ? true : false"/></td>
                                                                                    <td><input type="text" class="form-control" v-model="revenue.Currency" :disabled="cmr.isReadOnly ? true : false"/></td>
                                                                                    <td><input type="text" class="form-control" v-model="revenue.Description" :disabled="cmr.isReadOnly ? true : false"/></td>
                                                                                    <td><input type="date" class="form-control" v-model="revenue.Date" :disabled="cmr.isReadOnly ? true : false"/></td>
                                                                                    <td><input type="text" class="form-control" v-model="revenue.Carrier" :disabled="cmr.isReadOnly ? true : false"/></td>
                                                                                    <td><input type="text" class="form-control" v-model="revenue.Country" :disabled="cmr.isReadOnly ? true : false"/></td>
                                                                                    <td><input type="text" class="form-control" v-model="revenue.Transport" :disabled="cmr.isReadOnly ? true : false"/></td>
                                                                                    <td><input type="text" class="form-control" v-model="revenue.Invoice" :disabled="cmr.isReadOnly ? true : false"/></td>
                                                                                    <td>
                                                                                        <a class="btn btn-app btn-success" :disabled="cmr.isReadOnly ? true : false" @click="removeRevenue(index)"> <i class="fa fa-trash"></i></a>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                        <hr />
                                                                        <button type="button" class="btn btn-default pb-2" @click="addExpense" :disabled="cmr.isReadOnly ? true : false"><i class="fe fe-plus mr-2"></i>Add</button>
                                                                        <p><strong>Expense</strong></p>
                                                                        <table class="table text-nowrap">
                                                                            <thead class="thead-light">
                                                                                <tr>
                                                                                    <th>Code</th>
                                                                                    <th>Price</th>
                                                                                    <th>Qty</th>
                                                                                    <th>Sum</th>
                                                                                    <th>Value</th>
                                                                                    <th>Currency</th>
                                                                                    <th>Description</th>
                                                                                    <th>Date</th>
                                                                                    <th>Carrier</th>
                                                                                    <th>Country</th>
                                                                                    <th>Transport</th>
                                                                                    <th>Invoice</th>
                                                                                    <th>Action</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr v-for="(expense,index) in cmr.order.profitexpense" :key="index">
                                                                                    <td><input type="text" class="form-control" v-model="expense.ECode" :disabled="cmr.isReadOnly ? true : false"/></td>
                                                                                    <td><input type="number" minlength="1" class="form-control" v-model="expense.EPrice" :disabled="cmr.isReadOnly ? true : false"/></td>
                                                                                    <td><input type="number" minlength="1" class="form-control" v-model="expense.EQty"  :disabled="cmr.isReadOnly ? true : false"/></td>
                                                                                    <td><input type="number" minlength="1" class="form-control" v-model="expense.ESum" :disabled="cmr.isReadOnly ? true : false"/></td>
                                                                                    <td><input type="number" minlength="1" class="form-control" v-model="expense.EValue" :disabled="cmr.isReadOnly ? true : false"/></td>
                                                                                    <td><input type="text" class="form-control" v-model="expense.ECurrency" :disabled="cmr.isReadOnly ? true : false"/></td>
                                                                                    <td><input type="text" class="form-control" v-model="expense.EDescription" :disabled="cmr.isReadOnly ? true : false"/></td>
                                                                                    <td><input type="date" class="form-control" v-model="expense.EDate" :disabled="cmr.isReadOnly ? true : false"/></td>
                                                                                    <td><input type="text" class="form-control" v-model="expense.ECarrier" :disabled="cmr.isReadOnly ? true : false"/></td>
                                                                                    <td><input type="text" class="form-control" v-model="expense.ECountry" :disabled="cmr.isReadOnly ? true : false"/></td>
                                                                                    <td><input type="text" class="form-control" v-model="expense.ETransport" :disabled="cmr.isReadOnly ? true : false"/></td>
                                                                                    <td><input type="text" class="form-control" v-model="expense.EInvoice" :disabled="cmr.isReadOnly ? true : false"/></td>
                                                                                    <td>
                                                                                        <a class="btn btn-app btn-success"  :disabled="cmr.isReadOnly ? true : false" @click="removeExpense(index)"> <i class="fa fa-trash"></i></a>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                    <div class="tab-pane" id="files">
                                                                        <div class="form-group">
                                                                            <div class="custom-file">
                                                                                <input type="file" class="form-control" ref="file" multiple :disabled="cmr.isReadOnly ? true : false" @change="uploadImage"/>
                                                                                <label class="">Upload file</label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="tab-pane" id="customer">
                                                                        <div class="form-group">
                                                                            <div class="row">
                                                                                <div class="col-md-6">
                                                                                    <div class="expanel expanel-default">
                                                                                        <div class="expanel-heading clearfix align-items-center">Customer</div>
                                                                                        <div class="expanel-body">
                                                                                            <div class="form-group">
                                                                                                <select id="shipper" name="shipper" class="form-control" v-model="cmr.order.customerbill.CustomerCompanyId">
                                                                                                <option v-for="(company,index) in companies" :key="index" :value="company.ID">{{company.CompanyName}}</option>
                                                                                                </select>
                                                                                                <label class="form-control-label">Customer</label>
                                                                                            </div>

                                                                                            <div class="col-md-3 feild">
                                                                                                <div class="form-group">
                                                                                                    <select id="shipper" name="shipper" class="form-control" v-model="cmr.order.customerbill.CustomerCountryId" @change="getCities">
                                                                                                        <option v-for="(country,index) in countries" :key="index" :value="country.ID">{{country.Name}}</option>
                                                                                                    </select>
                                                                                                    <label class="form-control-label">Country</label>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-md-3 feild">
                                                                                                <div class="form-group">
                                                                                                    <select id="shipper" name="shipper" class="form-control" v-model="cmr.order.customerbill.CustomerCityId">
                                                                                                        <option v-for="(city,index) in cities" :key="index" :value="city.ID">{{city.Name}}</option>
                                                                                                    </select>
                                                                                                    <label class="form-control-label">City</label>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-md-3 feild">
                                                                                                <div class="form-group">
                                                                                                    <input type="text" class="form-control" v-model="cmr.order.customerbill.CustomerIndex" />
                                                                                                    <label class="form-control-label">Index</label>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-md-3 feild">
                                                                                                <div class="form-group">
                                                                                                    <input type="text" class="form-control" v-model="cmr.order.customerbill.CustomerAddress" />
                                                                                                    <label class="form-control-label">Address</label>
                                                                                                </div>
                                                                                            </div>

                                                                                            <div class="col-md-4 feild">
                                                                                                <div class="form-group">
                                                                                                    <input type="text" class="form-control" v-model="cmr.order.customerbill.CustomerVAT" />
                                                                                                    <label class="form-control-label">VAT</label>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-md-4 feild">
                                                                                                <div class="form-group">
                                                                                                    <input type="text" class="form-control" v-model="cmr.order.customerbill.CustomerRegNr" />
                                                                                                    <label class="form-control-label">Reg nr</label>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-md-4 feild">
                                                                                                <div class="form-group">
                                                                                                    <input type="text" class="form-control" v-model="cmr.order.customerbill.CustomerID" />
                                                                                                    <label class="form-control-label">ID</label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-md-6">
                                                                                    <div class="expanel expanel-default">
                                                                                        <div class="expanel-heading clearfix align-items-center">Bill To</div>
                                                                                        <div class="expanel-body">
                                                                                            <div class="form-group">
                                                                                                <select id="shipper" name="shipper" class="form-control" v-model="cmr.order.customerbill.BillToCompanyId">
                                                                                                <option v-for="(company,index) in companies" :key="index" :value="company.ID">{{company.CompanyName}}</option>
                                                                                                </select>
                                                                                                <label class="form-control-label">Bill To</label>
                                                                                            </div>
                                                                                            <div class="col-md-3 feild">
                                                                                                <div class="form-group">
                                                                                                    <select id="shipper" name="shipper" class="form-control" v-model="cmr.order.customerbill.BillToCountryId" @change="getCities">
                                                                                                        <option v-for="(country,index) in countries" :key="index" :value="country.ID">{{country.Name}}</option>
                                                                                                    </select>
                                                                                                    <label class="form-control-label">Country</label>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-md-3 feild">
                                                                                                <div class="form-group">
                                                                                                    <select id="shipper" name="shipper" class="form-control" v-model="cmr.order.customerbill.BillToCityId">
                                                                                                        <option v-for="(city,index) in cities" :key="index" :value="city.ID">{{city.Name}}</option>
                                                                                                    </select>
                                                                                                    <label class="form-control-label">City</label>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-md-3 feild">
                                                                                                <div class="form-group">
                                                                                                    <input type="text" class="form-control" v-model="cmr.order.customerbill.BillToIndex" />
                                                                                                    <label class="form-control-label">Index</label>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-md-3 feild">
                                                                                                <div class="form-group">
                                                                                                    <input type="text" class="form-control" v-model="cmr.order.customerbill.BillToAddress" />
                                                                                                    <label class="form-control-label">Address</label>
                                                                                                </div>
                                                                                            </div>

                                                                                            <div class="col-md-4 feild">
                                                                                                <div class="form-group">
                                                                                                    <input type="text" class="form-control" v-model="cmr.order.customerbill.BillToVAT" />
                                                                                                    <label class="form-control-label">VAT</label>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-md-4 feild">
                                                                                                <div class="form-group">
                                                                                                    <input type="text" class="form-control" v-model="cmr.order.customerbill.BillToRegNr" />
                                                                                                    <label class="form-control-label">Reg nr</label>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div class="col-md-4 feild">
                                                                                                <div class="form-group">
                                                                                                    <input type="text" class="form-control" v-model="cmr.order.customerbill.BillToID" />
                                                                                                    <label class="form-control-label">ID</label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="tab-pane" id="tracking">
                                                                        <div class="form-group">
                                                                            <h4>Tracking</h4>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-success" data-dismiss="modal" @click="closeModal">Close</button>
                                                    <button type="button" v-if="cmr.isSave" class="btn btn-success" data-dismiss="modal" @click="editOrder">Edit</button>
                                                    <button type="submit" v-show="!cmr.isSave" class="btn btn-success">Save Change</button>
                                                </div>
                                            </form>
                                        </div>
                                      </div>     
                                   </div>

                                <div class="tab-pane" id="cmr">
                                        <div class="modal-body">
                                        <div class="panel panel-primary">
                                            <form>
                                                            <div class="row">
                                                                <div class="col-md-2 lg-2 feild">
                                                                    <div class="form-group">
                                                                        <input type="text" class="form-control" />
                                                                        <label class="form-control-label">ID</label>
                                                                    </div>
                                                                </div>

                                                                <div class="col-md-2 lg-2 feild">
                                                                    <div class="form-group">
                                                                        <input type="text" class="form-control" />
                                                                        <label class="form-control-label">Version nr</label>
                                                                    </div>
                                                                </div>

                                                                <div class="col-md-2 lg-2 feild">
                                                                    <div class="form-group">
                                                                        <input type="text" class="form-control" />
                                                                        <label class="form-control-label">Index Register</label>
                                                                    </div>
                                                                </div>

                                                                <div class="col-md-3 lg-2 feild">
                                                                    <div class="form-group">
                                                                        <select name="" id="" class="form-control">
                                                                            <option value="read">INLAND</option>
                                                                            <option value="read">INLAND</option>
                                                                            <option value="read">INLAND</option>
                                                                        </select>
                                                                        <label class="form-control-label">Type</label>
                                                                    </div>
                                                                </div>

                                                                <div class="col-md-3 lg-2 feild">
                                                                    <div class="form-group">
                                                                        <select name="" id="" class="form-control">
                                                                            <option value="read">Ready For Upload</option>
                                                                            <option value="read">Ready For Upload</option>
                                                                            <option value="read">Ready For Upload</option>
                                                                        </select>
                                                                        <label class="form-control-label">Status</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-sm-6 md-12 lg-1">
                                                                    <div class="form-group">
                                                                        <input type="text" class="form-control" />
                                                                        <label class="form-control-label">1. Sender (name,address,country)</label>
                                                                    </div>

                                                                    <div class="form-group">
                                                                        <input type="text" class="form-control" />
                                                                        <label class="form-control-label">2. Consignee (name,address,country)</label>
                                                                    </div>

                                                                    <div class="form-group">
                                                                        <input type="text" class="form-control" />
                                                                        <label class="form-control-label">3. Place of delivey of the goods (address,country)</label>
                                                                    </div>

                                                                    <div class="form-group">
                                                                        <input type="text" class="form-control" />
                                                                        <label class="form-control-label">4. Place of tacking of the goods (address,country)</label>
                                                                    </div>

                                                                    <div class="form-group">
                                                                        <input type="file" class="form-control" />
                                                                        <label class="form-control-label">5. Documents Attached</label>
                                                                    </div>
                                                                </div>

                                                                <div class="col-sm-6">
                                                                    <div class="form-group">
                                                                        <h3><strong>INTERNATIONAL CONSIGNMENT NOTE</strong></h3>
                                                                        <p><b>This carriage is subject, notwithstanding any clause to the contrary, to the Convention on the Contract of the International Carriage of Goods by Road (CMR)</b></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-sm-6">
                                                                    <div class="col-md-3 feild">
                                                                        <div class="form-group">
                                                                            <input type="text" class="form-control" />
                                                                            <label class="form-control-label">6. Marks and nr</label>
                                                                        </div>
                                                                    </div>

                                                                    <div class="col-md-3 feild">
                                                                        <div class="form-group">
                                                                            <input type="text" class="form-control" />
                                                                            <label class="form-control-label">7. Nr. of pages</label>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-3 feild">
                                                                        <div class="form-group">
                                                                            <input type="text" class="form-control" />
                                                                            <label class="form-control-label">8. Methods of packing</label>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-3 feild">
                                                                        <div class="form-group">
                                                                            <input type="text" class="form-control" />
                                                                            <label class="form-control-label">9. Nature of goods</label>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div class="col-sm-6">
                                                                    <div class="col-md-4 feild">
                                                                        <div class="form-group">
                                                                            <input type="text" class="form-control" />
                                                                            <label class="form-control-label">10. Statistical nr</label>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-4 feild">
                                                                        <div class="form-group">
                                                                            <input type="text" class="form-control" />
                                                                            <label class="form-control-label">11. Gross weight (kg)</label>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-4 feild">
                                                                        <div class="form-group">
                                                                            <input type="text" class="form-control" />
                                                                            <label class="form-control-label">12. Vol. (eur/Idm/m<sup>3</sup>)</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="row">
                                                                <div class="col-sm-6 md-12 lg-1">
                                                                    <div class="form-group">
                                                                        <input type="text" class="form-control" placeholder="eg . treatment of carriage in customs, etc" />
                                                                        <label class="form-control-label">13. Senders instruction</label>
                                                                    </div>

                                                                    <div class="form-group">
                                                                        <input type="text" class="form-control" />
                                                                        <label class="form-control-label">14. Carrier (name,address,country)</label>
                                                                    </div>

                                                                    <div class="form-group">
                                                                        <input type="text" class="form-control" />
                                                                        <label class="form-control-label">15. Successive carrirer (name,address,country)</label>
                                                                    </div>

                                                                    <div class="form-group">
                                                                        <input type="text" class="form-control" />
                                                                        <label class="form-control-label">16. Place of tacking of the goods (address,country)</label>
                                                                    </div>
                                                                </div>

                                                                <div class="col-sm-6 table-custom">
                                                                    <div class="table-responsive">
                                                                        <table class="table card-table table-vcenter text-nowrap align-items-center">
                                                                            <tr>
                                                                                <td>17. To be payed by</td>
                                                                                <td>Sender</td>
                                                                                <td>Currency</td>
                                                                                <td>Consignee</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Carriage charges</td>
                                                                                <td><input type="number" class="form-control" /></td>
                                                                                <td><input type="text" class="form-control" /></td>
                                                                                <td><input type="text" class="form-control" /></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Deduction</td>
                                                                                <td><input type="number" class="form-control" /></td>
                                                                                <td><input type="text" class="form-control" /></td>
                                                                                <td><input type="text" class="form-control" /></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Balance</td>
                                                                                <td><input type="number" class="form-control" /></td>
                                                                                <td><input type="text" class="form-control" /></td>
                                                                                <td><input type="text" class="form-control" /></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Supplier charges</td>
                                                                                <td><input type="number" class="form-control" /></td>
                                                                                <td><input type="text" class="form-control" /></td>
                                                                                <td><input type="text" class="form-control" /></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Other</td>
                                                                                <td><input type="number" class="form-control" /></td>
                                                                                <td><input type="text" class="form-control" /></td>
                                                                                <td><input type="text" class="form-control" /></td>
                                                                            </tr>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="row">
                                                                <div class="col-sm-12">
                                                                    <div class="panel panel-default">
                                                                        <div class="tab-menu-heading">
                                                                            <div class="tabs-menu">
                                                                                <ul class="nav panel-tabs">
                                                                                    <li><a href="#good-cmr" class="active" data-toggle="tab">Good</a></li>
                                                                                    <li><a href="#cmrVersions2" data-toggle="tab">CMR Versions</a></li>                               
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div class="panel-body tabs-menu-body">
                                                                            <div class="tab-content">
                                                                                <div class="tab-pane active" id="good-cmr">
                                                                                    <div class="table-responsive">
                                                                                        <table id="example" class="table table-striped table-bordered text-nowrap w-100 dataTable no-footer" role="grid" aria-describedby="example_info">
                                                                                            <thead>
                                                                                <tr>
                                                                                    <th>
                                                                                        <input type="checkbox" name="" id=""  @click="selectAll"/> &nbsp; <i class="fa fa-ban" data-toggle="tooltip" @click="clearGoods" data-original-title="fa fa-ban"></i> &nbsp;
                                                                                        <i class="ion-plus" data-toggle="tooltip" @click="addGoods" title="" data-original-title="ion-plus"></i>
                                                                                    </th>
                                                                                    <th class="wd-15p sorting_asc" style="width: 10%;">Qty</th>
                                                                                    <th class="wd-15p sorting_asc" style="width: 10%;">Units</th>
                                                                                    <th class="wd-15p sorting_asc" style="width: 10%;">Kg Calc</th>
                                                                                    <th class="wd-15p sorting_asc" style="width: 10%;">LDM</th>
                                                                                    <th class="wd-15p sorting_asc" style="width: 10%;">Value</th>
                                                                                    <th class="wd-15p sorting_asc" style="width: 10%;">Description</th>
                                                                                    <th class="wd-15p sorting_asc" style="width: 10%;">Volume (m3)</th>
                                                                                    <th class="wd-15p sorting_asc" style="width: 10%;">Length (cm)</th>
                                                                                    <th class="wd-15p sorting_asc" style="width: 10%;">Width (cm)</th>
                                                                                    <th class="wd-15p sorting_asc" style="width: 10%;">Height (cm)</th>
                                                                                    <th></th>
                                                                                </tr>

                                                                            </thead>
                                                                                <tbody>
                                                                                    <tr v-for="(goods,index) in cmr.goods" :key="index">
                                                                                    <td class="text-center"><input type="checkbox" v-model="goodIds" @change="select(index)" :value="goods.index"/></td>
                                                                                    <td><input type="number" minlength="1" class="form-control" id="row-1-age" v-model="goods.qty" /></td>
                                                                                    <td>
                                                                                        <select class="form-control" v-model="goods.units">
                                                                                            <option value="EUR">EUR</option>
                                                                                            <option value="EUR">EUR</option>
                                                                                            <option value="EUR">EUR</option>
                                                                                        </select>
                                                                                    </td>
                                                                                    <td><input type="number" minlength="1" class="form-control" id="row-1-age" v-model="goods.kg_calc" /></td>
                                                                                    <td><input type="number" minlength="1" class="form-control" id="row-1-position" v-model="goods.ldm" /></td>
                                                                                    <td><input type="number" minlength="1" class="form-control" id="row-1-position" v-model="goods.value" /></td>
                                                                                    <td><input type="text" class="form-control" id="row-1-position" v-model="goods.description" /></td>
                                                                                    <td><input type="text" class="form-control" id="row-1-position" v-model="goods.volume" /></td>
                                                                                    <td><input type="text" class="form-control" id="row-1-position" v-model="goods.length" /></td>
                                                                                    <td><input type="text" class="form-control" id="row-1-position" v-model="goods.width" /></td>
                                                                                    <td><input type="text" class="form-control" id="row-1-position" v-model="goods.height" /></td>
                                                                                    <td>
                                                                                        <a class="btn btn-app btn-success" @click="removeGood(index)"><i class="fa fa-trash"></i></a>
                                                                                    </td>
                                                                                </tr>                                               
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="tab-pane" id="cmrVersions2">
                                                                                    <div class="table-responsive">
                                                                                        <table class="table card-table table-vcenter text-nowrap">
                                                                                            <thead>
                                                                                                <tr>
                                                                                                    <th><input type="checkbox" name="" id="" /></th>
                                                                                                    <th>Version nr</th>
                                                                                                    <th>Date / Time</th>
                                                                                                    <th>Created By</th>
                                                                                                    <th>Download</th>
                                                                                                    <th></th>
                                                                                                </tr>
                                                                                            </thead>
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td><input type="checkbox" name="" id="" /></td>
                                                                                                    <td>Version 1</td>
                                                                                                    <td>27.11.2022 / 10:55</td>
                                                                                                    <td>Jaan Saan</td>
                                                                                                    <td><a href="#" class="btn btn-success">Download</a></td>
                                                                                                    <td><i class="fa fa-trash" aria-hidden="true"></i></td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td><input type="checkbox" name="" id="" /></td>
                                                                                                    <td>Version 2</td>
                                                                                                    <td>27.11.2022 / 10:55</td>
                                                                                                    <td>John Simth</td>
                                                                                                    <td><a href="#" class="btn btn-success">Download</a></td>
                                                                                                    <td><i class="fa fa-trash" aria-hidden="true"></i></td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td><input type="checkbox" name="" id="" /></td>
                                                                                                    <td>Version 3</td>
                                                                                                    <td>27.11.2022 / 10:55</td>
                                                                                                    <td>Jaan Saan</td>
                                                                                                    <td><a href="#" class="btn btn-success">Download</a></td>
                                                                                                    <td><i class="fa fa-trash" aria-hidden="true"></i></td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td colspan="7"><i class="fa fa-trash" aria-hidden="true"></i></td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </div>
                                                                                </div>

                                                                                <div class="tab-pane" id="profit-cmr">
                                                                                    <button type="button" class="btn btn-default pb-2"><i class="fe fe-plus mr-2"></i>Add</button>
                                                                                    <p><strong>Revenue</strong></p>
                                                                                    <table class="table card-table table-vcenter text-nowrap align-items-center">
                                                                                        <thead class="thead-light">
                                                                                            <tr>
                                                                                                <th>Code / Price</th>
                                                                                                <th>Qty / Sum</th>
                                                                                                <th>Valuuta Summa (EUR)</th>
                                                                                                <th>Description Date</th>
                                                                                                <th>Carrier Country</th>
                                                                                                <th>Transport Invoice</th>
                                                                                                <th>Action</th>
                                                                                            </tr>
                                                                                        </thead>
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td><input type="text" class="form-control" /></td>
                                                                                                <td><input type="text" class="form-control" /></td>
                                                                                                <td><input type="text" class="form-control" /></td>
                                                                                                <td><input type="text" class="form-control" /></td>
                                                                                                <td><input type="text" class="form-control" /></td>
                                                                                                <td><input type="text" class="form-control" /></td>
                                                                                                <td>
                                                                                                    <a class="btn btn-app btn-success"> <i class="fa fa-trash"></i></a>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                    <hr />
                                                                                    <button type="button" class="btn btn-default pb-2"><i class="fe fe-plus mr-2"></i>Add</button>
                                                                                    <p><strong>Expense</strong></p>
                                                                                    <table class="table card-table table-vcenter text-nowrap align-items-center">
                                                                                        <thead class="thead-light">
                                                                                            <tr>
                                                                                                <th>Code / Price</th>
                                                                                                <th>Qty / Sum</th>
                                                                                                <th>Valuuta Summa (EUR)</th>
                                                                                                <th>Description Date</th>
                                                                                                <th>Carrier Country</th>
                                                                                                <th>Transport Invoice</th>
                                                                                                <th>Action</th>
                                                                                            </tr>
                                                                                        </thead>
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td><input type="text" class="form-control" /></td>
                                                                                                <td><input type="text" class="form-control" /></td>
                                                                                                <td><input type="text" class="form-control" /></td>
                                                                                                <td><input type="text" class="form-control" /></td>
                                                                                                <td><input type="text" class="form-control" /></td>
                                                                                                <td><input type="text" class="form-control" /></td>
                                                                                                <td>
                                                                                                    <a class="btn btn-app btn-success"> <i class="fa fa-trash"></i></a>
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
                                                            <div class="modal-footer">
                                                                <button type="button" class="btn btn-success" data-dismiss="modal">Close</button>
                                                                <button type="button" class="btn btn-success" @click="editCmr">{{isCmrEditable ? 'Edit' : 'Save Changes'}}</button>
                                                            </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                  </div>
              </div>
            </div>
        </div>
    </div>
</div>

        <div class="modal fade" id="addNewPartner" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="example-Modal3">Add New Partner</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="create">
                            <div class="form-group">
                                <input type="text" class="form-control" id="recipient-name" v-model="partner.CompanyName" />
                                <label for="recipient-name" class="form-control-label">Name:</label>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="recipient-name" v-model="partner.RegNo" />
                                <label for="recipient-name" class="form-control-label">Reg No:</label>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="recipient-name" v-model="partner.PrivatePerson" />
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
                                <input type="text" class="form-control" id="recipient-name" v-model="partner.PostalCode" />
                                <label for="recipient-name" class="form-control-label">Postal Code:</label>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="recipient-name" v-model="partner.CompanyAddress" />
                                <label for="recipient-name" class="form-control-label">Address:</label>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="recipient-name" v-model="partner.ClientAddress" />
                                <label for="recipient-name" class="form-control-label">Client Address:</label>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-success" data-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-success">Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import Common from '../../../core/common/common';
import ApiResource from "../../../store/actions/index";
import {onMounted} from "vue";
import { useToast } from "vue-toastification";
import cmr from "../../../store/states/index";
import axios from "axios";
export default {  
  components:{Common,ApiResource},
  setup() {
        const toast = useToast();
        const isLoading   = ref(false)
        const vehicles_types   = ref([]);
        const vehicles   = ref([]);
        const countries   = ref([]);
        const orderTypes   = ref([]);
        const orderStatus   = ref([]);
        const newOrderId = ref(false);  
        const baseUrl    = ref(window.location.origin);
        const states     = ref([]);
        const companies  = ref([]);
        const cities     = ref([]);
        const partner    = ref({});
        const goodIds    = ref([]);
        const files      = ref([]);
        const token  = ref();
        const isCmrEditable = ref(true);
  

        onMounted( async() => {    

          token.value = localStorage.getItem("token");
          axios.defaults.headers.common = {'Authorization': `Bearer ${token.value}`}

          companies.value      = await Common.getCompanies()
          countries.value      = await Common.getCountries();
          orderTypes.value     = await Common.getOrderType();
          orderStatus.value    = await Common.getOrderStatus();
          vehicles_types.value = await Common.getVehicleTypes();
          vehicles.value       = await Common.getVehicles();
          newOrderId.value     = await Common.getGetNextOrderId();
          cities.value         = await Common.getCities(2)
        })  
        const getStates = async(id)=>{
            states.value = await Common.getStates(id)
        }
        const getCities = async(feild)=>{
            if(feild == 'Shipper'){
              cities.value = await Common.getCities(cmr.order.ShipperCountryId)  
            }else if(feild == 'Consignee'){
              cities.value = await Common.getCities(cmr.order.ConsigneeCountryId)  
            }else if(feild == 'Pickup'){
              cities.value = await Common.getCities(cmr.order.PickupCountryId)  
            }else if(feild == 'Delivery'){
              cities.value = await Common.getCities(cmr.order.DeliveryCountryId)  
            }else if(feild == 'Custom'){
              cities.value = await Common.getCities(cmr.order.CustomCountryId)  
            }
        }

        const uploadImage = (event)=> {

            for(var i = 0; i < event.target.files.length; i++){
                 uploadFiles(event.target.files[i])
            }
        }  
        
        const uploadFiles = (docs)=>{
              const reader = new FileReader()
               reader.onload = (event) => {
                 files.value.push({
                    FilePath:event.target.result,
                    FileType:docs.type
                 }) 
               }
               reader.readAsDataURL(docs)
        }

        const create = async()=>{
          try{
            var params = {
              route:'Companies/PostCompanies',
              data:partner.value
            }
            var response =  await ApiResource.store(params);
            if(response.data){
                partner.value = {};
                companies.value = await Common.getCompanies()
                $('#addNewPartner').css("display","none");
                toast.success(response.data,{
                    timeout: 2000
                });
              }  
              }catch(error){
                console.log(error)
              }
        }


       const createOrUpdate = async(action)=>{
          // console.log(JSON.stringify(cmr.order))
            cmr.order.files = files.value
            console.log(JSON.stringify(cmr.order))
            return
            isLoading.value = true; 
          try{
            var params = {
              route:(action == 'create') ? 'ShippingOrder/AddOrder' : 'ShippingOrder/updateOrder',
              data:cmr.order
            }
            var response = (action == 'create') ? await ApiResource.store(params) : await ApiResource.update(params)
            // var response =  await ApiResource.store(params)
            if(response.data){
                cmr.order = {};
                cmr.order.goods = [];
                cmr.isOrderEditable = true
                cmr.isReadOnly = true
                cmr.isSave = true
                 toast.success(response.data,{
                    timeout: 2000
                });
                $('.modal-backdrop').remove();
                $('#order-form').css("display","none");
                $('body').removeClass('modal-open');
                $('input').attr('disabled', false);
                $('select').attr("disabled", false); 
                cmr.orders = await Common.getOrders()
               
              }  
              }catch(error){
                console.log(error)
              }finally{
                isLoading.value = false
              }
        }

        const editCmr = ()=>{
           isCmrEditable.value = false; 
           $('input').attr('readonly', false);
           $('select').attr("disabled", false); 
        }

       const editOrder = async()=>{
           cmr.isSave = false
           cmr.isReadOnly = false
           $('input').attr('disabled', false);
           $('select').attr("disabled", false); 
       } 

       const closeModal = ()=>{
          cmr.isOrderEditable = true
          cmr.isReadOnly = true
       }
       const addGoods = async()=>{
            cmr.order.goods.push({})
       } 
       const removeGood = async(index)=>{
            cmr.order.goods.splice(index,1)
       }
       const clearGoods = async()=>{
            cmr.order.goods = [];
       }
       const addRevenue = async()=>{
            cmr.order.profitrevenue.push({})
       } 
       const removeRevenue = async(index)=>{
            cmr.order.profitrevenue.splice(index,1)
       }
       const addExpense = async()=>{
            cmr.order.profitexpense.push({})
       } 
       const removeExpense = async(index)=>{
            cmr.order.profitexpense.splice(index,1)
       }  

        return{
          cmr,  
          baseUrl,
          isLoading,
          cities,
          partner,
          states,
          files,
          companies,
          countries,
          orderTypes,
          orderStatus,
          vehicles_types,
          vehicles,
          goodIds,
          newOrderId,
          isCmrEditable,
          editCmr,
          getCities,
          getStates,
          create,
          addGoods,
          removeGood,
          clearGoods,
          addRevenue,
          removeRevenue,
          addExpense,
          removeExpense,
          createOrUpdate,
          uploadImage,
          editOrder,
          closeModal
        }
  },
}
</script>