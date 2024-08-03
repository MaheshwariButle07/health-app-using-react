import React, { useEffect, useState } from 'react'
import "./Home.css"
import toast ,{Toaster} from "react-hot-toast" 
import Navbar from '../../component/Navbar/Navbar'



function Home() {

  
  return (
   <>
    <Navbar/>
    <Toaster/>
   </>
  )
}

export default Home