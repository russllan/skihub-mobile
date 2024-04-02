import { useQuery } from "@tanstack/react-query";
import baseService from "../services/base.service";
// import baysService from "../services/reys.service";

export const useReys = () => {
  return useQuery({
    queryKey: ["base"],
    queryFn: baseService.getAll,
    // select: ({data}) => data,
  });
};
