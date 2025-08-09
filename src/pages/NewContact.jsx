import React from 'react'
import { Link } from 'react-router-dom'
import useGlobalReducer from '../hooks/useGlobalReducer'

export const NewContact = () => {

  const {store, dispatch} = useGlobalReducer();

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita recargar la página

    const form = e.target;
    const datos = new FormData(form); // Captura todos los inputs con name
    const objeto = Object.fromEntries(datos); // Convierte a objeto

    console.log("Datos del formulario:", objeto);

    // Aquí podrías enviarlo a un API o guardarlo en tu store
    // dispatch({ type: "ADD_CONTACT", payload: objeto });
  };

  return (
    <div className='container'>
      <h1 className='text-center'>Add new Contact</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="name" placeholder='Full Name' />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder='Enter Email' />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input type="number" className="form-control" id="phone" placeholder='Enter Phone' />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input type="text" className="form-control" id="address" placeholder='Enter Address' />
        </div>
        <button type='submit' className="btn btn-primary w-100">
          Submit
        </button>
        <Link to="/">or get back to contacts</Link>
      </form>
    </div>
  )
}
