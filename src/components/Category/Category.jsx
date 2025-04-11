import React from 'react';

const Category = ({element}) => {
    const {strCategory}= element
    return (
        <div>
            <button className='btn border-none font-bold hover:bg-blue-500 hover:text-white'>{strCategory}</button>
        </div>
    );
};

export default Category;