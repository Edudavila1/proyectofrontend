

import InputIngresoEquipo from "../components/InputIngresoEquipo";
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { requestProductById, editProduct } from "../services/productService";
import { createProduct } from "../services/productService";

import Swal from "sweetalert2";

const SalidaEquipo = () => {
  const [equipoSalida, setSalida] = useState({
    id: "",
    
 
  });

  const { id } = useParams();

  const navigate = useNavigate();

  const manejarInput = (ev) => {
    setSalida({
      ...equipoSalida,
      [ev.target.name]: ev.target.value,
    });
  };

  const manejarSubmit = async (ev) => {
    ev.preventDefault();
    await editProduct(id, equipoSalida);
    await Swal.fire({
      title:"Registro de Ingreso",
      text:`Salida de equipo con éxito!`,
      icon: "success",
    })
    //esperamos a que se cierre la ventana de sweet alert
    //y navegamos a la ruta que deseemos
    navigate('/')
  }

  const inputsACrear = ["Motivo de Salida", "Fecha de salida"];

  useEffect(() => {
    const getProduct = async () => {
      const productObtained = await requestProductById(id);
      setSalida(productObtained);
    }
    getProduct();
  }, [])

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

    
      <h1 className="text-center mb-4 text-primary">Salida de Equipo</h1>
      <form onSubmit={manejarSubmit}>
      <div className="row g-4">
        {inputsACrear.map((item, i) => (
          <div key={i} className="col-md-6">
          <InputIngresoEquipo
            key={i}
            estado={equipoSalida}
            texto={item}
            manejarValor={manejarInput}
          />
          </div>
        ))}
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
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};
export default SalidaEquipo;
