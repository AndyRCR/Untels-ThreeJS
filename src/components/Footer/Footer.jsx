import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footerContainer'>
      <div className='footerFlexContainer'>
        <div className='infoContainer'>
          <ul>
            <li>
              <img src='http://www.untels.edu.pe/images/logo.png' alt=''/>
            </li>
            <li>
              <p style={{fontWeight: 'bold'}}>Campus universitario:</p>
              <p>Av. Bolivar S/N, sector 3 grupo 1, mz. A, sublote 3<br/>Villa El Salvador</p>
            </li>
            <li>
              <p>Teléfono: (01) 715 8878</p>
            </li>
          </ul>
        </div>
        <div className='socialNetworks'>
          <ul>
            <li>
              <a href="https://www.facebook.com/untelsperu" rel="noreferrer" target="_blank" className="grid-center-container">
                <div className="grid-center-content">
                  <img src="https://proyecto-acg.s3.amazonaws.com/redes/facebook.png" alt="facebook" />
                </div>
                <div className="socialTitle">
                  Facebook
                  <span>Universidad Nacional Tecnológica<br/>de Lima Sur</span>
                </div>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/untelsoficial" rel="noreferrer" target="_blank" className="grid-center-container">
                <div className="grid-center-content">
                  <img src="https://proyecto-acg.s3.amazonaws.com/redes/twitter.png" alt="twitter" />
                </div>
                <div className="socialTitle">
                  Twitter
                  <span>@UntelsOficial</span>
                </div>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/untelsoficial/" rel="noreferrer" target="_blank" className="grid-center-container">
                <div className="grid-center-content">
                  <img src="https://proyecto-acg.s3.amazonaws.com/redes/instagram.png" alt="instagram" />
                </div>
                <div className="socialTitle">
                  Instagram
                  <span>untelsoficial</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className='appsContainer'>
          <h3 style={{ fontWeight: 'bold', fontSize: '18px' }}>Libro de reclamaciones</h3>
          <img src="http://www.untels.edu.pe/images/imagenWeb/libro_reclamaciones.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer