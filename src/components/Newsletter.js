import React from 'react'

const Newsletter = () => {
  return (
    <section id="newsletter" class="newsletter section-p1 section-m1">
        <div class="news-text">
            <h4>Regístrate Para Nuevas Noticias</h4>
            <p>Reciba actualizaciones por E-mail sobre nuestra tienda y <span>ofertas especiales.</span></p>
        </div>
        <div class="form">
            <input type="text" placeholder="Ingrese su email" />
            <button class="normal">Regístrarse</button>
        </div>
    </section>
  )
}

export default Newsletter