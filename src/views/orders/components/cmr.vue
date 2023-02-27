<template>
       <div class="modal fade" id="cmrForm" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog custom" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5>CMR</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeModal">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                            <div class="modal-body">
                            <div class="panel panel-primary">
                                                     <form @submit.prevent="createCMR">
                                                            <div class="row">
                                                                <div class="col-md-2 lg-2 feild">
                                                                    <div class="form-group">
                                                                        <input type="text" class="form-control" readonly v-model="cmr.cmrDetails.ShipmentOrderId"/>
                                                                        <label class="form-control-label">ID</label>
                                                                    </div>
                                                                </div>

                                                                <div class="col-md-2 lg-2 feild">
                                                                    <div class="form-group">
                                                                        <input type="text" class="form-control" v-model="cmr.cmrDetails.VersionNr"/>
                                                                        <label class="form-control-label">Version nr</label>
                                                                    </div>
                                                                </div>

                                                                <div class="col-md-2 lg-2 feild">
                                                                    <div class="form-group">
                                                                        <input type="number" min="0" class="form-control" v-model="cmr.cmrDetails.IndexRegister"/>
                                                                        <label class="form-control-label">Index Register</label>
                                                                    </div>
                                                                </div>

                                                                    <div class="col-md-3 feild">
                                                                        <div class="form-group">
                                                                            <select name="" id="" class="form-control" v-model="cmr.cmrDetails.ShipmentOrderTypeId">
                                                                                <option v-for="(odrtype,index) in cmr.orderTypes" :key="index" :value="odrtype.ID">{{odrtype.Name}}</option>
                                                                            </select>
                                                                            <label class="form-control-label">Type</label>
                                                                        </div>
                                                                    </div>

                                                                    <div class="col-md-3 feild">
                                                                        <div class="form-group">
                                                                            <select name="" id="" class="form-control" v-model="cmr.cmrDetails.ShipmentOrderStatusId">
                                                                                <option v-for="(odrstatus,index) in cmr.orderStatus" :key="index" :value="odrstatus.ID">{{odrstatus.Name}}</option>
                                                                            </select>
                                                                            <label class="form-control-label">Status</label>
                                                                        </div>
                                                                    </div>

                                                            </div>
                                                            <div class="row">
                                                                <div class="col-sm-6 md-12 lg-1">
                                                                    <div class="form-group">
                                                                        <input type="text" class="form-control" v-model="cmr.cmrDetails.SenderInfo"/>
                                                                        <label class="form-control-label">1. Sender (name,address,country)</label>
                                                                    </div>

                                                                    <div class="form-group">
                                                                        <input type="text" class="form-control" v-model="cmr.cmrDetails.ConsigneeInfo"/>
                                                                        <label class="form-control-label">2. Consignee (name,address,country)</label>
                                                                    </div>

                                                                    <div class="form-group">
                                                                        <input type="text" class="form-control" v-model="cmr.cmrDetails.PlaceOfDeliveyOfGoods"/>
                                                                        <label class="form-control-label">3. Place of delivey of the goods (address,country)</label>
                                                                    </div>

                                                                    <div class="form-group">
                                                                        <input type="text" class="form-control" v-model="cmr.cmrDetails.PlaceOfTackingOfGoods"/>
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
                                                                    <div class="col-md-6 feild">
                                                                        <div class="form-group">
                                                                            <input type="text" class="form-control" v-model="cmr.cmrDetails.MarksNr"/>
                                                                            <label class="form-control-label">6. Marks and nr</label>
                                                                        </div>
                                                                    </div>

                                                                    <div class="col-md-6 feild">
                                                                        <div class="form-group">
                                                                            <input type="text" class="form-control" v-model="cmr.cmrDetails.NrOfPages" />
                                                                            <label class="form-control-label">7. Nr. of pages</label>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div class="col-sm-6">
                                                                      <div class="col-md-6 feild">
                                                                        <div class="form-group">
                                                                            <input type="text" class="form-control" v-model="cmr.cmrDetails.MethodsOfPacking"/>
                                                                            <label class="form-control-label">8. Methods of packing</label>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-6 feild">
                                                                        <div class="form-group">
                                                                            <input type="text" class="form-control" v-model="cmr.cmrDetails.NatureOfGoods" />
                                                                            <label class="form-control-label">9. Nature of goods</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                </div>

                                                                <div class="row">
                                                                  <div class="col-sm-12">
                                                                    <div class="col-md-4 feild">
                                                                        <div class="form-group">
                                                                            <input type="text" class="form-control" v-model="cmr.cmrDetails.StatisticalNr" />
                                                                            <label class="form-control-label">10. Statistical nr</label>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-4 feild">
                                                                        <div class="form-group">
                                                                            <input type="text" class="form-control" v-model="cmr.cmrDetails.GrossWeightKg" />
                                                                            <label class="form-control-label">11. Gross weight (kg)</label>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-4 feild">
                                                                        <div class="form-group">
                                                                            <input type="text" class="form-control" v-model="cmr.cmrDetails.VolEurIdmM3" />
                                                                            <label class="form-control-label">12. Vol. (eur/Idm/m<sup>3</sup>)</label>
                                                                        </div>
                                                                    </div>
                                                                </div>   
                                                                </div>
                                                            
                                                            <div class="row">
                                                                <div class="col-sm-6 md-12 lg-1">
                                                                    <div class="form-group">
                                                                        <input type="text" class="form-control" v-model="cmr.cmrDetails.SendersInstruction"  placeholder="eg . treatment of carriage in customs, etc" />
                                                                        <label class="form-control-label">13. Senders instruction</label>
                                                                    </div>

                                                                    <div class="form-group">
                                                                        <input type="text" class="form-control" v-model="cmr.cmrDetails.CarrierInfo"/>
                                                                        <label class="form-control-label">14. Carrier (name,address,country)</label>
                                                                    </div>

                                                                    <div class="form-group">
                                                                        <input type="text" class="form-control" v-model="cmr.cmrDetails.SuccessiveCarrirerInfo" />
                                                                        <label class="form-control-label">15. Successive carrirer (name,address,country)</label>
                                                                    </div>

                                                                    <div class="form-group">
                                                                        <input type="text" class="form-control" v-model="cmr.cmrDetails.PlaceOfTackingOfGoods"/>
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
                                                                                <td><input type="number" class="form-control"   v-model="cmr.cmrDetails.CarriageCharges"/></td>
                                                                                <td><input type="text" class="form-control"   v-model="cmr.cmrDetails.CarriageCurrency" /></td>
                                                                                <td><input type="text" class="form-control"   v-model="cmr.cmrDetails.CarriageConsignee"/></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Deduction</td>
                                                                                <td><input type="number" class="form-control"   v-model="cmr.cmrDetails.DeductionCharges"/></td>
                                                                                <td><input type="text" class="form-control"   v-model="cmr.cmrDetails.DeductionCurrency"/></td>
                                                                                <td><input type="text" class="form-control"   v-model="cmr.cmrDetails.DeductionConsignee"/></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Balance</td>
                                                                                <td><input type="number" class="form-control"   v-model="cmr.cmrDetails.BalanceCharges" /></td>
                                                                                <td><input type="text" class="form-control"   v-model="cmr.cmrDetails.BalanceCurrency" /></td>
                                                                                <td><input type="text" class="form-control"   v-model="cmr.cmrDetails.BalanceConsignee" /></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Supplier charges</td>
                                                                                <td><input type="number" class="form-control"   v-model="cmr.cmrDetails.SupplierCharges"/></td>
                                                                                <td><input type="text" class="form-control"   v-model="cmr.cmrDetails.SupplierCurrency"/></td>
                                                                                <td><input type="text" class="form-control"   v-model="cmr.cmrDetails.SupplierConsignee"/></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Other</td>
                                                                                <td><input type="number" class="form-control"   v-model="cmr.cmrDetails.OtherCharges"/></td>
                                                                                <td><input type="text" class="form-control"   v-model="cmr.cmrDetails.OtherCurrency"/></td>
                                                                                <td><input type="text" class="form-control"   v-model="cmr.cmrDetails.OtherConsignee"/></td>
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
                                                                                    <li><a href="#tab33" class="active" data-toggle="tab">Good</a></li>
                                                                                    <li><a href="#tab22" data-toggle="tab">CMR Versions</a></li>                               
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div class="panel-body tabs-menu-body">
                                                                            <div class="tab-content">
                                                                                <div class="tab-pane active" id="tab33">
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
                                                                                            <a class="btn btn-app btn-success" :disabled="cmr.isReadOnly ? true : false" @click="removeGood(index,'order')"><i class="fa fa-trash"></i></a>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="tab-pane" id="tab22">
                                                                                    <div class="table-responsive">
                                                                                     
                                                                                                                                                 
                                                                                        <table class="table card-table table-vcenter text-nowrap">
                                                                                                <thead>
                                                                                                    <tr>
                                                                                                        <!-- <th><input type="checkbox" name="" id="" /></th> -->
                                                                                                        <th>ID</th>
                                                                                                        <th>Version nr</th>
                                                                                                        <th>Date</th>
                                                                                                        <th>Time</th>
                                                                                                        <th>Created By</th>
                                                                                                        <th>Download</th>
                                                                                                        <th></th>
                                                                                                    </tr>
                                                                                                </thead>
                                                                                                <tbody>
                                                                                                    <tr v-if="cmr.versions != null" v-for="(version) in cmr.versions">
                                                                                                        <!-- <td><input type="checkbox" name="" id="" /></td> -->
                                                                                                        <td>{{ version.Id }}</td>
                                                                                                        <td>{{ version.Version }}</td>
                                                                                                        <td>{{ version.Date }}</td>
                                                                                                        <td>{{ version.Time }}</td>
                                                                                                        <td>{{ version.CreatedBy }}</td>
                                                                                                        <td><a href="#" class="btn btn-success">Download</a></td>
                                                                                                        <td><i class="fa fa-trash" aria-hidden="true"></i></td>
                                                                                                    </tr>
                                                                                                    <tr v-else>
                                                                                                        <td colspan="7" class="text-center">No CMR Versions Found</td>
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
                                                                <button type="button" class="btn btn-success" data-dismiss="modal" @click="closeModal">Close</button>
                                                                <button type="button" class="btn btn-success">Save</button>
                                                            </div>
                                            </form>
                            </div>
                        </div>
                    </div>
                </div>
       </div>
</template>
<script>
import cmr from "../../../store/states/index";
export default {
    setup() {

      const closeModal = ()=>{
          cmr.isOrderEditable = true
          cmr.isReadOnly = true
          $('input').attr('disabled', false);
          $('select').attr("disabled", false);
       }

       const clearGoods = async()=>{
            cmr.order.goods = [];
       }
       const addGoods = async()=>{
            cmr.cmrDetails.goods.push({})
       } 

      return{
        cmr,
        closeModal,
        clearGoods,
        addGoods
      }
    },
}
</script>