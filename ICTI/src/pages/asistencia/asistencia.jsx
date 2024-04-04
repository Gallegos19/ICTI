import Header from '../../components/header/header';
import Menu from '../../components/menu/menu';
import Footer from '../../components/footer/footer';
import ContenidoAsistencia from '../../components/ContenidoAsistencia/ContenidoAsistencia';
import style from './asistencia.module.css'

export default function asistencia() {
  return (
    <div className={style.containerAsistencia} >
        <Header />
        <Menu />
        <ContenidoAsistencia />
        <Footer />
    </div>
  )
}
