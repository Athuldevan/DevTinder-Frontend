import { useQueries, useQuery } from "@tanstack/react-query";
import { getConnections } from "../services/getConnectios";

const UseConnections = () => {
  const { data, isLoading, isPending } = useQuery({
    queryKey: ["connections"],
    queryFn: getConnections,
    staleTime: 1000 * 60 * 5,
  });

  return { data, isLoading, isPending };
};

export default UseConnections;
