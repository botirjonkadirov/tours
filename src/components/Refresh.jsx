import React, { useState } from 'react'

function Refresh({setTours, tour}) {

  return (
   <div>
     <button className=' border-2 border-emerald-400 hover:bg-emerald-400 hover:text-white' onClick={()=>setTours(tour)}>Refresh</button>
   </div>
  )
}

export default Refresh