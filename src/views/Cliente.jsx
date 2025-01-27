import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import imagen1 from '../assets/CLIENTE1.png';
import imagen2 from '../assets/CLIENTE2.png';
import imagen3 from '../assets/CLIENTE3.png';
import imagen4 from '../assets/CLIENTE4.png';
import imagen5 from '../assets/CLIENTE5.png';
import imagen6 from '../assets/CLIENTE6.png';
import imagen7 from '../assets/CLIENTE7.png';
import imagen8 from '../assets/CLIENTE8.png';
import imagen9 from '../assets/CLIENTE9.png';
import imagen10 from '../assets/CLIENTE10.png';
import imagen11 from '../assets/CLIENTE11.png';
import imagen12 from '../assets/CLIENTE12.png';
import imagen13 from '../assets/CLIENTE13.png';
import imagen14 from '../assets/CLIENTE14.png';
import imagen15 from '../assets/CLIENTE15.png';
import imagen16 from '../assets/CLIENTE16.png';
import imagen17 from '../assets/CLIENTE17.png';
import imagen18 from '../assets/CLIENTE18.png';


const Cliente = () => {
    const products = [
      { id: 1, img: imagen1, alt: "Producto 1" },
      { id: 2, img: imagen2, alt: "Producto 2" },
      { id: 3, img: imagen3, alt: "Producto 3" },
      { id: 4, img: imagen4, alt: "Producto 4" },
      { id: 5, img: imagen5, alt: "Producto 5" },
      { id: 6, img: imagen6, alt: "Producto 6" },
      { id: 7, img: imagen7, alt: "Producto 7" },
      { id: 8, img: imagen8, alt: "Producto 8" },
      { id: 9, img: imagen9, alt: "Producto 9" },
      { id: 10, img: imagen10, alt: "Producto 10" },
      { id: 11, img: imagen11, alt: "Producto 11" },
      { id: 12, img: imagen12, alt: "Producto 12" },
      { id: 13, img: imagen13, alt: "Producto 13" },
      { id: 14, img: imagen14, alt: "Producto 14" },
      { id: 15, img: imagen15, alt: "Producto 15" },
      { id: 16, img: imagen16, alt: "Producto 16" },
      { id: 17, img: imagen17, alt: "Producto 17" },
      { id: 18, img: imagen18, alt: "Producto 18" },
     
    ];
  
    
    return (
      <div className="font-sans">
        {/* Header Section */}
        <div className="text-center py-5 bg-light">
          <h1 className="display-5 mb-3">Algunos de nuestros principales clientes...</h1>
          
        </div>
  
        {/* Product Gallery */}
        <div className="container my-5">
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {products.map((product) => (
              <div key={product.id} className="col">
                <div className="card h-10 border-0 shadow-sm">
                  <img
                    src={product.img}
                    alt={product.alt}
                    className="img-fluid"
                  />
               
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>

    );
  };
  
  export default Cliente;