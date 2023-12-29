import axios from 'axios';
//api transerfer token to backend
export const axiosInstance = axios.create({
    headers : {
          'authorization' : `Bearer ${localStorage.getItem('token')}`
    }
});