import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <div className="banner">
        <div className="bannerTransparency">

        </div>
        <div className="bannerSloganContainer">
            <h1 style={{marginTop: '230px', marginLeft: '40px'}}>
                Formando profesionales integrales para<br/>el desarrollo y crecimiento del Perú
            </h1>
            <p>
                Somos una universidad licenciada, con varios reconocimientos<br/>
                en el poco tiempo relativo que llevamos en juego
            </p>
        </div>
    </div>
  )
}

export default Banner