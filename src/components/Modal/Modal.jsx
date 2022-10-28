import React, { useContext } from 'react';
import { Context } from '../../context/context';
import Button from '../UI/Button/Button';
import './Modal.scss';

const Modal = () => {
    const { setIsModal } = useContext(Context)

    return (
        <div className='modal'>
            <div className='modalTitle'> הבנק נשמר ברשימת המועדפים</div>
            <Button onClick={() => setIsModal(false)}>סגור</Button>
        </div>
    )
}

export default Modal