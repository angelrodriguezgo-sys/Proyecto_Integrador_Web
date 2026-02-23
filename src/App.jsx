import React, { useState } from 'react';
import { 
  FaCubes, FaUsers, FaCalendarAlt, FaPhoneAlt, FaKey,
  FaDoorOpen, FaEnvelope, FaLock, FaSignInAlt,
  FaBuilding, FaWifi, FaMugHot, FaChair, FaDoorClosed,
  FaCalendarWeek, FaSeedling, FaRocket, FaCrown, FaMapPin,
  FaHeadset, FaCommentDots, FaPhone, FaInfoCircle, FaClock,
  FaCircle, FaTimes
} from 'react-icons/fa';



function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [loginData, setLoginData] = useState({ email: 'demo@cowork.space', password: '123456' });
  const [loginMessage, setLoginMessage] = useState({ text: '', type: '' });

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

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };






  return (
    <div className="cuerpo">
      {/* Header */}
      <header className="header">
        <div className="seccion-superior">
          {/* Logo izquierda */}
          <div className="imagen-logo">
           
          <div>
              <h1 className="text-2xl font-bold text-primary">NEXUS</h1>
              <span className="text-sm text-gray-medium">Espacios Flexibles</span>
            </div>
        </div>


          {/* Botones derecha */}
          <div className="flex items-center gap-2 flex-wrap">
            <button onClick={() => scrollTo('nosotros')} className="boton-nosotros">
              <FaUsers className="text-bright-blue" /> Nosotros
            </button>
            <button onClick={() => scrollTo('planes')} className="px-4 py-2 rounded-full text-oil-blue hover:bg-white hover:shadow flex items-center gap-2">
              <FaCalendarAlt className="text-bright-blue" /> Planes
            </button>
            <button onClick={() => scrollTo('contacto')} className="px-4 py-2 rounded-full text-oil-blue hover:bg-white hover:shadow flex items-center gap-2">
              <FaPhoneAlt className="text-bright-blue" /> Contacto
            </button>
            <button onClick={() => setShowLogin(!showLogin)} className="bg-bright-blue text-white px-4 py-2 rounded-full hover:bg-primary flex items-center gap-2 shadow-lg">
              <FaKey /> Iniciar sesión
            </button>
          </div>
        </div>
      </header>

      {/* Login Panel */}
      
      {/* Contenido principal */}
      <main className="Cuerpo-Principal">
        {/* Sección Nosotros */}
        <section id="nosotros" >
          <h2 className="text-4xl font-light text-primary mb-8 pl-6 border-l-8 border-bright-blue">Sobre nosotros</h2>
          <div className="flex flex-wrap gap-6 justify-center mb-8">
            {[
              { icon: FaBuilding, text: 'Oficina ejecutiva' },
              { icon: FaWifi, text: 'Alta velocidad' },
              { icon: FaMugHot, text: 'Coffee lab' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-[32px_12px_32px_12px] text-center flex-1 min-w-[200px] max-w-[250px] border-2 border-gray-light hover:border-bright-blue transition">
                <item.icon className="text-5xl text-bright-blue mx-auto mb-4" />
                <p className="bg-gray-light rounded-full py-2 px-4 font-medium">{item.text}</p>
              </div>
            ))}
          </div>

            <p className="text-xl text-oil-blue max-w-3xl mx-auto">
              Espacios colaborativos para maximizar TU emprendimiento
              <span className="inline-block ml-3 bg-success text-white px-4 py-1 rounded-full text-sm">+500 miembros</span>
            </p>

        </section>





        {/* Sección Planes */}
        <section id="planes" >
        
          <div className="flex flex-wrap gap-6 justify-center mb-8">
            {[
              { icon: FaSeedling, name: 'Microempresa', desc: 'Capacidad de 5 a 10 Usuarios', price: '$120.000' },
              { icon: FaRocket, name: 'Pequena Empresa', desc: 'capacidad de 10 a 50 Usuarios', price: '$240.000' },
              { icon: FaCrown, name: 'Mediana Empresa', desc: 'Capacidad de 50 a 200 Usuarios', price: 'Consultar' }
            ].map((plan, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl flex-1 min-w-[250px] shadow-lg">
                <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                  <plan.icon className="text-bright-blue" /> {plan.name}
                </h3>
                <p className="text-gray-medium text-sm mb-4">{plan.desc}</p>
                <button className="border-2 border-bright-blue text-bright-blue px-4 py-2 rounded-full text-sm hover:bg-bright-blue hover:text-white">
                  {plan.price}
                </button>
              </div>
            ))}
          </div>
          


          <div className="bg-warning text-white p-4 rounded-2xl flex items-center gap-3 max-w-2xl mx-auto">
            <FaClock /> 20% descuento en plan anual
          </div>
        </section>



        {/* Sección Contacto */}
        <section id="contacto" className="mb-20 scroll-mt-20">
          <h2 className="text-4xl font-light text-primary mb-8 pl-6 border-l-8 border-bright-blue">Contáctenos</h2>
          <div className="flex flex-wrap gap-6 justify-center mb-8">
            {[
              { icon: FaMapPin, text: 'Av. Central 123', info: 'Medellin' },
              { icon: FaHeadset, text: 'WhatsApp 24/7', info: '+57 601 234 5678' },
              { icon: FaEnvelope, text: 'Email', info: 'hola@cowork.space' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-[32px_12px_32px_12px] text-center flex-1 min-w-[200px] max-w-[250px] border-2 border-gray-light">
                <item.icon className="text-5xl text-bright-blue mx-auto mb-4" />
                <p className="bg-gray-light rounded-full py-2 px-4 font-medium mb-2">{item.text}</p>
                <p className="text-sm text-gray-medium">{item.info}</p>
              </div>
            ))}
          </div>
          



          <div className="bg-white p-8 rounded-[60px_12px_60px_12px] border-2 border-gray-light max-w-3xl mx-auto">
            <p className="text-oil-blue flex items-start gap-3">
              <FaCommentDots className="text-bright-blue text-2xl" />
              ¿Dudas? Te respondemos en menos de 30 minutos
            </p>
            <p className="mt-4 text-gray-medium flex items-center gap-2">
              <FaPhone className="text-success" /> +57 601 234 5678
            </p>
          </div>
        </section>
      </main>



      {/* Footer */}
      <footer className="footer">
        <p>COWORK · espacios que conectan · 2026</p>
        <p>Desarollado con propositos educativos - Derechos Reservados</p>
      </footer>
    </div>


  ); // Cierra el Return 
}

export default App;