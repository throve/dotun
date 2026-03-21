"use client"

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Hero = () => {
  const typingTextRef = useRef(null)
  const typingTextRef2 = useRef(null)
  const animationStartedRef = useRef(false)
  const timelineRef = useRef(null)

  useEffect(() => {
    // Prevent animation from running multiple times (React StrictMode)
    if (animationStartedRef.current) {
      return
    }

    const textPart1 = "I'm a Product Designer in London, "
    const textPart2Prefix = "Previously at TELUS Health, now exploring "
    const textPart2Suffix = "new opportunities."
    
    // Wait for refs to be available
    const initAnimation = () => {
      const typingElement = typingTextRef.current
      const typingElement2 = typingTextRef2.current

      if (!typingElement || !typingElement2) {
        // Retry after a short delay if refs aren't ready
        setTimeout(initAnimation, 50)
        return
      }

      animationStartedRef.current = true

      // Set initial state
      let currentText = ''
      let currentText2 = ''
      typingElement.textContent = ''
      typingElement2.textContent = ''

      // Create timeline for typing animation
      const tl = gsap.timeline({ delay: 0.5 })
      timelineRef.current = tl

      // Type first part (gray) with cursor
      textPart1.split('').forEach((char) => {
        const delay = char === ' ' ? 0.03 : char === ',' || char === '.' ? 0.15 : 0.06
        
        tl.call(() => {
          currentText += char
          typingElement.innerHTML = currentText + '<span class="typing-cursor" style="opacity: 1; margin-left: 2px;">|</span>'
        })
        tl.to({}, { duration: delay })
      })

      // Type second part (black): prefix, then suffix in a span (mobile line break before "new opportunities.")
      textPart2Prefix.split('').forEach((char) => {
        const delay = char === ' ' ? 0.03 : char === ',' || char === '.' ? 0.15 : 0.06

        tl.call(() => {
          currentText2 += char
          typingElement.innerHTML = currentText
          typingElement2.innerHTML =
            currentText2 + '<span class="typing-cursor" style="opacity: 1; margin-left: 2px;">|</span>'
        })
        tl.to({}, { duration: delay })
      })

      let currentSuffix = ''
      textPart2Suffix.split('').forEach((char) => {
        const delay = char === ' ' ? 0.03 : char === ',' || char === '.' ? 0.15 : 0.06

        tl.call(() => {
          currentSuffix += char
          typingElement.innerHTML = currentText
          typingElement2.innerHTML =
            currentText2 +
            '<span class="hero-line-opportunities">' +
            currentSuffix +
            '<span class="typing-cursor" style="opacity: 1; margin-left: 2px;">|</span></span>'
        })
        tl.to({}, { duration: delay })
      })

      // After typing is complete, remove inline cursor
      tl.call(() => {
        typingElement.innerHTML = currentText
        typingElement2.innerHTML =
          currentText2 +
          '<span class="hero-line-opportunities">' +
          currentSuffix +
          '</span>'
      })
    }

    // Start the animation initialization
    initAnimation()

    // Cleanup function for the effect
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill()
        timelineRef.current = null
      }
      animationStartedRef.current = false
    }
  }, [])

  return (
    <div className="hero" >
        <p className="hero-intro">
          My name is Adedotun Ayodimeji, or AY.<br /> 
          <span className="hero-location">
            <span ref={typingTextRef} className="hero-location-text"></span>
            <br />
            <span className="hero-location-black-wrapper">
              <span ref={typingTextRef2} className="hero-location-black"></span>
            </span>
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