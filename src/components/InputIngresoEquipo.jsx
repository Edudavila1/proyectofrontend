const InputIngresoEquipo = ({ estado, texto, nombre, manejarValor }) => {
  return (
    <div>
      <label className="form-label">{texto}</label>
      <input
        type="text"
        className="form-control"
        name={nombre} // Asegurarse que `name` coincida con las claves del estado
        value={estado[nombre] || ''} // El valor debe estar vinculado al estado, con una validación de fallback en caso que esté vacío
        onChange={manejarValor} // Cuando cambia el input, actualizar el estado
        style={{
          borderRadius: "10px",
          padding: "10px",
          boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
        }}
      />
    </div>
  );
};

export default InputIngresoEquipo;