import axios from "axios";
export default {
    async getAll(params) {
        try {
            var response = await axios.get(params.route);
            return response;
        } catch (e) {
            console.log(e)
            // statements
            return e.response
            // console.log(e);
        }
    },
    async get(params) {
        try {
            let response = await axios.get(params.route);
            // statements
            return response;
        } catch (e) {
            // statements
            return e.response
            // console.log(e);
        }
    },
    async store(params) {
        try {
            let response = await axios.post(params.route, { cmrparam:params.data });
            // statements
            return response;
        } catch (e) {
            // statements
            return e.response
            // console.log(e);
        }
    },
    async update(params) {
        try {
            let response = await axios.put(params.route, { cmrparam:params.data });
            // statements
            return response;
        } catch (e) {
            // statements
            return e.response
            // console.log(e);
        }
    },
    async delete(params) {
        try {
            let response = await axios.delete(params.route);
            return response;
        } catch (e) {
            // statements
            return e.response
            // console.log(e);
        }
    },
    async copy(params) {
        try {
            let response = await axios.post(params.route);
            return response;
        } catch (e) {
            // statements
            return e.response
            // console.log(e);
        }
    }
}
