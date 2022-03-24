import React from 'react'
import logo from "../assets/logo.svg"
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <main className='w-screen h-screen flex flex-col p-10 bg-gradient-to-t from-orange-600 to-orange-400 justify-center gap-16'>

        <div className='flex gap-2'>
            <img src={logo} alt="logo fadliselaz note app" className='h-6' />
            <h1 className='text-white font-light text-lg uppercase'> 
                Fadliselaz Note App
            </h1>
        </div>

        <h1 className='text-white font-bold text-6xl leading-[70px]'>
            Aplikasi Simple Note App Gratis karya Anak Bangsa
        </h1>

        <Link to="/note">
            <button className='h-12 bg-orange-400 text-white w-full rounded-full flex justify-center items-center text-xl'>
                Buat Note Sekarang
            </button>
        </Link>

    </main>
  )
}

export default Home