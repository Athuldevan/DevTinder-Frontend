import { axiosInstance } from "../../../lib/axios";
interface SignupArgs {
  firstName: string;
  lastName: string;
  emailId: string;
  password: string;
}

export const signup = async function ({
  firstName,
  lastName,
  emailId,
  password,
} : SignupArgs) {
  try {
    const { data } = await axiosInstance.post("/auth/signup", {
      firstName,
      lastName,
      emailId,
      password,
    }, {withCredentials : true});
    console.log(data);
    return data.data;
  } catch (err: any) {
    console.log(err.message);
    throw err;
  }
};
