import React from 'react';
import TableRow from './TableRow';

const TableBody = ({categories, products}) => {
    return (
        <>
            {
                Array.from(categories).map((category) =>
                    (
                        <>
                            <tr className={'text-center'}>
                                <th>{category}</th>
                            </tr>
                            {products.filter((product) => product.category === category)
                                .map((product) =>
                                    (
                                        <>
                                            <TableRow name={product.name} price={product.price} stocked={product.stocked} />
                                        </>
                                    )
                                )}
                        </>
                    )
                )
            }
        </>
    );
};

export default TableBody;
