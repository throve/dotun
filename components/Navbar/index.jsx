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
        <div className="logo desk" onClick={() => linkTo('/')}  style={{color: color}} >Adedotun Ayodimeji <img src={ color == "black"? "/emoji.svg" : "/emoji-w.svg"} /> </div>
        <div className="logo mob"  onClick={() => linkTo('/')}  >AY <img src={ color == "black"? "/emoji.svg" : "/emoji-w.svg"} /> </div>
        {/* <h1 style={{color: "#fff"}} >{color}</h1> */}
        <a href="/cv-dotun.pdf" target='_blank' download={true} >

          <button className={`${inter.className}`}>Download CV</button> 
        </a>
    </div>
  )
}

export default Navbar