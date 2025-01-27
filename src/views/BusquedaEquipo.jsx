import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputIngresoEquipo from "../components/InputIngresoEquipo";
import { createProduct } from "../services/productService";
import { buscarEquipo } from "../services/productService";
import Swal from "sweetalert2";

const BusquedaEquipo = () => {
  const [buscarequipo, setBuscarequipo] = useState({
 
  });

  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const manejarInput = (ev) => {
    setBuscarequipo({
      ...buscarequipo,
      [ev.target.name]: ev.target.value,
    });
  };

  const manejarSubmit = async (ev) => {
    ev.preventDefault();
   
    const { BuscarEquipo } = buscarequipo;
    
    await buscarEquipo({ BuscarEquipo, setError, navigate });
    
  }

  const inputBuscar = ["BuscarEquipo"];
 

  return (
    <div
    className="container py-5 mt-5"
    style={{
      background: "#f8f9fa",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      maxWidth: "800px",
      margin: "auto",
    }}
  >
       <h1 className="text-center mb-4 text-primary">Buscar Equipo</h1>
          <form onSubmit={manejarSubmit}>
            <div className="row g-1">

        <label htmlFor={inputBuscar} className=" text-center form-label fw-bold" >Ingrese Numero de Serie (sn)</label>
            
        <input
        
          type="text"
          placeholder={`Ejemplo: 19350001C23ZH`}
          value={buscarequipo[inputBuscar] || ""}
          onChange={manejarInput}
          name={inputBuscar}
          id={inputBuscar}
          className="form-control form-control-lg"
        />
      </div>
      

         {/* Botón Guardar */}
         <div className="text-center mt-4">
          <button
            type="submit"
            className="btn btn-primary px-5 py-2"
            style={{
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
};
export default BusquedaEquipo;
