import axios from 'axios';

export const AxiosSource = axios.create({
    baseURL :'https://phone-store-server-q4tq15q9e-badhons-projects.vercel.app',
    withCredentials:true
})
const useAxios = () => {
        return AxiosSource
    
};

export default useAxios;