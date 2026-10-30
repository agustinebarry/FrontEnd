// src/pages/Servicios.jsx
import Card from '../components/Card';

const imagenes = import.meta.glob('../assets/img/*', { eager: true });

const listaServicios = [
  { 
    titulo: "Aéreos", 
    desc: "Elegí el vuelo que más se acomode a tu presupuesto, calendario y preferencias.", 
    img: imagenes['../assets/img/Aereo.avif']?.default, 
    alt: "Avión en el cielo" 
  },
  { 
    titulo: "Excursiones", 
    desc: "Elegí tus actividades favoritas, para vos, para tu familia, y hasta para tu mascota.", 
    img: imagenes['../assets/img/excursiones.avif']?.default, 
    alt: "Excursión por la llanura" 
  },
  { 
    titulo: "Paquetes de comida", 
    desc: "Elegí el paquete de comidas que más se adecue a tu plan: desayunos, comidas completas, barra libre, ¡lo que decidas!", 
    img: imagenes['../assets/img/desayuno.jfif']?.default, 
    alt: "Desayuno de hotel en la mesa" 
  },
  { 
    titulo: "Cruceros", 
    desc: "Elegí los mejores cruceros del mundo para una experiencia completa en alta mar.", 
    img: imagenes['../assets/img/Crucero.avif']?.default, 
    alt: "Crucero navegando" 
  },
  { 
    titulo: "Combos", 
    desc: "Combiná las opciones como quieras, elegí las preferencias a tu gusto y contactanos para comenzar tu nueva aventura.", 
    img: imagenes['../assets/img/familia playa.jpg']?.default, 
    alt: "Familia de cuatro en la playa" 
  }
];

export default function Servicios() {
  return (
    <>
      <div className="page-title" style={{ textAlign: 'center' }}>
        <h1>Servicios <i className="fa-solid fa-box-archive"></i></h1>
        <h2>Elegí tu paquete de preferencia</h2>
      </div>

      <section className="cards-section">
        <div className="cards-grid">
          {listaServicios.map((serv, index) => (
            <Card 
              key={index} 
              titulo={serv.titulo} 
              desc={serv.desc} 
              img={serv.img} 
              alt={serv.alt} 
            />
          ))}
        </div>
      </section>
    </>
  );
}