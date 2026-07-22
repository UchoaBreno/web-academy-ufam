import { Product } from "../../types/product";
import { ProductCard } from "../ProductCard/ProductCard";

interface ProductListProps {
  products: Product[];
  addToCart: (product: Product) => void;
}

export function ProductList({
  products,
  addToCart,
}: ProductListProps) {
  return (
    <div className="row g-4">
      {products.map((product) => (
        <div className="col-md-3" key={product.id}>
          <ProductCard
            product={product}
            addToCart={addToCart}
          />
        </div>
      ))}
    </div>
  );
}