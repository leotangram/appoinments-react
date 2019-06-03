import React, { useState, Fragment } from 'react'
import Form from './components/Form'

function App() {
  // useState retorna 2 funciones
  // El state actual = this.state
  // Función que actualiza el state = this.setState({})
  const [appointment, setAppointment] = useState()
  console.log(appointment)
  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className='container'>
        <div className="row">
          <div className="one-half column">
            <Form />
          </div>
          <div className="one-half column"></div>
        </div>
      </div>
    </Fragment>
  )
}

export default App
