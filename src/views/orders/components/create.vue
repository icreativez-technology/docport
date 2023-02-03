<template>
     <div class="modal fade" id="exampleModal3" tabindex="-1" role="dialog"  aria-hidden="true">
						<div class="modal-dialog custom" role="document">
							<div class="modal-content">
								<div class="modal-header">                  
                  	<div class="tabs-menu">
													<!-- Tabs -->
													<ul class="nav panel-tabs">
														<li class=""><a href="#tab11" data-toggle="tab" @click="formTab('order')">{{isOpenOrderForm ? 'Add Order' : 'Edit Order'}}</a></li>
														<li><a href="#tab21" data-toggle="tab" id="cmr-modal" @click="formTab('cmr')">CMR</a></li>
													</ul>
												</div>
									<button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="orderForm">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div class="modal-body">
                  <div class="panel panel-primary">
										<div class="panel-body tabs-menu-body">
										<div class="tab-content">
									<div class="tab-pane order-tab" id="tab11">
										<form>
                    <div class="row">
                    <div class="col-md-3 feild">
										<div class="form-group">
                          <input type="text" class="form-control" disabled v-model="Id">
                          <label class="form-control-label">ID</label>
                    </div>
                    </div>
                    <div class="col-md-3 feild">
                    <div class="form-group">
											<input type="text" class="form-control" v-model="order.IndexRegister">
                      <label class="form-control-label">Index Register</label>
										</div>
                    </div>

                    <div class="col-md-3 feild">
                    <div class="form-group">
											<select name="" id="" class="form-control" v-model="order.index">
                        <option value="inland">INLAND</option>
                        <option value="inland">INLAND</option>
                        <option value="inland">INLAND</option>
                      </select>
                      <label class="form-control-label">Type</label>
										</div>
                    </div>

                    <div class="col-md-3 feild">
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

                    <div class="row seprater">
                    <div class="col-md-6">
                     <div class="expanel expanel-default">
                      <div class="expanel-heading clearfix align-items-center">Shipper
                        <div class="float-right">
                          <button class="btn btn-sm btn-default" type="button" data-toggle="collapse" data-target="#shipper"
                            aria-expanded="false" aria-controls="shipper"><i class="fa fa-bars"></i></button>
                        </div>
                      </div>
                      <div class="expanel-body collapse show" id="shipper">
                       
										<div class="form-group">
                       <div class="col-md-12 feild">
                         <select id="country" name="country" class="form-control">
                          <option value="Afghanistan">Afghanistan</option>
                          <option value="Åland Islands">Aland Islands</option>
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
                       </div>
                          <p id="add-new-partner" data-toggle="modal" data-target="#addNewPartner"><i class="ion-plus" data-toggle="tooltip" title="" data-original-title="ion-plus"></i></p>
                      	<label class="form-control-label">Shipper</label>
										</div>
                    <div class="col-md-3 feild">
										<div class="form-group">
											<input type="text" class="form-control">
											<label class="form-control-label">Country</label>
										</div>
                    </div>
                     <div class="col-md-3 feild">
										<div class="form-group">
											<input type="text" class="form-control">
											<label class="form-control-label">City</label>
										</div>
                    </div>
                    <div class="col-md-3 feild">
										<div class="form-group">
											<input type="text" class="form-control">
											<label class="form-control-label">Index</label>
										</div>
                    </div>
                      <div class="col-md-3 feild">
                        <div class="form-group">
                        <input type="text" class="form-control">
                        <label class="form-control-label">Address</label>
                      </div>
                    </div>
                      </div>
                    </div>
								
                    </div> 
                    <div class="col-md-6">
                     <div class="expanel expanel-default">
                      <div class="expanel-heading clearfix align-items-center">Consignee
                        <div class="float-right">
                          <button class="btn btn-sm btn-default" type="button" data-toggle="collapse" data-target="#consignee"
                            aria-expanded="false" aria-controls="consignee"><i class="fa fa-bars"></i></button>
                        </div>
                      </div>
                      <div class="expanel-body collapse show" id="consignee">
                       
										<div class="form-group">
											 <select id="country" name="country" class="form-control">
                          <option value="Afghanistan">Afghanistan</option>
                          <option value="Åland Islands">Aland Islands</option>
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
                      <label class="form-control-label">Consignee</label>
										</div>
                    <div class="col-md-3 feild">
										<div class="form-group">
											<input type="text" class="form-control">
											<label class="form-control-label">Country</label>
										</div>
                    </div>
                     <div class="col-md-3 feild">
										<div class="form-group">
											<input type="text" class="form-control">
											<label class="form-control-label">City</label>
										</div>
                    </div>
                    <div class="col-md-3 feild">
										<div class="form-group">
											<input type="text" class="form-control">
											<label class="form-control-label">Index</label>
										</div>
                    </div>
                      <div class="col-md-3 feild">
                        <div class="form-group">
                        <input type="text" class="form-control">
                        <label class="form-control-label">Address</label>
                      </div>
                    </div>
                      </div>
                    </div>
								
                    </div>                  
                    </div>


                  <div class="row seprater">
                    <div class="col-md-6 pickup-dilavey">
                      <input type="checkbox" v-model="pickup_section" class="mt-3 mb-3"> Check this box, if consignee is the same as pickup
                     <div class="expanel expanel-default">
                      <div class="expanel-heading clearfix align-items-center">Pickup
                        <div class="float-right">
                          <button class="btn btn-sm btn-default" type="button" data-toggle="collapse" data-target="#pickup"
                            aria-expanded="false" aria-controls="pickup"><i class="fa fa-bars"></i></button>
                        </div>
                      </div>
                      <div class="expanel-body collapse" id="pickup">
                      <div class="form-group">
                
                         <select id="country" name="country" class="form-control" v-model="pickupp" :disabled="pickup_section ? true : false">
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
											<label class="form-control-label">Pickup</label>
										</div>
                    
                    <div class="col-md-4 feild">
										<div class="form-group">
											<input type="date" class="form-control" v-model="pickupp" :disabled="pickup_section ? true : false">
											<label class="form-control-label">Date</label>
										</div>
                    </div>
                     <div class="col-md-4 feild">
										<div class="form-group">
											<input type="time" class="form-control" v-model="pickupp" :disabled="pickup_section ? true : false">
											<label class="form-control-label">Time</label>
										</div>
                    </div>
                    <div class="col-md-4 feild">
										<div class="form-group">
											<input type="time" class="form-control" v-model="pickupp" :disabled="pickup_section ? true : false">
											<label class="form-control-label">Time Promise</label>
										</div>
                    </div>

                    <div class="col-md-3 feild">
										<div class="form-group">
											<input type="text" class="form-control" v-model="pickupp" :disabled="pickup_section ? true : false">
											<label class="form-control-label">Country</label>
										</div>
                    </div>
                     <div class="col-md-3 feild">
										<div class="form-group">
											<input type="text" class="form-control" v-model="pickupp" :disabled="pickup_section ? true : false">
											<label class="form-control-label">City</label>
										</div>
                    </div>
                    <div class="col-md-3 feild">
										<div class="form-group">
											<input type="text" class="form-control" v-model="pickupp" :disabled="pickup_section ? true : false">
											<label class="form-control-label">Index</label>
										</div>
                    </div>
                      <div class="col-md-3 feild">
                        <div class="form-group">
                        <input type="text" class="form-control" v-model="pickupp" :disabled="pickup_section ? true : false">
                        <label class="form-control-label">Address</label>
                      </div>
                    </div>

                      </div>
                    </div>
								
                    </div> 
                     <div class="col-md-6 pickup-dilavey">
                      <input type="checkbox" v-model="delivery_section" class="mt-3 mb-3"> Check this box, if consignee is the same as delivery
                     <div class="expanel expanel-default">
                      <div class="expanel-heading clearfix align-items-center">Delivery
                        <div class="float-right">
                          <button class="btn btn-sm btn-default" type="button" data-toggle="collapse" data-target="#delivery"
                            aria-expanded="false" aria-controls="delivery"><i class="fa fa-bars"></i></button>
                        </div>
                      </div>
                      <div class="expanel-body collapse" id="delivery">
                   
                      <div class="form-group">
											  <select id="country" name="country" class="form-control" v-model="delivery" :disabled="delivery_section ? true : false">
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
											<label class="form-control-label">Pickup</label>
										</div>
                    
                    <div class="col-md-4 feild">
										<div class="form-group">
											<input type="date" class="form-control"  v-model="delivery" :disabled="delivery_section ? true : false">
											<label class="form-control-label">Date</label>
										</div>
                    </div>
                     <div class="col-md-4 feild">
										<div class="form-group">
											<input type="time" class="form-control"  v-model="delivery" :disabled="delivery_section ? true : false">
											<label class="form-control-label">Time</label>
										</div>
                    </div>
                    <div class="col-md-4 feild">
										<div class="form-group">
											<input type="time" class="form-control"  v-model="delivery" :disabled="delivery_section ? true : false">
											<label class="form-control-label">Time Promise</label>
										</div>
                    </div>

                    <div class="col-md-3 feild">
										<div class="form-group">
											<input type="text" class="form-control"  v-model="delivery" :disabled="delivery_section ? true : false">
											<label class="form-control-label">Country</label>
										</div>
                    </div>
                     <div class="col-md-3 feild">
										<div class="form-group">
											<input type="text" class="form-control"  v-model="delivery" :disabled="delivery_section ? true : false">
											<label class="form-control-label">City</label>
										</div>
                    </div>
                    <div class="col-md-3 feild">
										<div class="form-group">
											<input type="text" class="form-control"  v-model="delivery" :disabled="delivery_section ? true : false">
											<label class="form-control-label">Index</label>
										</div>
                    </div>
                      <div class="col-md-3 feild">
                        <div class="form-group">
                        <input type="text" class="form-control"  v-model="delivery" :disabled="delivery_section ? true : false">
                        <label class="form-control-label">Address</label>
                      </div>
                    </div>

                      </div>


                    </div>
								
                    </div>                  
                    </div>

                    <div class="row seprater">

                    <div class="col-md-6">
                     <div class="expanel expanel-default">
                      <div class="expanel-heading clearfix align-items-center">Customs
                        <div class="float-right">
                          <button class="btn btn-sm btn-default" type="button" data-toggle="collapse" data-target="#customs"
                            aria-expanded="false" aria-controls="customs"><i class="fa fa-bars"></i></button>
                        </div>
                      </div>
                      <div class="expanel-body collapse show" id="customs">
                   
                      <div class="form-group">
											<input type="text" class="form-control">
                      <label class="form-control-label">Customs</label>
										</div>

                    <div class="col-md-4 feild">
										<div class="form-group">
											<input type="date" class="form-control">
											<label class="form-control-label">Date</label>
										</div>
                    </div>
                     <div class="col-md-4 feild">
										<div class="form-group">
											<input type="time" class="form-control">
											<label class="form-control-label">Time</label>
										</div>
                    </div>
                    <div class="col-md-4 feild">
										<div class="form-group">
											<input type="time" class="form-control">
											<label class="form-control-label">Time Promise</label>
										</div>
                    </div>

                    <div class="col-md-3 feild">
										<div class="form-group">
											<input type="text" class="form-control">
											<label class="form-control-label">Country</label>
										</div>
                    </div>
                     <div class="col-md-3 feild">
										<div class="form-group">
											<input type="text" class="form-control">
											<label class="form-control-label">City</label>
										</div>
                    </div>
                    <div class="col-md-3 feild">
										<div class="form-group">
											<input type="text" class="form-control">
											<label class="form-control-label">Index</label>
										</div>
                    </div>
                      <div class="col-md-3 feild">
                        <div class="form-group">
                        <input type="text" class="form-control">
                        <label class="form-control-label">Address</label>
                      </div>
                    </div> 

                      <div class="col-md-6 feild">
                        <div class="form-group">
                        <input type="text" class="form-control">
                        <label class="form-control-label">Reference</label>
                      </div>
                    </div>

                      <div class="col-md-6 feild">
                        <div class="form-group">
                        <input type="text" class="form-control">
                        <label class="form-control-label">Remark</label>
                      </div>
                    </div>
                    
                    <div class="col-md-4 feild">
										<div class="form-group">
											<input type="text" class="form-control">
                      <label class="form-control-label">Terms</label>
										</div>
                    </div>
                     <div class="col-md-4 feild">
										<div class="form-group">
											<input type="text" class="form-control">
                      <label class="form-control-label">Source Doc</label>
										</div>
                    </div>
                    <div class="col-md-4 feild">
										<div class="form-group">
											<input type="text" class="form-control">
                    <label class="form-control-label">User</label>
										</div>
                    </div>

                      </div>


                    </div>
								
                    </div> 

                     <div class="col-md-6">
                     <div class="expanel expanel-default">
                      <div class="expanel-heading clearfix align-items-center">Master
                        <div class="float-right">
                          <button class="btn btn-sm btn-default" type="button" data-toggle="collapse" data-target="#master"
                            aria-expanded="false" aria-controls="master"><i class="fa fa-bars"></i></button>
                        </div>
                      </div>
                      <div class="expanel-body collapse show" id="master">
                   
                               
                      <div class="col-md-6 feild">
                        <div class="form-group">
                        <input type="text" class="form-control">
                        <label class="form-control-label">MID</label>
                      </div>
                    </div>

                      <div class="col-md-6 feild">
                        <div class="form-group">
                        <input type="text" class="form-control">
                        <label class="form-control-label">Carrier</label>
                      </div>
                    </div>

                    <div class="col-md-4 feild">
										<div class="form-group">
											<input type="text" class="form-control">
                      <label class="form-control-label">Vehicle Type</label>
										</div>
                    </div>
                     <div class="col-md-4 feild">
										<div class="form-group">
											<input type="text" class="form-control">
                      <label class="form-control-label">Vehicle Type</label>
										</div>
                    </div>
                    <div class="col-md-4 feild">
										<div class="form-group">
                      <select name="" id="" class="form-control">
                        <option value="one">One</option>
                        <option value="one">One</option>
                        <option value="one">One</option>
                      </select>
                      	<label class="form-control-label">Type</label>
										</div>
                    </div>

                    <div class="col-md-6 feild">
                        <div class="form-group">
                        <input type="date" class="form-control">
                        <label class="form-control-label">Pickup Date</label>
                      </div>
                    </div>

                      <div class="col-md-6 feild">
                        <div class="form-group">
                        <input type="date" class="form-control">
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
														<li><a href="#profit" data-toggle="tab">Profit</a></li>
														<li><a href="#files" data-toggle="tab">Files</a></li>
                            <li><a href="#customer" data-toggle="tab">Customer / Bill</a></li>
                            <li><a href="#tracking" data-toggle="tab">Tracking</a></li>
													</ul>
												</div>
											</div>
											<div class="panel-body tabs-menu-body">
												<div class="tab-content">
													<div class="tab-pane active " id="good">
										<div class="table-responsive">
											<table id="example" class="table table-striped table-bordered text-nowrap w-100 dataTable no-footer" role="grid" aria-describedby="example_info">
												<thead>
														<tr>
														<th><input type="checkbox" name="" id="" v-model="selectGoods" @change="selectedGoods"> &nbsp; <i class="fa fa-ban" data-toggle="tooltip" title="" data-original-title="fa fa-ban"></i> &nbsp; <i class="ion-plus" data-toggle="tooltip" title="" data-original-title="ion-plus"></i></th>
														<th class="wd-15p sorting_asc"  style="width: 30%">Qty</th>
														<th class="wd-15p sorting_asc"  style="width: 80%">Units</th>
														<th class="wd-15p sorting_asc"  style="width: 30%">Kg Calc</th>
														<th class="wd-15p sorting_asc"  style="width: 30%">LDM</th>
														<th class="wd-15p sorting_asc"  style="width: 117.109px;">Value</th>
														<th class="wd-15p sorting_asc"  style="width: 117.109px;">Description</th>
														<th class="wd-15p sorting_asc"  style="width: 117.109px;">Volume (m3)</th>
														<th class="wd-15p sorting_asc"  style="width: 117.109px;">Length (cm)</th>
														<th class="wd-15p sorting_asc"  style="width: 117.109px;">Width (cm)</th>
														<th class="wd-15p sorting_asc"  style="width: 117.109px;">Height (cm)</th>
														<th></th>
													</tr>
												</thead>
												<tbody>
                          <tr>
														<td class="text-center"><input type="checkbox" v-model="goods"></td>
														<td><input type="text" class="form-control" id="row-1-age"></td>
														<td><select class="form-control">
															<option value="EUR" selected="selected">EUR</option>
															<option value="EUR" selected="selected">EUR</option>
															<option value="EUR" selected="selected">EUR</option>
														</select>
													   </td>
													  <td><input type="text" class="form-control" id="row-1-age"></td>
														<td><input type="text" class="form-control" id="row-1-position"></td>
														<td><input type="text" class="form-control" id="row-1-position"></td>
														<td><input type="text" class="form-control" id="row-1-position"></td>
														<td><input type="text" class="form-control" id="row-1-position"></td>
														<td><input type="text" class="form-control" id="row-1-position"></td>
														<td><input type="text" class="form-control" id="row-1-position"></td>
														<td><input type="text" class="form-control" id="row-1-position"></td>
                            <td><a class="btn btn-app btn-success"><i class="fa fa-trash"></i></a></td>
													</tr>
                           <tr>
														<td class="text-center"><input type="checkbox" v-model="goods"></td>
														<td><input type="text" class="form-control" id="row-1-age"></td>
														<td><select class="form-control">
															<option value="EUR" selected="selected">EUR</option>
															<option value="EUR" selected="selected">EUR</option>
															<option value="EUR" selected="selected">EUR</option>
														</select>
													   </td>
													  <td><input type="text" class="form-control" id="row-1-age"></td>
														<td><input type="text" class="form-control" id="row-1-position"></td>
														<td><input type="text" class="form-control" id="row-1-position"></td>
														<td><input type="text" class="form-control" id="row-1-position"></td>
														<td><input type="text" class="form-control" id="row-1-position"></td>
														<td><input type="text" class="form-control" id="row-1-position"></td>
														<td><input type="text" class="form-control" id="row-1-position"></td>
														<td><input type="text" class="form-control" id="row-1-position"></td>
                            <td><a class="btn btn-app btn-success"><i class="fa fa-trash"></i></a></td>
													</tr>
                           <tr>
														<td class="text-center"><input type="checkbox" v-model="goods"></td>
														<td><input type="text" class="form-control" id="row-1-age"></td>
														<td><select class="form-control">
															<option value="EUR" selected="selected">EUR</option>
															<option value="EUR" selected="selected">EUR</option>
															<option value="EUR" selected="selected">EUR</option>
														</select>
													   </td>
													  <td><input type="text" class="form-control" id="row-1-age"></td>
														<td><input type="text" class="form-control" id="row-1-position"></td>
														<td><input type="text" class="form-control" id="row-1-position"></td>
														<td><input type="text" class="form-control" id="row-1-position"></td>
														<td><input type="text" class="form-control" id="row-1-position"></td>
														<td><input type="text" class="form-control" id="row-1-position"></td>
														<td><input type="text" class="form-control" id="row-1-position"></td>
														<td><input type="text" class="form-control" id="row-1-position"></td>
                            <td><a class="btn btn-app btn-success"><i class="fa fa-trash"></i></a></td>
													</tr>

                          <tr>
														<td class="text-center"></td>
														<td><input type="text" class="form-control" id="row-1-age" value="0"></td>
														<td><input type="text" class="form-control" id="row-1-age" value="0"></td>
  													<td><input type="text" class="form-control" id="row-1-age" value="0"></td>
						
													</tr>
												</tbody>
											</table>
                      <hr/>
                    	<div class="row">
                      <div class="col-sm-6 col-lg-6 col-xl-3">
                        <div class="card text-center">
                           <div class="card-body">
						          				 <img class="avatar avatar-md brround cover-image" :src="baseUrl+`/assets/images/dashboard.png`">
                               <h4><input type="checkbox" class="mt-4"> Temp. Sensitive</h4>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-lg-6 col-xl-3">
                        <div class="card text-center">
                          <div class="card-body">
						          				 <img class="avatar avatar-md brround cover-image" :src="baseUrl+`/assets/images/adrr.png`">
                               <h4><input type="checkbox" class="mt-4"> ADR Carriage</h4>
                          </div>
                        </div>
                      </div>
                    <div class="col-sm-6 col-lg-6 col-xl-3">
                      <div class="card text-center">
                           <div class="card-body">
						          				 <img class="avatar avatar-md brround cover-image" :src="baseUrl+`/assets/images/handle.png`">
                               <h4><input type="checkbox" class="mt-4"> Fargile Carriage</h4>
                          </div>
                      </div>
                    </div>

					        	</div>
        
										</div>
													</div>
													<div class="tab-pane  " id="profit">
													<button type="button" class="btn btn-default pb-2"><i class="fe fe-plus mr-2"></i>Add</button>  
                          <p><strong>Revenue</strong></p>
                          <table class="table text-nowrap">
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
																<td><input type="text" class="form-control"></td>
                                <td><input type="text" class="form-control"></td>
																<td><input type="text" class="form-control"></td>
																<td><input type="text" class="form-control"></td>
																<td><input type="text" class="form-control"></td>
                                <td><input type="text" class="form-control"></td>
                                <td><a class="btn btn-app btn-success">
                                <i class="fa fa-trash"></i></a></td>
															</tr>
														</tbody>
													</table>
                          <hr/>
                          <button type="button" class="btn btn-default pb-2"><i class="fe fe-plus mr-2"></i>Add</button>  
                          <p><strong>Expense</strong></p>
                          <table class="table text-nowrap">
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
																<td><input type="text" class="form-control"></td>
                                <td><input type="text" class="form-control"></td>
																<td><input type="text" class="form-control"></td>
																<td><input type="text" class="form-control"></td>
																<td><input type="text" class="form-control"></td>
                                <td><input type="text" class="form-control"></td>
                                <td><a class="btn btn-app btn-success">
                                <i class="fa fa-trash"></i></a></td>
															</tr>
														</tbody>
													</table>
													</div>
													<div class="tab-pane " id="files">
                              <div class="form-group">
                              <div class="custom-file">
                                <input type="file" class="custom-file-input" name="example-file-input-custom">
                                <label class="custom-file-label">Upload file</label>
                              </div>
                              </div>
													</div>
                           <div class="tab-pane " id="customer">
                              <div class="form-group">
                               <div class="row">
                                   <div class="col-md-6">
                                <div class="expanel expanel-default">
                                  <div class="expanel-heading clearfix align-items-center">Customer
                                  </div>
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
                                  <input type="text" class="form-control">
                                  <label class="form-control-label">Country</label>
                                </div>
                                </div>
                                <div class="col-md-3 feild">
                                <div class="form-group">
                                  <input type="text" class="form-control">
                                  <label class="form-control-label">City</label>
                                </div>
                                </div>
                                <div class="col-md-3 feild">
                                <div class="form-group">
                                  <input type="text" class="form-control">
                                  <label class="form-control-label">Index</label>
                                </div>
                                </div>
                                  <div class="col-md-3 feild">
                                    <div class="form-group">
                                    <input type="text" class="form-control">
                                    <label class="form-control-label">Address</label>
                                  </div>
                                </div>

                                <div class="col-md-4 feild">
                                <div class="form-group">
                                  <input type="text" class="form-control">
                                  <label class="form-control-label">VAT</label>
                                </div>
                                </div>
                                <div class="col-md-4 feild">
                                <div class="form-group">
                                  <input type="text" class="form-control">
                                  <label class="form-control-label">Reg nr</label>
                                </div>
                                </div>
                                <div class="col-md-4 feild">
                                <div class="form-group">
                                  <input type="text" class="form-control">
                                  <label class="form-control-label">ID</label>
                                </div>
                                </div>
                                  </div>
                                </div>
                             </div> 
                     <div class="col-md-6">
                     <div class="expanel expanel-default">
                      <div class="expanel-heading clearfix align-items-center">Bill To
                      </div>
                      <div class="expanel-body">
                      <div class="form-group">
											<input type="text" class="form-control"  >
											<label class="form-control-label">Bill To</label>
										</div>
                    
                    <div class="col-md-3 feild">
										<div class="form-group">
											<input type="text" class="form-control">
											<label class="form-control-label">Country</label>
										</div>
                    </div>
                     <div class="col-md-3 feild">
										<div class="form-group">
											<input type="text" class="form-control"  >
											<label class="form-control-label">City</label>
										</div>
                    </div>
                    <div class="col-md-3 feild">
										<div class="form-group">
											<input type="text" class="form-control"  >
											<label class="form-control-label">Index</label>
										</div>
                    </div>
                      <div class="col-md-3 feild">
                        <div class="form-group">
                        <input type="text" class="form-control"  >
                        <label class="form-control-label">Address</label>
                      </div>
                       </div>

                    <div class="col-md-4 feild">
										<div class="form-group">
											<input type="text" class="form-control"  >
											<label class="form-control-label">VAT</label>
										</div>
                    </div>
                     <div class="col-md-4 feild">
										<div class="form-group">
											<input type="text" class="form-control"  >
											<label class="form-control-label">Reg nr</label>
										</div>
                    </div>
                    <div class="col-md-4 feild">
										<div class="form-group">
											<input type="text" class="form-control"  >
											<label class="form-control-label">ID</label>
										</div>
                    </div>


                      </div>
                    </div>
								
                    </div> 
                               </div>
                              </div>
													</div>
                          <div class="tab-pane " id="tracking">
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
									<button type="button" class="btn btn-success" data-dismiss="modal" @click="orderForm">Close</button>
									<button type="button" class="btn btn-success" @click="editOrder">{{isOrderEditable ? 'Edit' : 'Save Changes'}}</button>
								</div>
									    </form>
													</div>
													<div class="tab-pane cmr-tab" id="tab21">
                                <form>
                                    <div class="row">
                                      <div class="col-md-2 lg-2 feild">
                                      <div class="form-group">
                                            <input type="text" class="form-control" >
                                            <label class="form-control-label">ID</label>
                                      </div>
                                      </div>

                                      <div class="col-md-2 lg-2 feild">
                                      <div class="form-group">
                                        <input type="text" class="form-control" >
                                        <label class="form-control-label">Version nr</label>
                                      </div>
                                      </div>

                                      <div class="col-md-2 lg-2 feild">
                                      <div class="form-group">
                                        <input type="text" class="form-control" >
                                        <label class="form-control-label">Index Register</label>
                                      </div>
                                      </div> 

                                    <div class="col-md-3 lg-2 feild">
                                      <div class="form-group">
                                        <select name="" id="" class="form-control" >
                                          <option value="read">INLAND</option>
                                          <option value="read">INLAND</option>
                                          <option value="read">INLAND</option>
                                        </select>
                                        <label class="form-control-label">Type</label>
                                      </div>
                                      </div>

                                      <div class="col-md-3 lg-2 feild">
                                      <div class="form-group">
                                        <select name="" id="" class="form-control" >
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
                                            <input type="text" class="form-control" >
                                            <label class="form-control-label">1. Sender (name,address,country)</label>
                                        </div>
                                                             
                                        <div class="form-group">
                                            <input type="text" class="form-control" >
                                            <label class="form-control-label">2. Consignee (name,address,country)</label>
                                        </div>

                                        <div class="form-group">
                                            <input type="text" class="form-control" >
                                            <label class="form-control-label">3. Place of delivey of the goods (address,country)</label>
                                        </div>

                                        <div class="form-group">
                                            <input type="text" class="form-control" >
                                            <label class="form-control-label">4. Place of tacking of the goods (address,country)</label>
                                        </div>

                                        <div class="form-group">
                                            <input type="file" class="form-control" >
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
                                          <input type="text" class="form-control" >
                                          <label class="form-control-label">6. Marks and nr</label>
                                           </div>
                                          </div> 

                                          <div class="col-md-3 feild">
                                          <div class="form-group">
                                          <input type="text" class="form-control" >
                                          <label class="form-control-label">7. Nr. of pages</label>
                                          </div>
                                          </div>
                                          <div class="col-md-3 feild">
                                          <div class="form-group">
                                          <input type="text" class="form-control" >
                                          <label class="form-control-label">8. Methods of packing</label>
                                         </div>
                                         </div>
                                         <div class="col-md-3 feild">
                                        <div class="form-group">
                                        <input type="text" class="form-control" >
                                        <label class="form-control-label">9. Nature of goods</label>
                                       </div>
                                         </div>
                                      </div>

                                      <div class="col-sm-6">
                                        <div class="col-md-4 feild">        
                                        <div class="form-group">
                                          <input type="text" class="form-control" >
                                          <label class="form-control-label">10. Statistical nr</label>
                                        </div>
                                        </div>
                                        <div class="col-md-4 feild">        
                                          <div class="form-group">
                                          <input type="text" class="form-control" >
                                          <label class="form-control-label">11. Gross weight (kg)</label>
                                        </div>
                                        </div>
                                        <div class="col-md-4 feild">        
                                        <div class="form-group">
                                        <input type="text" class="form-control" >
                                        <label class="form-control-label">12. Vol. (eur/Idm/m<sup>3</sup>)</label>
                                       </div>
                                        </div>
                                      </div>
                         
                                    </div>
  
                                      <div class="row">
                                        <div class="col-sm-6 md-12 lg-1">
                                        
                                        <div class="form-group">
                                            <input type="text" class="form-control"  placeholder="eg . treatment of carriage in customs, etc">
                                            <label class="form-control-label">13. Senders instruction</label>
                                        </div>
                                                             
                                        <div class="form-group">
                                            <input type="text" class="form-control" >
                                            <label class="form-control-label">14. Carrier (name,address,country)</label>
                                        </div>

                                        <div class="form-group">
                                            <input type="text" class="form-control" >
                                            <label class="form-control-label">15. Successive carrirer (name,address,country)</label>
                                        </div>

                                        <div class="form-group">
                                            <input type="text" class="form-control" >
                                            <label class="form-control-label">16. Place of tacking of the goods (address,country)</label>
                                        </div>                                  
                                      </div>

                                        <div class="col-sm-6 table-custom">
                                          <div class="table-responsive">
                                              <table class="table card-table table-vcenter text-nowrap  align-items-center">
                            
                                                  <tr>
                                                    <td>17. To be payed by</td>
                                                    <td>Sender</td>
                                                    <td>Currency</td>
                                                    <td>Consignee</td>
                                                  </tr>
                                                  <tr>
                                                    <td>Carriage charges</td>
                                                    <td><input type="number" class="form-control" ></td>
                                                    <td><input type="text" class="form-control" ></td>
                                                    <td><input type="text" class="form-control" ></td>
                                                  </tr>
                                                    <tr>
                                                    <td>Deduction</td>
                                                    <td><input type="number" class="form-control" ></td>
                                                    <td><input type="text" class="form-control" ></td>
                                                    <td><input type="text" class="form-control" ></td>
                                                  </tr>
                                                    <tr>
                                                    <td>Balance</td>
                                                    <td><input type="number" class="form-control" ></td>
                                                    <td><input type="text" class="form-control" ></td>
                                                    <td><input type="text" class="form-control" ></td>
                                                  </tr>
                                                    <tr>
                                                    <td>Supplier charges</td>
                                                    <td><input type="number" class="form-control" ></td>
                                                    <td><input type="text" class="form-control" ></td>
                                                    <td><input type="text" class="form-control" ></td>
                                                  </tr>
                                                    <tr>
                                                   <td>Other</td>
                                                    <td><input type="number" class="form-control" ></td>
                                                    <td><input type="text" class="form-control" ></td>
                                                    <td><input type="text" class="form-control" ></td>
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
													<!-- Tabs -->
													<ul class="nav panel-tabs">
														<li><a href="#good-cmr" class="active" data-toggle="tab">Good</a></li>
                            <li><a href="#cmr" data-toggle="tab">CMR</a></li>
														<li><a href="#profit-cmr" data-toggle="tab">Profit</a></li>
														<li><a href="#files-cmr" data-toggle="tab">Files</a></li>
                            <li><a href="#customer-cmr" data-toggle="tab">Customer / Bill</a></li>
                            <li><a href="#tracking-cmr" data-toggle="tab">Tracking</a></li>
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
														<th><input type="checkbox" name="" id="" v-model="selectGoods" @change="selectedGoods"> &nbsp; <i class="fa fa-ban" data-toggle="tooltip" title="" data-original-title="fa fa-ban"></i> &nbsp; <i class="ion-plus" data-toggle="tooltip" title="" data-original-title="ion-plus"></i></th>
														<th class="wd-15p sorting_asc"  style="width: 30%">Qty</th>
														<th class="wd-15p sorting_asc"  style="width: 80%">Units</th>
														<th class="wd-15p sorting_asc"  style="width: 30%">Kg Calc</th>
														<th class="wd-15p sorting_asc"  style="width: 30%">LDM</th>
														<th class="wd-15p sorting_asc"  style="width: 117.109px;">Value</th>
														<th class="wd-15p sorting_asc"  style="width: 117.109px;">Description</th>
														<th class="wd-15p sorting_asc"  style="width: 117.109px;">Volume (m3)</th>
														<th class="wd-15p sorting_asc"  style="width: 117.109px;">Length (cm)</th>
														<th class="wd-15p sorting_asc"  style="width: 117.109px;">Width (cm)</th>
														<th class="wd-15p sorting_asc"  style="width: 117.109px;">Height (cm)</th>
														<th></th>
													</tr>
												</thead>
												<tbody>
                          <tr>
														<td class="text-center"><input type="checkbox" v-model="goods"></td>
														<td><input type="text" class="form-control" id="row-1-age" ></td>
														<td><select class="form-control" >
															<option value="EUR" selected="selected">EUR</option>
															<option value="EUR" selected="selected">EUR</option>
															<option value="EUR" selected="selected">EUR</option>
														</select>
													   </td>
													  <td><input type="text" class="form-control" id="row-1-age" ></td>
														<td><input type="text" class="form-control" id="row-1-position" ></td>
														<td><input type="text" class="form-control" id="row-1-position" ></td>
														<td><input type="text" class="form-control" id="row-1-position" ></td>
														<td><input type="text" class="form-control" id="row-1-position" ></td>
														<td><input type="text" class="form-control" id="row-1-position" ></td>
														<td><input type="text" class="form-control" id="row-1-position" ></td>
														<td><input type="text" class="form-control" id="row-1-position" ></td>
                            <td><a class="btn btn-app btn-success"><i class="fa fa-trash"></i></a></td>
													</tr>
                           <tr>
														<td class="text-center"><input type="checkbox" v-model="goods" ></td>
														<td><input type="text" class="form-control" id="row-1-age" ></td>
														<td><select class="form-control" >
															<option value="EUR" selected="selected">EUR</option>
															<option value="EUR" selected="selected">EUR</option>
															<option value="EUR" selected="selected">EUR</option>
														</select>
													   </td>
													  <td><input type="text" class="form-control" id="row-1-age" ></td>
														<td><input type="text" class="form-control" id="row-1-position" ></td>
														<td><input type="text" class="form-control" id="row-1-position" ></td>
														<td><input type="text" class="form-control" id="row-1-position" ></td>
														<td><input type="text" class="form-control" id="row-1-position" ></td>
														<td><input type="text" class="form-control" id="row-1-position" ></td>
														<td><input type="text" class="form-control" id="row-1-position" ></td>
														<td><input type="text" class="form-control" id="row-1-position" ></td>
                            <td><a class="btn btn-app btn-success"><i class="fa fa-trash"></i></a></td>
													</tr>
                           <tr>
														<td class="text-center"><input type="checkbox" v-model="goods"></td>
														<td><input type="text" class="form-control" id="row-1-age" ></td>
														<td><select class="form-control" >
															<option value="EUR" selected="selected">EUR</option>
															<option value="EUR" selected="selected">EUR</option>
															<option value="EUR" selected="selected">EUR</option>
														</select>
													   </td>
													  <td><input type="text" class="form-control" id="row-1-age" ></td>
														<td><input type="text" class="form-control" id="row-1-position" ></td>
														<td><input type="text" class="form-control" id="row-1-position" ></td>
														<td><input type="text" class="form-control" id="row-1-position" ></td>
														<td><input type="text" class="form-control" id="row-1-position" ></td>
														<td><input type="text" class="form-control" id="row-1-position" ></td>
														<td><input type="text" class="form-control" id="row-1-position" ></td>
														<td><input type="text" class="form-control" id="row-1-position" ></td>
                            <td><a class="btn btn-app btn-success"><i class="fa fa-trash"></i></a></td>
													</tr>

                          <tr>
														<td class="text-center"></td>
														<td><input type="text" class="form-control" id="row-1-age" value="0" ></td>
														<td><input type="text" class="form-control" id="row-1-age" value="0" ></td>
  													<td><input type="text" class="form-control" id="row-1-age" value="0" ></td>
						
													</tr>
												</tbody>
											</table>        
										</div>
												</div>

                    <div class="tab-pane" id="cmr">
                      <div class="table-responsive">
                        <table class="table card-table table-vcenter text-nowrap">
                          <thead>
                            <tr>
                              <th><input type="checkbox" name="" id="" ></th>
                              <th>Version nr</th>
                              <th>Date / Time</th>
                              <th>Created By</th>
                              <th>Download</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td><input type="checkbox" name="" id="" ></td>
                              <td>Version 1</td>
                              <td>27.11.2022 / 10:55</td>
                              <td>Jaan Saan</td>
                              <td><a href="#" class="btn btn-success">Download</a></td>
                              <td><i class="fa fa-trash" aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                              <td><input type="checkbox" name="" id="" ></td>
                              <td>Version 2</td>
                              <td>27.11.2022 / 10:55</td>
                              <td>John Simth</td>
                              <td><a href="#" class="btn btn-success">Download</a></td>
                              <td><i class="fa fa-trash" aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                              <td><input type="checkbox" name="" id="" ></td>
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
                          
													<div class="tab-pane  " id="profit-cmr">
													<button type="button" class="btn btn-default pb-2"><i class="fe fe-plus mr-2"></i>Add</button>  
                          <p><strong>Revenue</strong></p>
                          <table class="table card-table table-vcenter text-nowrap  align-items-center">
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
																<td><input type="text" class="form-control" ></td>
                                <td><input type="text" class="form-control" ></td>
																<td><input type="text" class="form-control" ></td>
																<td><input type="text" class="form-control" ></td>
																<td><input type="text" class="form-control" ></td>
                                <td><input type="text" class="form-control" ></td>
                                <td><a class="btn btn-app btn-success">
                                <i class="fa fa-trash"></i></a></td>
															</tr>
														</tbody>
													</table>
                          <hr/>
                          <button type="button" class="btn btn-default pb-2"><i class="fe fe-plus mr-2"></i>Add</button>  
                          <p><strong>Expense</strong></p>
                          <table class="table card-table table-vcenter text-nowrap  align-items-center">
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
																<td><input type="text" class="form-control" ></td>
                                <td><input type="text" class="form-control" ></td>
																<td><input type="text" class="form-control" ></td>
																<td><input type="text" class="form-control" ></td>
																<td><input type="text" class="form-control" ></td>
                                <td><input type="text" class="form-control" ></td>
                                <td><a class="btn btn-app btn-success">
                                <i class="fa fa-trash"></i></a></td>
															</tr>
														</tbody>
													</table>
													</div>
													<div class="tab-pane" id="files-cmr">
                              <div class="form-group">
                              <div class="custom-file">
                                <input type="file" class="custom-file-input" name="example-file-input-custom" >
                                <label class="custom-file-label">Upload file</label>
                              </div>
                              </div>
													</div>
                           <div class="tab-pane" id="customer-cmr">
                              <div class="form-group">
                               <div class="row">
                                   <div class="col-md-6">
                     <div class="expanel expanel-default">
                      <div class="expanel-heading clearfix align-items-center">Customer
                      </div>
                      <div class="expanel-body">
                   
                      <div class="form-group">
                      	  <select id="country" name="country" class="form-control" >
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
											<input type="text" class="form-control" >
											<label class="form-control-label">Country</label>
										</div>
                    </div>
                     <div class="col-md-3 feild">
										<div class="form-group">
											<input type="text" class="form-control" >
											<label class="form-control-label">City</label>
										</div>
                    </div>
                    <div class="col-md-3 feild">
										<div class="form-group">
											<input type="text" class="form-control" >
											<label class="form-control-label">Index</label>
										</div>
                    </div>
                      <div class="col-md-3 feild">
                        <div class="form-group">
                        <input type="text" class="form-control" >
                        <label class="form-control-label">Address</label>
                      </div>
                    </div>

                     <div class="col-md-4 feild">
										<div class="form-group">
											<input type="text" class="form-control" >
											<label class="form-control-label">VAT</label>
										</div>
                    </div>
                     <div class="col-md-4 feild">
										<div class="form-group">
											<input type="text" class="form-control" >
											<label class="form-control-label">Reg nr</label>
										</div>
                    </div>
                    <div class="col-md-4 feild">
										<div class="form-group">
											<input type="text" class="form-control" >
											<label class="form-control-label">ID</label>
										</div>
                    </div>
                      </div>
                    </div>
								
                    </div> 
                     <div class="col-md-6">
                     <div class="expanel expanel-default">
                      <div class="expanel-heading clearfix align-items-center">Bill To
                      </div>
                      <div class="expanel-body">
                      <div class="form-group">
											<input type="text" class="form-control"  >
											<label class="form-control-label">Bill To</label>
										</div>
                    
                    <div class="col-md-3 feild">
										<div class="form-group">
											<input type="text" class="form-control" >
											<label class="form-control-label">Country</label>
										</div>
                    </div>
                     <div class="col-md-3 feild">
										<div class="form-group">
											<input type="text" class="form-control"  >
											<label class="form-control-label">City</label>
										</div>
                    </div>
                    <div class="col-md-3 feild">
										<div class="form-group">
											<input type="text" class="form-control"  >
											<label class="form-control-label">Index</label>
										</div>
                    </div>
                      <div class="col-md-3 feild">
                        <div class="form-group">
                        <input type="text" class="form-control"  >
                        <label class="form-control-label">Address</label>
                      </div>
                       </div>

                    <div class="col-md-4 feild">
										<div class="form-group">
											<input type="text" class="form-control"  >
											<label class="form-control-label">VAT</label>
										</div>
                    </div>
                     <div class="col-md-4 feild">
										<div class="form-group">
											<input type="text" class="form-control"  >
											<label class="form-control-label">Reg nr</label>
										</div>
                    </div>
                    <div class="col-md-4 feild">
										<div class="form-group">
											<input type="text" class="form-control"  >
											<label class="form-control-label">ID</label>
										</div>
                    </div>


                      </div>
                    </div>
								
                    </div> 
                               </div>
                              </div>
													</div>
                          <div class="tab-pane " id="tracking-cmr">
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
</template>