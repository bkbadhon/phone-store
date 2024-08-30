import axios from "axios";

export const AxiosSource = axios.create({
  baseURL: "https://phone-store-server-one.vercel.app",
  withCredentials: true,
});
const useAxios = () => {
  return AxiosSource;
};

export default useAxios;
