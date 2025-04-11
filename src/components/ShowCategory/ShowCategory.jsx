import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';

const ShowCategory = ({categoryName}) => {

const [foods,setFoods] = useState([])

useEffect(()=>{
fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
.then(res=>res.json())
.then(data=>setFoods(data.meals))
},[categoryName])

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-4  '>
           {
            foods?.map(food=><Food food={food}></Food>)
           }
        </div>
    );
};

export default ShowCategory;