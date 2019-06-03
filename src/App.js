import React, { useState } from 'react'

function App() {
  // useState retorna 2 funciones
  // El state actual = this.state
  // Función que actualiza el state = this.setState({})
  const [appointment, setAppointment] = useState()
  console.log(appointment)
  return (
    <h1>Hola</h1>
  )
}

export default App
