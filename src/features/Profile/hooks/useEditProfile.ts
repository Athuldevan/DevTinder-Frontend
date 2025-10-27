import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProfile } from "../services/editProfile";
import { useDispatch } from "react-redux";
import { loginUser } from "../../Auth/slices/AuthSlice";

export default function useEditProfile() {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const mutation = useMutation({
    mutationFn: editProfile,
    onSuccess: (response) => {
      console.log("✅ Profile successfully updated:", response);
      // The API response should contain the full updated user object
      // Update Redux with the complete user data from server
      if (response?.data) {
        dispatch(loginUser(response.data));
      } else if (response) {
        // If response structure is different, use the response directly
        dispatch(loginUser(response));
      }
      //Automatically refresh the feed data after mutating or updating
      queryClient.invalidateQueries({ queryKey: ["feed"] });
    },
    onError: (error: any) => {
      console.error("Profile update failed:", error.message);
    },
  });

  return mutation; // returns mutate, status flags, etc.
}
