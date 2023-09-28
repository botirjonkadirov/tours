import React, { useState } from "react";
import Tour from './tour'
function Tours({tours, deleteBt}) {
    console.log(tours)
  return (
    <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
       {tours && tours.map((tour)=>{
       
        const {id} = tour
        return (
          <Tour key={id} tour={tour} deleteBt={deleteBt}/>
        )
        })}
      
    </ul>
  );
}

export default Tours;