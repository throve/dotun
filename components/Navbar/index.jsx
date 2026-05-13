"use client"

import React, { useState, useEffect, useRef } from 'react'
import { Inter } from "next/font/google";
import { useRouter } from 'next/navigation';

const inter = Inter({ subsets: ["latin"] });
const Navbar = ({ color, tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs?.[0]?.sectionId ?? null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [profileMenuOpen, setProfileMenuOpen] = useState(false)
  const navbarRef = useRef(null)
  const router = useRouter()
  const hasTabs = tabs?.length > 0

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

  useEffect(() => {
    if (hasTabs || !profileMenuOpen) return
    const handleClickOutside = (e) => {
      if (navbarRef.current && !navbarRef.current.contains(e.target)) {
        setProfileMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [hasTabs, profileMenuOpen])

  return (
    <div ref={navbarRef} className={`navbar ${tabs?.length ? 'navbar--with-tabs' : ''} ${inter.className}`}>
        <div className="logo desk" onClick={() => linkTo('/')}  style={{color: color}} >Adedotun Ayodimeji <img src={ color == "black"? "/emoji.svg" : "/emoji-w.svg"} alt="" /> </div>
        <div className="logo mob" onClick={() => linkTo('/')} style={{color: color}} >AY <img src={ color == "black"? "/emoji.svg" : "/emoji-w.svg"} alt="" /> </div>
        {tabs?.length > 0 ? (
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
        ) : (
          <div className="navbar-social">
            <a href="https://www.linkedin.com/in/adedotun-ayodimeji-310697182/" target="_blank" rel="noopener noreferrer" style={{ color: color === 'white' ? '#fff' : '#000' }}>LinkedIn</a>
            <a href="https://github.com/akadedotun" target="_blank" rel="noopener noreferrer" style={{ color: color === 'white' ? '#fff' : '#000' }}>Github</a>
          </div>
        )}
        <div className="navbar-right">
          <span className="navbar-cv-link">
            <button className={`${inter.className}`}><span>Download CV</span></button>
          </span>
          <div className="navbar-avatar-desk" aria-label="Profile">
            <img
              src="https://res.cloudinary.com/dvsi1jmrp/image/upload/c_fill,w_40,h_40/v1772793786/WhatsApp_Image_2026-03-06_at_08.42.22_2_kh00fq.png"
              alt="Adedotun Ayodimeji"
              className="navbar-avatar"
              width={40}
              height={40}
            />
            <img
              src="https://res.cloudinary.com/dvsi1jmrp/image/upload/v1772796144/WhatsApp_Image_2026-03-06_at_08.42.22_vyrabi.jpg"
              alt=""
              className="navbar-avatar-hover"
              aria-hidden
            />
          </div>
          {!hasTabs && (
            <div className="navbar-profile-trigger-wrap">
              <button
                type="button"
                className={`navbar-avatar-trigger ${profileMenuOpen ? 'open' : ''}`}
                onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                aria-label="Open menu"
                aria-expanded={profileMenuOpen}
              >
                <img
                  src="https://res.cloudinary.com/dvsi1jmrp/image/upload/c_fill,w_40,h_40/v1772793786/WhatsApp_Image_2026-03-06_at_08.42.22_2_kh00fq.png"
                  alt=""
                  className="navbar-avatar"
                  width={40}
                  height={40}
                />
              </button>
              {profileMenuOpen && (
                <div className="navbar-profile-dropdown" role="menu">
                  <a href="https://www.linkedin.com/in/adedotun-ayodimeji-310697182/" target="_blank" rel="noopener noreferrer" role="menuitem" onClick={() => setProfileMenuOpen(false)}>LinkedIn</a>
                  <a href="https://github.com/akadedotun" target="_blank" rel="noopener noreferrer" role="menuitem" onClick={() => setProfileMenuOpen(false)}>Github</a>
                  <a role="menuitem" onClick={() => setProfileMenuOpen(false)}>Download CV</a>
                </div>
              )}
            </div>
          )}
        </div>
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
                <span>
                  <button className="navbar-mobile-cv"><span>Download CV</span></button>
                </span>
              </div>
            )}
          </>
        )}
    </div>
  )
}

export default Navbar