import GalleryItem from '../components/GalleryItem';

const imagenes = import.meta.glob('../assets/img/*', { eager: true });

const listaDestinos = [
  { nombre: "Cataratas del Iguazú", img: imagenes['../assets/img/012-Cataratas-do-Iguacu-1.jpg']?.default },
  { nombre: "París - Francia", img: imagenes['../assets/img/paris.jpg']?.default },
  { nombre: "Holanda", img: imagenes['../assets/img/Tulipanes.jpg']?.default },
  { nombre: "Suiza", img: imagenes['../assets/img/Suiza.jfif']?.default },
  { nombre: "Roma - Italia", img: imagenes['../assets/img/Roma.jpg']?.default },
  { nombre: "Australia", img: imagenes['../assets/img/Australia.jfif']?.default },
  { nombre: "Brasil", img: imagenes['../assets/img/Brasil.jpg']?.default },
  { nombre: "Glaciar Perito Moreno", img: imagenes['../assets/img/Perito Moreno.jfif']?.default },
  { nombre: "Aruba", img: imagenes['../assets/img/Aruba-3.png']?.default },
  { nombre: "China", img: imagenes['../assets/img/china.avif']?.default }
];

export default function Destino() {
  return (
    <>
      <div className="page-title" style={{ textAlign: 'center' }}>
        <h1>Destinos <i className="fa-solid fa-plane"></i></h1>
        <h2>¡Elegí el que más te guste!</h2>
      </div>

      <section className="gallery-section">
        <div className="gallery">
          {listaDestinos.map((dest, index) => (
            <GalleryItem 
              key={index} 
              nombre={dest.nombre} 
              img={dest.img} 
            />
          ))}
        </div>
      </section>
    </>
  );
}