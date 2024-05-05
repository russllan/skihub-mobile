import { useQuery } from "@tanstack/react-query";
import productService from "../services/product.service";

export const useProduct = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: productService.getAll,
  });
};
