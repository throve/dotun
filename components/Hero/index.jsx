"use client"

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Hero = () => {
  const typingTextRef = useRef(null)
  const typingTextRef2 = useRef(null)
  const animationStartedRef = useRef(false)

  // Function to play typing sound
  const playTypingSound = () => {
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)()
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)

      oscillator.frequency.value = 800 + Math.random() * 200 // Random frequency between 800-1000Hz
      oscillator.type = 'sine'

      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05)

      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + 0.05)
    } catch (error) {
      // Silently fail if audio context is not available
      console.log('Audio not available')
    }
  }

  useEffect(() => {
    // Prevent animation from running multiple times (React StrictMode)
    if (animationStartedRef.current) return
    animationStartedRef.current = true

    const textPart1 = "I'm a Product Designer in London, "
    const textPart2 = "Designing experiences at TELUS Health."
    const typingElement = typingTextRef.current
    const typingElement2 = typingTextRef2.current

    if (!typingElement || !typingElement2) return

    // Set initial state
    let currentText = ''
    let currentText2 = ''
    typingElement.textContent = ''
    typingElement2.textContent = ''

    // Create timeline for typing animation
    const tl = gsap.timeline({ delay: 0.5 })

    // Type first part (gray) with cursor
    textPart1.split('').forEach((char) => {
      const delay = char === ' ' ? 0.03 : char === ',' || char === '.' ? 0.15 : 0.06
      
      tl.call(() => {
        currentText += char
        typingElement.innerHTML = currentText + '<span class="typing-cursor" style="opacity: 1; margin-left: 2px;">|</span>'
        if (char !== ' ') {
          playTypingSound()
        }
      })
      tl.to({}, { duration: delay })
    })

    // Move cursor to second line and type second part (black) with cursor
    textPart2.split('').forEach((char) => {
      const delay = char === ' ' ? 0.03 : char === ',' || char === '.' ? 0.15 : 0.06
      
      tl.call(() => {
        currentText2 += char
        typingElement.innerHTML = currentText
        typingElement2.innerHTML = currentText2 + '<span class="typing-cursor" style="opacity: 1; margin-left: 2px;">|</span>'
        if (char !== ' ') {
          playTypingSound()
        }
      })
      tl.to({}, { duration: delay })
    })

    // After typing is complete, remove inline cursor
    tl.call(() => {
      typingElement.innerHTML = currentText
      typingElement2.innerHTML = currentText2
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