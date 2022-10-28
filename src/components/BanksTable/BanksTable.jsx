import React, { useEffect, useContext } from 'react';
import { Context } from '../../context/context';
import Loader from '../UI/Loader/Loader';
import BanksTableRow from './BanksTableRow';
import BanksTableHeader from './BanksTableHeader';
import './BanksTable.scss';

const BanksTable = ({ banks }) => {
    const { isFiltered, frequentBank, filteredByBank, setFilteredByBank } = useContext(Context);

    useEffect(() => {
        if (frequentBank) {
            setFilteredByBank(banks.filter(bank => bank.Bank_Name === frequentBank && bank.distance <= 7))
        }
    }, [frequentBank])

    const banksArray = isFiltered ? filteredByBank : banks;

    if (!banksArray.length) {
        <Loader label='טוען בנקים...' />
    }

    return (
        <div className='banksTable'>
            <table>
                <tbody>
                    <BanksTableHeader />
                    {banksArray.map(bank => {
                        return (
                            <BanksTableRow bank={bank} key={bank._id} />
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default BanksTable