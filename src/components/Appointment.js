import React from 'react'

function Appointment({ appointment, index, deleteAppointment }) {
  return (
    <div className='appointment'>
      <p>
        Mascota: <span>{appointment.pet}</span>
      </p>
      <p>
        Dueño: <span>{appointment.owner}</span>
      </p>
      <p>
        Fecha: <span>{appointment.date}</span>
      </p>
      <p>
        Hora: <span>{appointment.time}</span>
      </p>
      <p>
        Síntomas: <span>{appointment.symptom}</span>
      </p>
      <button
        onClick={() => deleteAppointment(index)}
        type='button'
        className='button delete u-full-width'
      >
        Eliminar X
      </button>
    </div>
  )
}

export default Appointment
