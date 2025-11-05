import { axiosInstance } from "../../../lib/axios";
export const getFeed = async function () {
  try {
    const { data } = await axiosInstance.get(`/users/feed`);
    console.log(data?.userFeedSuggestion);
    return data?.userFeedSuggestion;
  } catch (err: any) {
    console.log(err.message);
  }
};

//Send Conneciton service
export const sendConnection = async function ({ status, toUserId }) {
  try {
    const { data } = await axiosInstance.post(
      `/request/send/${status}/${toUserId}`
    );
    console.log(data);
    return data;
  } catch (err: any) {
    console.log(err.message);
    throw err;
  }
};
