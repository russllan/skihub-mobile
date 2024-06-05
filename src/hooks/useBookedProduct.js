import { useMutation, useQuery } from "@tanstack/react-query";
import bookedProduct from "../services/bookedProduct.service";

export const useBookedProduct = useMutation({
  mutationKey: ["book-product"],
  mutationFn: async ({ data }) => await bookedProduct.createBookedProduct(data),
});

export const useGetBookedProduct = () => {
  return useQuery({
    queryKey: ["booked-product"],
    queryFn: async () => {
      const data = await bookedProduct.getAll();
      return data;
    },
  });
};
