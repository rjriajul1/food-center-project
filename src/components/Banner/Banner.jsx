import React from 'react';
import banner from '../../assets/food_web_banner_29.jpg'

const Banner = () => {
    return (
        <div>
            <img className='md:h-[600px] object-cover w-full' src={banner} alt="" />
        </div>
    );
};

export default Banner;