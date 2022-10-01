import React from 'react';

const Search = () => {
    return (
        <div>
            <input className={'rounded p-2 mb-2 border-black border-2'} type="text" placeholder={'Search...'}/>
            <div className={'flex gap-2'}>
                <input type={'checkbox'} id={'stocked'}/>
                <label htmlFor={'radio'}>Only show products in stock</label>
            </div>
        </div>
    );
};

export default Search;
