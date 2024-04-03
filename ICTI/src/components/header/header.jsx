import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/ictilogo.png';

export default function Header() {
  // Obtener la ubicación actual
  const location = useLocation();

  // Condicionar el texto del enlace basado en la ruta actual
  const getAsistenciaText = () => {
    switch (location.pathname) {
      case '/asistencia':
        return 'Asistencia';
      case '/convertidor':
        return 'Convertidor';
      case '/registros':
        return 'Registros';
      default:
        return 'Inicio';
    }
  };

  return (
    <div>
      <header>
        <img src={logo} alt="logo" className="logo" />
        <h1 className="titulo">INSTITUTO DE CIENCIA, TECNOLOGÍA E INNOVACIÓN
          <span>
            <Link to="/asistencia">{getAsistenciaText()}</Link>
          </span>
        </h1>
      </header>
    </div>
  );
}
