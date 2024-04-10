import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "../pages/home/home";
import Convertidor from "../pages/convertidor/convertidor";
import Asistencia from "../pages/asistencia/asistencia";
import Registros from "../pages/registros/registros";
import RegistroAsistencia from "../pages/RegistroAsistencia/RegistroAsistencia";
function App() {


  return(  
  <BrowserRouter>
  <Routes>
   {/* Aqui se definen las rutas */}
    <Route path='/' element={<Home />} />
    <Route path='/convertidor' element={<Convertidor />} />
    <Route path="/asistencia" element={<Asistencia />} />
    <Route path='/registros' element={<Registros />} />
    <Route path='/registro/asistencia' element={<RegistroAsistencia />} />

  </Routes>
  </BrowserRouter>
  )
}

export default App;
