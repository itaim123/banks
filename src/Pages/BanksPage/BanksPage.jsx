import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Context } from '../../context/context';
import { useNavigate } from 'react-router-dom';
import BanksTable from '../../components/BanksTable/BanksTable';
import FrequentBank from '../../components/FrequentBank/FrequentBank';
import Loader from '../../components/UI/Loader/Loader';
import './BanksPage.scss';

const BanksList = () => {
    const [banks, setBanks] = useState([]);
    const { currentLocation } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        if (!currentLocation) {
            return navigate('/')
        }

        const { latitude, longitude } = currentLocation;
        // axios.post(`https://banks-be.herokuapp.com/api/banks/getBanks/?latitude=${latitude}&longitude=${longitude}`).then(({ data }) => {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/banks/getBanks/?latitude=${latitude}&longitude=${longitude}`).then(({ data }) => {
            setBanks(data);
        }).catch(e => {
            console.log('Set Err', e);

        });
    }, []);

    if (!banks.length) {
        return <Loader label='טוען בנקים...' />
    }

    return (
        <div className='banksPage'>
            <FrequentBank banks={banks} />
            <BanksTable banks={banks} />
        </div>
    )
}

export default BanksList;