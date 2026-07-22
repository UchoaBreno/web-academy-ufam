import { CartItem as CartItemType } from "../../types/cart";
import { CartItem } from "../CartItem/CartItem";

interface CartListProps {
  items: CartItemType[];
  removeItemFromCart: (id: string) => void;
}

export function CartList({
  items,
  removeItemFromCart,
}: CartListProps) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Produto</th>
          <th>Valor</th>
          <th>Quantidade</th>
          <th>Total</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            removeItemFromCart={removeItemFromCart}
          />
        ))}
      </tbody>
    </table>
  );
}