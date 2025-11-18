'use client'

import Hero from '@/components/Hero'
import ScrollAnimation from '@/components/ScrollAnimation'

export default function Home() {
  return (
    <>
      <Hero />
      
      <ScrollAnimation>
        <section className="project-showcase container">
          <div className="showcase-container col-8">
            <div className="showcase-item">
              <div className="showcase-image-container">
                <img 
                  src="/byte-3-splash.webp" 
                  alt="Byte - Peer to Peer Payment" 
                  className="showcase-image"
                />
              </div>
              <div className="showcase-content">
                <h3 className="showcase-title">Byte - Peer to Peer Payment.</h3>
                <p className="showcase-status">Live. 2021</p>
                <p className="showcase-description">
                  Connecting everyone through payment Byte allow users to
                  pay and receive money with phone number and tag.
                </p>
              </div>
            </div>
            <div className="showcase-item">
              <div className="showcase-image-container">
                <img 
                  src="/byte-2-homepage.webp" 
                  alt="Byte (Rebranded) - Split payment" 
                  className="showcase-image"
                />
              </div>
              <div className="showcase-content">
                <h3 className="showcase-title">Byte (Rebranded) - Split payment.</h3>
                <p className="showcase-status">Live. 2022</p>
                <p className="showcase-description">
                  Connecting everyone through payment Byte allow users to
                  pay and receive money with phone number and tag.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation delay={100}>
        <section className="project-showcase-full container">
          <div className="showcase-full-item col-8">
            <div className="showcase-full-image-container">
              <img 
                src="/littleseconds-showcase.webp" 
                alt="Littleseconds - AI Appointment Agent" 
                className="showcase-full-image"
              />
            </div>
            <div className="showcase-full-content">
              <h3 className="showcase-full-title">Littleseconds - AI Appointment Agent</h3>
              <p className="showcase-full-status">Live. 2025</p>
              <p className="showcase-full-description">
                Connecting everyone through payment Byte allow users to pay and receive money with phone number and tag.
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation delay={150}>
        <section className="project-showcase container">
          <div className="showcase-container col-8">
            <div className="showcase-item">
              <div className="showcase-image-container">
                <img 
                  src="/homepage-ite-2-3.webp" 
                  alt="Caree - Adult care" 
                  className="showcase-image"
                />
              </div>
              <div className="showcase-content">
                <h3 className="showcase-title">Caree - Adult care.</h3>
                <p className="showcase-status">University project. 2022</p>
                <p className="showcase-description">
                  Connecting everyone through payment Byte allow users to
                  pay and receive money with phone number and tag.
                </p>
              </div>
            </div>
            <div className="showcase-item">
              <div className="showcase-image-container">
                <img 
                  src="/image-34.webp" 
                  alt="Littleseconds IOS app" 
                  className="showcase-image"
                />
              </div>
              <div className="showcase-content">
                <h3 className="showcase-title">Littleseconds IOS app.</h3>
                <p className="showcase-status">Prototype</p>
                <p className="showcase-description">
                  Connecting everyone through payment Byte allow users to
                  pay and receive money with phone number and tag.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation delay={200}>
        <section className="project-showcase-full container">
          <div className="showcase-full-item col-8">
            <div className="showcase-full-image-container">
              <img 
                src="/image-35.webp" 
                alt="ZapmedX - Online pharmacy" 
                className="showcase-full-image"
              />
            </div>
            <div className="showcase-full-content">
              <h3 className="showcase-full-title">ZapmedX - Online pharmacy</h3>
              <p className="showcase-full-status">Live. 2021</p>
              <p className="showcase-full-description">
                Connecting everyone through payment Byte allow users to pay and receive money with phone number and tag.
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation delay={250}>
        <section className="project-showcase container">
          <div className="showcase-container col-8">
            <div className="showcase-item">
              <div className="showcase-image-container">
                <img 
                  src="/image-36.webp" 
                  alt="PallyPay" 
                  className="showcase-image"
                />
              </div>
              <div className="showcase-content">
                <h3 className="showcase-title">PallyPay</h3>
                <p className="showcase-status">Prototype</p>
                <p className="showcase-description">
                  Connecting everyone through payment Byte allow users to
                  pay and receive money with phone number and tag.
                </p>
              </div>
            </div>
            <div className="showcase-item">
              <div className="showcase-image-container">
                <img 
                  src="/byte-3-wallet.webp" 
                  alt="Byte - Add money" 
                  className="showcase-image"
                />
              </div>
              <div className="showcase-content">
                <h3 className="showcase-title">Byte - Add money.</h3>
                <p className="showcase-status">Prototype</p>
                <p className="showcase-description">
                  Connecting everyone through payment Byte allow users to
                  pay and receive money with phone number and tag.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation delay={300}>
        <section className="project-showcase-full container">
          <div className="showcase-full-item col-8">
            <div className="showcase-full-image-container">
              <img 
                src="/image-37.webp" 
                alt="Littleseconds Design System" 
                className="showcase-full-image"
              />
            </div>
            <div className="showcase-full-content">
              <h3 className="showcase-full-title">Littleseconds Design System</h3>
              <p className="showcase-full-status">Live. 2025</p>
              <p className="showcase-full-description">
                Connecting everyone through payment Byte allow users to pay and receive money with phone number and tag.
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </>
  )
}
