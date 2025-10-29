import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getRequests } from "../services/getRequest";

const UseRequest = () => {
  const { data, isLoading, isPending } = useQuery({
    queryKey: ["requests"],
    queryFn: getRequests,
    staleTime: 1000 * 60 * 5,
  });

  return { data, isLoading, isPending };
};



export default UseRequest;
