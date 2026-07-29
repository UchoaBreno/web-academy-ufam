"use client";

import { useState } from "react";

import { CartSummary } from "./components/CartSummary/CartSummary";
import { ProductList } from "./components/ProductList/ProductList";

import { useProducts } from "./hooks/useProducts";
import { Product } from "./types/product";

export default function Home() {
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const { data: products, isLoading, isError } = useProducts();

  function addToCart(product: Product) {
    setTotalItems((prev) => prev + 1);
    setTotalPrice((prev) => prev + Number(product.preco));
  }

  if (isLoading) {
    return (
      <main className="container mt-4">
        <h2>Carregando produtos...</h2>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="container mt-4">
        <h2>Erro ao carregar produtos.</h2>
      </main>
    );
  }

  return (
    <main className="container mt-4">
      <CartSummary
        totalItems={totalItems}
        totalPrice={totalPrice}
      />

      <h3 className="mb-3">Produtos disponíveis</h3>

      <ProductList
        products={products ?? []}
        addToCart={addToCart}
      />
    </main>
  );
}