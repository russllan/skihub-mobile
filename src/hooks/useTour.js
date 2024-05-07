import { useQuery } from "@tanstack/react-query";
import tourService from "../services/tour.service";

export const useTour = () => {
  return useQuery({
    queryKey: ["tours"],
    queryFn: async () => tourService.getAll()
  });
};
