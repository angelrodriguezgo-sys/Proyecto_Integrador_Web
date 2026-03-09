import { Route, Routes } from 'react-router-dom';
import './App.css'; 
import Menu from './components/Menu';
import Home from './pages/Home';
import Precio from './pages/Precios';
import Contacto from './pages/Contacto';
import Formulario from './pages/Formulario';
import Registro from './components/Registro';


function App() {
  
  return (
    <>  
       <Menu/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/precios' element={<Precio/> }/>
            <Route path='/contacto' element={<Contacto/>}/>
            <Route path='/formulario' element={<Formulario/>}/>
            <Route path="/registro" element={<Registro/>} />
        </Routes>
    </> 
  ); 
}

export default App;