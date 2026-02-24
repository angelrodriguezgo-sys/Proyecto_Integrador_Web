import React, { useState } from 'react';
import { 
   FaUsers, FaCalendarAlt, FaPhoneAlt, FaKey,
   FaEnvelope, FaLock, FaSignInAlt,
  FaBuilding, FaWifi, FaMugHot, 
   FaSeedling, FaRocket, FaCrown, FaMapPin,
  FaHeadset, FaCommentDots, FaPhone, FaClock,
  FaTimes
} from 'react-icons/fa';
import './App.css'; 


function App() {
  const [showLogin, setShowLogin] = useState(false);  {/* Muestra el Login de inicio de sesion */}
  const [loginData, setLoginData] = useState({  
    email: 'demo@cowork.space', 
    password: '123456' 
  });   {/* objeto con 2 propiedades, USUARIO Y CONTRASEÑA POR DEFECTO */}
  const [loginMessage, setLoginMessage] = useState({ 
    text: '', 
    type: '' 
  });  {/* muestra errores para que no deje espacios vacios, y los del @  */}

  const handleLogin = (e) => {  
    e.preventDefault();
    if (!loginData.email || !loginData.password) {
      setLoginMessage({ text: '❌ Completa todos los campos', type: 'error' });
    } else if (loginData.password.length < 3) {
      setLoginMessage({ text: '⚠️ Contraseña muy corta', type: 'warning' });
    } else {
      setLoginMessage({ text: '✅ ¡Bienvenido!', type: 'success' });
      setTimeout(() => setShowLogin(false), 1500);
    }
  };
  {/*  Funcion acceder que se traduce a E, Evita que la página se recargue cuando se envía el formulario, Evita quee este vacio
    el Email, evita que la contraseña sea corta, si todo esta bien te da la bienvenida y esperas 1,5s a que se cierre 
    (falta revisar que este registrado y llevarlo a la pagina que corresponde  ) */}

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); {/* Funcion de desplazamiento suave a la seccion deseada*/}
  };

  return (
    <div className="app">    {/* Nombre del cuerpo completo *FONDO* */}
      {/* ========== HEADER ========== */}
      <header className="header">  {/* CABECERA DE LOS BOTONES */}
        <div className="header-container"> {/* CONTIENE TODO EL CONTENIDO HEADER  */}
          {/* Logo */}
          <div className="logo">  {/* Espacio Izquierdo */}
            <h1>NEXUS</h1>
            <span>Espacios Flexibles</span>
          </div>

          {/* Botones de navegación */}  {/* Espacio derecho */}
          <div className="nav-buttons">
            <button onClick={() => scrollTo('nosotros')} className="nav-btn"> {/* funcion onclick para que te lleve a 
                                                                                          la seccion de ese nombre, y su nombre para css*/}
              <FaUsers /> Nosotros  {/* Icono de usuario importado , y el texto a mostrar */}
            </button>
            <button onClick={() => scrollTo('planes')} className="nav-btn">
              <FaCalendarAlt /> Planes
            </button>
            <button onClick={() => scrollTo('contacto')} className="nav-btn">
              <FaPhoneAlt /> Contacto
            </button>
            <button onClick={() => setShowLogin(!showLogin)} className="login-btn"> {/* false = esconde, true = muestra el espacion
                                                                                        para el inicio de sesion , y nombre de Css */}
              <FaKey /> Iniciar sesión
            </button>
          </div>
        </div>
      </header>



      {/* ========== MODAL LOGIN ========== */}
      {showLogin && (
        <div className="modal-overlay">
          <div className="modal">
            {/* Botón cerrar */}
            <button onClick={() => setShowLogin(false)} className="close-btn">
              <FaTimes />
            </button>
            
            <h2 className="modal-title">
              <FaSignInAlt /> Iniciar sesión
            </h2>

            {/* Mensaje de estado */}
            {loginMessage.text && (
              <div className={`message ${loginMessage.type}`}>
                {loginMessage.text}
              </div>
            )}

            {/* Formulario */}
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label>
                  <FaEnvelope /> Email
                </label>
                <input
                  type="email"
                  value={loginData.email}
                  onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                  placeholder="tu@email.com"
                />
              </div>

              <div className="form-group">
                <label>
                  <FaLock /> Contraseña
                </label>
                <input
                  type="password"
                  value={loginData.password}
                  onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                  placeholder="••••••"
                />
              </div>

              <button type="submit" className="submit-btn">
                <FaSignInAlt /> Acceder
              </button>
            </form>

            <p className="demo-info">
              Demo: demo@cowork.space / 123456
            </p>
          </div>
        </div>
      )}

      {/* ========== CONTENIDO PRINCIPAL ========== */}
      <main className="main-content">
        
        {/* SECCIÓN NOSOTROS */}
        <section id="nosotros" className="section">
          <h2 className="section-title">Sobre nosotros</h2>
          
          <div className="cards-container">
            {/* Tarjeta 1 */}
            <div className="card service-card">
              <p>Somos una pagina web orientada a las pequeñas y microempresas, para ayudarlas a organizar sus equipos de trabajo
                y a generar una mayor supervicion en el desarrollo de las tareas y analicis de desempeño, ayudandolos
                a optener una mayor comunicacion y privacidad al momento de compartir su informacion entre si. </p>
            
            </div>
            
          
          </div>

          <p className="highlight-text">
            Espacios colaborativos para maximizar TU emprendimiento
            <span className="badge">+500 miembros</span>
          </p>
        </section>

        {/* SECCIÓN PLANES */}
        <section id="planes" className="section">
          <h2 className="section-title">Planes</h2>
          
          <div className="cards-container">
            {/* Plan Microempresa */}
            <div className="card plan-card">
              <h3 className="plan-title">
                <FaSeedling /> Microempresa
              </h3>
              <p className="plan-description">
                Capacidad de 5 a 10 Usuarios
              </p>
              <button className="plan-btn">
                $120.000 * Mes
              </button>
            </div>
            
            {/* Plan Pequeña Empresa */}
            <div className="card plan-card">
              <h3 className="plan-title">
                <FaRocket /> Pequeña Empresa
              </h3>
              <p className="plan-description">
                Capacidad de 10 a 50 Usuarios
              </p>
              <button className="plan-btn">
                $240.000 * Mes
              </button>
            </div>
            
            {/* Plan Mediana Empresa */}
            <div className="card plan-card">
              <h3 className="plan-title">
                <FaCrown /> Mediana Empresa
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
            <FaClock /> 20% descuento en plan anual
          </div>
        </section>

        {/* SECCIÓN CONTACTO */}
        <section id="contacto" className="section">
          <h2 className="section-title">Contáctenos</h2>
          
          <div className="cards-container">
            {/* Tarjeta dirección */}
            <div className="card contact-card">
              <FaMapPin className="card-icon" />
              <p className="card-text">Av. Central 123</p>
              <p className="card-info">Medellín</p>
            </div>
            
            {/* Tarjeta WhatsApp */}
            <div className="card contact-card">
              <FaHeadset className="card-icon" />
              <p className="card-text">WhatsApp 24/7</p>
              <p className="card-info">+57 601 234 5678</p>
            </div>
            
            {/* Tarjeta Email */}
            <div className="card contact-card">
              <FaEnvelope className="card-icon" />
              <p className="card-text">Email</p>
              <p className="card-info">hola@cowork.space</p>
            </div>
          </div>

          <div className="contact-box">
            <p className="contact-message">
              <FaCommentDots className="comment-icon" />
              ¿Dudas? Te respondemos en menos de 30 minutos
            </p>
            <p className="contact-phone">
              <FaPhone className="phone-icon" /> +57 601 234 5678
            </p>
          </div>
        </section>
      </main>

      {/* ========== FOOTER ========== */}
      <footer className="footer">
        <p>COWORK · espacios que conectan · 2026</p>
        <p className="footer-small">Desarrollado con propósitos educativos - Derechos Reservados</p>
      </footer>
    </div>
 
  
  ); // Cierra el Return 
}

export default App;