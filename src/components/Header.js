import Link from 'next/link';

export default function Header() {
  return (
    <header className="header container">
      <div className="logo">
        <Link href="/" aria-label="BeCom Advisory - Página Principal">
          <img src="/imagotipo_primario_blanco.png" alt="BeCom Advisory - Consultoría Estratégica y Tecnología" style={{ height: '36px', width: 'auto' }} fetchpriority="high" />
        </Link>
      </div>
      <nav className="nav">
        <Link href="#servicios" className="nav-link" aria-label="Ir a la sección de Servicios">Servicios</Link>
        <Link href="#proceso" className="nav-link" aria-label="Conoce nuestra metodología de trabajo">Proceso</Link>
        <Link href="#contacto" className="nav-link" aria-label="Agenda una cita de diagnóstico">Contacto</Link>
      </nav>
    </header>
  );
}
