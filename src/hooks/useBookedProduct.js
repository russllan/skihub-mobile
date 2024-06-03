import { useMutation } from "@tanstack/react-query";
import bookedProduct from "../services/bookedProduct";

export const useBookedProduct = useMutation({
    mutationKey: ['book-product'],
    mutationFn: async ({data}) => await bookedProduct.createBookedProduct(data)
})