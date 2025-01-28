import axios from "axios";
import Swal from "sweetalert2";

const URL = "https://67661e9b410f84999656de31.mockapi.io/User";

  
  const loginUser = async ({ Usuario, Contraseña, setError, navigate }) => {
    console.log("Usuario encontrado:", { Usuario, Contraseña, setError, navigate }); 

    try {
        const response = await axios.get(URL);

        console.log(response.data); 

    // Verificamos si encontramos algún usuario con el nombre de usuario proporcionado
    const user = response.data.find(user => user.username === Usuario);


    console.log("Usuario encontrado:", user); 

    if (user) {
        // Verificar la contraseña
        if (user.password === Contraseña) {
          localStorage.setItem("authUser", JSON.stringify(user)); // Guardar el usuario en el localStorage
          console.log("Verificamos si esta el usuario", user); 
          await Swal.fire({
            title: "Inicio de sesión exitoso",
            text: "Bienvenido al sistema",
            icon: "success",
          });
          navigate("/registroopciones"); // Redirigir solo si el login es exitoso
        } else {
          setError("Contraseña incorrecta");
          await Swal.fire({
            title: "Error",
            text: "Contraseña incorrecta",
            icon: "error",
          });
        }
      } else {
        setError("Usuario no encontrado");
        await Swal.fire({
          title: "Error",
          text: "Usuario no encontrado",
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setError("Hubo un problema al conectarse al servidor");
      await Swal.fire({
        title: "Error",
        text: "Hubo un problema al conectarse al servidor",
        icon: "error",
      });
    }
  };


  export {
    
    loginUser,
    
  }