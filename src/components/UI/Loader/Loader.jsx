import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import './Loader.scss';

const Loader = ({ label }) => {
    return (
        <div className='loader'>
            {label && <div className='label'>{label}</div>}
            <RotatingLines
                strokeColor="#0070C9"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
            />
        </div>
    )
}

export default Loader