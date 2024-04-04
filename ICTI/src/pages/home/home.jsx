import Header from '../../components/header/header';
import Menu from '../../components/menu/menu';
import Footer from '../../components/footer/footer';
import ContenidoHome from '../../components/ContenidoHome/ContenidoHome';

export default function home() {
  return (
    <div>
        <Header />
        <Menu />
        <ContenidoHome />
        <Footer />
    </div>
  )
}
