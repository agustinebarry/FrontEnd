import { useState } from 'react';
import Formulario from '../components/Formulario';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    destinoPreferido: '',
    mensaje: '',
    contactoPref: 'email'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del formulario enviados:", formData);
    alert("¡Mensaje enviado con éxito! Revisa la consola para ver los datos.");
  };

  return (
    <>
      <div className="page-title" style={{ textAlign: 'center' }}>
        <h1>Contacto <i className="fa-solid fa-envelope"></i></h1>
        <h2>Estamos para ayudarte en tu próxima aventura</h2>
      </div>

      <section className="contact-section">
        <form onSubmit={handleSubmit}>
          
          <Formulario 
            label="Nombre y Apellido"
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Tu nombre completo"
            required={true}
          />

          <Formulario 
            label="Correo Electrónico"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="tunombre@ejemplo.com"
            required={true}
          />

          <Formulario 
            label="Teléfono"
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            placeholder="+54 11 1234-5678"
          />

          <div className="form-group">
            <label htmlFor="destinoPreferido">Destino de Preferencia</label>
            <select 
              id="destinoPreferido" 
              name="destinoPreferido" 
              value={formData.destinoPreferido} 
              onChange={handleChange}
            >
              <option value="">Selecciona un destino</option>
              <option value="iguazu">Cataratas del Iguazú</option>
              <option value="paris">París - Francia</option>
              <option value="holanda">Holanda</option>
              <option value="suiza">Suiza</option>
              <option value="roma">Roma - Italia</option>
              <option value="australia">Australia</option>
              <option value="brasil">Brasil</option>
              <option value="perito-moreno">Glaciar Perito Moreno</option>
              <option value="aruba">Aruba</option>
              <option value="china">China</option>
            </select>
          </div>

          <fieldset>
            <legend>¿Cómo prefieres que te contactemos?</legend>
            <div className="radio-group">
              <div>
                <input 
                  type="radio" 
                  id="pref-email" 
                  name="contactoPref" 
                  value="email" 
                  checked={formData.contactoPref === 'email'} 
                  onChange={handleChange} 
                />
                <label htmlFor="pref-email">Email</label>
              </div>
              <div>
                <input 
                  type="radio" 
                  id="pref-tel" 
                  name="contactoPref" 
                  value="telefono" 
                  checked={formData.contactoPref === 'telefono'} 
                  onChange={handleChange} 
                />
                <label htmlFor="pref-tel">Teléfono</label>
              </div>
            </div>
          </fieldset>

          <div className="form-group">
            <label htmlFor="mensaje">Mensaje o Comentarios</label>
            <textarea 
              id="mensaje" 
              name="mensaje" 
              value={formData.mensaje} 
              onChange={handleChange} 
              placeholder="Escribe tus dudas o consultas aquí..."
            ></textarea>
          </div>

          <div className="form-buttons">
            <button type="submit" className="btn btn-primario">Enviar Consulta</button>
            <button type="reset" className="btn btn-secundario" onClick={() => setFormData({ nombre: '', email: '', telefono: '', destinoPreferido: '', mensaje: '', contactoPref: 'email' })}>
              Limpiar
            </button>
          </div>
        </form>
      </section>
    </>
  );
}