import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { favoriteApi } from "../services/favoriteApi";
import { Product } from "../types/product";

export function useAddFavorite() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (product: Product) => {
      await favoriteApi.post("/favorites", product);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["favorites"],
      });

      toast.success("Produto favoritado!");
    },

    onError: () => {
      toast.error("Erro ao favoritar.");
    },
  });
}