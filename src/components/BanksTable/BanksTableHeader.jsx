import React, { useContext } from 'react';
import { Context } from '../../context/context';

const BanksTableHeader = () => {
    const { isFiltered } = useContext(Context);


    const nonFilteredTable = <tr>
    <th>   </th>
    <th>שם בנק</th>
    <th>מספר בנק</th>
    <th>שם סניף</th>
    <th>מספר סניף</th>
    <th>כתובת</th>
    <th>פעיל היום</th>
    <th>מרחק בק״מ</th>
</tr>

    const filteredTable = <tr>
    <th>שם סניף</th>
    <th>מרחק בק״מ</th>
</tr>

    return (
        <>
            { isFiltered ? filteredTable : nonFilteredTable }
        </>
    )
}

export default BanksTableHeader