import React, { useEffect, useState } from 'react'
import Tours from './components/Tours'
import Header from './components/Header'
import { useFetch } from './hooks/useFetch'
import Refresh from './components/Refresh'
function App() {
  const [url, setUrl] = useState('https://course-api.com/react-tours-project')
  const {data:tour, isPending, error} = useFetch(url)
  const [tours, setTours] = useState(null)
  useEffect(()=>{
    setTours(tour)
  },[tour])
  console.log(tours)

  const deleteBt=(id)=>{
    setTours((p)=>{
      return p.filter((t)=>{
        return t.id!==id
      })
    })
  }


  
  return (
    <div>
      <main className='bg-[#f8fafc]'>
    <section className='text-center pt-32'>
      <Header error={error}/>
    </section>
    <section className='max-auto max-w-5xl px-3 py-10'>
   <section className='text-center'>
   {tours&&tours.length===0&&<Refresh tour={tour} setTours={setTours}/>}
   </section>
     { <Tours tours={tours} deleteBt={deleteBt}/>}
    </section>
      </main>
    </div>
  )
}

export default App