import { axiosInstance } from "../../../lib/axios";


export const getConnections = async function () {
  try {
    const {data} = await axiosInstance.get(`/users/connections`);
    console.log( data.data);
    return data.data;
  } catch (err:any) {
    console.log(err.message);
  }
};
