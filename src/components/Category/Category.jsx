import React from 'react';



const Category = ({element,handleButton,activeButton}) => {
    const {strCategory}= element
    return (
        <div>
            <button onClick={()=>handleButton(element.strCategory,element.idCategory)} className={`btn border-none font-bold hover:bg-blue-500 hover:text-white ${activeButton === element.idCategory && 'bg-red-500 text-white'} `}>{strCategory}</button>
        </div>
    );
};

export default Category;