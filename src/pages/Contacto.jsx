
function Contacto(){

    return(
      <div>
       

        <section id="contacto" className="section">
          <h2 className="section-title">Contáctenos</h2>
          
          <div className="cards-container">
            {/* Tarjeta dirección */}
            <div className="card contact-card">
             
              <p className="card-text">Av. Central 123</p>
              <p className="card-info">Medellín</p>
            </div>
            
            {/* Tarjeta WhatsApp */}
            <div className="card contact-card">
              
              <p className="card-text">WhatsApp 24/7</p>
              <p className="card-info">+57 601 234 5678</p>
            </div>
            
            {/* Tarjeta Email */}
            <div className="card contact-card">
              
              <p className="card-text">Email</p>
              <p className="card-info">hola@cowork.space</p>
            </div>
          </div>

          <div className="contact-box">
            <p className="contact-message">
              
              ¿Dudas? Te respondemos en menos de 30 minutos
            </p>
            <p className="contact-phone">
             +57 601 234 5678
            </p>
          </div>
        </section>
    </div> 
  );
}

export default Contacto;