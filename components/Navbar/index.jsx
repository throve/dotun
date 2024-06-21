import React from 'react'
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const Navbar = () => {
  return (
    <div className={`navbar ${inter.className}`} >
        <div className="logo">Adedotun Ayodimeji <img src="/emoji.svg" /> </div>
        <button className={`${inter.className}`}>Download CV</button>
    </div>
  )
}

export default Navbar