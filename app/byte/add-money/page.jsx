"use client"

import React, { useEffect, useState } from 'react'
import { Navbar, ImageGrid, Footer } from '@/components'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Video from 'next-video';
import getStarted from '/videos/get-started.mp4?thumbnailTime=0';
import BackgroundVideo from 'next-video/background-video';
// import newVid from 'https://media.graphassets.com/O9JPSJZ0RGe725RtAgMp';


const Receive = () => {
  const [activeTab, setActiveTab] = useState('introductions')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navbarHeight = 80 // Approximate navbar height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      setActiveTab(sectionId)
      setMobileMenuOpen(false) // Close mobile menu after clicking
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['introductions', 'high-fidelity', 'metrics']
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const sectionTop = section.offsetTop
          if (scrollPosition >= sectionTop) {
            setActiveTab(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbar = document.querySelector('.receive-money-navbar')
      if (mobileMenuOpen && navbar && !navbar.contains(event.target)) {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [mobileMenuOpen])

  const images = [
    {
      name: "Homepage",
      url: "/byte-Homepage.webp"
    },
    {
      name: "Contact",
      url: "/byte-Contact.webp"
    },
    {
      name: "Amount screen",
      url: "/byte-amount-screen.webp"
    },
    {
      name: "Payment option",
      url: "/byte-payment-option.webp"
    },
  ]

  const projectDetails = {
    contribution: "Founding UXUI Designer",
    credit: [
      {
        name: "Khalid",
        role: "CEO"
      },
      {
        name: "Victor",
        role: "Developer"
      },
      {
        name: "Eze",
        role: "PM"
      },
    ],
    status: "Live",
    year: "2021"

  }

  const wireframes = [
    {name: 'Splash', url: "/byte-splash.webp"},
    { name: "Splash", url: "/byte-3-splash.webp" },
    { name: "Wallet", url: "/byte-3-wallet.webp" },
    { name: "Add", url: "/byte-3-add.webp" },
    { name: "Add Bank", url: "/byte-3-add-bank.webp" },
    { name: "Fund/Withdraw", url: "/byte-3-fundorwithdraw.webp" },
    { name: "Method", url: "/byte-3-method.webp" },
    { name: "Amount", url: "/byte-3-amount.webp" },
    { name: "Card", url: "/byte-3-card.webp" },
    { name: "Details", url: "/byte-3-details.webp" },
    { name: "Pin", url: "/byte-3-pin.webp" },
    { name: "Success", url: "/byte-3-success.webp" }
  ];
  return (
    <div className='case-study' >
      <div className="container">
        <Navbar color={"white"} />

        <div className="receive-money-navbar">
          <div className="receive-nav-logo" onClick={() => router.push('/')} style={{cursor: 'pointer'}}>Adedotun Ayodimeji <img src="/emoji-w.svg" alt="" /></div>
          <div className="receive-nav-tabs">
            <button 
              className={activeTab === 'introductions' ? 'active' : ''}
              onClick={() => scrollToSection('introductions')}
            >
              Introduction
            </button>
            <button 
              className={activeTab === 'high-fidelity' ? 'active' : ''}
              onClick={() => scrollToSection('high-fidelity')}
            >
              High-Fidelity
            </button>
            <button 
              className={activeTab === 'metrics' ? 'active' : ''}
              onClick={() => scrollToSection('metrics')}
            >
              Metrics
            </button>
          </div>
          <span className="receive-cv-link">
            <button className="receive-cv-button"><span>Download CV</span></button>
          </span>
          <button 
            className={`mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          {mobileMenuOpen && (
            <div className="mobile-menu">
              <button 
                className={activeTab === 'introductions' ? 'active' : ''}
                onClick={() => scrollToSection('introductions')}
              >
                Introduction
              </button>
              <button 
                className={activeTab === 'high-fidelity' ? 'active' : ''}
                onClick={() => scrollToSection('high-fidelity')}
              >
                High-Fidelity
              </button>
              <button 
                className={activeTab === 'metrics' ? 'active' : ''}
                onClick={() => scrollToSection('metrics')}
              >
                Metrics
              </button>
              <span>
                <button className="receive-cv-button"><span>Download CV</span></button>
              </span>
            </div>
          )}
        </div>

        <div className="add-money-hero">
          <h1 className='case-h1'>Designing the &quot;Direct Pay&quot; experience</h1>
          <p className="add-money-hero-body">We designed a seamless funding flow for Byte that allows users to pay directly from their linked bank accounts or cards. By removing the need to manually &quot;Add Money&quot; before every transaction, we increased payment success rates and made the experience feel instant.</p>
          <p className="add-money-hero-note">Prototype made with figma</p>
        </div>
        {/* <ImageGrid images={images} grid={4} /> */}
        <video width="100%" height="600" autoplay="autoplay" loop="loop" muted defaultMuted playsinline  oncontextmenu="return false;"  preload="auto"  id="myVideo" controls >
          <source src="https://media.graphassets.com/O9JPSJZ0RGe725RtAgMp" type="video/mp4" />
            {/* <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            /> */}
            Your browser does not support the video tag.
        </video>

        {/* <Video src={getStarted} /> */}
        {/* <BackgroundVideo src={getStarted}>
          <h1 style={{opacity: '0'}} >next-video</h1>
          <p style={{opacity: '0'}} >
            A React component for adding video to your Next.js application.
            It extends both the video element and your Next app with features
            for automatic video optimization.
          </p>
        </BackgroundVideo> */}
        <div className="details">
          <div>
            <h4>Contribution</h4>
            <p>{projectDetails.contribution}</p>
          </div>
          <div>
            <h4>Credit</h4>
            <div className="credit-div">

              <div className="staffs"  >
                {projectDetails.credit.map(staff => (
                  <p key={staff.name} >{staff.name}</p>
               ))}
              </div>

              <div className="role"  >
                {projectDetails.credit.map(staff => (
                  <p key={staff.role} >{staff.role}</p>
               ))}
              </div>
            </div>
          </div>
          <div>
          <h4>Status</h4>
          <p>{projectDetails.status}</p>
          </div>
          <div>
          <h4>Year</h4>
          <p>{projectDetails.year}</p>
          </div>
        </div>
        
        <div className="case-info">
          <div className="group" id="introductions">

            <h3>Introduction</h3>
            <p>In many Nigerian payment apps, you have to move money from your bank to your app wallet before you can spend it. This extra step is where most users get frustrated and drop off.</p>
            <p>For Byte, we wanted to change that. We built a system similar to PayPal, where your wallet and your bank accounts work together. Whether you have a balance in your Byte wallet or not, you can complete a payment in seconds because the app handles the &quot;funding&quot; in the background.</p>
          </div>

          <div className="group">
            <h3>Problem Definition </h3>
            <p>{"Traditional payment methods often require users to switch between multiple apps or platforms to manage their finances and make payments. This fragmentation can lead to confusion, inefficiency, and potential security risks. Users often find themselves juggling various login credentials and navigating through complex interfaces to complete simple transactions. Additionally, making payments to friends and family can be a hassle, with users needing to share sensitive financial information or rely on cash or checks."}</p>
            
          </div>

          <div className="group">
            <h3>Solution</h3>
            <p>{"At Byte, we developed a payment platform that addresses these challenges by providing a centralised hub for users to consolidate their financial accounts and make payments securely. By allowing users to add their bank accounts and credit cards to the platform, we offer a comprehensive solution that eliminates the need to switch between multiple apps or platforms."}</p>
            
          </div>

          <div className="group">
            <h3>Methodology</h3>
            <p>{"When designing Byte's payment platform, I focused on creating a user-centric solution that priorities simplicity, security, and efficiency. I conducted extensive research, including user interviews and surveys, to understand the pain points and preferences of our target audience. This research informed the development of personas and user scenarios, which guided the design decisions throughout the project."}</p>
            <p>{"I employed an iterative approach, continuously testing and refining the solution based on user feedback. Prototypes were created at various stages to validate the design concepts and ensure a seamless user experience. The high-fidelity design incorporated intuitive navigation, clear visualisations, and secure authentication processes to build trust and confidence among users."}</p>
          </div>

          <div className="group" id="high-fidelity">
            <h3>High-Fidelity</h3>
            <p>{"Byte's payment platform offers a clean and user-friendly interface that simplifies the process of managing financial accounts and making payments. Users can easily add their bank accounts and credit cards through a secure authentication process, ensuring the protection of their sensitive information. Once added, the platform automatically synchronises and categories transactions, providing users with a real-time overview of their account balances and payment history."}</p>
          </div>

          <ImageGrid images={wireframes} grid={4} />

          <div className="group" id="metrics">
            <h3>Metrics</h3>
            <p>Byte launched in December 2021 and achieved strong early momentum in its first quarter. By Q1 2022, the platform had secured a strategic partnership with a tier one Nigerian bank, validated its payment infrastructure, and processed over $10,000 in transaction volume. During this period, more than 600 users joined the waitlist. Early qualitative feedback and usage data from this cohort were used to identify friction points in onboarding and peer to peer payments, directly informing product and UX iterations.</p>
            <p>Throughout 2022, Byte continued to scale both its product and operations. By the end of the year, the platform had processed over $500,000 in cumulative transaction volume. The team expanded to six full time employees across product, engineering, design, and operations to support growing demand. Improvements to onboarding, KYC flows, and payment reliability contributed to steady increases in activation and repeat usage. In recognition of my impact across product delivery, user experience, and team leadership, I was awarded Employee of the Year.</p>
            <p>In 2023, Byte entered a new growth phase. Monthly transaction volume reached approximately $1 million, with projections trending toward $3 million per month. As the product scaled, insights from transaction data, customer support logs, and user interviews highlighted the need for a more robust, flexible platform. This led to the launch of Byte 2.0, focused on enhancing performance, simplifying core payment flows, and introducing more scalable design and system foundations to support long term growth.</p>
          </div>

          <div className="group">
             <h3>Related Case Studies</h3>
             <div className="case-cont">
                <div className="c-s-card desk" >
                    <span style={{color: '#FF593B'}}  className="case-title" >Split <br /> expenses.</span>
                    <Link href={"/byte/split-expenses"} style={{textDecoration: "none", color: "#fff"}} >
                        <div className="link" >
                            <p>View project</p>
                            <img src="/arrow.svg" alt="" />
                        </div>
                    </Link>
                  </div>
                <div className="c-s-card desk" >
                    <span style={{color: '#FF593B', width: "100%"}}  className="case-title" >Send and Receive <br /> money on Byte</span>
                    <Link href={"/byte/receive-money"} style={{textDecoration: "none", color: "#fff"}} >
                        <div className="link" >
                            <p>View project</p>
                            <img src="/arrow.svg" alt="" />
                        </div>
                    </Link>
                  </div>
                  <Link className='mob' href={"/byte/split-expenses"} style={{textDecoration: "none", color: "#fff"}} >
                <div className="c-s-card mob"  >
                  <span style={{color: '#FF593B'}}  className="case-title" >Split <br /> expenses.</span>
                  <div className="link" >
                      <p>View project</p>
                      <img src="/arrow.svg" alt="" />
                  </div>
                </div>
              </Link>
              <Link className='mob' href={"/byte/receive-money"} style={{textDecoration: "none", color: "#fff"}} >
                <div className="c-s-card mob"  >
                <span style={{color: '#FF593B', width: "100%"}}  className="case-title" >Send and Receive <br /> money on Byte</span>
                        <div className="link" >
                            <p>View project</p>
                            <img src="/arrow.svg" alt="" />
                        </div>
                  </div>
              </Link>
             </div>
          </div>
        </div>
        <Footer/>

      </div>
    </div>
  )
}

export default Receive