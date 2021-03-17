import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    user: {
        login: credentials =>
            axios.post('/api/user/login', credentials).then(res => res.data), 
    },

    useraccounts: {
        list: token =>
            axios.post('/api/useraccounts/list', token).then(res => res.data),
    },

    employee:  {
        list: token =>
            axios.post('/api/employee/list', token).then(res => res.data)
    }
}

export const uploadImage = data =>{
    return axios.post("/api/user/uploadimage", data).then(res => res.data)
}

export const downloadImage = data =>{
    return axios.post("/api/user/downloadimage", data).then(res => res.data)
}