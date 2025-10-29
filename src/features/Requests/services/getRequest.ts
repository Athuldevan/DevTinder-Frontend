import { axiosInstance } from "../../../lib/axios";
interface reviewRequestArgs {
  status: string;
  requestedId: string;
}
export const getRequests = async function name() {
  try {
    const { data } = await axiosInstance.get(`/users/requests/recieved`);

    return data.allConnections;
  } catch (err: any) {
    console.log(err.message);
  }
};

// Review Requests
export const reviewRequest = async function ({
  status,
  requestedId,
}: reviewRequestArgs) {
  try {
    const res = await axiosInstance.post(
      `/request/review/${status}/${requestedId}`
    );
    console.log(res);
    return res.data;
  } catch (err: any) {
    console.log(err.message);
  }
};
