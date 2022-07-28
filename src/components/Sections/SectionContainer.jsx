import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../services/Firebase'
import Carrera from '../Carrera/Carrera'
import Form from '../Form/Form'
import './SectionContainer.css'

const SectionContainer = () => {

  const [carreraList, setCarreraList] = useState(null)

  const getCarreras = async () => {
    const col = collection(db, 'carreras')
    try {
        const data = await getDocs(col)
        const res = data.docs.map(doc => doc = {
            id: doc.id,
            ...doc.data()
        })
        setCarreraList(res)
        console.log(res)
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    getCarreras()
  }, [])
  

  return (
    <div className='sectionContainer'>
      <div className='carrerasContainer'>
        <h1>Nuestras carreras</h1>
        {carreraList != null ? (
          carreraList.length > 0 ? (
            carreraList.map((element, index) => (
              <Carrera key={index} item={element} direccion={index % 2 === 0 ? 'row' : 'row-reverse'}/>
            ))
          ) : <h1>No se encotnraron resultados</h1>
        ) : <></>}
      </div>
      <div className='formContainer'>
        <Form/>
      </div>
    </div>
  )
}

export default SectionContainer