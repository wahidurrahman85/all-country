import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import CatagoriesDetail from '../CatagoreisDetail/CatagoriesDetail';

const Catagories = () => {
    const count = useContext(CategoryContext)
    return (
        <div>
            <h2>This is Catagories: {count}</h2>
            <CatagoriesDetail></CatagoriesDetail>
        </div>
    );
};

export default Catagories;