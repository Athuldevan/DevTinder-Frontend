import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProfile } from "../services/editProfile";
import { useDispatch } from "react-redux";
import { loginUser } from "../../Auth/slices/AuthSlice";

export default function useEditProfile() {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const mutation = useMutation({
    mutationFn: editProfile,
    onSuccess: (data) => {
      console.log("✅ Profile successfully updated:", data);
      dispatch(loginUser(data));
      //Automaticllly referesh the feed data after mutaing or updating
      queryClient.invalidateQueries({ queryKey: ["feed"] });
    },
    onError: (error: any) => {
      console.error("Profile update failed:", error.message);
    },
  });

  return mutation; // returns mutate, status flags, etc.
}
