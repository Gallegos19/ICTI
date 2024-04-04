import { useNavigate } from 'react-router-dom';
import planetario from '../../assets/planetario.png'
import torre from '../../assets/torre.png'
import ICTI from '../../assets/much.png'
import much from '../../assets/much.jpg'

import './ContenidoAsistencia.css'
export default function ContenidoAsistencia() {
    const navigate = useNavigate();

    const handleNavigate = (url) =>{
            navigate(`${url}`);
    };
  function Card(props) {
    // Funcion para el componente de la imagen

    return (
        <div className="col" onClick={() => handleNavigate(props.link)}>
        <div className="card ">
          <a>
            <img src={props.image} className="card-img-top" alt={props.alt}  style={{height:'250px', objectFit:'cover', aspectRatio: "4/3"}}/>
            <div className="card-body">
              <h3 className="card-title">{props.title}</h3>
            </div>
          </a>
        </div>
      </div>
    );
  }
  return (
    <section className="hero">
      {/* <!-- Contenedor de la cabecera--> */}
      <div className="contenido_hero">
        <form action="/upload" method="POST" encType="multipart/form-data">
          <div className="input-group">
            <div className="container">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                <Card
                  link="/registros"
                  image={planetario}
                  alt="Imagen planetario"
                  title="Planetario"
                  description="Página para ver la información y registrar la asistencia de los trabajadores del planetario"
                />
                <Card
                  link="/registros"
                  image={torre}
                  alt="Imagen torre Chiapas"
                  title="Torre"
                  description="Página para ver la información y registrar la asistencia de los trabajadores de la torre."
                />
                <Card
                  link="/registros"   
                  image={much} 
                  alt="Imagen MUCH"
                  title="Museo"
                  description="Página para ver la información y registrar la asistencia de los trabajadores del museo."
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
