<template>
       <div class="modal fade" id="cmrForm" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog custom" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5>{{isCmrEditable ? 'Edit CMR' : 'CMR'}}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                              <div class="modal-body">
                            <div class="panel panel-primary">
                                 <form>
                                                <div class="row">
                                                    <div class="col-md-2 lg-2 feild">
                                                        <div class="form-group">
                                                            <input type="text" class="form-control"    disabled />
                                                            <label class="form-control-label">ID</label>
                                                        </div>
                                                    </div>

                                                    <div class="col-md-2 lg-2 feild">
                                                        <div class="form-group">
                                                            <input type="text" class="form-control"    disabled />
                                                            <label class="form-control-label">Version nr</label>
                                                        </div>
                                                    </div>

                                                    <div class="col-md-2 lg-2 feild">
                                                        <div class="form-group">
                                                            <input type="text" class="form-control"    disabled />
                                                            <label class="form-control-label">Index Register</label>
                                                        </div>
                                                    </div>

                                                    <div class="col-md-3 lg-2 feild">
                                                        <div class="form-group">
                                                            <select name="" id="" class="form-control"    disabled>
                                                                <option value="read">INLAND</option>
                                                                <option value="read">INLAND</option>
                                                                <option value="read">INLAND</option>
                                                            </select>
                                                            <label class="form-control-label">Type</label>
                                                        </div>
                                                    </div>

                                                    <div class="col-md-3 lg-2 feild">
                                                        <div class="form-group">
                                                            <select name="" id="" class="form-control"    disabled>
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
                                                            <input type="text" class="form-control"    disabled />
                                                            <label class="form-control-label">1. Sender (name,address,country)</label>
                                                        </div>

                                                        <div class="form-group">
                                                            <input type="text" class="form-control"    disabled />
                                                            <label class="form-control-label">2. Consignee (name,address,country)</label>
                                                        </div>

                                                        <div class="form-group">
                                                            <input type="text" class="form-control"    disabled />
                                                            <label class="form-control-label">3. Place of delivey of the goods (address,country)</label>
                                                        </div>

                                                        <div class="form-group">
                                                            <input type="text" class="form-control"    disabled />
                                                            <label class="form-control-label">4. Place of tacking of the goods (address,country)</label>
                                                        </div>

                                                        <div class="form-group">
                                                            <input type="file" class="form-control"    disabled />
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
                                                                <input type="text" class="form-control"    disabled />
                                                                <label class="form-control-label">6. Marks and nr</label>
                                                            </div>
                                                        </div>

                                                        <div class="col-md-3 feild">
                                                            <div class="form-group">
                                                                <input type="text" class="form-control"    disabled />
                                                                <label class="form-control-label">7. Nr. of pages</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-3 feild">
                                                            <div class="form-group">
                                                                <input type="text" class="form-control"    disabled />
                                                                <label class="form-control-label">8. Methods of packing</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-3 feild">
                                                            <div class="form-group">
                                                                <input type="text" class="form-control"    disabled />
                                                                <label class="form-control-label">9. Nature of goods</label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-sm-6">
                                                        <div class="col-md-4 feild">
                                                            <div class="form-group">
                                                                <input type="text" class="form-control"    disabled />
                                                                <label class="form-control-label">10. Statistical nr</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-4 feild">
                                                            <div class="form-group">
                                                                <input type="text" class="form-control"    disabled />
                                                                <label class="form-control-label">11. Gross weight (kg)</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-4 feild">
                                                            <div class="form-group">
                                                                <input type="text" class="form-control"    disabled />
                                                                <label class="form-control-label">12. Vol. (eur/Idm/m<sup>3</sup>)</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-sm-6 md-12 lg-1">
                                                        <div class="form-group">
                                                            <input type="text" class="form-control"    disabled placeholder="eg . treatment of carriage in customs, etc" />
                                                            <label class="form-control-label">13. Senders instruction</label>
                                                        </div>

                                                        <div class="form-group">
                                                            <input type="text" class="form-control"    disabled />
                                                            <label class="form-control-label">14. Carrier (name,address,country)</label>
                                                        </div>

                                                        <div class="form-group">
                                                            <input type="text" class="form-control"    disabled />
                                                            <label class="form-control-label">15. Successive carrirer (name,address,country)</label>
                                                        </div>

                                                        <div class="form-group">
                                                            <input type="text" class="form-control"    disabled />
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
                                                                    <td><input type="number" class="form-control"    disabled /></td>
                                                                    <td><input type="text" class="form-control"    disabled /></td>
                                                                    <td><input type="text" class="form-control"    disabled /></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Deduction</td>
                                                                    <td><input type="number" class="form-control"    disabled /></td>
                                                                    <td><input type="text" class="form-control"    disabled /></td>
                                                                    <td><input type="text" class="form-control"    disabled /></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Balance</td>
                                                                    <td><input type="number" class="form-control"    disabled /></td>
                                                                    <td><input type="text" class="form-control"    disabled /></td>
                                                                    <td><input type="text" class="form-control"    disabled /></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Supplier charges</td>
                                                                    <td><input type="number" class="form-control"    disabled /></td>
                                                                    <td><input type="text" class="form-control"    disabled /></td>
                                                                    <td><input type="text" class="form-control"    disabled /></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Other</td>
                                                                    <td><input type="number" class="form-control"    disabled /></td>
                                                                    <td><input type="text" class="form-control"    disabled /></td>
                                                                    <td><input type="text" class="form-control"    disabled /></td>
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
                                                                        <li><a href="#tab11" class="active" data-toggle="tab">Good</a></li>
                                                                        <li><a href="#tab12" data-toggle="tab">CMR Versions</a></li>                               
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div class="panel-body tabs-menu-body">
                                                                <div class="tab-content">
                                                                    <div class="tab-pane active" id="tab11">
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
                                                                        <td><input type="number" minlength="1" class="form-control"    disabled id="row-1-age" v-model="goods.qty" /></td>
                                                                        <td>
                                                                            <select class="form-control"    disabled v-model="goods.units">
                                                                                <option value="EUR">EUR</option>
                                                                                <option value="EUR">EUR</option>
                                                                                <option value="EUR">EUR</option>
                                                                            </select>
                                                                        </td>
                                                                        <td><input type="number" minlength="1" class="form-control"    disabled id="row-1-age" v-model="goods.kg_calc" /></td>
                                                                        <td><input type="number" minlength="1" class="form-control"    disabled id="row-1-position" v-model="goods.ldm" /></td>
                                                                        <td><input type="number" minlength="1" class="form-control"    disabled id="row-1-position" v-model="goods.value" /></td>
                                                                        <td><input type="text" class="form-control"    disabled id="row-1-position" v-model="goods.description" /></td>
                                                                        <td><input type="text" class="form-control"    disabled id="row-1-position" v-model="goods.volume" /></td>
                                                                        <td><input type="text" class="form-control"    disabled id="row-1-position" v-model="goods.length" /></td>
                                                                        <td><input type="text" class="form-control"    disabled id="row-1-position" v-model="goods.width" /></td>
                                                                        <td><input type="text" class="form-control"    disabled id="row-1-position" v-model="goods.height" /></td>
                                                                        <td>
                                                                            <a class="btn btn-app btn-success" @click="removeGood(index)"><i class="fa fa-trash"></i></a>
                                                                        </td>
                                                                    </tr>                                               
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                    <div class="tab-pane" id="tab12">
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
</template>
<script>
import { ref } from '@vue/reactivity';
import Common from '../../../core/common/common';
import ApiResource from "../../../store/actions/index";
import {onMounted} from "vue";
export default {
    setup() {
      const isCmrEditable = ref(true);
      const cmr = ref({
        goods:[]
      });
      const baseUrl    = ref(window.location.origin);

    //   onMounted(()=>{
    //      $('input').attr('readonly', true);
    //      $('select').attr("disabled", true);
    //   })

      const editCmr = ()=>{
           $('input').attr('readonly', true);
           $('select').attr("disabled", true);
           isCmrEditable.value = false; 
           $('input').attr('readonly', false);
           $('select').attr("disabled", false); 
      }

      const addGoods = async()=>{
            cmr.value.goods.push({})
       } 
      const removeGood = async(index)=>{
            cmr.value.goods.splice(index,1)
       }
      const clearGoods = async()=>{
            cmr.value.goods = [];
      }

      return{
        isCmrEditable,
        cmr,
        baseUrl,
        editCmr,
        addGoods,
        removeGood,
        clearGoods
      }
    },
}
</script>