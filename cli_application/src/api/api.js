import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    user: {
        login: credentials =>
            axios.post('/api/user/login', credentials).then(res => res.data), 
    }
}