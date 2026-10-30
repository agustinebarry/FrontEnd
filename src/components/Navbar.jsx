import { Link } from 'react-router-dom';

export default function Navbar({ opciones }) {
  return (
    <nav className="barra">
      <Link to="/" className="logo">
        <i className="fa-solid fa-earth-americas"></i> Tu Destino
      </Link>

      {/* Lista de enlaces mapeados */}
      <ul className="links">
        {opciones.map((opcion) => (
          <li key={opcion.nombre}>
            <Link to={opcion.url}>{opcion.nombre}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}