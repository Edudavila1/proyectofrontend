import { Routes, Route } from "react-router-dom";
import IniciarSesion from "./views/IniciarSesion";
import HistorialEquipo from "./views/HistorialEquipo";
import IngresoEquipo from "./views/IngresoEquipo";
import RegistroOpciones from "./views/RegistroOpciones";
import BusquedaEquipo from "./views/BusquedaEquipo";
import SalidaEquipo from "./views/SalidaEquipo";
import EditarEquipo from "./views/EditarEquipo";
import Home from "./views/Home";
import Cliente from "./views/Cliente";
import Contacto from "./views/Contacto";
import Navigation from "./components/Navigation";


const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Rutas protegidas */}
        <Route path="/home" element={<Home/>} />
        <Route path="/clientes" element={<Cliente/>} />
        <Route path="/contacto" element={<Contacto/>} />
        <Route path="/iniciarsesion" element={<IniciarSesion/>} />
        <Route path="/historial" element={<HistorialEquipo/>} />
        <Route path="/registroopciones" element={<RegistroOpciones />} />
        <Route path="/busquedaequipo" element={<BusquedaEquipo />} />
        <Route path="/salidaequipo" element={<SalidaEquipo />} />
        <Route path="/createproduct" element={<IngresoEquipo/>} />
        <Route path="/editarequipo/:id" element={<EditarEquipo />} />
      </Routes>
    </>
  );
};

export default App;