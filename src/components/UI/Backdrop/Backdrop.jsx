import React, { useContext } from 'react';
import { Context } from '../../../context/context';
import Modal from '../Modal/Modal';
import './Backdrop.scss';


const Backdrop = () => {
    const { isModal } = useContext(Context)

    if (!isModal) return null;

    return (
        <div className='backdrop'>
            <Modal />
        </div>
    )
}

export default Backdrop