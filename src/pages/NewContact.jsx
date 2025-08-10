import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useGlobalReducer from '../hooks/useGlobalReducer'

export const NewContact = () => {

  const { store, dispatch } = useGlobalReducer();
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    id : undefined
  });

  const handleChange = (event) => {
    const name = event.target.id;
    const value = event.target.value;
    setInputs({ ...inputs, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        'https://playground.4geeks.com/contact/agendas/danloveper/contacts',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(inputs),
        }
      );

      const dataJson = await response.json();
      console.log('Guardado en API:', dataJson);

      dispatch({ type: 'add_contact', payload: dataJson });
      navigate('/');
    } catch (e) {
      console.error('Error al guardar contacto:', e);
    }
  };

  return (
    <div className='container'>
      <h1 className='text-center'>Add new Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="name"
            onChange={handleChange} placeholder='Full Name' />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email"
            onChange={handleChange} placeholder='Enter Email' />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input type="number" className="form-control" id="phone" value={inputs.phone || ""}
            onChange={handleChange} placeholder='Enter Phone' />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input type="text" className="form-control" id="address" value={inputs.address || ""}
            onChange={handleChange} placeholder='Enter Address' />
        </div>
        <button type='submit' className="btn btn-primary w-100">
          Submit
        </button>
        <Link to="/">or get back to contacts</Link>
      </form>
    </div>
  )
}
