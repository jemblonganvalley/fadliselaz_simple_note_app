import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import { getLocalData } from "../libs/getLocalData"

const Note = () => {

  const [state,setState] = useState([])

  useEffect(()=>{
    getLocalData()
    .then(response => setState(response))
  }, [])

  return (
    <div className='w-screen min-h-screen flex flex-col p-10 bg-slate gap-6 bg-slate-100 pb-32'>
        <h1 className='text-orange-500 font-bold text-4xl'>
            Catatan Kamu
        </h1>

        {state.map((e)=>{
          return (
            <div className='w-full p-4 flex flex-col bg-white gap-2'>

              <h1 className='text-gray-500 font-bold text-xl'>
                {e.title}
              </h1>

              <p className='text-gray-500 font-light'>
                {e.content}
              </p>

              <small className='text-gray-500 font-light text-sm'>
                {e.createdAt}
              </small>

            </div>
          )
        })}
        
        <Navbar />
    </div>
  )
}

export default Note