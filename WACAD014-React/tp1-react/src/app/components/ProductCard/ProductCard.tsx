import Image from "next/image";
import { Product } from "../../types/product";

interface ProductCardProps {
  product: Product;
  addToCart: (product: Product) => void;
}

export function ProductCard({
  product,
  addToCart,
}: ProductCardProps) {
  return (
    <div className="card h-100">
      <Image
        src={product.photos[0]}
        alt={product.name}
        width={300}
        height={200}
        className="card-img-top"
      />

      <div className="card-body">
        <h5 className="card-title">
          {product.name}
        </h5>

        <p className="card-text">
          R$ {product.price.toFixed(2)}
        </p>

        <button
          className="btn btn-dark w-100"
          onClick={() => addToCart(product)}
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}