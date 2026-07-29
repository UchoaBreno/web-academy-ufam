import Link from "next/link";

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link href="/" className="navbar-brand">
          WA Loja
        </Link>

        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link href="/" className="nav-link">
              Início
            </Link>
          </li>

          <li className="nav-item">
            <Link href="/cart" className="nav-link">
              Carrinho
            </Link>
          </li>

          <li className="nav-item">
            <Link href="/favorites" className="nav-link">
              Favoritos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}