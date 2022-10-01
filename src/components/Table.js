import React from 'react';
import Label from './Label';
import TableBody from './TableBody';

const Table = ({products}) => {
    const categories = new Set();
    products.map((product) => categories.add(product.category));

    // TODO: have category as header ->
    //  loop through categories ->
    //  if object.category === current.category ->
    //  render row component
    return (
        <div>
            <table>
                <thead>
                    <tr className={'flex gap-4 justify-center items-center'}>
                        <th><Label name={'Name'}/></th>
                        <th><Label name={'Price'}/></th>
                    </tr>
                </thead>
                <tbody>
                    <TableBody products={products} categories={categories}/>
                </tbody>
            </table>
        </div>
    );
};

export default Table;


