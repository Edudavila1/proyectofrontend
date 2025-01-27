
import { Link } from "react-router-dom"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputUser from "../components/InputUser";
import { loginUser } from "../services/productUser";
import Swal from "sweetalert2";

const PaginaInicio = () => {
    const [usuario, setUsuario] = useState({
      Usuario: "",
      Contraseña: "",
      
    });

    const [error, setError] = useState(null);
    
    const navigate = useNavigate();

    const manejarInput = (ev) => {
        setUsuario({
          ...usuario,
          [ev.target.name]: ev.target.value,
        });
      };


    const manejarSubmit = async (ev) => {
    ev.preventDefault();
    const { Usuario, Contraseña } = usuario;
    
    await loginUser({ Usuario, Contraseña, setError, navigate });

    
    };

    const inputsACrear = ["Usuario", "Contraseña"];

    return (
        <div className="container-fluid bg-light ">
            <div className="row justify-content-center align-items-center vh-100">
                <div className="col-11 col-sm-8 col-md-6 col-lg-4">
                     <div className="card border-0 shadow">

                         <div className="card-header text-center py-4 bg-dark text-white">
                             <h3 className="mb-1">Iniciar Sesión</h3>
                         </div>
        
                           <div className="card-body p-4">

                                 <form onSubmit={manejarSubmit}>  

                                        {inputsACrear.map((item, i) => (
                                         <InputUser
                                            key={i}
                                            estado={usuario}
                                            texto={item}
                                            manejarValor={manejarInput}
                                           />
                                         ))}

                                         <div className="d-grid gap-2">
                                            <button type="submit" className="btn btn-dark">
                                             Iniciar
                                            </button>
                                         </div>                                                                                            
                                </form>
                         
                          </div>
                    </div>
                </div>
            </div>
        </div>
    );

/*const PaginaPrincipal = () => {
  return (

    <div className='container my-3 '>
        <Link 
            to={`/createproduct`}
            className='btn btn-primary' type='submit'
         >
                Ir a Ingresar Equipo
        </Link>

        <Link 
            to={`/createproduct`}
            className='btn btn-primary' type='submit'
         >
                Ir a Salida Equipo
        </Link>

  </div>
  )
}*/
}
export default PaginaInicio;
