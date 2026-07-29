import { CartItem as CartItemType } from "../../types/cart";

interface CartItemProps {
  item: CartItemType;
  removeItemFromCart: (id: string) => void;
}

export function CartItem({
  item,
  removeItemFromCart,
}: CartItemProps) {
  return (
    <tr>
      <td>{item.product.name}</td>
      <td>R$ {item.product.price.toFixed(2)}</td>
      <td>{item.quantity}</td>
      <td>
        R$ {(item.product.price * item.quantity).toFixed(2)}
      </td>

      <td>
        <button
          className="btn btn-danger"
          onClick={() => removeItemFromCart(item.id)}
        >
          Remover
        </button>
      </td>
    </tr>
  );
}