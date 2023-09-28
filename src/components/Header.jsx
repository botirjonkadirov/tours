import React from 'react'

function Header({error}) {
  return (
    <div><h1 className='text-6xl mb-5 text-cyan-600 border-b-4 pb-3 inline-block border-slate-800'>Tours</h1>
    {error&& <li className='list-none text-4xl text-red-500'>something is wrong</li>}
    </div>
  
  )
}

export default Header