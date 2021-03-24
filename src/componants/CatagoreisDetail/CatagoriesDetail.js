import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CatagoriesDetail = () => {
    const count = useContext(CategoryContext);
    return (
        <div>
            <h4>This is Catagories Detail: {count}</h4>
            <h5>Selected: {count}</h5>
        </div>
    );
};

export default CatagoriesDetail;