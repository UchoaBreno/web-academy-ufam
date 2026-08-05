import { Product } from '@/app/types/product'
import FavoriteItem from '../FavoriteItem/FavoriteItem'
import { useFavoritesContext } from '@/app/context/Favorites/FavoritesProvider'

interface FavoritesListProps {
  favoriteProducts: Product[]
}

export default function FavoritesList({
  favoriteProducts
}: FavoritesListProps) {
  const { totalFavoritesValue } = useFavoritesContext()

  return (
    <div className='card mb-4'>
      <div className='row card-body'>
        <h5 className='card-title mb-4 fw-bold'>Lista de favoritos:</h5>

        {favoriteProducts.length > 0 ? (
          <div className='table-responsive'>
            <table className='table table-borderless'>
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Preço</th>
                  <th>Desconto</th>
                  <th>Opções</th>
                </tr>
              </thead>

              <tbody>
                {favoriteProducts.map((item) => (
                  <FavoriteItem
                  key={item.id}
                  favoriteItem={item}
                />
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>Sua lista de favoritos está vazia.</p>
        )}
      </div>

      <div className='card-footer d-flex flex-column'>
        <small className='text-muted'>
          Quantidade de produtos: {favoriteProducts.length}
        </small>

        <small className='text-muted'>
          Valor total: R$ {totalFavoritesValue}
        </small>
      </div>
    </div>
  )
}