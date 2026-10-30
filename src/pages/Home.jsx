import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Bienvenidos a Tu Destino</h1>
        <p>
          Encontrá los mejores paquetes turísticos y viví la aventura de tu
          vida.
        </p>
        <Link to="/servicios" className="btn btn-primario">
          ¡Mirá nuestros servicios!
        </Link>
      </section>
    </>
  );
}
