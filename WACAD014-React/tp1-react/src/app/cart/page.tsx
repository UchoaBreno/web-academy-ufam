"use client";

import { useState } from "react";

import { CartList } from "../components/CartList/CartList";
import { CartSummary } from "../components/CartSummary/CartSummary";

import { mockCartItems } from "../mocks/CartItems";
import { CartItem } from "../types/cart";

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>(mockCartItems);

  function removeItemFromCart(id: string) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  const totalItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <main className="container mt-4">
      <CartSummary
        totalItems={totalItems}
        totalPrice={totalPrice}
      />

      <CartList
        items={items}
        removeItemFromCart={removeItemFromCart}
      />
    </main>
  );
}