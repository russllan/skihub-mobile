import { useMutation, useQueryClient } from "@tanstack/react-query";
import productService from "../services/product.service";

export const useLikedProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['update product'],
    mutationFn: async ({ id, data }) => await productService.update(id, data),
    onError: (error) => {
      console.log("error" + error);
    },
    onSettled: async (_, error) => {
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["products"] });
      }
    },
  });
};
