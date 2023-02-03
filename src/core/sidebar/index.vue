<template>
    <div class="main-menu menu-fixed menu-light menu-accordion" data-scroll-to-active="true">
    <div class="main-menu-content">
        <ul class="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
            <li class="nav-item" v-for="(item,index) in items" :key="index"><router-link :to="{name:item.componentName}">
                <i :class="item.icon" aria-hidden="true"></i>{{item.name}}</router-link>
            </li>
        </ul>
    </div>
</div>
</template>
<script>
import { reactive } from '@vue/reactivity';
import sidebarItems from "../sidebarItems.js";
export default {
    components:{sidebarItems},
    setup() {
 const items = reactive([
    {
        name:"Dashboard",
        icon:"fa fa-tachometer",
        componentName:"admin.dashboard"
    },
    {
        name:"Planner",
        icon:"fa fa-train",
        componentName:"admin.dashboard.planner"
    },
    {
        name:"Bookings",
        icon:"fa fa-first-order",
        componentName:"admin.bookings.index"
    },
    {
        name:"Transport",
        icon:"fa fa-truck",
        componentName:"admin.dashboard"
    }
]);
     return{items}
 },
}
</script>