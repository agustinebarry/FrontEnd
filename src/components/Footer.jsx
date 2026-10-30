import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <ul className="footer-container">
        <li>
          <h3>
            <i className="fa-solid fa-earth-americas"></i> Tu Destino
          </h3>
          <p>Tu próxima aventura comienza acá.</p>
          <p className="hide">
            Descubrí destinos únicos y viví experiencias inolvidables.
          </p>
        </li>

        <li>
          <h3>Enlaces</h3>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/destinos">Destinos</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </li>

        <li className="direcciones">
          <h3>Direcciones</h3>
          <ul>
            <li>Capital Federal</li>
            <li>Avenida Siempre Viva 1234</li>
            <li>Cañuelas</li>
            <li>Aveces Viva 4321</li>
          </ul>
        </li>

        <li>
          <h3>Seguinos</h3>
          <ul>
            <li><a href="#"><i className="fa-brands fa-instagram"></i> Instagram</a></li>
            <li><a href="#"><i className="fa-brands fa-facebook"></i> Facebook</a></li>
            <li><a href="#"><i className="fa-brands fa-x-twitter"></i> X</a></li>
          </ul>
        </li>
      </ul>

      <p className="copyright">
        © 2026 Tu Destino - Todos los derechos reservados.
      </p>
    </footer>
  );
}