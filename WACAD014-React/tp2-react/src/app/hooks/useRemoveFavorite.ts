import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { favoriteApi } from "../services/favoriteApi";

export function useRemoveFavorite() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      await favoriteApi.delete(`/favorites/${id}`);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["favorites"],
      });

      toast.success("Favorito removido!");
    },

    onError: () => {
      toast.error("Erro ao remover favorito.");
    },
  });
}