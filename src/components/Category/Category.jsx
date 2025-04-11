import React from 'react';

const Category = ({element,setCategoryName}) => {
    const {strCategory}= element
    return (
        <div>
            <button onClick={()=>setCategoryName(element.strCategory)} className='btn border-none font-bold hover:bg-blue-500 hover:text-white'>{strCategory}</button>
        </div>
    );
};

export default Category;