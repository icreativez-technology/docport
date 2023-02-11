<template>
    <div>
        <div class="modal fade" id="order-form" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog custom" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5>{{isOrderEditable ? 'Edit Order' : 'Add Order'}}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="panel panel-primary">
                            <form @submit.prevent="createOrUpdate(isOrderEditable ? 'update' : 'create')">
                                <div class="row">
                                    <div class="col-md-3 feild">
                                        <div class="form-group">
                                            <input type="text" class="form-control" disabled v-model="order.Id" />
                                            <label class="form-control-label">ID</label>
                                        </div>
                                    </div>
                                    <div class="col-md-3 feild">
                                        <div class="form-group">
                                            <input type="text" class="form-control" v-model="order.IndexRegister" />
                                            <label class="form-control-label">Index Register</label>
                                        </div>
                                    </div>

                                    <div class="col-md-3 feild">
                                        <div class="form-group">
                                            <select name="" id="" class="form-control" v-model="order.ShipmentOrderTypeId">
                                                <option v-for="(odrtype,index) in orderTypes" :key="index" :value="odrtype.ID">{{odrtype.Name}}</option>
                                            </select>
                                            <label class="form-control-label">Type</label>
                                        </div>
                                    </div>

                                    <div class="col-md-3 feild">
                                        <div class="form-group">
                                            <select name="" id="" class="form-control" v-model="order.ShipmentOrderStatusId">
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
                                                        <select id="shipper" name="shipper" class="form-control" v-model="order.ShipperCompanyId">
                                                            <option v-for="(company,index) in companies" :key="index" :value="company.ID">{{company.CompanyName}}</option>
                                                        </select>
                                                    </div>
                                                    <p id="add-new-partner" data-toggle="modal" data-target="#addNewPartner"><i class="ion-plus" data-toggle="tooltip" title="" data-original-title="ion-plus"></i></p>
                                                    <label class="form-control-label">Shipper</label>
                                                </div>
                                                <div class="col-md-3 feild">
                                                    <div class="form-group">
                                                        <select id="shipper" name="shipper" class="form-control" v-model="order.ShipperCountryId" @change="getCities('Shipper')">
                                                            <option v-for="(country,index) in countries" :key="index" :value="country.ID">{{country.Name}}</option>
                                                        </select>
                                                        <label class="form-control-label">Country</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-3 feild">
                                                    <div class="form-group">
                                                        <select id="shipper" name="shipper" class="form-control" v-model="order.ShipperCityId">
                                                            <option v-for="(city,index) in cities" :key="index" :value="city.ID">{{city.Name}}</option>
                                                        </select>

                                                        <label class="form-control-label">City</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-3 feild">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" v-model="order.ShipperIndex" />
                                                        <label class="form-control-label">Index</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-3 feild">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" v-model="order.ShipperAddress" />
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
                                                    <select id="shipper" name="shipper" class="form-control" v-model="order.ConsigneeCompanyId">
                                                        <option v-for="(company,index) in companies" :key="index" :value="company.ID">{{company.CompanyName}}</option>
                                                    </select>
                                                    <label class="form-control-label">Consignee</label>
                                                </div>
                                                <div class="col-md-3 feild">
                                                    <div class="form-group">
                                                        <select id="shipper" name="shipper" class="form-control" v-model="order.ConsigneeCountryId" @click="getCities('Consignee')">
                                                            <option v-for="(country,index) in countries" :key="index" :value="country.ID">{{country.Name}}</option>
                                                        </select>
                                                        <label class="form-control-label">Country</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-3 feild">
                                                    <div class="form-group">
                                                        <select id="shipper" name="shipper" class="form-control" v-model="order.ConsigneeCityId">
                                                            <option v-for="(city,index) in cities" :key="index" :value="city.ID">{{city.Name}}</option>
                                                        </select>
                                                        <label class="form-control-label">City</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-3 feild">
                                                    <div class="form-group">
                                                        <input type="number" class="form-control" v-model="order.ConsigneeIndex" />
                                                        <label class="form-control-label">Index</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-3 feild">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" v-model="order.ConsigneeAddress" />
                                                        <label class="form-control-label">Address</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row seprater">
                                    <div class="col-md-6 pickup-dilavey">
                                        <input type="checkbox" v-model="pickup_section" class="mt-3 mb-3" /> Check this box, if consignee is the same as pickup
                                        <div class="expanel expanel-default">
                                            <div class="expanel-heading clearfix align-items-center">
                                                Pickup
                                                <div class="float-right">
                                                    <button class="btn btn-sm btn-default" type="button" data-toggle="collapse" data-target="#pickup" aria-expanded="false" aria-controls="pickup"><i class="fa fa-bars"></i></button>
                                                </div>
                                            </div>
                                            <div class="expanel-body collapse" id="pickup">
                                                <div class="form-group">
                                                    <select id="shipper" name="shipper" class="form-control" v-model="order.PickupCompanyId" :disabled="pickup_section ? true : false">
                                                        <option v-for="(company,index) in companies" :key="index" :value="company.ID">{{company.CompanyName}}</option>
                                                    </select>
                                                    <label class="form-control-label">Company</label>
                                                </div>

                                                <div class="col-md-4 feild">
                                                    <div class="form-group">
                                                        <input type="date" class="form-control" v-model="order.PickupDateTime" :disabled="pickup_section ? true : false" />
                                                        <label class="form-control-label">Date</label>
                                                    </div>
                                                </div>

                                                <div class="col-md-4 feild">
                                                    <div class="form-group">
                                                        <input type="time" class="form-control" v-model="order.PickupTimePromise" :disabled="pickup_section ? true : false" />
                                                        <label class="form-control-label">Time</label>
                                                    </div>
                                                </div>

                                                <div class="col-md-4 feild">
                                                    <div class="form-group">
                                                        <input type="time" class="form-control" v-model="order.PickupTimePromise" :disabled="pickup_section ? true : false" />
                                                        <label class="form-control-label">Time Promise</label>
                                                    </div>
                                                </div>

                                                <div class="col-md-3 feild">
                                                    <div class="form-group">
                                                        <select id="shipper" name="shipper" class="form-control" v-model="order.PickupCountryId" @change="getCities('Pickup')" :disabled="pickup_section ? true : false">
                                                            <option v-for="(country,index) in countries" :key="index" :value="country.ID">{{country.Name}}</option>
                                                        </select>
                                                        <label class="form-control-label">Country</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-3 feild">
                                                    <div class="form-group">
                                                        <select id="shipper" name="shipper" class="form-control" v-model="order.PickupCityId" :disabled="pickup_section ? true : false">
                                                            <option v-for="(city,index) in cities" :key="index" :value="city.ID">{{city.Name}}</option>
                                                        </select>
                                                        <label class="form-control-label">City</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-3 feild">
                                                    <div class="form-group">
                                                        <input type="number" class="form-control" v-model="order.PickupIndex" :disabled="pickup_section ? true : false" />
                                                        <label class="form-control-label">Index</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-3 feild">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" v-model="order.PickupAddress" :disabled="pickup_section ? true : false" />
                                                        <label class="form-control-label">Address</label>
                                                    </div>
                                                </div>
                                                 <div class="form-group">
                                                    <input type="text" class="form-control" v-model="order.PickupComment" :disabled="pickup_section ? true : false" />
                                                    <label class="form-control-label">Comment</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 pickup-dilavey">
                                        <input type="checkbox" v-model="delivery_section" class="mt-3 mb-3" /> Check this box, if consignee is the same as delivery
                                        <div class="expanel expanel-default">
                                            <div class="expanel-heading clearfix align-items-center">
                                                Delivery
                                                <div class="float-right">
                                                    <button class="btn btn-sm btn-default" type="button" data-toggle="collapse" data-target="#delivery" aria-expanded="false" aria-controls="delivery"><i class="fa fa-bars"></i></button>
                                                </div>
                                            </div>
                                            <div class="expanel-body collapse" id="delivery">
                                                <div class="form-group">
                                                    <select id="shipper" name="shipper" class="form-control" v-model="order.DeliveryCompanyId" :disabled="delivery_section ? true : false">
                                                        <option v-for="(company,index) in companies" :key="index" :value="company.ID">{{company.CompanyName}}</option>
                                                    </select>
                                                    <label class="form-control-label">Company</label>
                                                </div>

                                                <div class="col-md-4 feild">
                                                    <div class="form-group">
                                                        <input type="date" class="form-control" v-model="order.DeliveryDateTime" :disabled="delivery_section ? true : false" />
                                                        <label class="form-control-label">Date</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-4 feild">
                                                    <div class="form-group">
                                                        <input type="time" class="form-control" v-model="order.DeliveryTimePromise" :disabled="delivery_section ? true : false" />
                                                        <label class="form-control-label">Time</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-4 feild">
                                                    <div class="form-group">
                                                        <input type="time" class="form-control" v-model="order.DeliveryTimePromise" :disabled="delivery_section ? true : false" />
                                                        <label class="form-control-label">Time Promise</label>
                                                    </div>
                                                </div>

                                                <div class="col-md-3 feild">
                                                    <div class="form-group">
                                                        <select id="shipper" name="shipper" class="form-control" v-model="order.DeliveryCountryId" @change="getCities('Delivery')" :disabled="delivery_section ? true : false">
                                                            <option v-for="(country,index) in countries" :key="index" :value="country.ID">{{country.Name}}</option>
                                                        </select>
                                                        <label class="form-control-label">Country</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-3 feild">
                                                    <div class="form-group">
                                                        <select id="shipper" name="shipper" class="form-control" v-model="order.DeliveryCityId" :disabled="delivery_section ? true : false">
                                                            <option v-for="(city,index) in cities" :key="index" :value="city.ID">{{city.Name}}</option>
                                                        </select>
                                                        <label class="form-control-label">City</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-3 feild">
                                                    <div class="form-group">
                                                        <input type="number" class="form-control" v-model="order.DeliveryIndex" :disabled="delivery_section ? true : false" />
                                                        <label class="form-control-label">Index</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-3 feild">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" v-model="order.DeliveryAddress" :disabled="delivery_section ? true : false" />
                                                        <label class="form-control-label">Address</label>
                                                    </div>
                                                </div>
                                                  <div class="form-group">
                                                    <input type="text" class="form-control" v-model="order.DeliveryComment" :disabled="delivery_section ? true : false" />
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
                                                        <select id="shipper" name="shipper" class="form-control" v-model="order.CustomCompanyId">
                                                        <option v-for="(company,index) in companies" :key="index" :value="company.ID">{{company.CompanyName}}</option>
                                                      </select>
                                                    <label class="form-control-label">Customs</label>
                                                </div>

                                                <div class="col-md-4 feild">
                                                    <div class="form-group">
                                                        <input type="date" class="form-control" v-model="order.CustomDateTime" />
                                                        <label class="form-control-label">Date</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-4 feild">
                                                    <div class="form-group">
                                                        <input type="time" class="form-control" v-model="order.CustomTimePromise" />
                                                        <label class="form-control-label">Time</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-4 feild">
                                                    <div class="form-group">
                                                        <input type="time" class="form-control" v-model="order.CustomTimePromise" />
                                                        <label class="form-control-label">Time Promise</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-3 feild">
                                                    <div class="form-group">
                                                        <select id="shipper" name="shipper" class="form-control" v-model="order.CustomCountryId" @change="getCities('Custom')">
                                                            <option v-for="(country,index) in countries" :key="index" :value="country.ID">{{country.Name}}</option>
                                                        </select>
                                                        <label class="form-control-label">Country</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-3 feild">
                                                    <div class="form-group">
                                                        <select id="shipper" name="shipper" class="form-control" v-model="order.CustomCityId">
                                                            <option v-for="(city,index) in cities" :key="index" :value="city.ID">{{city.Name}}</option>
                                                        </select>
                                                        <label class="form-control-label">City</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-3 feild">
                                                    <div class="form-group">
                                                        <input type="number" class="form-control" v-model="order.CustomIndex" />
                                                        <label class="form-control-label">Index</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-3 feild">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" v-model="order.CustomAddress" />
                                                        <label class="form-control-label">Address</label>
                                                    </div>
                                                </div>

                                                <div class="col-md-6 feild">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" v-model="order.CustomReference" />
                                                        <label class="form-control-label">Reference</label>
                                                    </div>
                                                </div>

                                                <div class="col-md-6 feild">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" v-model="order.CustomRemarks" />
                                                        <label class="form-control-label">Remark</label>
                                                    </div>
                                                </div>

                                                <div class="col-md-4 feild">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" v-model="order.CustomTerms" />
                                                        <label class="form-control-label">Terms</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-4 feild">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" v-model="order.CustomSourceDoc">
                                                        <label class="form-control-label">Source Doc</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-4 feild">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" v-model="order.CustomUser" />
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
                                                        <input type="text" class="form-control" v-model="order.MasterMID" />
                                                        <label class="form-control-label">MID</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-4 feild">
                                                    <div class="form-group">
                                                       <select id="shipper" name="shipper" class="form-control" v-model="order.MasterCompanyId">
                                                        <option v-for="(company,index) in companies" :key="index" :value="company.ID">{{company.CompanyName}}</option>
                                                      </select>
                                                        <label class="form-control-label">Choose Carrier</label>
                                                    </div>
                                                </div>   
                                            
                                                <div class="col-md-4 feild">
                                                    <div class="form-group">
                                                       <select name="" id="" class="form-control" v-model="order.MasterVehicleTypeId">
                                                        <option v-for="(vtype,index) in vehicles_types" :key="index" :value="vtype.ID">{{vtype.Name}}</option>
                                                      </select>
                                                        <label class="form-control-label">Master Vehcile Type</label>
                                                    </div>
                                                </div>

                                                <div class="col-md-4 feild">
                                                    <div class="form-group">
                                                      <input type="text" class="form-control" v-model="order.MasterVehicleName"/>
                                                        <label class="form-control-label">Vehicle Name</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-4 feild">
                                                    <div class="form-group">
                                                      <input type="text" class="form-control" v-model="order.MasterVehicleRegNo"/>
                                                        <label class="form-control-label">Vehicle Registration No</label>
                                                    </div>
                                                </div>
                                             
                                                  <div class="col-md-4 feild">
                                                    <div class="form-group">
                                                         <input type="text" class="form-control" v-model="order.MasterDriverName"/>
                                                        <label class="form-control-label">Driver</label>
                                                    </div>
                                                </div>

                                                 <div class="col-md-4 feild">
                                                    <div class="form-group">
                                                       <select name="" id="" class="form-control" v-model="order.VehicleId">
                                                        <option v-for="(vtype,index) in vehicles_types" :key="index" :value="vtype.ID">{{vtype.Name}}</option>
                                                      </select>
                                                        <label class="form-control-label">Type</label>
                                                    </div>
                                                </div>

                                                <div class="col-md-4 feild">
                                                    <div class="form-group">
                                                        <input type="date" class="form-control" v-model="order.MasterPickupDate"/>
                                                        <label class="form-control-label">Pickup Date</label>
                                                    </div>
                                                </div>

                                                <div class="col-md-4 feild">
                                                    <div class="form-group">
                                                        <input type="date" class="form-control" v-model="order.MasterDelivaryDate"/>
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
                                                        <!-- <li><a href="#profit" data-toggle="tab">Profit</a></li>
                                                        <li><a href="#files" data-toggle="tab">Files</a></li>
                                                        <li><a href="#customer" data-toggle="tab">Customer / Bill</a></li>
                                                        <li><a href="#tracking" data-toggle="tab">Tracking</a></li> -->
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="panel-body tabs-menu-body">
                                                <div class="tab-content">
                                                    <div class="tab-pane active" id="good">
                                                        <div class="table-responsive">
                                                            <table id="example" class="table table-striped table-bordered text-nowrap w-100 dataTable no-footer" role="grid" aria-describedby="example_info">
                                                                <thead>
                                                                    <tr>
                                                                        <th>
                                                                            <input type="checkbox" name="" id="" > &nbsp; <i class="fa fa-ban" data-toggle="tooltip" @click="clearGoods" data-original-title="fa fa-ban"></i> &nbsp;
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
                                                                    <tr v-for="(goods,index) in order.goods" :key="index">
                                                                        <td class="text-center"><input type="checkbox" v-model="goodIds" /></td>
                                                                        <td><input type="number" minlength="1" class="form-control" id="row-1-age" v-model="goods.qty" /></td>
                                                                        <td>
                                                                            <select class="form-control" v-model="goods.unitid">
                                                                                <option value="1">EUR</option>
                                                                                <option value="2">EUR</option>
                                                                                <option value="3">EUR</option>
                                                                            </select>
                                                                        </td>
                                                                        <td><input type="number" minlength="1" class="form-control" id="row-1-age" v-model="goods.kgcalc" /></td>
                                                                        <td><input type="number" minlength="1" class="form-control" id="row-1-position" v-model="goods.ldm" /></td>
                                                                        <td><input type="number" minlength="1" class="form-control" id="row-1-position" v-model="goods.value" /></td>
                                                                        <td><input type="text" class="form-control" id="row-1-position" v-model="goods.description" /></td>
                                                                        <td><input type="number" class="form-control" id="row-1-position" v-model="goods.volumem3" /></td>
                                                                        <td><input type="number" class="form-control" id="row-1-position" v-model="goods.lengthcm" /></td>
                                                                        <td><input type="number" class="form-control" id="row-1-position" v-model="goods.widthcm" /></td>
                                                                        <td><input type="number" class="form-control" id="row-1-position" v-model="goods.heightcm" /></td>
                                                                        <td>
                                                                            <a class="btn btn-app btn-success" @click="removeGood(index)"><i class="fa fa-trash"></i></a>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <!-- <hr />
                                                            <div class="row">
                                                                <div class="col-sm-6 col-lg-6 col-xl-3">
                                                                    <div class="card text-center">
                                                                        <div class="card-body">
                                                                            <img class="avatar avatar-md brround cover-image" :src="baseUrl+`/assets/images/dashboard.png`" />
                                                                            <h4><input type="checkbox" class="mt-4" /> Temp. Sensitive</h4>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-sm-6 col-lg-6 col-xl-3">
                                                                    <div class="card text-center">
                                                                        <div class="card-body">
                                                                            <img class="avatar avatar-md brround cover-image" :src="baseUrl+`/assets/images/adrr.png`" />
                                                                            <h4><input type="checkbox" class="mt-4" /> ADR Carriage</h4>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-sm-6 col-lg-6 col-xl-3">
                                                                    <div class="card text-center">
                                                                        <div class="card-body">
                                                                            <img class="avatar avatar-md brround cover-image" :src="baseUrl+`/assets/images/handle.png`" />
                                                                            <h4><input type="checkbox" class="mt-4" /> Fargile Carriage</h4>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div> -->
                                                        </div>
                                                    </div>

                                                    <!-- <div class="tab-pane" id="profit">
                                                        <button type="button" class="btn btn-default pb-2" @click="addRevenue"><i class="fe fe-plus mr-2"></i>Add</button>
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
                                                                <tr v-for="(revenue,index) in order.revenue" :key="index">
                                                                    <td><input type="text" class="form-control" v-model="revenue.code" /></td>
                                                                    <td><input type="text" class="form-control" v-model="revenue.price" /></td>
                                                                    <td><input type="text" class="form-control" v-model="revenue.qty" /></td>
                                                                    <td><input type="text" class="form-control" v-model="revenue.sum" /></td>
                                                                    <td><input type="text" class="form-control" v-model="revenue.value" /></td>
                                                                    <td><input type="text" class="form-control" v-model="revenue.currency" /></td>
                                                                    <td><input type="text" class="form-control" v-model="revenue.description" /></td>
                                                                    <td><input type="date" class="form-control" v-model="revenue.date" /></td>
                                                                    <td><input type="text" class="form-control" v-model="revenue.carrier" /></td>
                                                                    <td><input type="text" class="form-control" v-model="revenue.country" /></td>
                                                                    <td><input type="text" class="form-control" v-model="revenue.transport" /></td>
                                                                    <td><input type="text" class="form-control" v-model="revenue.invoice" /></td>
                                                                    <td>
                                                                        <a class="btn btn-app btn-success" @click="removeRevenue(index)"> <i class="fa fa-trash"></i></a>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <hr />
                                                        <button type="button" class="btn btn-default pb-2" @click="addExpense"><i class="fe fe-plus mr-2"></i>Add</button>
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
                                                                <tr v-for="(expense,index) in order.expense" :key="index">
                                                                    <td><input type="text" class="form-control" v-model="expense.code" /></td>
                                                                    <td><input type="text" class="form-control" v-model="expense.price" /></td>
                                                                    <td><input type="text" class="form-control" v-model="expense.qty" /></td>
                                                                    <td><input type="text" class="form-control" v-model="expense.sum" /></td>
                                                                    <td><input type="text" class="form-control" v-model="expense.value" /></td>
                                                                    <td><input type="text" class="form-control" v-model="expense.currency" /></td>
                                                                    <td><input type="text" class="form-control" v-model="expense.description" /></td>
                                                                    <td><input type="date" class="form-control" v-model="expense.date" /></td>
                                                                    <td><input type="text" class="form-control" v-model="expense.carrier" /></td>
                                                                    <td><input type="text" class="form-control" v-model="expense.country" /></td>
                                                                    <td><input type="text" class="form-control" v-model="expense.transport" /></td>
                                                                    <td><input type="text" class="form-control" v-model="expense.invoice" /></td>
                                                                    <td>
                                                                        <a class="btn btn-app btn-success" @click="removeExpense(index)"> <i class="fa fa-trash"></i></a>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div class="tab-pane" id="files">
                                                        <div class="form-group">
                                                            <div class="custom-file">
                                                                <input type="file" class="custom-file-input" name="example-file-input-custom" />
                                                                <label class="custom-file-label">Upload file</label>
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
                                                                                <select id="country" name="country" class="form-control">
                                                                                    <option value="Afghanistan">Afghanistan</option>
                                                                                    <option value="Åland Islands">Åland Islands</option>
                                                                                    <option value="Albania">Albania</option>
                                                                                    <option value="Algeria">Algeria</option>
                                                                                    <option value="American Samoa">American Samoa</option>
                                                                                    <option value="Andorra">Andorra</option>
                                                                                    <option value="Angola">Angola</option>
                                                                                    <option value="Anguilla">Anguilla</option>
                                                                                    <option value="Antarctica">Antarctica</option>
                                                                                    <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                                                                    <option value="Argentina">Argentina</option>
                                                                                    <option value="Armenia">Armenia</option>
                                                                                    <option value="Aruba">Aruba</option>
                                                                                    <option value="Australia">Australia</option>
                                                                                    <option value="Austria">Austria</option>
                                                                                    <option value="Azerbaijan">Azerbaijan</option>
                                                                                    <option value="Bahamas">Bahamas</option>
                                                                                    <option value="Bahrain">Bahrain</option>
                                                                                    <option value="Bangladesh">Bangladesh</option>
                                                                                </select>
                                                                                <label class="form-control-label">Customer</label>
                                                                            </div>

                                                                            <div class="col-md-3 feild">
                                                                                <div class="form-group">
                                                                                    <select id="shipper" name="shipper" class="form-control" v-model="order.customer.country" @change="getCities">
                                                                                        <option v-for="(country,index) in countries" :key="index" :value="country.ID">{{country.Name}}</option>
                                                                                    </select>
                                                                                    <label class="form-control-label">Country</label>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-md-3 feild">
                                                                                <div class="form-group">
                                                                                    <select id="shipper" name="shipper" class="form-control" v-model="order.customer.city">
                                                                                        <option v-for="(city,index) in cities" :key="index" :value="city.ID">{{city.Name}}</option>
                                                                                    </select>
                                                                                    <label class="form-control-label">City</label>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-md-3 feild">
                                                                                <div class="form-group">
                                                                                    <input type="text" class="form-control" v-model="order.customer.index" />
                                                                                    <label class="form-control-label">Index</label>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-md-3 feild">
                                                                                <div class="form-group">
                                                                                    <input type="text" class="form-control" v-model="order.customer.address" />
                                                                                    <label class="form-control-label">Address</label>
                                                                                </div>
                                                                            </div>

                                                                            <div class="col-md-4 feild">
                                                                                <div class="form-group">
                                                                                    <input type="text" class="form-control" v-model="order.customer.vat" />
                                                                                    <label class="form-control-label">VAT</label>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-md-4 feild">
                                                                                <div class="form-group">
                                                                                    <input type="text" class="form-control" v-model="order.customer.reg_no" />
                                                                                    <label class="form-control-label">Reg nr</label>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-md-4 feild">
                                                                                <div class="form-group">
                                                                                    <input type="text" class="form-control" v-model="order.customer.id" />
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
                                                                                <input type="text" class="form-control" />
                                                                                <label class="form-control-label">Bill To</label>
                                                                            </div>
                                                                            <div class="col-md-3 feild">
                                                                                <div class="form-group">
                                                                                    <select id="shipper" name="shipper" class="form-control" v-model="order.bill.country" @change="getCities">
                                                                                        <option v-for="(country,index) in countries" :key="index" :value="country.ID">{{country.Name}}</option>
                                                                                    </select>
                                                                                    <label class="form-control-label">Country</label>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-md-3 feild">
                                                                                <div class="form-group">
                                                                                    <select id="shipper" name="shipper" class="form-control" v-model="order.bill.city">
                                                                                        <option v-for="(city,index) in cities" :key="index" :value="city.ID">{{city.Name}}</option>
                                                                                    </select>
                                                                                    <label class="form-control-label">City</label>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-md-3 feild">
                                                                                <div class="form-group">
                                                                                    <input type="text" class="form-control" v-model="order.bill.index" />
                                                                                    <label class="form-control-label">Index</label>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-md-3 feild">
                                                                                <div class="form-group">
                                                                                    <input type="text" class="form-control" v-model="order.bill.address" />
                                                                                    <label class="form-control-label">Address</label>
                                                                                </div>
                                                                            </div>

                                                                            <div class="col-md-4 feild">
                                                                                <div class="form-group">
                                                                                    <input type="text" class="form-control" v-model="order.bill.vat" />
                                                                                    <label class="form-control-label">VAT</label>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-md-4 feild">
                                                                                <div class="form-group">
                                                                                    <input type="text" class="form-control" v-model="order.bill.reg_no" />
                                                                                    <label class="form-control-label">Reg nr</label>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-md-4 feild">
                                                                                <div class="form-group">
                                                                                    <input type="text" class="form-control" v-model="order.bill.id" />
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
                                                    </div> -->


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-success" data-dismiss="modal">Close</button>
                                    <button type="submit" class="btn btn-success">{{isOrderEditable ? 'Save Changes' : 'Add'}}</button>
                                </div>
                            </form>
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
export default {
  props: {
    isOrderEditable: Boolean,
    //order: Object
  },   
  components:{Common,ApiResource},
  setup() {
        const toast = useToast();
        const isEditable = ref(false);
        const order = ref({
            goods:[]
        });
        const delivery_section = ref(false);
        const pickup_section   = ref(false);
        const vehicles_types   = ref([]);
        const countries   = ref([]);
        const orderTypes   = ref([]);
        const orderStatus   = ref([]);
        const allGoodSelected = ref(false);  
        const baseUrl    = ref(window.location.origin);
        const states     = ref([]);
        const companies  = ref([]);
        const cities     = ref([]);
        const partner    = ref({});
        const goodIds    = ref([]);
  

        onMounted( async() => {  
          companies.value      = await Common.getCompanies()
          countries.value      = await Common.getCountries();
          orderTypes.value     = await Common.getOrderType();
          orderStatus.value    = await Common.getOrderStatus();
          vehicles_types.value = await Common.getVehicleTypes()

        })  
        const getStates = async(id)=>{
            states.value = await Common.getStates(id)
        }
        const getCities = async(feild)=>{
            if(feild == 'Shipper'){
              cities.value = await Common.getCities(order.value.ShipperCountryId)  
            }else if(feild == 'Consignee'){
              cities.value = await Common.getCities(order.value.ConsigneeCountryId)  
            }else if(feild == 'Pickup'){
              cities.value = await Common.getCities(order.value.PickupCountryId)  
            }else if(feild == 'Delivery'){
              cities.value = await Common.getCities(order.value.DeliveryCountryId)  
            }else if(feild == 'Custom'){
              cities.value = await Common.getCities(order.value.CustomCountryId)  
            }
        }

        // const uploadImage = (event)=> {
        //     order.value.CustomSourceDoc = event.target.files[0]
        // }   
        
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
          console.log("????",JSON.stringify(order.value)) 
          try{
            var params = {
              route:(action == 'create') ? 'ShippingOrder/AddOrder' : 'ShippingOrder/updateOrder',
              data:order.value
            }
            var response = (action == 'create') ? await ApiResource.store(params) : await ApiResource.update(params)
            if(response.data){
                order.value = {};
                $('#order-form').css("display","none");
                 $(".modal-backdrop.in").hide();
                  $('#order-form').on('shown.bs.modal', function () {
                    $(".modal-backdrop.in").hide();
                })
                toast.success(response.data,{
                    timeout: 2000
                });
              }  
              }catch(error){
                console.log(error)
              }
        }

    //    const selectAll =()=>{
    //          goodIds.value = [];
    //         if(!allGoodSelected.value){
    //             for(var i=0; i<=order.value.goods.length; i++){
    //                 goodIds.value.push(order.value.goods[i].index);
    //             }
    //         }else{
    //            goodIds.value = []; 
    //         }
    //    } 

       const select = (index) =>{
            goodIds.value[index] = true;
       }
       const addGoods = async()=>{
            order.value.goods.push({})
       } 
       const removeGood = async(index)=>{
            order.value.goods.splice(index,1)
       }
       const clearGoods = async()=>{
            order.value.goods = [];
       }
       const addRevenue = async()=>{
            order.value.revenue.push({})
       } 
       const removeRevenue = async(index)=>{
            order.value.revenue.splice(index,1)
       }
       const addExpense = async()=>{
            order.value.expense.push({})
       } 
       const removeExpense = async(index)=>{
            order.value.expense.splice(index,1)
       }  

        return{
          order,  
          baseUrl,
          pickup_section,
          delivery_section,
          isEditable,
          cities,
          partner,
          states,
          companies,
          countries,
          orderTypes,
          orderStatus,
          vehicles_types,
          allGoodSelected,
          goodIds,
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
          createOrUpdate
        }
  },
}
</script>