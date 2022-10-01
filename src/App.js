
import Search from './components/Search';
import Table from './components/Table';
import {useEffect} from 'react';

function App() {
    const PRODUCTS = [
        {category: 'Fruits', price: '$1', stocked: true, name: 'Apple'},
        {category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit'},
        {category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit'},
        {category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach'},
        {category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin'},
        {category: 'Vegetables', price: '$1', stocked: true, name: 'Peas'}
    ];

    function test() {
        console.log('working')
    }

    useEffect(() => {
        test()
    }, []);


    return (
        <div className={'h-screen w-screen bg-blue-700 from-blue-400 bg-gradient-to-br flex justify-center items-center flex-col'}>
            <Search/>
            <section>
                <Table products={PRODUCTS}/>
            </section>
        </div>
    );
}

export default App;
