import { CartItem } from "../types/cart";

export const mockCartItems: CartItem[] = [
  {
    id: "1",
    product: {
      id: "1",
      name: "Notebook",
      price: 4500,
      photos: ["/placeholder.png"],
    },
    quantity: 1,
  },
  {
    id: "2",
    product: {
      id: "2",
      name: "Smartphone",
      price: 2500,
      photos: ["/placeholder.png"],
    },
    quantity: 2,
  },
  {
    id: "3",
    product: {
      id: "3",
      name: "Mouse Gamer",
      price: 250,
      photos: ["/placeholder.png"],
    },
    quantity: 3,
  },
];