import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const navigate = useNavigate()
  return (

    <div className='header'>
      <div className='title' onClick={() => navigate('/')}>מטלת בית יד 2</div>
      <div>My Bank List</div>
    </div>
  )
}

export default Header