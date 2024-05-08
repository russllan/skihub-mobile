import { useQuery } from "@tanstack/react-query";
import tourService from "../services/tour.service";

export const useTour = () => {
  return useQuery({
    queryKey: ["tours"],
    queryFn: async () => tourService.getAll()
  });
};

export const useOneTour = (id) => {
  return useQuery({
    queryKey: ["tour", id],
    queryFn: async () => tourService.getOne(id),
    enabled: !!id
  })
}
