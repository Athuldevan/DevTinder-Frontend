import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { reviewRequest } from "../services/getRequest";
const UseReviewRequest = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: reviewRequest,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["connections"] });
    },
    onError: (err) => console.error("❌ Review failed:", err),
  });
  return mutation;
};

export default UseReviewRequest;
