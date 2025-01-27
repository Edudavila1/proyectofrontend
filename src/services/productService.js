import axios from "axios";
import Swal from "sweetalert2";

const URL = "https://67661e9b410f84999656de31.mockapi.io/Equipos";

const requestProducts = async () => {
  try {
    const response = await axios.get(URL);
    // console.log(response)
    if(response.status === 200) {
      return response.data; //si va bien retornamos los datos
    }
    throw new Error("Error al solicitar productos")
  } catch (error) {
    throw error;
  }
}

const createProduct = async (newProduct) => {
  try {
    const response = await axios.post(URL, newProduct);
    console.log("response post", response)
    return response.data;
  } catch (error) {
    throw error
  }
}

const requestProductById = async (id) => {
  try {
    const response = await axios.get(`${URL}/${id}`);
    if(response.status === 200) {
      return response.data;
    }
    throw new Error("No se pudo obtener el producto")
  } catch (error) {
    throw error
  }
}

const editProduct = async (id, productUpdated) => {
  try {
    const response = await axios.put(`${URL}/${id}`, productUpdated);
    console.log(response);
    return response.data;
  } catch (error) {
    throw error
  }
}

const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`${URL}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

const buscarEquipo = async ({ BuscarEquipo, setError, navigate }) => {
  console.log("Usuario encontrado:", { BuscarEquipo, setError, navigate }); 

  try {
      const response = await axios.get(URL);

      console.log(response.data); 

  // Verificamos si encontramos algún usuario con el nombre de usuario proporcionado
  const user = response.data.find(user => user.sn === BuscarEquipo);


  console.log("Usuario encontrado:", user); 

  if (user) {
      // Verificar la contraseña
      
        await Swal.fire({
          title: "Inicio de sesión exitoso",
          text: "Bienvenido al sistema",
          icon: "success",
        });
        navigate(`/salidaequipo`); // Redirigir solo si el login es exitoso
      
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
  requestProducts,
  createProduct,
  requestProductById,
  editProduct,
  deleteProduct,
  buscarEquipo,
}