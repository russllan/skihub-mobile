import { useQuery } from "@tanstack/react-query";
import baseService from "../services/base.service";

export const useBases = () => {
  return useQuery({
    queryKey: ['base'],
    queryFn: baseService.getAll,
  });
};
