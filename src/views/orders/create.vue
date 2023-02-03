<template>
  <main-header/>
  	<div class="container content-area">
						<div class="row mt-5">
							<div class="col-12">
								<div class="card shadow">
									<div class="card-header bg-transparent border-0">
										<div>
											<h3 class="card-title mb-0">Add Order</h3>
										</div>
									</div>
								</div>
                
                <form>
                    <div class="row">
                    <div class="col-md-3 feild">
										<div class="form-group">
                          <input type="text" class="form-control">
                          <label class="form-control-label">ID</label>
                    </div>
                    </div>

                    <div class="col-md-3 feild">
                    <div class="form-group">
											<input type="text" class="form-control">
                      <label class="form-control-label">Index Register</label>
										</div>
                    </div>

                    <div class="col-md-3 feild">
                    <div class="form-group">
											<select name="" id="" class="form-control">
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

                    <div class="row seprater ">
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
											<input type="text" class="form-control">
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
											<input type="text" class="form-control">
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
                            <td><a class="btn btn-app btn-danger"><i class="fa fa-trash"></i></a></td>
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
                            <td><a class="btn btn-app btn-danger"><i class="fa fa-trash"></i></a></td>
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
                            <td><a class="btn btn-app btn-danger"><i class="fa fa-trash"></i></a></td>
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
																<td><input type="text" class="form-control"></td>
                                <td><input type="text" class="form-control"></td>
																<td><input type="text" class="form-control"></td>
																<td><input type="text" class="form-control"></td>
																<td><input type="text" class="form-control"></td>
                                <td><input type="text" class="form-control"></td>
                                <td><a class="btn btn-app btn-danger">
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
																<td><input type="text" class="form-control"></td>
                                <td><input type="text" class="form-control"></td>
																<td><input type="text" class="form-control"></td>
																<td><input type="text" class="form-control"></td>
																<td><input type="text" class="form-control"></td>
                                <td><input type="text" class="form-control"></td>
                                <td><a class="btn btn-app btn-danger">
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
									<button type="button" class="btn btn-success" data-dismiss="modal">Close</button>
									<button type="button" class="btn btn-success">Update</button>
								</div>
				</form>
							</div>
						</div>
				     </div>

</template>
<script>
import { reactive, ref } from '@vue/reactivity';
import {onMounted } from "vue";
import { useRoute } from 'vue-router';
import Pagination from 'laravel-vue-pagination';
import axios from "axios";
import { useToast } from "vue-toastification";
import MainHeader from "../../core/header/index.vue";
import Sidebar from "../../core/sidebar/index.vue";
import Bookings from "./components/bookings.vue";
export default {
    components: {
    Pagination,
    MainHeader,
    Sidebar,
    Bookings
    },
    setup() {
        const toast = useToast();
        const route = useRoute();
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
        const pickup   = ref();
        const delivary = ref();
        const delivery_section = ref(false);
        const pickup_section   = ref(false);
        const selectGoods      = ref();
        const goods            = ref(); 
        const baseUrl = ref(window.location.origin);
        // onMounted(() => {

        // })


        const selectedGoods = ()=>{
            selectGoods.value ? goods.value = true : goods.value = false;
        }
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
          pickup,
          delivary,
          pickup_section,
          delivery_section,
          baseUrl,
          selectGoods,
          goods,
          selectedGoods,
          addBooking,
          tab,
          getTransport
        }
    }
}
</script>