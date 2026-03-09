import { Link} from "react-router-dom";


function Precio(){

    
    return(
      <div>
        <section id="planes" className="section">
          <h2 className="section-title">Planes</h2>

            <div className="cards-container">
                {/* Plan Microempresa */}
              <div className="card plan-card">
                <h3 className="plan-title"> Microempresa </h3>
                <p className="plan-description">
                    Capacidad de 5 a 10 Usuarios
                </p>
                  <button className="plan-btn" >  
                      <Link to="/formulario" >$120.000 * Mes</Link> 
                  </button>
              </div>
            
            {/* Plan Pequeña Empresa */}
            <div className="card plan-card">
              <h3 className="plan-title">
                Pequeña Empresa
              </h3>
              <p className="plan-description">
                Capacidad de 10 a 50 Usuarios
              </p>
              <button className="plan-btn">   
                 <Link to="/formulario">$240.000 * Mes</Link>
              </button>
            </div>
            
            {/* Plan Mediana Empresa */}
            <div className="card plan-card">
              <h3 className="plan-title">
                Mediana Empresa
              </h3>
              <p className="plan-description">
                Capacidad de 50 a 200 Usuarios
              </p>
              <button className="plan-btn"> 
                Consultar
              </button>
            </div>
          </div>

          <div className="warning-banner">
          20% descuento en plan anual
          </div>
        </section>
      

      </div>
    );
}

export default Precio;