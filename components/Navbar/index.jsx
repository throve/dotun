"use client"

import React from 'react'
import { Inter } from "next/font/google";
import { useRouter } from 'next/navigation';

const inter = Inter({ subsets: ["latin"] });
const Navbar = ({color}) => {

  const router = useRouter()
  // CV-Adedotun-Ayo-com
  const linkTo = (x) => router.push(x)
  return (
    <div className={`navbar ${inter.className}`} >
        <div className="logo desk" onClick={() => linkTo('/')}  style={{color: color}} >Adedotun Ayodimeji <img src={ color == "black"? "/emoji.svg" : "/emoji-w.svg"} alt="" /> </div>
        <div className="logo mob"  onClick={() => linkTo('/')}  >AY <img src={ color == "black"? "/emoji.svg" : "/emoji-w.svg"} alt="" /> </div>
        {/* <h1 style={{color: "#fff"}} >{color}</h1> */}
        <a href="/Ayo-cv.pdf?v=3" target='_blank' download="Ayo-cv.pdf" >

          <button className={`${inter.className}`}>Download CV</button> 
        </a>
    </div>
  )
}

export default Navbar