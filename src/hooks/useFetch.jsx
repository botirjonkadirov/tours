import React, { useEffect, useState } from 'react'

export function useFetch(url) {
    const [data, setData] = useState(null)
    const [isPending, setIspending] = useState(false)
    const [error, setEror] = useState(null)

    
 useEffect(()=>{
    const fetchData = async ()=>{
        setIspending(true)
     try {
        const req = await fetch(url)
        if (!req.ok) {
            throw new Error(req.statusText)
        }
        const data= await req.json()
        setData(data)
        setIspending(false )
     } catch (err) {
        setEror(err.message)
        setIspending(false )
     }
    }
    fetchData()
   },[url])
   
   console.log(data)

  return {data, isPending, error}
}

