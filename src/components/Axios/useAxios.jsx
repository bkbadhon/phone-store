import axios from 'axios';

export const AxiosSource = axios.create({
    baseURL :'https://phone-store-server-badhons-projects.vercel.app',
    withCredentials:true
})
const useAxios = () => {
        return AxiosSource
    
};

export default useAxios;