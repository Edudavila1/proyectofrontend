import React from 'react';

const ContactInfo = () => {
  return (
    <div className="container py-4">
      <h2 className="mb-4 text-dark" style={{ fontSize: '1.2rem' }}>
        ¿Necesitas asesoría o cotización de tus proyectos?...
      </h2>
      
      {/* Teléfonos Section */}
      <div className="mb-4">
        <h3 className="mb-3" style={{ color: '#E31E24', fontSize: '1rem', fontWeight: 'bold' }}>
          ▼Teléfonos
        </h3>
        <div className="ms-3">
          <div className="row">
            <div className="col-md-3" style={{ color: '#666666' }}>Atención Clientes</div>
            <div className="col-md-9" style={{ color: '#666666' }}>(+51) 936 543 864</div>
          </div>
        </div>
      </div>

      {/* Otros Section */}
      <div className="mb-4">
        <h3 className="mb-3" style={{ color: '#E31E24', fontSize: '1rem', fontWeight: 'bold' }}>
          ▼Otros
        </h3>
        <div className="ms-3">
          <div className="row mb-2">
            <div className="col-md-3" style={{ color: '#666666' }}>Central</div>
            <div className="col-md-9" style={{ color: '#666666' }}>(+51) 01 3481404</div>
          </div>
          <div className="row">
            <div className="col-md-3" style={{ color: '#666666' }}>Servicio Técnico</div>
            <div className="col-md-9" style={{ color: '#666666' }}>(+51) 01 3506806</div>
          </div>
        </div>
      </div>

      {/* Correos Electrónicos Section */}
      <div className="mb-4">
        <h3 className="mb-3" style={{ color: '#E31E24', fontSize: '1rem', fontWeight: 'bold' }}>
          ▼Correos Electrónicos
        </h3>
        <div className="ms-3" style={{ color: '#666666' }}>
          <div>digital.peru@emails.com</div>
          <div>contacto@emails.com</div>
        </div>
      </div>

      {/* Dirección Section */}
      <div className="mb-4">
        <h3 className="mb-3" style={{ color: '#E31E24', fontSize: '1rem', fontWeight: 'bold' }}>
          ▼Dirección
        </h3>
        <div className="ms-3" style={{ color: '#666666' }}>
          <div className="mb-3">
            <div style={{ fontWeight: 'bold' }}>Oficina</div>
            <div>Av. Jorge Basadre 233,Oficina 301, San Isidro, Lima, Perú</div>
          </div>
          <div>
            <div style={{ fontWeight: 'bold' }}>Centro de distribución</div>
            <div>Calle José Mc. D. Lote 24A-U45, Bocanegra, Callao, Perú</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;