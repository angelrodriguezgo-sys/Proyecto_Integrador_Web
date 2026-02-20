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
    <div className="min-h-screen bg-gray-light">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50 px-4 sm:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
          {/* Logo izquierda */}
          <div className="flex items-center gap-3">
            <div className="bg-primary w-12 h-12 rounded-[16px_4px_16px_4px] flex items-center justify-center text-white text-2xl">
              <FaCubes />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary">CÔWORK</h1>
              <span className="text-sm text-gray-medium">espacios flexibles</span>
            </div>
          </div>

          {/* Botones derecha */}
          <div className="flex items-center gap-2 flex-wrap">
            <button onClick={() => scrollTo('nosotros')} className="px-4 py-2 rounded-full text-oil-blue hover:bg-white hover:shadow flex items-center gap-2">
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
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-40 pt-20 px-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl text-primary flex items-center gap-2">
                <FaDoorOpen className="text-bright-blue" /> Acceso
              </h2>
              <button onClick={() => setShowLogin(false)} className="text-gray-medium hover:text-coral text-2xl">
                <FaTimes />
              </button>
            </div>
            
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-oil-blue mb-2"><FaEnvelope className="inline mr-2" /> Email</label>
                <input type="email" value={loginData.email} onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-full border-2 border-gray-light focus:border-bright-blue focus:outline-none" />
              </div>
              <div className="mb-6">
                <label className="block text-oil-blue mb-2"><FaLock className="inline mr-2" /> Contraseña</label>
                <input type="password" value={loginData.password} onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                  className="w-full px-4 py-3 rounded-full border-2 border-gray-light focus:border-bright-blue focus:outline-none" />
              </div>
              <button type="submit" className="w-full bg-bright-blue text-white py-3 rounded-full hover:bg-primary flex items-center justify-center gap-2">
                <FaArrowRightToBracket /> Entrar 
              </button>
              
              {loginMessage.text && (
                <div className={`mt-4 text-center font-medium ${
                  loginMessage.type === 'success' ? 'text-success' :
                  loginMessage.type === 'error' ? 'text-coral' : 'text-warning'
                }`}>
                  {loginMessage.text}
                </div>
              )}
              <p className="text-center mt-4 text-gray-medium text-sm">
                <FaInfoCircle className="inline text-bright-blue mr-1" /> demo: cualquier usuario
              </p>
            </form>
          </div>
        </div>
      )}

      {/* Contenido principal */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Sección Nosotros */}
        <section id="nosotros" className="mb-20 scroll-mt-20">
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
            Espacios colaborativos en el corazón de la ciudad. 
            <span className="inline-block ml-3 bg-success text-white px-4 py-1 rounded-full text-sm">+500 miembros</span>
          </p>
        </section>

        {/* Sección Planes */}
        <section id="planes" className="mb-20 scroll-mt-20">
          <h2 className="text-4xl font-light text-primary mb-8 pl-6 border-l-8 border-bright-blue">Planes</h2>
          <div className="flex flex-wrap gap-6 justify-center mb-8">
            {[
              { icon: FaChair, text: 'Hot desk' },
              { icon: FaDoorClosed, text: 'Oficina privada' },
              { icon: FaCalendarWeek, text: 'Salas por hora' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-[32px_12px_32px_12px] text-center flex-1 min-w-[200px] max-w-[250px] border-2 border-gray-light">
                <item.icon className="text-5xl text-bright-blue mx-auto mb-4" />
                <p className="bg-gray-light rounded-full py-2 px-4 font-medium">{item.text}</p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-6 justify-center mb-8">
            {[
              { icon: FaSeedling, name: 'Básico', desc: 'Acceso áreas comunes 3 días/semana', price: '$120.000' },
              { icon: FaRocket, name: 'Profesional', desc: 'Puesto fijo 24/7, sala 8h/mes', price: '$240.000' },
              { icon: FaCrown, name: 'Ejecutivo', desc: 'Oficina privada para 4 personas', price: 'Consultar' }
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
              { icon: FaMapPin, text: 'Av. Central 123', info: 'Bogotá' },
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
      <footer className="bg-white text-gray-medium py-8 text-center border-t border-gray-light">
        <p>CÔWORK · espacios que conectan · 2025</p>
        <p className="text-sm mt-2 flex items-center justify-center gap-2">
          <FaCircle className="text-bright-blue text-xs" />
          Inicio de sesión simulado (frontend)
          <FaCircle className="text-bright-blue text-xs" />
        </p>
      </footer>
    </div>
  );
}

export default App;