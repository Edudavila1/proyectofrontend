import { Link } from "react-router-dom";

const TableData = (props) => {
  const { data, cabeceras, accionEliminar } = props;

  return (
    <div className="table-responsive shadow rounded">
      <table className="table table-striped table-hover align-middle">
        {/* Cabecera */}
        <thead className="table-dark">
          <tr>
            {cabeceras.map((cab, i) => (
              <th key={i} className="text-center">
                {cab.label}
              </th>
            ))}
            <th className="text-center">Acciones</th>
          </tr>
        </thead>

        {/* Cuerpo */}
        <tbody>
          {data.length > 0 ? (
            data.map((item) => (
              <tr key={item.id}>
                {cabeceras.map((cab, i) => (
                  <td key={i} className="text-center">
                    {item[cab.name]} {/* Usamos `cab.name` aquí */}
                  </td>
                ))}
                <td className="text-center">
                  {/* Botón Editar */}
                  <Link
                    to={`/editarequipo/${item.id}`}
                    className="btn btn-warning btn-sm me-2"
                  >
                    <i className="fa-solid fa-pen"></i> Editar
                  </Link>
                  {/* Botón Eliminar */}
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => accionEliminar(item.id)}
                  >
                    <i className="fa-solid fa-trash"></i> Eliminar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={cabeceras.length + 1} className="text-center">
                No hay datos disponibles.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableData;