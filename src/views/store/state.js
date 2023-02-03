import { reactive } from "vue";

const planner = reactive({
    booking: [{
        filter:'unplanned'
      }],
    bookings: {},
    bookingsCount: null,
    train: [],
    trains:{},
    weeks_filter:{},
    trains_filter:{},
    terminals:{},
    weeks:{},
    clients:{}
})

export default planner


