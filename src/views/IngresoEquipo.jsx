import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputIngresoEquipo from "../components/InputIngresoEquipo";
import { createProduct } from "../services/productService";
import Swal from "sweetalert2";

const IngresoEquipo = () => {
  // Definir estado con claves más específicas para los campos de entrada
  const [equipo, setEquipo] = useState({
    cliente: "",
    modeloEquipo: "",
    sn: "",
    motivoIngreso: "",
    fechaIngreso: "",
    motivoSalida: "",
    fechaSalida: "",
  });

  const navigate = useNavigate();

  const manejarInput = (ev) => {
    setEquipo({
      ...equipo,
      [ev.target.name]: ev.target.value, // Usamos `name` del input para actualizar el estado
    });
  };

  const manejarSubmit = async (ev) => {
    ev.preventDefault();
    console.log("Datos del equipo antes de enviarlos:", equipo); // Verificar que los datos sean correctos

    // Enviar el objeto con los datos a MockAPI
    await createProduct(equipo);
    await Swal.fire({
      title: "Registro de Ingreso",
      text: `Equipo se ingreso con éxito!`,
      icon: "success",
    });

    // Esperamos a que se cierre la ventana de sweet alert y luego navegamos
    navigate('/historial');
  };

  // Cambiar los nombres de los campos en `inputsACrear` para que coincidan con las claves del estado
  const inputsACrear = [
    { name: "cliente", label: "Cliente" },
    { name: "modeloEquipo", label: "Modelo De Equipo" },
    { name: "sn", label: "Serie" },
    { name: "motivoIngreso", label: "Motivo de Ingreso" },
    { name: "fechaIngreso", label: "Fecha de Ingreso" },
    { name: "motivoSalida", label: "Motivo de Salida" },
    { name: "fechaSalida", label: "Fecha de Salida" },
  ];

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
      <h1 className="text-center mb-4 text-primary">Ingreso de Equipos</h1>
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
export default IngresoEquipo;