import React, { useState, Fragment } from 'react'
import Form from './components/Form'
import Appointment from './components/Appointment'

function App() {
  // useState retorna 2 funciones
  // El state actual = this.state
  // Función que actualiza el state = this.setState({})
  const [appointments, setAppointment] = useState([])

  // Agregar las nuevas citas al state
  const createAppointment = appointment => {
    // Tomar una copia del state y agregar una nueva cita
    const newAppointments = [...appointments, appointment]
    // Almacenamos en el state
    setAppointment(newAppointments)
  }

  // ELimina las citas del state
  const deleteAppointment = index => {
    const newAppointments = [...appointments]
    newAppointments.splice(index, 1)
    setAppointment(newAppointments)
  }

  // Cargar condicionalmente un título
  const title =
    Object.keys(appointments).length === 0
      ? 'No hay citas'
      : 'Administrar las citas aquí'

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Form createAppointment={createAppointment} />
          </div>
          <div className='one-half column'>
            <h2>{title}</h2>
            {appointments.map((appointment, index) => (
              <Appointment
                key={index}
                index={index}
                appointment={appointment}
                deleteAppointment={deleteAppointment}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App
