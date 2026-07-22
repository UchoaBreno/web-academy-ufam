"use client";

import { useState } from "react";

import { CartSummary } from "./components/CartSummary/CartSummary";
import { ProductList } from "./components/ProductList/ProductList";

import { mockProducts } from "./mocks/products";
import { Product } from "./types/product";

export default function Home() {
  const [totalItems, setTotalItems] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  function addToCart(product: Product) {
    setTotalItems((prev) => prev + 1);
    setTotalPrice((prev) => prev + product.price);
  }

  return (
    <main className="container mt-4">
      <CartSummary
        totalItems={totalItems}
        totalPrice={totalPrice}
      />

      <h3 className="mb-3">
        Produtos disponíveis
      </h3>

      <ProductList
        products={mockProducts}
        addToCart={addToCart}
      />
    </main>
  );
}