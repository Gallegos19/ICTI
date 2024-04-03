import logo from '../../assets/ictilogo.png';

export default function Header() {
  return (
    <div>
      <header>
      <img src={logo} alt="logo" className="logo" />
            <h1 className="titulo">INSTITUTO DE CIENCIA, TECNOLOGÍA E INNOVACIÓN
                <span> <a href="./asistencias.html"> Asistencias</a>
                </span></h1>
      </header>
    </div>
  );
}
