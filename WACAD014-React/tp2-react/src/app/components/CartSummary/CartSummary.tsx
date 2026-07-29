interface CartSummaryProps {
  totalItems: number;
  totalPrice: number;
}

export function CartSummary({
  totalItems,
  totalPrice,
}: CartSummaryProps) {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h4>Resumo do Carrinho</h4>

        <p>Quantidade: {totalItems}</p>

        <p>Valor: R$ {totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
}