<template>
	<div class="page">
			<div class="page-content">
				<div class="container text-center text-dark">
					<div class="row">
						<div class="col-lg-4 d-block mx-auto">
							<div class="row">
								<div class="col-xl-12 col-md-12 col-md-12">
									<div class="card">
										<div class="card-body">
											<div class="dimmer active" v-if="isLoading">
                                            <div class="lds-hourglass"></div>
                                           </div>
											<div class="text-center mb-6">
												<img :src="baseUrl+`/assets/images/brand/logo.png`" class="header-brand-img main-logo" alt="IndoUi logo">
												<img :src="baseUrl+`/assets/images/brand/logo-light.png`" class="header-brand-img dark-main-logo" alt="IndoUi logo">
											</div>
											<h3>Login</h3>
											<p class="text-muted">Sign In to your account</p>
											<form @submit.prevent="login">
                                                <div class="input-group mb-3">
												<span class="input-group-addon bg-white"><i class="fa fa-user"></i></span>
												<input type="text" class="form-control" placeholder="Username" v-model="form.email">
											</div>
											<div class="input-group mb-4">
												<span class="input-group-addon bg-white"><i class="fa fa-unlock-alt"></i></span>
												<input type="password" class="form-control" placeholder="Password" v-model="form.password">
											</div>
											<div class="row">
												<div class="col-12">
													<button type="submit" class="btn btn-primary btn-block">Login</button>
												</div>
												<div class="col-12">
													<!-- <a href="javascript:void(0)" class="btn btn-link box-shadow-0 px-0">Forgot password?</a> -->
												</div>
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
</template>
<script>
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";
import {reactive, ref} from "vue";
import axios from "axios";
export default {
    setup(){
        const toast  = useToast();
        const router = useRouter();
        const token  = reactive();
		const isLoading   = ref(false)
        const form   = reactive([]);
		const baseUrl = ref(window.location.origin);
        const login  = async()=>{
			isLoading.value = true;
            try{
              let response = await axios.post("Accounts/login",{
                email:form.email,
                password:form.password
              });
                if(response.data){
				   localStorage.setItem('id',response.data.User.UserId);
				   localStorage.setItem('name',response.data.User.FirstName);
                   localStorage.setItem('token',response.data.Token.Token);
                    toast.success("Login Successfully",{
                        timeout: 2000
                    });
                    router.push({name:'admin.dashboard'});
                }  
            }catch(error){
				console.log(error.response.data)
				if(error.response.data.errors){
				    toast.error(error.response.data.errors.Email[0], {
                    timeout: 2000
          			   });
				}if(error.response.data.errors){
				    toast.error(error.response.data.errors.Password[0], {
                    timeout: 2000
          			   });
				}else{
					toast.error(error.response.data.ErrorMessage, {
                    timeout: 2000
             		 });
				}
         
            }finally{
                isLoading.value = false
            }
        }
        return {login,form,token,baseUrl,isLoading}
    }
    
}
</script>