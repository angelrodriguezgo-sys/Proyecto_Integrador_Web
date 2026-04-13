import { useState } from 'react';
import '../Estilos/PanelAdmin.css';

function PanelAdmin() {
   const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    fechaSalida: '',
    fechaLlegada: '',
    hoteles: '',
    email: '',
    telefono: '',
    rol: 'Cliente',
    estado: 'Activo'
  });

  const [users, setUsers] = useState([
    { id: 1, nombre: 'Ana Pérez', email: 'ana@correo.com', rol: 'Administrador', estado: 'Activo' },
    { id: 2, nombre: 'Carlos Ruiz', email: 'carlos@correo.com', rol: 'Empleado', estado: 'Inactivo' },
    { id: 3, nombre: 'Luisa Gómez', email: 'luisa@correo.com', rol: 'Cliente', estado: 'Activo' }
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log('Guardando...', formData);
    alert('Paquete guardado exitosamente');
  };

  const handleUpdate = (id) => {
    console.log('Actualizando usuario', id);
    alert(`Editando usuario ${id}`);
  };

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
    alert('Usuario eliminado');
  };

  const handleReset = () => {
    setFormData({
      nombre: '', descripcion: '', precio: '', fechaSalida: '', fechaLlegada: '',
      hoteles: '', email: '', telefono: '', rol: 'Cliente', estado: 'Activo'
    });
  };

  const handleExport = () => {
    console.log('Exportando datos...');
    alert('Exportando datos...');
  };

  return (
    <div className="panel-container">
      {/* Header */}
      <header className="topbar">
        <div>
          <h2>Panel de Administración</h2>
          <p>Gestiona paquetes turísticos y usuarios</p>
        </div>
        <button className="primary-btn" onClick={handleExport}>+ Nuevo Registro</button>
      </header>

      {/* Tarjetas de estadísticas */}
      <section className="stats">
        <div className="card stat-card">
          <span>📊 Total usuarios</span>
          <strong>{users.length}</strong>
          <small>12 activos hoy</small>
        </div>
        <div className="card stat-card">
          <span>📦 Total productos</span>
          <strong>356</strong>
          <small>25 este mes</small>
        </div>
        <div className="card stat-card">
          <span>🏷️ Categorías</span>
          <strong>18</strong>
          <small>Organizadas</small>
        </div>
        <div className="card stat-card">
          <span>🟢 Estado sistema</span>
          <strong>Operativo</strong>
          <small>Sin incidencias</small>
        </div>
      </section>

      {/* Módulo principal */}
      <section className="module">
        <div className="module-header">
          <div>
            <h3>Gestión de Paquetes Turísticos</h3>
            <p>Formulario y tabla de consulta</p>
          </div>
          <button className="secondary-btn" onClick={handleExport}>📎 Exportar</button>
        </div>

        <div className="module-grid">
          {/* Formulario */}
          <div className="card form-card">
            <h4>Formulario de Paquetes</h4>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="grid-2">
                <div className="field">
                  <label>Nombre Paquete</label>
                  <input type="text" name="nombre" placeholder="Ingrese nombre" value={formData.nombre} onChange={handleInputChange} />
                </div>
                <div className="field">
                  <label>Descripción</label>
                  <input type="text" name="descripcion" placeholder="Descripción" value={formData.descripcion} onChange={handleInputChange} />
                </div>
                <div className="field">
                  <label>Precio</label>
                  <input type="number" name="precio" placeholder="Precio" value={formData.precio} onChange={handleInputChange} />
                </div>
                <div className="field">
                  <label>Fecha Salida</label>
                  <input type="date" name="fechaSalida" value={formData.fechaSalida} onChange={handleInputChange} />
                </div>
                <div className="field">
                  <label>Fecha Llegada</label>
                  <input type="date" name="fechaLlegada" value={formData.fechaLlegada} onChange={handleInputChange} />
                </div>
                <div className="field">
                  <label>Hoteles</label>
                  <input type="text" name="hoteles" placeholder="Hoteles" value={formData.hoteles} onChange={handleInputChange} />
                </div>
              </div>

              <div className="grid-2">
                <div className="field">
                  <label>Email</label>
                  <input type="email" name="email" placeholder="correo@ejemplo.com" value={formData.email} onChange={handleInputChange} />
                </div>
                <div className="field">
                  <label>Teléfono</label>
                  <input type="tel" name="telefono" placeholder="3001234567" value={formData.telefono} onChange={handleInputChange} />
                </div>
              </div>

              <div className="grid-2">
                <div className="field">
                  <label>Rol</label>
                  <select name="rol" value={formData.rol} onChange={handleInputChange}>
                    <option>Administrador</option>
                    <option>Empleado</option>
                    <option>Cliente</option>
                  </select>
                </div>
                <div className="field">
                  <label>Estado</label>
                  <select name="estado" value={formData.estado} onChange={handleInputChange}>
                    <option>Activo</option>
                    <option>Inactivo</option>
                    <option>Bloqueado</option>
                  </select>
                </div>
              </div>

              <div className="actions">
                <button type="button" className="primary-btn" onClick={handleSave}>💾 Guardar</button>
                <button type="button" className="warning-btn" onClick={() => handleUpdate(1)}>✏️ Actualizar</button>
                <button type="button" className="danger-btn" onClick={() => handleDelete(1)}>🗑️ Eliminar</button>
                <button type="button" className="light-btn" onClick={handleReset}>🧹 Limpiar</button>
              </div>
            </form>
          </div>

          {/* Tabla de usuarios */}
          <div className="card table-card">
            <div className="table-top">
              <h4>Listado de usuarios</h4>
              <input type="text" placeholder="🔍 Buscar usuario..." className="search" />
            </div>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>ID</th><th>Nombre</th><th>Email</th><th>Rol</th><th>Estado</th><th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.nombre}</td>
                      <td>{user.email}</td>
                      <td>{user.rol}</td>
                      <td>
                        <span className={`badge ${user.estado === 'Activo' ? 'success' : 'muted'}`}>
                          {user.estado}
                        </span>
                      </td>
                      <td>
                        <div className="table-actions">
                          <button className="mini-btn edit" onClick={() => handleUpdate(user.id)}>Editar</button>
                          <button className="mini-btn delete" onClick={() => handleDelete(user.id)}>Eliminar</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      </div>
  );
}
  

export default PanelAdmin;