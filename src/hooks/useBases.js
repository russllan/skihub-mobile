import { useQuery } from "@tanstack/react-query";
import baseService from "../services/base.service";

export const useBases = () => {
  return useQuery({
    queryKey: ['bases'],
    queryFn: baseService.getAll,
  });
};

export const useOneBase = (id) => {
  return useQuery({
    queryKey: ['oneBase', id],
    queryFn: async () => baseService.getOne(id),
    enabled: !!id
  })
}