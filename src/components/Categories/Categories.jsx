import React from "react";
import Category from "../Category/Category";

const Categories = ({ data,setCategoryName }) => {
  return (
    <div>
      <h1 className="font-bold text-3xl py-6 text-blue-500">Categories</h1>
      <div className="flex gap-6 justify-center flex-wrap">
        {data.map((element) => (
          <Category setCategoryName={setCategoryName} key={element.idCategory} element={element}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
