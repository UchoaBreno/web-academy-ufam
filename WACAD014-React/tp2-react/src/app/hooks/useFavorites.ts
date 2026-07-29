import { useQuery } from "@tanstack/react-query";
import { favoriteApi } from "../services/favoriteApi";
import { Product } from "../types/product";

async function fetchFavorites(): Promise<Product[]> {
  const response = await favoriteApi.get("/favorites");
  return response.data;
}

export function useFavorites() {
  return useQuery({
    queryKey: ["favorites"],
    queryFn: fetchFavorites,
  });
}