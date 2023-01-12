import React from 'react'

const Newsletter = () => {
  return (
    <section id="newsletter" className="newsletter section-p1 section-m1">
        <div className="news-text">
            <h4>Regístrate Para Nuevas Noticias</h4>
            <p>Reciba actualizaciones por E-mail sobre nuestra tienda y <span>ofertas especiales.</span></p>
        </div>
        <div className="form">
            <input type="text" placeholder="Ingrese su email" />
            <button className="normal">Regístrarse</button>
        </div>
    </section>
  )
}

export default Newsletter