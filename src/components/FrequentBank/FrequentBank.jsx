import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../../context/context';
import { banksMapper } from '../../utils';
import Button from '../UI/Button/Button';

const FrequentBank = ({ banks }) => {
    const context = useContext(Context);
    const { isFiltered, setIsFiltered, frequentBank, setFrequentBank } = context;

    useEffect(() => {
        setFrequentBank(banksMapper(banks))
    }, [])
    const showBank = isFiltered ? 'מציג רשימת סניפים של ' : '';
    return (
        <div className='frequentBank'>
            {!isFiltered && <div>הבנק עם המספר המקסימלי של סניפים לידך:</div>}
            <div>{showBank} {frequentBank}</div>
            <Button onClick={() => setIsFiltered(s => !s)}>
                {!isFiltered ? 'סנן סניפים' : 'הצג את כל הסניפים'}
            </Button>
        </div>
    )
}

export default FrequentBank