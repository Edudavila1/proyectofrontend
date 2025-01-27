const InputUser = ({estado, texto, manejarValor}) => {
    return (
      <div className="mb-3">
        <label htmlFor={texto} className="form-label fw-bold" >{texto}</label>
        <input
          type="text"
          placeholder={`Ingrese ${texto}`}
          value={estado[texto]}
          onChange={manejarValor}
          name={texto}
          id={texto}
          className="form-control form-control-lg"
        />
      </div>
    )
  }
  
  export default InputUser