"use client"

import React, { useState, useEffect, useRef } from 'react'
import { Inter } from "next/font/google";
import { useRouter } from 'next/navigation';

const inter = Inter({ subsets: ["latin"] });
const Navbar = ({ color, tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs?.[0]?.sectionId ?? null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navbarRef = useRef(null)
  const router = useRouter()

  const linkTo = (x) => router.push(x)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navbarHeight = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
      setActiveTab(sectionId)
      setMobileMenuOpen(false)
    }
  }

  useEffect(() => {
    if (!tabs?.length) return
    const sectionIds = tabs.map((t) => t.sectionId)
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i])
        if (el && scrollPosition >= el.offsetTop) {
          setActiveTab(sectionIds[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [tabs])

  useEffect(() => {
    if (!tabs?.length || !mobileMenuOpen) return
    const handleClickOutside = (e) => {
      if (navbarRef.current && !navbarRef.current.contains(e.target)) {
        setMobileMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [tabs?.length, mobileMenuOpen])

  return (
    <div ref={navbarRef} className={`navbar ${tabs?.length ? 'navbar--with-tabs' : ''} ${inter.className}`}>
        <div className="logo desk" onClick={() => linkTo('/')}  style={{color: color}} >Adedotun Ayodimeji <img src={ color == "black"? "/emoji.svg" : "/emoji-w.svg"} alt="" /> </div>
        <div className="logo mob" onClick={() => linkTo('/')} style={{color: color}} >AY <img src={ color == "black"? "/emoji.svg" : "/emoji-w.svg"} alt="" /> </div>
        {tabs?.length > 0 && (
          <div className="navbar-tabs">
            {tabs.map(({ label, sectionId }) => (
              <button
                key={sectionId}
                type="button"
                className={activeTab === sectionId ? 'active' : ''}
                onClick={() => scrollToSection(sectionId)}
              >
                {label}
              </button>
            ))}
          </div>
        )}
        <a href="/Ayo-cv.pdf?v=3" target='_blank' download="Ayo-cv.pdf" className="navbar-cv-link">
          <button className={`${inter.className}`}><span>Download CV</span></button>
        </a>
        {tabs?.length > 0 && (
          <>
            <button
              type="button"
              className={`mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            {mobileMenuOpen && (
              <div className="navbar-mobile-menu">
                {tabs.map(({ label, sectionId }) => (
                  <button
                    key={sectionId}
                    type="button"
                    className={activeTab === sectionId ? 'active' : ''}
                    onClick={() => scrollToSection(sectionId)}
                  >
                    {label}
                  </button>
                ))}
                <a href="/Ayo-cv.pdf?v=3" target='_blank' download="Ayo-cv.pdf">
                  <button className="navbar-mobile-cv"><span>Download CV</span></button>
                </a>
              </div>
            )}
          </>
        )}
    </div>
  )
}

export default Navbar