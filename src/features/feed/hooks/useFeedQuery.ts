import { useQuery } from "@tanstack/react-query";
import { getFeed } from "../services/FeedService";

export default function useFeedQuery() {
  const {
    data: feed,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["feed"],
    queryFn: getFeed,
    staleTime: 1000 * 60 * 5,
  });

  return { feed, isLoading, isError };
}
