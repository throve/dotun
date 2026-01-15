import React from 'react'

const Hero = () => {
  return (
    <div className="hero" >
        <p className="hero-intro">My name is Adedotun Ayodimeji, or AY.<br /> <span className="hero-location">I&apos;m a Product Designer in London,</span><br />designing experiences at TELUS Health.</p>
        
        <section className="live-apps">
          <h2 className="live-apps-title">My live apps</h2>
          <p className="live-apps-subtitle">These are apps I built or co-founded</p>
          
          <div className="apps-grid">
            <div className="app-item">
              <div className="app-card">
                <img src="/new/sayitlaterlogo.png" alt="SayItLater" className="app-logo" />
              </div>
              <h3 className="app-description">SayItLater: IOS app to write thoughts you're not ready to say out loud</h3>
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