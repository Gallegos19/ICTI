import React from 'react'
import Loader from '../Loader/Loader'

export default function ContenidoHome() {
  return (
    <section className="hero">
    {/* <!-- Contenedor de la cabecera--> */}
    <div className="contenido_hero">
        <form action="/upload" method="POST" encType="multipart/form-data">
            <div className="input-group">
             <Loader />
            </div>
        </form>
    </div>
</section>
  )
}
