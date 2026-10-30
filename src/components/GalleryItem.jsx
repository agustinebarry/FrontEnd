export default function GalleryItem({ nombre, img }) {
  return (
    <div className="gallery-item">
      <img src={img} alt={nombre} />
      <h3>{nombre}</h3>
    </div>
  );
}