'use client'

import {
  createContext,
  useState,
  ReactNode
} from 'react'
import { Product } from '@/app/types/product'

interface FavoritesContextData {
  favorites: Product[]
  setFavorites: React.Dispatch<React.SetStateAction<Product[]>>
}

export const FavoritesContext = createContext<FavoritesContextData>({
  favorites: [],
  setFavorites: () => ({})
})

interface FavoritesProviderProps {
  children: ReactNode
}

export function FavoritesProvider({
  children
}: FavoritesProviderProps) {
  const [favorites, setFavorites] = useState<Product[]>([])

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        setFavorites
      }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}