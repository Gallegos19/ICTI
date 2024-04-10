import { useNavigate } from 'react-router-dom';
import planetario from '../../assets/planetario.png';
import torre from '../../assets/torre.png';
import much from '../../assets/much.jpg';
import icti from '../../assets/much.png';
import './ContenidoAsistencia.css';

export default function ContenidoAsistencia() {
    const navigate = useNavigate();

    const handleNavigate = (url, title) => {
        localStorage.setItem('url', title);
        navigate(url);
    };

    function Card(props) {
        // Función para el componente de la imagen
        return (
            <div className="col" onClick={() => handleNavigate(props.link, props.title)}>
                <div className="card ">
                    <a>
                        <img src={props.image} className="card-img-top" alt={props.alt} style={{ height: '250px', objectFit: 'cover', aspectRatio: "4/3" }} />
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
                            <div className="row row-cols-1 row-cols-md-4 g-4">
                                <Card
                                    link="/registro/asistencia"
                                    image={planetario}
                                    alt="Imagen planetario"
                                    title="Planetario"
                                    description="Página para ver la información y registrar la asistencia de los trabajadores del planetario"
                                />
                                <Card
                                    link="/registro/asistencia"
                                    image={torre}
                                    alt="Imagen torre Chiapas"
                                    title="Torre"
                                    description="Página para ver la información y registrar la asistencia de los trabajadores de la torre."
                                />
                              
                                   <Card
                                    link="/registro/asistencia"
                                    image={icti}
                                    alt="Imagen ICTI"
                                    title="ICTI"
                                    description="Página para ver la información y registrar la asistencia de los trabajadores del ICTI"
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}
