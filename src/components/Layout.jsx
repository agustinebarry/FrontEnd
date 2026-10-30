import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  const opcionesMenu = [
    { nombre: "Inicio", url: "/" },
    { nombre: "Servicios", url: "/servicios" },
    { nombre: "Destinos", url: "/destinos" },
    { nombre: "Contacto", url: "/contacto" }
  ];

  return (
    <div className="app-layout">
      <Navbar opciones={opcionesMenu} /> 
      <main>
        <Outlet /> 
      </main>
      <Footer /> 
    </div>
  );
}