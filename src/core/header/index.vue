<template>
    		<!--Header-->
				<div class="hor-header header d-flex navbar-collapse">
					<div class="container">
						<div class="d-flex">
							<a class="animated-arrow hor-toggle horizontal-navtoggle"><span></span></a>
							<router-link :to="{name:'admin.dashboard'}" class="header-brand">
								<img :src="baseUrl+`/assets/images/brand/logo.png`" class="header-brand-img main-logo" alt="IndoUi logo">
								<img :src="baseUrl+`/assets/images/brand/logo-light.png`" class="header-brand-img dark-main-logo" alt="IndoUi logo">
								<img :src="baseUrl+`/assets/images/brand/icon-light.png`" class="header-brand-img dark-icon-logo" alt="IndoUi logo">
								<img :src="baseUrl+`/assets/images/brand/icon.png`" class="header-brand-img icon-logo" alt="IndoUi logo">
							</router-link><!-- logo-->
							<div class="d-flex order-lg-2 ml-auto header-right">
								<div class="dropdown d-md-flex header-message">
									<a class="nav-link icon" data-toggle="dropdown">
										<i class="fe fe-bell"></i>
										<!-- <span class="nav-unread badge badge-danger badge-pill">3</span> -->
									</a>
									<!-- <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
										<a class="dropdown-item text-center" href="#">Notifications</a>
										<div class="dropdown-divider"></div>
										<a class="dropdown-item d-flex pb-4" href="#">
											<span class="avatar mr-3 br-3 align-self-center avatar-md cover-image bg-primary-transparent text-primary"><i class="fe fe-mail"></i></span>
											<div>
												<span class="font-weight-bold"> Commented on your post </span>
												<div class="small text-muted d-flex">
													3 hours ago
												</div>
											</div>
										</a>
										<a class="dropdown-item d-flex pb-4" href="#">
											<span class="avatar avatar-md br-3 mr-3 align-self-center cover-image bg-secondary-transparent text-secondary"><i class="fe fe-download"></i>
											</span>
											<div>
												<span class="font-weight-bold"> New file has been Uploaded </span>
												<div class="small text-muted d-flex">
													5 hour ago
												</div>
											</div>
										</a>
										<a class="dropdown-item d-flex pb-4" href="#">
											<span class="avatar avatar-md br-3 mr-3 align-self-center cover-image bg-warning-transparent text-warning"><i class="fe fe-user"></i>
											</span>
											<div>
												<span class="font-weight-bold"> User account has Updated</span>
												<div class="small text-muted d-flex">
													20 mins ago
												</div>
											</div>
										</a>
										<a class="dropdown-item d-flex pb-4" href="#">
											<span class="avatar avatar-md br-3 mr-3 align-self-center cover-image bg-info-transparent text-info"><i class="fe fe-shopping-cart"></i>
											</span>
											<div>
												<span class="font-weight-bold"> New Order Recevied</span>
												<div class="small text-muted d-flex">
													1 hour ago

												</div>
											</div>
										</a>
										<div class="dropdown-divider"></div>
										<div class="text-center dropdown-btn pb-3">
											<div class="btn-list">
												<a href="#" class="btn btn-primary btn-sm"><i class="fe fe-plus mr-1"></i>Add New</a>
												<a href="#" class=" btn btn-secondary btn-sm"><i class="fe fe-eye mr-1"></i>View All</a>
											</div>
										</div>
									</div> -->
								</div>
								<!--Navbar -->
								<div class="dropdown header-profile">
									<a class="nav-link pr-0 leading-none d-flex pt-1" data-toggle="dropdown" href="#">
										<span class="avatar avatar-md brround cover-image" :data-image-:src="baseUrl+`/assets/images/users/male/admin-profile-img.png`"></span>
									</a>
									<div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
										<div class="drop-heading">
											<div class="text-center">
												<h5 class="text-dark mb-1">{{name}}</h5>
												<small class="text-muted">Web Developer</small>
											</div>
										</div>
										<div class="dropdown-divider m-0"></div>
										<!-- <a class="dropdown-item" href="#"><i class="dropdown-icon fe fe-user"></i>Profile</a>
										<a class="dropdown-item" href="#"><i class="dropdown-icon fe fe-edit"></i>Schedule</a>
										<a class="dropdown-item" href="#"><i class="dropdown-icon fe fe-mail"></i> Inbox</a>
										<a class="dropdown-item" href="#"><i class="dropdown-icon fe fe-unlock"></i> Look Screen</a> -->
										<a class="dropdown-item text-center" @click="logout"><i class="dropdown-icon fe fe-power"></i> Log Out</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!--Header end-->

				<!--Horizontal-main -->
				<div class="sticky">
					<div class="horizontal-main hor-menu clearfix">
						<div class="horizontal-mainwrapper container clearfix">
							<!--Nav-->
							<nav class="horizontalMenu clearfix">
								<ul class="horizontalMenu-list">
									<li aria-haspopup="true"><router-link :to="{name:'admin.dashboard'}"><i class="fa fa-home" aria-hidden="true"></i> Home</router-link></li>
									<li aria-haspopup="true"><span class="horizontalMenu-click"><i class="horizontalMenu-arrow fa fa-angle-down"></i></span><a href="#" class="sub-icon"><i class="fa fa-ship" aria-hidden="true"></i> Shipments <i class="fa fa-angle-down horizontal-icon"></i></a>
										<ul class="sub-menu">
											<li aria-haspopup="true"><router-link :to="{name:'admin.orders.index'}">Orders</router-link></li>
											<li aria-haspopup="true"><router-link :to="{name:'admin.masterorders.index'}">Master Orders</router-link></li>
										</ul>
									</li>
                                    <li aria-haspopup="true"><router-link :to="{name:'admin.vehicles.index'}" class="sub-icon"><i class="fa fa-truck"></i> Vehicles</router-link></li>
                                    <li aria-haspopup="true"><router-link :to="{name:'admin.partners.index'}" class="sub-icon"><i class="fa fa-handshake-o" aria-hidden="true"></i> Partners</router-link></li>
								</ul>
							</nav>
							<!--Nav-->
						</div>
					</div>
				</div>
				<!--Horizontal-main -->
</template>
<script>
import { useToast } from "vue-toastification";
import {useRouter } from "vue-router";
import axios from "axios";
import { ref } from '@vue/reactivity';
export default {
    setup() {
        const router = useRouter();
        const toast = useToast();
        const baseUrl = ref(window.location.origin);
        const name = ref();

        name.value = localStorage.getItem("name");

        const logout = async()=>{
            try{
              let response = await axios.post("Accounts/logout");
                if(response){
                    localStorage.removeItem("token");
                    localStorage.removeItem("id");
                    localStorage.removeItem("name");
					setTimeout(function () {
                		window.location.reload();
          		    }, 1000);
                    router.push({name:'admin.auth.login'});
                    toast.success(response.data, {
                    timeout: 2000
                    });
                }  
            }catch(error){
                console.log(error)
                toast.error(error, {
                    timeout: 2000
              });
            }
        }

        return{logout,baseUrl,name}
    },
}
</script>