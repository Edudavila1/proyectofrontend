
import { useNavigate } from "react-router-dom";
import { FaArrowDown, FaArrowUp, FaHistory } from "react-icons/fa"

const RegistroOpciones = () => {
        const navigate = useNavigate();

        const manejarSubmit = async (ev) => {
        ev.preventDefault();
        
        await navigate('/createproduct')  
      }


        const manejarSubmit2 = async (ev) => {
        ev.preventDefault();
      
        await navigate('/busquedaequipo')
        }

        const manejarSubmit3 = async (ev) => {
        ev.preventDefault();
            
        await navigate('/historial')
        }


  return (
    
     <div className="container py-5">
     
      <h1 className="text-center mb-4" style={{ fontWeight: "bold" }}>
        Ingreso de Registro
      </h1>

      <div className="row justify-content-center">
       
        <div className="col-md-4">
          <div className="card text-center shadow-sm mb-4">
            <div className="card-body">
              <FaArrowDown size={50} className="text-primary mb-3" />
              <h5 className="card-title">Ingreso de Equipo</h5>
              <form onSubmit={manejarSubmit}>
              <button className="btn btn-primary w-100">Ingresar</button>
              </form>
            </div>
          </div>
        </div>
         
        
      
      <div className="col-md-4">
          <div className="card text-center shadow-sm mb-4">
            <div className="card-body">
              <FaArrowUp size={50} className="text-danger mb-3" />
              <h5 className="card-title">Salida de Equipo</h5>
              <form onSubmit={manejarSubmit2}>
              <button className="btn btn-danger w-100">Registrar Salida</button>
              </form>
            </div>
          </div>
        </div>
    
       
        <div className="col-md-4">
          <div className="card text-center shadow-sm mb-4">
            <div className="card-body">
              <FaHistory size={50} className="text-secondary mb-3" />
              <h5 className="card-title">Historial</h5>
              <form onSubmit={manejarSubmit3}>
              <button className="btn btn-secondary w-100">Ver Historial</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    
  
);
};


export default RegistroOpciones;