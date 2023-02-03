<template>
  <main-header/>
  <sidebar/>
<div class="app-content content dashboard">
  <div class="content-wrapper content-wrapper-2">
    <div class="content-body">
      <!-- Basic form layout section start -->
      <section id="configuration">
        <h1 class="ml-1 main-heading">CMR Printing</h1>
        <div class="row">
          <div class="col-6">
            <div class="sm-card d-flex justify-content-between align-items-center px-4 py-3 px-md-1 px-xl-2">
                <form @submit.prevent="printCmrPrinting">
                    <div class="form-group">
                        <label for="inputAddress">Enter Order ID</label>
                        <input type="text" class="form-control" size="100" v-model="orderId" placeholder="Enter Order Id Here">
                    </div>
                    <div class="form-group text-center">
                     <button type="submit" class="general-btn d-inline-block">Submit</button>
                    </div>
            </form>
            </div>
          </div>
          <div class="col-6">
            <div v-if="cmrPdf">
             <div class="sm-card d-flex justify-content-between align-items-center px-4 py-3 px-md-1 px-xl-2">
                    <div>
                      <h6 class="p-lg bold"><a target="_blank" :href="cmrPdf.pdf">View CMR PDF Here</a></h6>
                    </div>
      
                  </div>     
           </div>       
         </div>
        </div>
      </section>
    </div>
  </div>
</div>
</template>
<script>
import { ref } from '@vue/reactivity';
import axios from "axios";
import { useToast } from "vue-toastification";
import MainHeader from "../../core/header/index.vue";
import Sidebar from "../../core/sidebar/index.vue";
export default {
    components:{
        MainHeader,
        Sidebar,
    },
    setup()
    {   
        const toast = useToast();
        const orderId = ref();
        const cmrPdf  = ref();
        const printCmrPrinting = async()=>{
         try{
            let response  = await axios.get("user/orders/cmr_yellow_printed/download/"+orderId.value);
            if(response.data){
                cmrPdf.value = response.data;
              }  
            }catch(error){
                 cmrPdf.value = "";
                 toast.error("No Record Found With Given Order Id");
            }
        }

        return{printCmrPrinting,orderId,cmrPdf}
    }
}
</script>