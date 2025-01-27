import { useState, useEffect } from "react";
import { requestProducts, deleteProduct } from "../services/productService";
import TableData from "../components/TableData";
import Swal from "sweetalert2";

const HistorialEquipo = () => {
  const [products, setProducts] = useState({
    cliente: "",
    modeloEquipo: "",
    sn: "",
    motivoIngreso: "",
    fechaIngreso: "",
    motivoSalida: "",
    fechaSalida: "",
  });
  

  const cabeceras = [
    { name: "cliente", label: "Cliente" },
    { name: "modeloEquipo", label: "Modelo De Equipo" },
    { name: "sn", label: "Serie" },
    { name: "motivoIngreso", label: "Motivo de Ingreso" },
    { name: "fechaIngreso", label: "Fecha de Ingreso" },
    { name: "motivoSalida", label: "Motivo de Salida" },
    { name: "fechaSalida", label: "Fecha de Salida" },
  ];
  const manejarEliminar = async (id) => {
    const { isConfirmed } = await Swal.fire({
      title: "¿Está seguro(a) de eliminar este registro?",
      text: "Esta acción es irreversible.",
      icon: "warning",
      showDenyButton: true,
      denyButtonText: "No, cancelar",
      showConfirmButton: true,
      confirmButtonText: "Sí, eliminar",
    });

    if (isConfirmed) {
      await deleteProduct(id);
      await Swal.fire({
        title: "Registro eliminado correctamente",
        icon: "success",
      });

      const productsFiltered = products.filter((prod) => prod.id !== id);
      setProducts(productsFiltered);
    }
  };

  useEffect(() => {
    const getProducts = async () => {
      const productsObtained = await requestProducts();
      setProducts(productsObtained);
    };
    getProducts();
  }, []);

  return (
    <div className="container my-5 p-4 bg-white shadow rounded">
      <h1 className="text-center text-2xl font-bold mb-4">Historial de Equipos</h1>
      <TableData
        data={products}
        cabeceras={cabeceras}
        accionEliminar={manejarEliminar}
      />
    </div>
  );
};

export default HistorialEquipo;