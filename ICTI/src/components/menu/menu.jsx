import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { TbTransformFilled } from "react-icons/tb";
import { FaTableCells } from "react-icons/fa6";
import { MdChecklistRtl } from "react-icons/md";

export default function Menu() {
    const navigate = useNavigate();

    const handleInicio = () => {
        navigate('/');
    };
    const handleConvertor = () => {
            navigate('/convertidor');
    };
    const handleRegistros = () => {
        navigate('/asistencia');
    };
    const handleAsistencia = () => {
        navigate('/registros');
    };
    return (
        <div className="nav_bg">
            <nav className="main_nav container">
                <a href="" onClick={handleInicio}><FaHome  size={"25px"}/> Inicio</a>
                <a href="" onClick={handleRegistros}><MdChecklistRtl size={"25px"}/> Asistencias</a>
                <a href="" onClick={handleAsistencia}><FaTableCells size={"25px"}/> Registros</a>
                <a href="" onClick={handleConvertor}><TbTransformFilled size={"25px"}/> Conversor</a>
            </nav>
        </div>
    );
}
