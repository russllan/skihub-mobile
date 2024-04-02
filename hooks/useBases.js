import { useQuery } from "@tanstack/react-query";
// import baysService from "../services/reys.service";

export const useReys = () => {
  return useQuery({
    queryKey: ["base"],
    // queryFn: reysService.getAllReys,
    // select: ({data}) => data,
  });
};
