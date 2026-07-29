export interface ProductPhoto {
  src: string;
  titulo: string;
}

export interface Product {
  id: string;
  nome: string;
  preco: string;
  fotos: ProductPhoto[];
}