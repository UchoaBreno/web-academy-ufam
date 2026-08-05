'use client'

import FavoritesList from '../components/FavoritesList/FavoritesList'
import { useFavoritesContext } from '../context/Favorites/FavoritesProvider'

export default function FavoritesPage() {
  const { favorites } = useFavoritesContext()

  return (
    <main>
      <div className='container p-5'>
        <FavoritesList favoriteProducts={favorites} />
      </div>
    </main>
  )
}