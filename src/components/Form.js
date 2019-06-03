import React, { Fragment, useState } from 'react'

function Form({ createAppointment }) {
  const [appointment, setAppointment] = useState({
    pet: '',
    owner: '',
    date: '',
    time: '',
    symptom: ''
  })

  const updateState = e => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value
    })
  }

  const sendAppointment = e => {
    e.preventDefault()
    // Pasar la cita hacia el componente principal
    createAppointment(appointment)
    // Reiniciar el state (reiniciar el form)
  }

  return (
    <Fragment>
      <h2>Crear Cita</h2>

      <form onSubmit={sendAppointment}>
        <label>Nombre Mascota</label>
        <input
          type='text'
          name='pet'
          className='u-full-width'
          placeholder='Nombre Mascota'
          onChange={updateState}
        />

        <label>Nombre Dueño</label>
        <input
          type='text'
          name='owner'
          className='u-full-width'
          placeholder='Nombre Dueño de la Mascota'
          onChange={updateState}
        />

        <label>Fecha</label>
        <input
          type='date'
          className='u-full-width'
          name='date'
          onChange={updateState}
        />

        <label>Hora</label>
        <input
          type='time'
          className='u-full-width'
          name='time'
          onChange={updateState}
        />

        <label>Sintomas</label>
        <textarea
          className='u-full-width'
          name='symptom'
          onChange={updateState}
        />

        <button type='submit' className='button-primary u-full-width'>
          Agregar
        </button>
      </form>
    </Fragment>
  )
}

export default Form
