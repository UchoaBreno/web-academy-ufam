import Image from "next/image";

import { Product } from "../../types/product";
import { useAddFavorite } from "../../hooks/useAddFavorite";

interface ProductCardProps {
  product: Product;
  addToCart: (product: Product) => void;
}

export function ProductCard({
  product,
  addToCart,
}: ProductCardProps) {
  const { mutate } = useAddFavorite();

  return (
    <div className="card h-100">
      <Image
        src={product.fotos[0]?.src}
        alt={product.nome}
        width={300}
        height={200}
        className="card-img-top"
      />

      <div className="card-body">
        <h5 className="card-title">
          {product.nome}
        </h5>

        <p className="card-text">
          R$ {Number(product.preco).toFixed(2)}
        </p>

        <button
          className="btn btn-dark w-100"
          onClick={() => addToCart(product)}
        >
          Adicionar ao carrinho
        </button>

        <button
          className="btn btn-outline-primary w-100 mt-2"
          onClick={() => mutate(product)}
        >
          Favoritar
        </button>
      </div>
    </div>
  );
}