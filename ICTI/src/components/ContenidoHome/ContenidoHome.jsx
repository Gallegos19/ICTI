import Loader from "../Loader/Loader";
import much from  '../../assets/much.jpg'

export default function ContenidoHome() {
  return (
    <section className="hero">
      {/* <!-- Contenedor de la cabecera--> */}
      <div className="contenido_hero">
        <form action="/upload" method="POST" encType="multipart/form-data">
          <div className="input-group" style={{display:'flex', flexDirection:'row'}}>
            <div style={{display:'flex', flexDirection:'column', width:'50%', justifyContent:'flex-start', alignItems:'flex-start', margin:'auto'}}>
              <h2>¡Bienvenidos al nuevo sistema!</h2>
              <br />
              <p style={{boxShadow:'none'}}>
                Estamos encantados de presentarte una experiencia más cómoda e
                interactiva. Nos hemos esforzado por crear un entorno que
                facilite tus tareas y mejore tu interacción con nosotros.
                Explora todas las nuevas funciones y descubre cómo este sistema
                puede hacer tu vida más sencilla. ¡Esperamos que disfrutes de
                esta emocionante actualización!
              </p>
            </div>
              <img src={much} alt="" style={{display:"flex", width:'35%', margin:'auto', borderRadius:'5px'}}/>
          </div>
        </form>
      </div>
    </section>
  );
}
