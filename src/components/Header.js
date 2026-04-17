import Link from 'next/link';

export default function Header() {
  return (
    <header className="header container">
      <div className="logo">
        <Link href="/">
          <img src="/imagotipo_primario_blanco.png" alt="BeCom Advisory Logo" style={{ height: '36px', width: 'auto' }} />
        </Link>
      </div>
      <nav className="nav">
        <Link href="#servicios" className="nav-link">Servicios</Link>
        <Link href="#proceso" className="nav-link">Proceso</Link>
        <Link href="#contacto" className="nav-link">Contacto</Link>
      </nav>
    </header>
  );
}
