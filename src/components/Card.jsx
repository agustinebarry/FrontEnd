
import { Link } from 'react-router-dom';

export default function Card({ titulo, desc, img, alt }) {
  return (
    <article className="card">
      <img src={img} alt={alt} />
      <div className="card-text">
        <h3>{titulo}</h3>
        <p>{desc}</p>
        <Link to="/contacto" className="btn btn-secundario">Reservar</Link>
      </div>
    </article>
  );
}