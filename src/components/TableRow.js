import React from 'react';

const TableRow = ({name, price, stocked}) => {
    return (
        <>
            {
                stocked ?
                    <>
                        <tr>
                            <td>{name}</td>
                            <td>{price}</td>
                        </tr>
                    </>
                    :
                    <>
                        <tr className={'text-red-600'}>
                            <td>{name}</td>
                            <td>{price}</td>
                        </tr>
                    </>
            }
        </>
    );
};

export default TableRow;
