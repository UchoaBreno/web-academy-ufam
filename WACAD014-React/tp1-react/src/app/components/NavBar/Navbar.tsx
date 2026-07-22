import Link from "next/link";

export function Navbar() {
  return (
    <nav className="container mt-3 mb-4">
      <h2>WA Loja</h2>

      <ul>
        <li>
          <Link href="/">Início</Link>
        </li>

        <li>
          <Link href="/cart">Carrinho</Link>
        </li>
      </ul>

      <hr />
    </nav>
  );
}