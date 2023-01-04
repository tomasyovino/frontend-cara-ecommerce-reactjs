import React from 'react'

const LowBanner = () => {
  return (
    <>
      <section id="sm-banner" className="sm-banner section-p1">
        <div className="banner-box">
          <h4>ofertas locas</h4>
          <h2>compra 1, lleva 2</h2>
          <span>La mejor ropa clásica está a la venta en Cara</span>
          <button className="white">Ver más</button>
        </div>
        <div className="banner-box banner-box2">
          <h4>primavera/verano</h4>
          <h2>próxima temporada</h2>
          <span>La mejor ropa clásica está a la venta en Cara</span>
          <button className="white">Colección</button>
        </div>
      </section>

      <section id="text-banner" className='text-banner'>
        <div className="banner-box">
          <h2>VENTA DE TEMPORADA</h2>
          <h3>Colección de Invierno a 50% de Descuento</h3>
        </div>
        <div className="banner-box banner-box2">
          <h2>NUEVOS CALZADOS</h2>
          <h3>Primavera/Verano 2022</h3>
        </div>
        <div className="banner-box banner-box3">
          <h2>CAMISETAS</h2>
          <h3>Nuevos Estampados de Moda</h3>
        </div>
      </section>
    </>
  )
}

export default LowBanner