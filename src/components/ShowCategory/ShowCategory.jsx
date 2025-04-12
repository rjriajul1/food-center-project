import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';

const ShowCategory = ({categoryName}) => {

const [foods,setFoods] = useState([])




useEffect(()=>{
fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
.then(res=>res.json())
.then(data=>setFoods(data.meals))
},[categoryName])
// console.log(foods);

    return (
        <div className='grid md:grid-cols-2 my-10 bg-red-300 lg:grid-cols-4  '>
           {
            foods?.map(food=><Food  key={food.idMeal} food={food}></Food>)
           }
        </div>
    );
};

export default ShowCategory;