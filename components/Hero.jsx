'use client'

import { useState } from 'react'

export default function Hero() {
  const [emojis, setEmojis] = useState([])
  
  const loveEmojis = ['❤️', '💕', '💖', '💗', '💓', '💞', '💝', '💘', '💟', '💜', '🧡', '💛', '💚', '💙']
  
  const logos = [
    {
      name: 'TELUS Health',
      light: '/telus-light.svg',
      dark: '/telus-dark.svg',
      alt: 'TELUS Health logo',
      url: 'https://www.telus.com/en/health'
    },
    {
      name: 'LittleSeconds',
      light: '/littleseconds-light.svg',
      dark: '/littleseconds-dark.svg',
      alt: 'LittleSeconds logo',
      url: 'https://www.littleseconds.com/'
    },
    {
      name: 'Byte',
      light: '/byte-light.svg',
      dark: '/byte-dark.svg',
      alt: 'Byte logo',
      url: 'https://www.usebyte.com/'
    }
  ]

  const handleNameClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    // Play sound using Web Audio API
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)()
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()
      
      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)
      
      oscillator.frequency.value = 523.25 // C5 note - pleasant sound
      oscillator.type = 'sine'
      
      gainNode.gain.setValueAtTime(0.2, audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3)
      
      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + 0.3)
    } catch (error) {
      // Silently fail if audio context is not available
    }
    
    const newEmojis = []
    for (let i = 0; i < 12; i++) {
      // Random direction for zoom out
      const angle = Math.random() * Math.PI * 2
      const distance = 150 + Math.random() * 100
      const x = centerX + Math.cos(angle) * distance
      const y = centerY + Math.sin(angle) * distance
      const emoji = loveEmojis[Math.floor(Math.random() * loveEmojis.length)]
      
      newEmojis.push({
        id: Date.now() + i,
        x: centerX,
        y: centerY,
        endX: x,
        endY: y,
        emoji,
        angle: Math.random() * 360,
      })
    }
    
    setEmojis(newEmojis)
    
    // Clean up emojis after animation
    setTimeout(() => {
      setEmojis([])
    }, 2000)
  }

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 
          className="hero-name" 
          onClick={handleNameClick}
          style={{ cursor: 'pointer', userSelect: 'none' }}
        >
          ADEDOTUN AYODIMEJI
        </h1>
        
        {emojis.map((emojiData) => {
          const deltaX = emojiData.endX - emojiData.x
          const deltaY = emojiData.endY - emojiData.y
          return (
            <div
              key={emojiData.id}
              className="love-emoji zoom-out"
              style={{
                left: `${emojiData.x}px`,
                top: `${emojiData.y}px`,
                '--delta-x': `${deltaX}px`,
                '--delta-y': `${deltaY}px`,
              }}
            >
              {emojiData.emoji}
            </div>
          )
        })}
        <p className="hero-title">UX/UI Designer | London, UK.</p>
        
        <div className="hero-logos">
          {logos.map((logo, index) => (
            <a
              key={index}
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="logo-wrapper"
            >
              <img 
                src={logo.light} 
                alt={logo.alt}
                className="logo-light-mode"
              />
              <img 
                src={logo.dark} 
                alt={logo.alt}
                className="logo-dark-mode"
              />
            </a>
          ))}
        </div>

        <p className="hero-description">
          I&apos;m Ayodimeji, or AY. I design simple, usable web and mobile products in Figma. I have over five years of experience across SaaS, fintech, health, AI and design systems. I also prototype and bring ideas to life using tools like Figma Make, Cursor and ChatGPT to move from concept to working demos quickly.
        </p>
      </div>
    </section>
  )
}

