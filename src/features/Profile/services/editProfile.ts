import { axiosInstance } from "../../../lib/axios";
interface EditProfileArgs {
  id: string;
  updateData: Record<string, any>;
}
export const editProfile = async function ({id, updateData} :EditProfileArgs ) {
  try {
    const { data } = await axiosInstance.patch(`/users/${id}`, updateData);
    return data;
  } catch (err: any) {
    console.log(err.message);
      throw err; 
  }
};
