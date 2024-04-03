import logo from "../../assets/icti.png";
import style from "./footer.module.css";
import { MdContactSupport } from "react-icons/md";
import { GiMaterialsScience } from "react-icons/gi";
import { MdOutlineContactPhone } from "react-icons/md";
import { IoChatbox } from "react-icons/io5";
export default function footer() {
  return (
    <div className={style.containerFooter}>
      <img src={logo} alt="" className={style.logo} />
      <div className={style.contenido}>
        <div className={style.secciones}>
          <p>
            <MdContactSupport size={"25px"} /> Acerca del Instituto
          </p>
          
          <a href="https://icti.chiapas.gob.mx/conocenos/" target="_blank">
                Conócenos
          </a>
          <a href="https://www.chiapas.gob.mx/funcionarios/estatal/ejecutivo/icti" target="_blank">
                Directorio de Funcionarios
          </a>
        </div>
        <div className={style.secciones}>
          <p>
            <GiMaterialsScience size={"25px"} /> Espacios de divulgacion
          </p>
          <a href="https://icti.chiapas.gob.mx/espacios/museo/" target="_blank">
                Museo Chiapas de Ciencia
          </a>
          <a href="https://icti.chiapas.gob.mx/espacios/planetario/" target="_blank">
                Planetario Tuxtla
          </a>
          <a href="https://icti.chiapas.gob.mx/espacios/caravana-kukay/" target="_blank">
            Caravana Kukay
          </a>
        </div>
        <div className={style.secciones}>
          <p>
            <IoChatbox size={"25px"} /> Contactanos
          </p>
          {/* <iframe
            title="ubicación"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.1043375303007!2d-93.09349402511853!3d16.721645021642928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ed27d9e8c4c809%3A0x78ead645109143a6!2sMuseo%20Chiapas%20de%20Ciencia%20y%20Tecnolog%C3%ADa%20(MUCH)!5e0!3m2!1ses-419!2smx!4v1712153433808!5m2!1ses-419!2smx"
            width="150rem"
            height="150rem"
            style={{ border: "0", borderRadius: "5px", marginBottom: "5px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>{" "} */}
          <a href="https://maps.app.goo.gl/x7W6VrL59Rq5uAWM7" target="_blank">
            Calzada Cerro Hueco Num. 3000. Colonia Cerro Hueco
          </a>
          <a href="#" target="_blank">
            Tuxtla Gutiérrez, Chiapas, México
          </a>
          <a href="#" target="_blank">
            Conmutador: 961 69 140 20 Ext 67000
          </a>
        </div>
      </div>
    </div>
  );
}
