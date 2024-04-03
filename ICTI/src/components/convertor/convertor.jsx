import React from 'react'

export default function convertor() {
  return (
 
         <section className="hero">
        {/* <!-- Contenedor de la cabecera--> */}
        <div className="contenido_hero">
            <form action="/upload" method="POST" encType="multipart/form-data">
                <div className="input-group">
                    <input type="file" className="form-control" id="file" name="file" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                    <button className="btn btn-outline-secondary" type="submit"
                        id="inputGroupFileAddon04">Convertir</button>
                </div>
            </form>
        </div>
    </section>

  )
}
