# Simple Note App Dengan React

Okay kali ini kita akan membuat sebuah aplikasi sederhana dengan react.

Konsepnya adalah user bisa membuat, mengedit, menghapus note yang mereka buat.

- Mobile First App
    
    Aplikasi yang mengutamakan penggunaan di Mobile device.
    

## Installasi Project React

```bash
npx create-react-app simple_note_app
cd simple_note_app
code .
```

## 1 Persiapan Project React

- Mengedit file **index.html** yang ada di dalam folder */public*

Ubah Title, icon dan Meta description.

 

- Silakan gunakan icon dari lorem icon [https://logoipsum.com/](https://logoipsum.com/)
- Jangan lupa edit file manifest.json yang ada di dalam folder public
- Install tailwind css [https://tailwindcss.com/docs/guides/create-react-app](https://tailwindcss.com/docs/guides/create-react-app)
- Konfigurasi Tailwind css, edit tailwind.config dan tambahkan import code tailwind di index.css file
- Ubah file App.js menjadi App.jsx dan reset file (membuat code baru untuk applikasi)

Untuk mempercepat pembuatan component code pada file react silakan install package di vscode bernama **REACT REDUX EX7** dan kita bisa menggunakan code ***rafce*** untuk membuat code React Functional Component.

## Routing dengan react-router-dom

Kita akan mengukana react router dom untuk kebutuhan routing aplikasi kita, silakan install terlebih dahulu dengan cara : 

```bash
npm install react-router-dom
```

Defaul routing file akan kita letakan di file **App.jsx** silakan buat skema routing code pada file tersebut.

```jsx
// src/App.jsx
import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"

const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<h1>Home Page</h1>}  />
          <Route path='note' element={<h1>list note</h1>} />
      </Routes>
    
    </BrowserRouter>

  )
}

export default App
```

Langkah diatas pertama kita mengiport BrowserRouter, Routes dan Route ke file App.jsx

Selanjutnya BrowserRouter bersifat sebagai parent dari semua Component yang kita punya.

## Buat Struktur Folder di /src

Silakan buat beberapa folder di dalam /src dengan nama :

- components
    
    Folder yang akan kita isi dengan UI component pada applikasi kita
    
- pages
    
    folder yang berisi component page yang nantinya akan di panggil di App.jsx
    
- libs
    
    Folder yang berisi Library yang akan kita buat sendiri. misallnya untuk logic aplikasi kita
    
- constants
    
    Folder yang akan berisi constanta atau data dummy untuk kebutuhan di aplikasi kita
    
- assets
    
    Folder yang berisi asset bisa image atau file lain di applikasi kita
    

## Page File

Okay selanjutnya kita akan buat beberapa file di dalam folder **/src/pages** yang akan berisi seluruh page dari applikasi kita.

- Home.jsx
    
    Page utama dari aplikasi kita yang akan berisi splash screen / halaman pembuka dari aplikasi ini
    

```jsx
// /src/pages/Home.jsx

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
```

Kita bisa lihat di atas untuk kebutuhan link di button, kita tidak menggunakan tag <a> akan tetapi kita menggunakan compoenent bernama **Link** yang kita import dari react-router-dom

! Perhatikan code 

```jsx
import logo from "../assets/logo.svg"
```

```jsx
<img src={logo} alt="logo fadliselaz note app" className='h-6' />
```

Kita bisa lihat bahwa source file untuk kebutuhan image pada react meggunakan variable yang di import dari lokasi image itu berada, apabila ingin menggunakan image yang kita letakan di folder app kita.

Setelah semua code pada file Home.jsx selesai, silakan kita import component Home ke file App.jsx untuk kita tempatkan di route utama atau route “/”. sehingga code pada file App.jsx akan menjadi seperti ini:

```jsx
// /src/App.jsx

import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"

const App = () => {
  return (
    
    <BrowserRouter>

      <Routes>
          <Route path='/' element={<Home />}  />
          <Route path='note' element={<h1>list note</h1>} />
      </Routes>
    
    </BrowserRouter>

  )
}

export default App
```

! Perhatikan :

```jsx
import Home from "./pages/Home"
```

Component pada react di import dengan cara seperti ini, dan nama component dan nama file wajib di mulai dengan **Huruf Kapital !**

dan perhatikan juga import komponent bisa dilakukan karena pada file Home.jsx, kita telah menambahkan code export : 

```jsx
export default Home
```

Sehingga comonent Home bisa di panggil di manapun, termasuk di file App.jsx

```jsx
 <Route path='/' element={ <Home /> }  />
```

Selanjutnya kita tinggal tempatkan component Home pada route /

Pemanggilan component pada react, adalah dengan menempatkan nama komponent yang dilekatan di dalam TAG JSX.  <Home />

- Note.jsx
    
    Page note berisi semua list data note yang sudah di buat user
    

Kita akan menggunakan icon dari sebuah package bernama **react-icons**, silakan install dengan cara : 

```bash
npm i react-icons
```

silakan baca dokumentasi react-icons pada : [https://react-icons.github.io/react-icons/](https://react-icons.github.io/react-icons/)

Silakan buat file Note.jsx di dalam folder /src/pages/ dengan code serperti berikut : 

```jsx
import React from 'react'

const Note = () => {
  return (
    <div className='w-screen min-h-screen flex flex-col p-6 bg-slate gap-6'>

        <h1 className='text-orange-500 font-bold text-4xl'>
            Catatan Kamu
        </h1>

    </div>
  )
}

export default Note
```

jangan lupa update file App.jsx dan tambahkan Note.jsx ke dalam route “/note”, sehingga file App.jsx akan menjadi seperti ini : 

```jsx
import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Note from "./pages/Note"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />}  />
          <Route path='note' element={<Note />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
```

Baik kita sudah mempunyai 2 route yaitu / yang di arahkan ke komponent Home.jsx dan /note yang di arahkan ke komponent Note.jsx.

Silakan jalankan aplikasi kita dan lihat hasilnya dengan cara

```bash
npm run start
```

Biasanya akan langsung membuka google chrome dan diarahkan ke http://localhost:3000

- AddNote.jsx
    
    File ini akan berisi form untuk menambahkan note users.
    

Kita akan menggunakan localstorage sebagai penyimpanan note yang di buat users, 

```jsx
// /src/pages/AddNote.jsx

import React from 'react'

const AddNote = () => {
  return (
    <main className='w-screen min-h-screen flex flex-col p-10 bg-slate-100 gap-6'>

        <h1 className='text-orange-500 font-bold text-4xl'>Buat Catatan Kamu Kamu</h1>

        <form className='w-full flex flex-col gap-6'>
            <div className="form_group flex flex-col w-full gap-4">
                <label htmlFor="title" className='text-gray-500 font-light uppercase'>
                    Judul Note
                </label>
                <input type="text" id='title' name='title' className='p-2 font-light bg-white'  />
            </div>

            <div className="form_group flex flex-col w-full gap-4">
                <label htmlFor="content" className='text-gray-500 font-light uppercase'>
                    Konten
                </label>
                <textarea type="text" id='content' name='content' className='p-2 h-[200px] font-light bg-white' >
                </textarea>
            </div>

            <div className='flex w-full gap-2'>
                <button type='submit' className='h-10 bg-orange-500 text-white flex-1'>
                    Tambah Note
                </button>

                <button type='reset' className='h-10 bg-gray-500 text-white flex-1'>
                    Reset
                </button>
            </div>

        </form>
        
    </main>
  )
}

export default AddNote
```

Dan silakan tambahkan pada route di App.jsx , sehingga file App.jsx kita menjadi seperti ini:

```jsx
import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Note from "./pages/Note"
import AddNote from "./pages/AddNote"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />}  />
          <Route path='note' element={<Note />} />
          <Route path='addnote' element={<AddNote />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
```

Okay kita sudah berhasil membuat beberpa page dan routingnya, akan tetapi masih ada kekurangan yaitu kita belum mempunyai sebuat Komponent untuk berpindah pindah page, yang biasanya di sebut navbar.

## Component

Okay kita akan buat component lain di applikasi ini, component biasanya merupakan sebuah file ui terpisah misalnya navbar, button dan lain lain. Berbeda dengan komponent page yang kita letakan di App.jsx, file file component akan kita letakan di component lainnya.

Okay kita akan buat component di dalam folder /src/components yang nantinya akan kita import di masing masing page.

- Navbar.jsx
    
    Navbar akan berisi navigasi ke setiap route yang kita punya.
    

```jsx
// src/components/Navbar.jsx
import React from 'react'
import {FiHome, FiUpload, FiDelete} from "react-icons/fi"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-screen h-20 flex flex-col justify-center items-center fixed bottom-0 left-0 p-4 '>
        <nav className='w-full h-full bg-orange-500 text-white flex justify-between items-center rounded-full'>

            <Link to={"/note"} className='flex-1 h-full flex justify-center items-center text-white'>
                <FiHome />
            </Link>

            <Link to={"/addnote"} className='flex-1 h-full flex justify-center items-center text-white'>
                <FiUpload />
            </Link>

            <div className='flex-1 h-full flex justify-center items-center text-white'>
                <FiDelete />
            </div>

        </nav>
    </div>
  )
}

export default Navbar
```

Langkah selanjutanya tinggal kita panggil komponent Navbar di masing masing file pages.

## Library

Library adalah logical code yang kita buat untuk menjalankan perintah dari aplikasi kita.

kita meletakan file library di dalam sebuah folder bernama libs.

- storeToLocal.js
    
    File ini akan berisi funtion untuk menambahkan data ke Localstorage
    

```jsx
// src/libs/storeToLocal.js

export const storeToLocal = async (data)=>{
    try {
        
        const lastData = await localStorage.getItem("note_app_data")

        if(!lastData){
            console.info("Belum ada data, dan data akan dibuat..")
            let createLocal = await localStorage.setItem("note_app_data", "[]")
        }

        let prevArray = await JSON.parse(localStorage.getItem("note_app_data")) // []
        let storeNewData = await prevArray.push(data)
        let newData = await localStorage.setItem("note_app_data", JSON.stringify(prevArray))

        return prevArray

    } catch (error) {
        return error
    }
}
```

Okay bisa lihat code diatas, kita membuat sebuah function javascrip untuk menambahkan data ke localstorage

Selanjutnya kita akan import library / function tersebut ke file AddNote.jsx seperti dibawah ini :

```jsx
// src/pages/AddNote.jsx

import React from 'react'
import Navbar from '../components/Navbar'
import moment from 'moment'
import { storeToLocal } from "../libs/storeToLocal"

const AddNote = () => {

    const handleSubmit = (event)=>{
        event.preventDefault()
        const {title, content} = event.target
        storeToLocal({
            id : Date.now(),
            title : title.value,
            content : content.value,
            createdAt : moment().format("dddd DD/MM/YYYY hh:mm")
        })
				.then(response => window.location.href = "/note")
    }

  return (
    <main className='w-screen min-h-screen flex flex-col p-10 bg-slate-100 gap-6'>

        <h1 className='text-orange-500 font-bold text-4xl'>Buat Catatan Kamu Kamu</h1>

        <form className='w-full flex flex-col gap-6' onSubmit={handleSubmit}>
            <div className="form_group flex flex-col w-full gap-4">
                <label htmlFor="title" className='text-gray-500 font-light uppercase'>
                    Judul Note
                </label>
                <input type="text" id='title' name='title' className='p-2 font-light bg-white' required />
            </div>

            <div className="form_group flex flex-col w-full gap-4">
                <label htmlFor="content" className='text-gray-500 font-light uppercase'>
                    Konten
                </label>
                <textarea type="text" id='content' name='content' className='p-2 h-[200px] font-light bg-white' required >
                </textarea>
            </div>

            <div className='flex w-full gap-2'>
                <button type='submit' className='h-10 bg-orange-500 text-white flex-1'>
                    Tambah Note
                </button>

                <button type='reset' className='h-10 bg-gray-500 text-white flex-1'>
                    Reset
                </button>
            </div>
        </form>

        <Navbar />

    </main>
  )
}

export default AddNote
```

! Perhatikan

```jsx
import { storeToLocal } from "../libs/storeToLocal"
```

Kenapa cara importnya menggunakan object literal atau membungkus variable ke dalam sebuah object ?

Jawabannya adalah karena kita melakukan proses export di dalam file storeToLocal.jsx tanpa menambahkan default export.

```jsx
export const storeToLocal = async (data)=>{
	...
```

Kita juga membuat sebuah function di dalam komponent AddNote, untuk menghandle data yang dikirimkan dari form.

```jsx
...
 const handleSubmit = (event)=>{
        event.preventDefault()
        const {title, content} = event.target
        storeToLocal({
            id : Date.now(),
            title : title.value,
            content : content.value,
            createdAt : moment().format("dddd DD/MM/YYYY hh:mm")
        })
				.then(response => window.location.href = "/note")
    }
...
```

Dan di element form kita tambahkan **event listener** onSubmit dengan cara seperti ini:

```jsx
... 
<form className='w-full flex flex-col gap-6' onSubmit={handleSubmit}>
...
```

Sekarang kita bisa melihat di console browser pada tab application dan sub localstorage, ada sebuah key bernama “note_app_data” yang sudah berisi data string note yang di input user.

![Screen Shot 2022-03-24 at 17.24.19.png](Simple%20Not%204ebf4/Screen_Shot_2022-03-24_at_17.24.19.png)

## Mapping data dari localstorage ke komponent di React

Okay selanjutnya adalah melakukan mapping data dari localstorage ke komponent react kita, agar user bisa melihat data yang sudah di masukan.

Untuk langkah pertama, kita akan membuat sebuah library baru untuk mendapatkan data dari localstorage.

- getLocalData()
    
    Library ini akan berisi logic yang mereturn data dari localstorage, menjadi data JSON yang bisa di mengerti React.
    
    ```jsx
    export const getLocalData = async ()=>{
        try {
            const localData = await localStorage.getItem("note_app_data")
            return JSON.parse(localData)
    
        } catch (error) {
            return error
        }
    }
    ```
    
    Bisa di lihat code diatas, kita membuat sebuah function bernama getLocalData() yang akan mereturn data Local bernama “note_app_data”, dan menjadikannya data JSON. Hal ini dilakukan karena kita akan melakukan proses mapping dimana React hanya akan mengerti code Javascript bukan string.
    
    Untuk lebih memahami, silakan lihat contoh code berikut : 
    
    data di localstorage “note_app_data” : 
    
    ```jsx
    [{"id":1648116658237,"title":"Lorem inventore face","content":"Quo quod quo Nam vol","createdAt":"Thursday 24/03/2022 05:10"}]
    ```
    
    Setelah di lakukan proses JSON.parse() : 
    
    ```jsx
    [
    	{
    		id : 1648116658237,
    		title : "Lorem inventore face",
    		content : "Quo quod quo Nam vol",
    		createdAt : "Thursday 24/03/2022 05:10"
    	}
    ]
    ```
    

Selanjutnya kita modifikasi file Note.jsx seperti ini : 

```jsx
/ src/pages/Note.jsx

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
```