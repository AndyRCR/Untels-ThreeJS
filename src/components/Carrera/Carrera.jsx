import React from 'react'
import './Carrera.css'

const Carrera = ({item, direccion}) => {
  return (
    <div className='carrera' style={{flexDirection: direccion}} data-aos="fade-right">
        <div className='carreraItemContainer'>
            <div className='carreraItem'>
                <h2>{item.carrera}</h2>
                <div className='description'>{item.descripcion}</div>
                <h3>Perfil</h3>
                <div className='perfil'>{item.perfil}</div>
                <div className='enlace'>
                    <a href={item.enlace} target='_blank' rel="noreferrer">Ver más...</a>
                </div>
            </div>
        </div>
        <div className='image'>
            <a href={item.enlace} target='_blank' rel="noreferrer">
                <img src={item.imagen} alt={`Imagen carrera ${item.carrera}`} />
            </a>
        </div>
    </div>
    
  )
}

export default Carrera