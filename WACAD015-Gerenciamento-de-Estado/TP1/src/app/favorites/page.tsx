'use client'

import { useContext } from 'react'
import FavoritesList from '../components/FavoritesList/FavoritesList'
import { FavoritesContext } from '../context/Favorites/FavoritesProvider'

export default function FavoritesPage() {
  const { favorites, setFavorites } = useContext(FavoritesContext)

  return (
    <main>
      <div className='container p-5'>
        <FavoritesList
          favoriteProducts={favorites}
          setFavorites={setFavorites}
        />
      </div>
    </main>
  )
}