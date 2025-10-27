import { axiosInstance } from "../../../lib/axios";
export const getFeed = async function () {
  try {
    const { data } = await axiosInstance.get(`/users/feed`);
    return data.userFeedSuggestion;
  } catch (err: any) {
    console.log(err.mesage);
  }
};
