import React, { Fragment } from 'react'

function Form() {
  return (
    <Fragment>
      <h2>Crear Cita</h2>

      <form>
        <label>Nombre Mascota</label>
        <input
          type='text'
          name='pet'
          className='u-full-width'
          placeholder='Nombre Mascota'
        />

        <label>Nombre Dueño</label>
        <input
          type='text'
          name='owner'
          className='u-full-width'
          placeholder='Nombre Dueño de la Mascota'
        />

        <label>Fecha</label>
        <input type='date' className='u-full-width' name='date' />

        <label>Hora</label>
        <input type='time' className='u-full-width' name='time' />

        <label>Sintomas</label>
        <textarea className='u-full-width' name='symptom' />

        <button type='submit' className='button-primary u-full-width'>
          Agregar
        </button>
      </form>
    </Fragment>
  )
}

export default Form
