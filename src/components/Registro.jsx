import React, { useState } from 'react';
import '/src/Estilos/Registro.css'; 

function Registro() {
  // ===== ESTADOS =====
  const [empresa, setEmpresa] = useState({
    nit: '',
    nombre: '',
    cantidades: {
      ceo: 1, // Por defecto al menos 1 CEO
      directores: 0,
      lideres: 0,
      empleados: 0
    }
  });

  const [mensaje, setMensaje] = useState({ texto: '', tipo: '' });
  const [paso, setPaso] = useState(1); // 1: datos empresa, 2: cantidades

  // ===== MANEJADORES DE CAMBIOS =====
  const handleEmpresaChange = (e) => {
    const { name, value } = e.target;
    setEmpresa({
      ...empresa,
      [name]: value
    });
  };

  const handleCantidadChange = (e) => {
    const { name, value } = e.target;
    const cantidad = parseInt(value) || 0;
    
    setEmpresa({
      ...empresa,
      cantidades: {
        ...empresa.cantidades,
        [name]: cantidad
      }
    });
  };

  // ===== VALIDACIONES =====
  const validarPaso1 = () => {
    if (!empresa.nit.trim()) {
      setMensaje({ texto: ' El NIT es obligatorio', tipo: 'error' });
      return false;
    }
    if (!empresa.nombre.trim()) {
      setMensaje({ texto: ' El nombre de la empresa es obligatorio', tipo: 'error' });
      return false;
    }
    setMensaje({ texto: '', tipo: '' });
    return true;
  };

  const validarPaso2 = () => {
    const total = empresa.cantidades.ceo + 
                  empresa.cantidades.directores + 
                  empresa.cantidades.lideres + 
                  empresa.cantidades.empleados;
    
    if (total === 0) {
      setMensaje({ texto: ' Debe haber al menos 1 persona en la empresa', tipo: 'error' });
      return false;
    }
    
    if (empresa.cantidades.ceo < 1) {
      setMensaje({ texto: ' Debe haber al menos 1 CEO', tipo: 'error' });
      return false;
    }
    
    setMensaje({ texto: '', tipo: '' });
    return true;
  };

  // ===== NAVEGACIÓN ENTRE PASOS =====
  const siguientePaso = () => {
    if (validarPaso1()) {
      setPaso(2);
    }
  };

  const pasoAnterior = () => {
    setPaso(1);
    setMensaje({ texto: '', tipo: '' });
  };

  // ===== ENVÍO FINAL =====
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validarPaso2()) return;
    
    // Aquí iría la llamada a tu API/backend
    console.log('Datos de la empresa:', empresa);
    
    setMensaje({ 
      texto: ' Empresa configurada correctamente', 
      tipo: 'exito' 
    });
    
    // Aquí podrías redirigir o hacer algo más
    setTimeout(() => {
      setMensaje({ texto: '', tipo: '' });
      // navigate('/dashboard'); // Si usas React Router
    }, 3000);
  };

  // ===== CÁLCULOS ÚTILES =====
  const totalUsuarios = empresa.cantidades.ceo + 
                        empresa.cantidades.directores + 
                        empresa.cantidades.lideres + 
                        empresa.cantidades.empleados;

  return (
    <div className="config-empresa-container">
      <div className="config-header">
        <h1>Configuración de Empresa</h1>
        <p>Completa los datos para crear tu espacio de trabajo</p>
      </div>

      {/* Indicador de progreso */}
      <div className="progreso">
        <div className={`paso ${paso >= 1 ? 'activo' : ''}`}>
          <span className="numero">1</span>
          <span className="texto">Datos de empresa</span>
        </div>
        <div className={`linea ${paso >= 2 ? 'activa' : ''}`}></div>
        <div className={`paso ${paso >= 2 ? 'activo' : ''}`}>
          <span className="numero">2</span>
          <span className="texto">Estructura organizacional</span>
        </div>
      </div>

      {/* Mensaje de feedback */}
      {mensaje.texto && (
        <div className={`mensaje ${mensaje.tipo}`}>
          {mensaje.texto}
        </div>
      )}

      <form onSubmit={handleSubmit} className="config-form">
        {/* PASO 1: DATOS DE LA EMPRESA */}
        {paso === 1 && (
          <div className="paso-contenido">
            <h2>Información de la empresa</h2>
            
            <div className="campo">
              <label>
                NIT <span className="requerido">*</span>
              </label>
              <input
                type="text"
                name="nit"
                value={empresa.nit}
                onChange={handleEmpresaChange}
                placeholder="Ej: 900.123.456-7"
                className="input-text"
              />
              <small>Número de Identificación Tributaria</small>
            </div>

            <div className="campo">
              <label>
                Nombre de la empresa <span className="requerido">*</span>
              </label>
              <input
                type="text"
                name="nombre"
                value={empresa.nombre}
                onChange={handleEmpresaChange}
                placeholder="Ej: Mi Empresa S.A.S."
                className="input-text"
              />
            </div>

            <div className="botones-navegacion">
              <button 
                type="button" 
                onClick={siguientePaso}
                className="btn-primario"
              >
                Siguiente
              </button>
            </div>
          </div>
        )}

        {/* PASO 2: CANTIDADES POR ROL */}
        {paso === 2 && (
          <div className="paso-contenido">
            <h2>Estructura de tu equipo</h2>
            <p className="subtitulo">Define cuántas personas habrá en cada nivel</p>

            <div className="grid-roles">
              {/* CEO */}
              <div className="rol-card">
                <div className="rol-header ceo">
                  <span className="rol-icon">👑</span>
                  <span className="rol-nombre">CEO</span>
                </div>
                <div className="rol-input">
                  <input
                    type="number"
                    name="ceo"
                    min="1"
                    max="10"
                    value={empresa.cantidades.ceo}
                    onChange={handleCantidadChange}
                    className="input-number"
                  />
                </div>
                <small>Máxima autoridad</small>
              </div>

              {/* Directores */}
              <div className="rol-card">
                <div className="rol-header director">
                  <span className="rol-icon">📊</span>
                  <span className="rol-nombre">Directores</span>
                </div>
                <div className="rol-input">
                  <input
                    type="number"
                    name="directores"
                    min="0"
                    max="50"
                    value={empresa.cantidades.directores}
                    onChange={handleCantidadChange}
                    className="input-number"
                  />
                </div>
                <small>Jefes de área</small>
              </div>

              {/* Líderes */}
              <div className="rol-card">
                <div className="rol-header lider">
                  <span className="rol-icon">👥</span>
                  <span className="rol-nombre">Líderes</span>
                </div>
                <div className="rol-input">
                  <input
                    type="number"
                    name="lideres"
                    min="0"
                    max="100"
                    value={empresa.cantidades.lideres}
                    onChange={handleCantidadChange}
                    className="input-number"
                  />
                </div>
                <small>Líderes de equipo</small>
              </div>

              {/* Empleados */}
              <div className="rol-card">
                <div className="rol-header empleado">
                  <span className="rol-icon">👤</span>
                  <span className="rol-nombre">Empleados</span>
                </div>
                <div className="rol-input">
                  <input
                    type="number"
                    name="empleados"
                    min="0"
                    max="500"
                    value={empresa.cantidades.empleados}
                    onChange={handleCantidadChange}
                    className="input-number"
                  />
                </div>
                <small>Personal operativo</small>
              </div>
            </div>

            {/* Resumen */}
            <div className="resumen">
              <h3>Resumen de la estructura</h3>
              <div className="resumen-grid">
                <div className="resumen-item">
                  <span className="resumen-label">Total de usuarios:</span>
                  <span className="resumen-valor">{totalUsuarios}</span>
                </div>
                <div className="resumen-item">
                  <span className="resumen-label">CEO:</span>
                  <span className="resumen-valor">{empresa.cantidades.ceo}</span>
                </div>
                <div className="resumen-item">
                  <span className="resumen-label">Directores:</span>
                  <span className="resumen-valor">{empresa.cantidades.directores}</span>
                </div>
                <div className="resumen-item">
                  <span className="resumen-label">Líderes:</span>
                  <span className="resumen-valor">{empresa.cantidades.lideres}</span>
                </div>
                <div className="resumen-item">
                  <span className="resumen-label">Empleados:</span>
                  <span className="resumen-valor">{empresa.cantidades.empleados}</span>
                </div>
              </div>
            </div>

            <div className="botones-navegacion">
              <button 
                type="button" 
                onClick={pasoAnterior}
                className="btn-secundario"
              >
                 Atrás
              </button>
              <button 
                type="submit" 
                className="btn-primario btn-crear"
              >
                Crear Empresa
              </button>
            </div>
          </div>
        )}
      </form>

   
    </div>
  );
}

export default Registro;