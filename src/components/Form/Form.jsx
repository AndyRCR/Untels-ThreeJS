import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import React, { useState } from 'react'
import Swal from 'sweetalert2'
import emailjs from 'emailjs-com'
import './Form.css'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../services/Firebase'

const carreras = [
  {value: 'Administración de Empresas'},
  {value: 'Ingeniería Ambiental'},
  {value: 'Ingeniería de Sistemas'},
  {value: 'Ingeniería Electrónica'},
  {value: 'Ingeniería Mecánica'}
]

const Form = () => {

  emailjs.init("uf1ocX0CxNZspgi0V")

  const [formValue, setFormValue] = useState({
    email: {
      carrera: '',
      nombres: '',
      apellidos: '',
      telefono: '',
      email: '',
    }
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormValue({
      email: {
        ...formValue.email,
        [name]: value
      }
    })
  }

  const sendData = async () =>{
    if (formValue.email.carrera !== '' &&
    formValue.email.nombres !== '' &&
    formValue.email.apellidos !== '' &&
    formValue.email.telefono !== '' &&
    formValue.email.email !== '') {
        const col = collection(db, 'correos')
        const order = await addDoc(col, formValue)
        emailjs.send('service_4gfz4ub', 'template_lkdxwqs', {...formValue})
            .then(function (response) {
                Swal.fire(
                    'Correo enviado!',
                    `Se ha enviado el correo, nos comunicaremos lo más pronto posible`,
                    'success'
                )
                setFormValue({
                  email: {
                    carrera: '',
                    nombres: '',
                    apellidos: '',
                    telefono: '',
                    email: '',
                  }
                })
            }, function (error) {
                Swal.fire(
                    'Ocurrió un error con el servidor :c',
                    `Por favor, intente nuevamente`,
                    'error'
                )
            })
    } else {
        Swal.fire(
            'Campos incompletos!',
            `Todos los campos son obligatorios, intente nuevamente`,
            'error'
        )
    }
  }

  return (
    <div className='form'>
      <div className='formItems'>
        <h1>Contacta con nosotros!</h1>
        <div className='formItem'>
          <TextField
            className='inputForm'
            select
            name='carrera'
            label="Carrera de interés"
            value={formValue.email.carrera}
            onChange={handleInputChange}
          >
            {carreras.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className='formItem'>
          <TextField
            className='inputForm'
            required
            name='nombres'
            label="Nombres"
            value={formValue.email.nombres}
            onChange={handleInputChange}
          />
        </div>
        <div className='formItem'>
          <TextField
            className='inputForm'
            required
            name='apellidos'
            label="Apellidos"
            value={formValue.email.apellidos}
            onChange={handleInputChange}
          />
        </div>
        <div className='formItem'>
          <TextField
            name='telefono'
            className='inputForm'
            required
            label="Teléfono de contacto"
            value={formValue.email.telefono}
            onChange={handleInputChange}
          />
        </div>
        <div className='formItem'>
          <TextField
            className='inputForm'
            required
            name='email'
            label="Correo de contacto"
            value={formValue.email.email}
            onChange={handleInputChange}
          />
        </div>
        <div className='formItem'>
          <Button className='sendButton' onClick={sendData} variant="contained">Enviar</Button>
        </div>
      </div>
      <div className='formImage'>
        <img src="https://proyecto-acg.s3.amazonaws.com/carreras/formImage.png" alt="Untels portada" />
      </div>
    </div>
  )
}

export default Form