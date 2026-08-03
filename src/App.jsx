import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './Components/Navbar'
import { footer } from './components/footer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      {/* <h1>Hello World!</h1> */}
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default App
