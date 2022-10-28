import React, { useContext } from 'react';
import { Context } from '../../context/context';
import { checkIfClosed } from '../../utils';
import './BanksTable.scss';

const BanksTableRow = ({ bank }) => {
    const { isFiltered, addFavorite, removeFavorite } = useContext(Context);
    const isPicked = JSON.parse(localStorage.getItem('fav')).find(id=>id===bank._id);
    
    const addToFavoritesHandler = (id) => {
        const isAdd = !isPicked;
        isAdd ? addFavorite(id) : removeFavorite(id);
    }

    const nonFilteredTable = <>
        <td>
            <input onChange={() => addToFavoritesHandler(bank._id)} type="checkbox" checked={isPicked} />
        </td>
        <td> {bank.Bank_Name}</td >
        <td>{bank.Bank_Code}</td>
        <td>{bank.Branch_Name}</td>
        <td>{bank.Branch_Code}</td>
        <td>{bank.Branch_Address}, {bank.City}</td>
        <td>{checkIfClosed(bank.day_closed) ? 'סגור' : 'פתוח'}</td>
        <td>{bank.distance?.toFixed(2)} ק״מ</td>
    </>

    const filteredTable = <>
        <td>{bank.Branch_Name}</td>
        <td>{bank.distance?.toFixed(2)} ק״מ</td>
    </>

    return (
        <tr className={isPicked ? 'tableRowPicked' : 'tableRow'}>
            {isFiltered ? filteredTable : nonFilteredTable}
        </tr>
    )
}

export default BanksTableRow;