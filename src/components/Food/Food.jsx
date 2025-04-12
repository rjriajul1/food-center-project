import React from "react";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";


const Food = ({ food }) => {
  // console.log(food);
  return (
    <div>
     <div className="card bg-base-100 p-2 m-4 shadow-sm">
  <figure>
    <img
    className="object-cover w-full h-64"
      src={food.strMealThumb} />
  </figure>
  <div className="">
    <h2 className="font-bold py-2 text-xl">{food.strMeal}</h2>
    <div className="card-actions py-6 flex justify-between">  
    <MdOutlineShoppingCartCheckout size={30}/>
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Food;
