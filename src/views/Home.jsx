import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import imagen1 from '../assets/C02.jpg';
import imagen2 from '../assets/CIJ.jpg';
import imagen3 from '../assets/FIBRA.jpg';
import imagen4 from '../assets/LCM.jpg';
import imagen5 from '../assets/TIJ.png';
import imagen6 from '../assets/TTO.jpg';


const Home = () => {
    const products = [
      { id: 1, img: imagen1, alt: "Producto 1" },
      { id: 2, img: imagen2, alt: "Producto 2" },
      { id: 3, img: imagen3, alt: "Producto 3" },
      { id: 4, img: imagen4, alt: "Producto 4" },
      { id: 5, img: imagen5, alt: "Producto 5" },
      { id: 6, img: imagen6, alt: "Producto 6" },
    ];
  
    
    return (
      <div className="font-sans">
        {/* Header Section */}
        <div className="text-center py-5 bg-light">
          <h1 className="display-5 mb-3">En Antalis TFM somos expertos en identificación e impresión.</h1>
          <p className="lead text-muted">
            Contamos con impresoras de etiquetas TSC y somos fabricantes en Perú de los insumos (etiquetas blancas y Ribbons) para que puedas imprimir tus códigos de barra y QR de manera fácil y rápida.
          </p>
        </div>
  
        {/* Product Gallery */}
        <div className="container my-5">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {products.map((product) => (
              <div key={product.id} className="col">
                <div className="card h-100 border-0 shadow-sm">
                  <img
                    src={product.img}
                    alt={product.alt}
                    className="card-img-top rounded"
                  />
                
                </div>
              </div>
            ))}
          </div>
        </div>
  
        {/* Call to Action Button */}
        <div className="text-center my-4">
          <button className="btn btn-pink px-5 py-2 rounded-pill shadow">
            SOLICITAR AQUÍ
          </button>
        </div>
  
        {/* Contact Section */}
        <div className="bg-light py-5">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-md-8">
                <iframe
                  title="Google Maps"
                  className="w-100 rounded"
                  height="300"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345090935!2d-122.41941548468124!3d37.77492977975979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjciTiAxMjLCsDI1JzEwLjciVw!5e0!3m2!1sen!2sus!4v1618461607502!5m2!1sen!2sus"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
              <div className="col-md-4 text-center bg-pink text-white rounded p-4">
                <p className="h4 mb-3">(+51) 01 3491404</p>
                <p>Central</p>
                <hr className="my-4 bg-white" />
                <p className="h4 mb-3">(+51) 01 3550808</p>
                <p>Servicio Técnico</p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Footer Button */}
        <div className="text-center my-4">
          <button className="btn btn-pink px-5 py-2 rounded-pill shadow">
            IR A CONTACTO
          </button>
        </div>
      </div>
    );
  };
  
  export default Home;
  