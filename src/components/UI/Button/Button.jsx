import React from 'react';
import './Button.scss'

const Button = ({ children, onClick }) => (
    <div className='buttonWrapper'>
        <button className='button' onClick={onClick}>{children}</button>
    </div>
)

export default Button