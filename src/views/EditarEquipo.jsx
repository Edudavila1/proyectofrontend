//saber que producto -> obtener la data del producto -> editarla -> mandar la info editada
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { requestProductById, editProduct } from "../services/productService";
import InputIngresoEquipo from "../components/InputIngresoEquipo";
import Swal from "sweetalert2";

const EditarEquipo = () => {
  const [equipo, setEquipo] = useState({
    cliente: "",
    modeloEquipo: "",
    sn: "",
    motivoIngreso: "",
    fechaIngreso: "",
    motivoSalida: "",
    fechaSalida: "",

  });

  const { id } = useParams();

  const navigate = useNavigate();

  const manejarInput = (ev) => {
    setEquipo({
      ...equipo,
      [ev.target.name]: ev.target.value,
    });
  };

  const manejarSubmit = async (ev) => {
    ev.preventDefault();
    await editProduct(id, equipo);
    //con el await de sweetalert esperamos a que se cierre la alerta
    await Swal.fire({
      title:"Equipo Actualizado",
      text:`Equipo se actualizo con éxito`,
      icon: "success"
    })
    //navegamos a la vista principal
    navigate('/historial');
  }

  const inputsACrear = [
    { name: "cliente", label: "Cliente" },
    { name: "modeloEquipo", label: "Modelo De Equipo" },
    { name: "sn", label: "Serie" },
    { name: "motivoIngreso", label: "Motivo de Ingreso" },
    { name: "fechaIngreso", label: "Fecha de Ingreso" },
    { name: "motivoSalida", label: "Motivo de Salida" },
    { name: "fechaSalida", label: "Fecha de Salida" },
  ];

  useEffect(() => {
    const getProduct = async () => {
      const productObtained = await requestProductById(id);
      setEquipo(productObtained);
    }
    getProduct();
  }, []) //no va codigo aparte del jsx despues del useEffect

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
      <h1 className="text-center mb-4 text-primary">Editar Equipo</h1>
      <form onSubmit={manejarSubmit}>
        <div className="row g-4">
          {/* Iteración de inputs */}
          {inputsACrear.map((item, i) => (
            <div key={i} className="col-md-6">
              <InputIngresoEquipo
                estado={equipo}
                texto={item.label}
                nombre={item.name}  // Pasar el `name` como prop
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

export default EditarEquipo;