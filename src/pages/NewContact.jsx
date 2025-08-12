import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useGlobalReducer from '../hooks/useGlobalReducer'
import FormContact from '../components/FormContact';

export const NewContact = () => {

  return (
    <FormContact title="Add New Contact" />
  );

}
