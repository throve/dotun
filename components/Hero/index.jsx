"use client"

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Hero = () => {
  const typingTextRef = useRef(null)
  const cursorRef = useRef(null)
  const animationStartedRef = useRef(false)

  useEffect(() => {
    // Prevent animation from running multiple times (React StrictMode)
    if (animationStartedRef.current) return
    animationStartedRef.current = true

    const textPart1 = "I'm a Product Designer in London, "
    const textPart2 = "Designing experiences at TELUS Health."
    const typingElement = typingTextRef.current
    const cursorElement = cursorRef.current

    if (!typingElement || !cursorElement) return

    // Set initial state
    let currentText = ''
    typingElement.innerHTML = ''
    cursorElement.style.opacity = '1'

    // Create timeline for typing animation
    const tl = gsap.timeline({ delay: 0.5 })

    // Type first part (gray)
    textPart1.split('').forEach((char) => {
      const delay = char === ' ' ? 0.03 : char === ',' || char === '.' ? 0.15 : 0.06
      
      tl.call(() => {
        currentText += char
        typingElement.innerHTML = `<span class="hero-location-text">${currentText}</span>`
      })
      tl.to({}, { duration: delay })
    })

    // Type second part (black)
    let currentText2 = ''
    textPart2.split('').forEach((char) => {
      const delay = char === ' ' ? 0.03 : char === ',' || char === '.' ? 0.15 : 0.06
      
      tl.call(() => {
        currentText2 += char
        typingElement.innerHTML = `<span class="hero-location-text">${currentText}</span><span class="hero-location-black">${currentText2}</span>`
      })
      tl.to({}, { duration: delay })
    })

    // After typing is complete, make cursor blink continuously
    tl.to(cursorElement, {
      opacity: 0,
      duration: 0.6,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    })

    // Cleanup function
    return () => {
      if (tl) {
        tl.kill()
      }
      animationStartedRef.current = false
    }
  }, [])

  return (
    <div className="hero" >
        <p className="hero-intro">
          My name is Adedotun Ayodimeji, or AY.<br /> 
          <span className="hero-location">
            <span ref={typingTextRef}></span>
            <span ref={cursorRef} className="typing-cursor">|</span>
          </span>
        </p>
        
        <section className="live-apps">
          <h2 className="live-apps-title">My live apps</h2>
          <p className="live-apps-subtitle">These are apps I built or co-founded</p>
          
          <div className="apps-grid">
            <div className="app-item">
              <div className="app-card">
                <img src="/new/sayitlaterlogo.png" alt="SayItLater" className="app-logo" />
              </div>
              <h3 className="app-description">SayItLater: IOS app to write thoughts you&apos;re not ready to say out loud</h3>
              <a href="https://apps.apple.com/gb/app/sayitlater/id6757601308" target="_blank" rel="noopener noreferrer" className="app-cta">Download on app store</a>
            </div>
            
            <div className="app-item">
              <div className="app-card app-card--green">
                <img src="/new/littlesecondslogo.png" alt="Littleseconds" className="app-logo" />
              </div>
              <h3 className="app-description">Littleseconds: AI agent for appointment scheduling</h3>
              <a href="https://www.littleseconds.com/" target="_blank" rel="noopener noreferrer" className="app-cta">Visit website</a>
            </div>
            
            <div className="app-item">
              <div className="app-card app-card--black">
                <img src="/new/sparkhqlogo.png" alt="SparkHQ" className="app-logo" />
              </div>
              <h3 className="app-description">SparkHQ: Website inspiration website for designers</h3>
              <a href="https://www.sparkhq.io/" target="_blank" rel="noopener noreferrer" className="app-cta">Visit website</a>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Hero