import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/styles.css'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import Destinos from './pages/Destino'; 
import Contacto from './pages/Contacto';

// createBrowserRouter se encarga de armar las rutas
const mapaRutas = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'servicios', element: <Servicios /> },
      { path: 'destinos', element: <Destinos /> },
      { path: 'contacto', element: <Contacto /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={mapaRutas} />
  </StrictMode>,
);