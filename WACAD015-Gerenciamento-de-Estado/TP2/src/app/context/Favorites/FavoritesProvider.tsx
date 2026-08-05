'use client'

import {
  createContext,
  useContext,
  useState,
  ReactNode
} from 'react'
import { Product } from '@/app/types/product'

interface FavoritesContextData {
  favorites: Product[]
  addFavorite: (product: Product) => void
  removeFavorite: (id: string) => void
  checkIsFavorite: (id: string) => boolean
  totalFavoritesValue: number
}

export const FavoritesContext = createContext({} as FavoritesContextData)

interface FavoritesProviderProps {
  children: ReactNode
}

export function FavoritesProvider({
  children
}: FavoritesProviderProps) {
  const [favorites, setFavorites] = useState<Product[]>([])

  function addFavorite(product: Product) {
    setFavorites((currentFavorites) => [...currentFavorites, product])
  }

  function removeFavorite(id: string) {
    setFavorites((currentFavorites) =>
      currentFavorites.filter((product) => product.id !== id)
    )
  }

  function checkIsFavorite(id: string) {
    return favorites.some((product) => product.id === id)
  }

  const totalFavoritesValue = favorites.reduce(
    (total, product) => total + Number(product.preco),
    0
  )

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        checkIsFavorite,
        totalFavoritesValue
      }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavoritesContext() {
  return useContext(FavoritesContext)
}