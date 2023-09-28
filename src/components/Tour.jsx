import React, { useState } from 'react'

function tour({tour, deleteBt}) {
    const{id, name, info, image, price} = tour
    const [redmore, serRedmore] = useState(false)
  return (
            <li key = {id} className="flex flex-col w-full md:w-full lg:max-w-[352px]  bg-white">
            <div className="image-wrapper relative ">
              <img className="object-cover lg:h-[320px] lg:w-[352px] w-full" 
                src={image}
                alt={name}
                width="352"
                height="320"
              />
              <span className="absolute bg-[#10B981] text-white py-1 px-2 top-0 right-0">
                ${price} </span>
            </div>
            <div className="px-6 py-8">
              <h3 className="text-2xl text-center mb-4">
                {name}
              </h3>
              <p className="text-slate-400 inline-block">
              {redmore? info: info.substring(0, 100)}
              </p>
              {!redmore&&<button onClick={()=>serRedmore((p)=>!p)} className="text-green-500 font-bold mb-5 inline-block">
                Read More
              </button>}
             {redmore&& <button onClick={()=>serRedmore((p)=>!p)} className="text-green-500 font-bold mb-5 inline-block">
                Read less
              </button>}
              <button onClick={()=>deleteBt(id)} className="border-2 border-emerald-400 block w-full hover:bg-emerald-400 hover:text-white">
                Not Interested
              </button>
            </div>
          </li> 
            )

}

export default tour