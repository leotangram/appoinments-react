import React, { Fragment, useState } from 'react'

function Form({ createAppointment }) {
  const initialState = {
    pet: '',
    owner: '',
    date: '',
    time: '',
    symptom: ''
  }

  // appointment = state actual
  // setAppointment = función para cambiar el state
  const [appointment, setAppointment] = useState(initialState)

  // Actualiza el state
  const updateState = e => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value
    })
  }

  // Pasamos la cita al componente principal
  const sendAppointment = e => {
    e.preventDefault()
    // Pasar la cita hacia el componente principal
    createAppointment(appointment)
    // Reiniciar el state (reiniciar el form)
    setAppointment(initialState)
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
          value={appointment.pet}
        />

        <label>Nombre Dueño</label>
        <input
          type='text'
          name='owner'
          className='u-full-width'
          placeholder='Nombre Dueño de la Mascota'
          onChange={updateState}
          value={appointment.owner}
        />

        <label>Fecha</label>
        <input
          type='date'
          className='u-full-width'
          name='date'
          onChange={updateState}
          value={appointment.date}
        />

        <label>Hora</label>
        <input
          type='time'
          className='u-full-width'
          name='time'
          onChange={updateState}
          value={appointment.time}
        />

        <label>Sintomas</label>
        <textarea
          className='u-full-width'
          name='symptom'
          onChange={updateState}
          value={appointment.symptom}
        />

        <button type='submit' className='button-primary u-full-width'>
          Agregar
        </button>
      </form>
    </Fragment>
  )
}

export default Form
