import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getFeed, sendConnection } from "../services/FeedService";

export default function useFeedQuery() {
  const queryClient = useQueryClient();
  const {
    data: feed,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["feed"],
    queryFn: getFeed,
    staleTime: 1000 * 60 * 5,
  });

  //mutatio
  const mutation = useMutation({
    mutationFn: sendConnection,
    onSuccess: (data) => {
      console.log(`data : ${data}`);
      queryClient.invalidateQueries({ queryKey: ["feed"] });
    },
    onError: (error) => {
      console.error("Failed to send connection:", error);
    },
  });
  console.log(feed)

  return { feed, isLoading, isError, mutation };
}
