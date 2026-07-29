"use client";

import Image from "next/image";

import { useFavorites } from "../hooks/useFavorites";
import { useRemoveFavorite } from "../hooks/useRemoveFavorite";

export default function FavoritesPage() {
  const { data, isLoading, isError } = useFavorites();
  const { mutate } = useRemoveFavorite();

  if (isLoading) {
    return (
      <main className="container mt-4">
        <h2>Carregando...</h2>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="container mt-4">
        <h2>Erro ao carregar favoritos.</h2>
      </main>
    );
  }

  return (
    <main className="container mt-4">
      <h2 className="mb-4">Favoritos</h2>

      <div className="row g-4">
        {data?.map((product) => (
          <div className="col-md-3" key={product.id}>
            <div className="card h-100">
              <Image
                src={product.fotos[0].src}
                alt={product.nome}
                width={300}
                height={200}
                className="card-img-top"
              />

              <div className="card-body">
                <h5>{product.nome}</h5>

                <p>
                  R$ {Number(product.preco).toFixed(2)}
                </p>

                <button
                  className="btn btn-danger w-100"
                  onClick={() => mutate(product.id)}
                >
                  Remover
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}