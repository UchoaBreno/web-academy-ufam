import { useQuery } from "@tanstack/react-query";
import { api } from "../services/api";

async function fetchProducts() {
  const response = await api.get("/produto");
  return response.data;
}

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
}