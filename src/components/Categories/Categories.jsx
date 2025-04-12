import React from "react";
import Category from "../Category/Category";


const Categories = ({ data,handleButton,activeButton }) => {
  return (
    <div>
      <h1 className="font-bold text-3xl py-10 px-10 text-blue-500">Categories</h1>
      <div className="flex gap-6 justify-center flex-wrap">
        <button className="btn btn-primary">All</button>
        {data.map((element) => (
          <Category activeButton={activeButton} handleButton={handleButton} key={element.idCategory} element={element}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
