import Link from 'next/link';
import React from 'react';

const MealType = (props) => {
    return (
        <>
        <h1>
           Meal type page 
           <p>{props.params.slug}</p>
        </h1>
        <Link href='/meals'>All Meals</Link>
        </>
    );
};

export default MealType;