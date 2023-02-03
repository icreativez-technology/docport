<template>
           <div>
                <!-- <main-header/>
                <sidebar/> -->
                <router-view></router-view>
            </div>
</template>
<script>
import MainHeader from "../../core/header/index.vue";
import Sidebar from "../../core/sidebar/index.vue";
import {useRoute } from "vue-router";
import {computed, onMounted } from "vue";
export default {
    components:{
        MainHeader,
        Sidebar
    },
    setup(){
        const route = useRoute();
        const path = computed(() =>route.name)

          onMounted(() => {
            console.log(path)
      })
}
}
</script>