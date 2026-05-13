"use client"

import React, { useEffect, useState } from 'react'
import { Navbar, ImageGrid, Footer } from '@/components'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Receive = () => {
  const [activeTab, setActiveTab] = useState('introduction')
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
      const sections = ['introduction', 'key-decisions', 'metrics']
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
    { name: "Splash", url: "/byte-splash.webp" },
    { name: "Splash", url: "/byte-splash-2.webp" },
    { name: "Onboarding", url: "/byte-onboarding-1.webp" },
    { name: "Onboarding", url: "/byte-onboarding-2.webp" },
    { name: "Onboarding", url: "/byte-onboarding-3.webp" },
    { name: "Onboarding", url: "/byte-onboarding-4.webp" },
    { name: "Onboarding", url: "/byte-onboarding-5.webp" },
    { name: "Onboarding", url: "/byte-onboarding-6.webp" },
    { name: "Onboarding", url: "/byte-onboarding-7.webp" },
    { name: "Onboarding", url: "/byte-onboarding-8.webp" },
    { name: "Onboarding", url: "/byte-onboarding-9.webp" },
    { name: "Onboarding", url: "/byte-onboarding-10.webp" },
    { name: "Homepage", url: "/byte-Homepage.webp" },
    { name: "Contact", url: "/byte-Contact.webp" },
    { name: "Amount Screen", url: "/byte-amount-screen.webp" },
    { name: "Payment Option", url: "/byte-payment-option.webp" }
  ];
  return (
    <div className='case-study' >
      <div className="container">
        <Navbar color={"white"} />

        <div className="receive-money-navbar">
          <div className="receive-nav-logo" onClick={() => router.push('/')} style={{cursor: 'pointer'}}>Adedotun Ayodimeji <img src="/emoji-w.svg" alt="" /></div>
          <div className="receive-nav-tabs">
            <button 
              className={activeTab === 'introduction' ? 'active' : ''}
              onClick={() => scrollToSection('introduction')}
            >
              Introduction
            </button>
            <button 
              className={activeTab === 'key-decisions' ? 'active' : ''}
              onClick={() => scrollToSection('key-decisions')}
            >
              Key decisions
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
                className={activeTab === 'introduction' ? 'active' : ''}
                onClick={() => scrollToSection('introduction')}
              >
                Introduction
              </button>
              <button 
                className={activeTab === 'key-decisions' ? 'active' : ''}
                onClick={() => scrollToSection('key-decisions')}
              >
                Key decisions
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

        <div className="receive-hero">
          <h1 className='case-h1'>Scaling peer-to-peer payments to $1M monthly As Founding UX Designer</h1>
          <p className="receive-hero-body">We built Byte to connect people through simple, reliable payments, solving the banking downtime crisis in Nigeria.</p>
          <div className="receive-hero-metrics">
            <span>🚀 $1M+ Monthly Volume</span>
            <span className="separator">|</span>
            <span>🏦 Major Bank Partnership</span>
            <span className="separator">|</span>
            <span>📈 0 to 1 Product Launch</span>
          </div>
          <div className="receive-hero-images">
            <ImageGrid images={[{ name: "", url: "https://res.cloudinary.com/dvsi1jmrp/image/upload/v1766938258/byte1_p0krdw.webp" }]} grid={1} />
            <ImageGrid images={[{ name: "", url: "https://res.cloudinary.com/dvsi1jmrp/image/upload/v1766938258/byte2_nie9fi.webp" }]} grid={1} />
            <ImageGrid images={[{ name: "", url: "https://res.cloudinary.com/dvsi1jmrp/image/upload/v1766938259/byte3_ldv3ow.webp" }]} grid={1} />
          </div>
        </div>
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
          <p><a href="https://www.usebyte.com/" target="_blank" rel="noopener noreferrer" style={{color: "#FF593B", textDecoration: "none"}}>{projectDetails.status}</a></p>
          </div>
          <div>
          <h4>Year</h4>
          <p>{projectDetails.year}</p>
          </div>
        </div>
        
        <div className="case-info">
          <div className="group" id="introduction">

            <h3>Introduction</h3>
            <p>Mobile payments in Nigeria have grown fast, but using them has not always felt simple. During lockdown, more people relied on their phones to send and receive money, often for the first time. Many of the existing apps were hard to understand, slow, or built for experts rather than everyday users.</p>
            <p>Byte was created to solve this gap. The goal was to make sending and receiving money feel as easy as sending a message. This case study focuses on how we designed a clear, fast, and trustworthy payment experience for people who needed it most.</p>
          </div>

          <div className="group">
            <h3>Problem Definition </h3>
            <p>Payment downtime across Nigerian banks has increased by over 30 percent. In practice, this means many peer to peer transfers fail, get delayed, or arrive without clear confirmation. For users, this creates stress, loss of trust, and extra effort chasing support or reversing failed payments.</p>
            <p>People want payments that are fast, reliable, and easy to understand. Instead, they face unclear errors, long delays, and poor communication when something goes wrong.</p>
            <p>The key questions we needed to answer were:</p>
            <ul style={{fontStyle: "italic"}} >
              <li>How can we make peer to peer payments feel more reliable and transparent?</li>
              <li>How can we reduce the impact of bank downtime on everyday users?</li>
              <li>How can we design a payment experience people actually enjoy using?</li>
            </ul>
            <p>Before designing solutions, we looked at the root causes:</p>
            <ul>
              <li>Limited and fragile banking infrastructure</li>
              <li>Interbank transfers controlled by a single central system (NIBSS)</li>
              <li>Poor error handling and feedback in existing apps</li>
              <li>Low trust caused by repeated failed transactions</li>
            </ul>
            <p>This understanding shaped how we approached the product design.</p>
          </div>

          <div className="group">
            <h3>Solution</h3>
            <p>Byte was designed to make peer to peer payments faster, more reliable, and easier to use. The goal was to remove the common friction people face when sending money between banks.</p>
            <p>Instead of relying on bank details, Byte allows users to send money using a phone number, email address, or a unique Byte tag. Payments are funded through linked bank accounts or cards, but the transfer itself happens within Byte.</p>
            <p>This approach helped us:</p>
            <ul>
              <li>Reduce failed and delayed transfers</li>
              <li>Make payments feel simple and familiar</li>
              <li>Lower transaction costs for users</li>
              <li>Create a payment experience that feels modern and easy to trust</li>
            </ul>
            <p>To achieve this, we made a deliberate decision to avoid direct interbank transfers for peer payments, which are largely handled by the Nigeria Inter Bank Settlement System and are a major source of downtime.</p>
          </div>

          <div className="group">
            <h3>Competitive Advantage </h3>
            <p>We know Byte is not the only startup in Nigeria trying to tackle the down time payment issues during this time and for us to construct a concise and solid foundation for Byte, We had to see what and who are the competitors. As at the time of this report, We only have few startups tackling same issues which are Abeg and Barter. We evaluated several features deemed vital from user surveys and identified which ones byte could capitalise on to have a leg up over other applications.</p>
          </div>
          <ImageGrid images={[{ name: "", url: "/byte-competitive-advantage.webp" }]} grid={1} />

          <div className="group">
            <h3>Sketches / Lo-Fi Ideation </h3>
            <p>Working through our initial sketches, we realised some of the ideas and layouts that we were thinking of just wouldn&apos;t fit. Not only were we able to quickly communicate some of the ideas we had a hard time explaining to each other, but we were also able to take them and spark more discussions as well as quickly filter the good and bad ideas out..</p>
          </div>

          <ImageGrid images={[{ name: "", url: "/byte-sketches-1.webp" }, { name: "", url: "/byte-sketches-2.webp" }]} grid={2} />

          <div className="group">
            <h3>Wireframes </h3>
            <p>Developing the wireframes provided a clear structure for Byte&apos;s split payment features. This initial design phase helped us identify potential usability issues and refine the user flow, setting a solid foundation for the high-fidelity designs.</p>
          </div>

          <ImageGrid images={[{ name: "", url: "/byte-wireframes.webp" }]} grid={1} />
          
          <div className="group" id="key-decisions">
            <h3>Key decisions</h3>
            <h4>1. Designing the Transfer Flow</h4>
            <p>We knew that for Byte to succeed, the core action—moving money—had to be effortless. We explored three distinct interface directions to find the balance between speed, clarity, and trust.</p>
            <p style={{marginBottom: "4px"}}><strong style={{color: "#FF593B"}}>Option 1:</strong> Our first exploration focused purely on utility. We used a heavy blue background and a linear list of actions (&quot;Send Money,&quot; &quot;Request Money,&quot; &quot;Pay Bills&quot;).</p>
            <p style={{marginBottom: "4px"}}><strong>The Logic:</strong> We thought a clear list would help users find exactly what they needed immediately.</p>
            <p><strong>The Problem:</strong> While functional, it felt rigid like a traditional bank interface. It didn&apos;t feel personal or social. The heavy use of blue also made the text harder to scan quickly.</p>
          </div>

          <ImageGrid images={[{ name: "", url: "https://res.cloudinary.com/dvsi1jmrp/image/upload/v1766413507/option1_ufcmkf.png" }]} grid={1} />
          
          <div className="group">
            <p style={{marginBottom: "4px"}}><strong style={{color: "#FF593B"}}>Option 2:</strong> We tried a &quot;Super App&quot; approach. We introduced a tabbed interface (&quot;People,&quot; &quot;Bills,&quot; &quot;Business&quot;) and a prominent &quot;Fund your wallet&quot; section.</p>
            <p style={{marginBottom: "4px"}}><strong>The Logic:</strong> We wanted to show users everything Byte could do upfront.</p>
            <p><strong>The Problem:</strong> This introduced too much cognitive load. The &quot;Fund your wallet&quot; section dominated the screen, distracting users from the primary goal of sending money. It felt cluttered and overwhelming for a user who just wanted to pay a friend quickly.</p>
          </div>

          <ImageGrid images={[{ name: "", url: "https://res.cloudinary.com/dvsi1jmrp/image/upload/v1766413507/option2_dobbfz.png" }]} grid={1} />
          
          <div className="group">
            <p style={{marginBottom: "4px"}}><strong style={{color: "#FF593B"}}>Option 3:</strong> Anchored payments directly on the home screen, making send and request actions immediately visible. Users could select a recipient, enter an amount, choose a payment plan, and confirm in a single, linear flow.</p>
            <p style={{marginBottom: "4px"}}><strong>People-First Design:</strong> Instead of a list of transaction types, we highlighted the people involved. The &quot;Recent Activity&quot; feed mimics a chat app, making the app feel alive and social.</p>
            <p style={{marginBottom: "4px"}}><strong>Clear Hierarchy:</strong> We simplified the home screen to focus on the three things that matter most: The Balance, The &quot;Send&quot; button, and The &quot;Request&quot; button.</p>
            <p><strong>Contextual Confidence:</strong> In the transfer flow (3rd screen), we show the sender and receiver avatars side-by-side (&quot;You&quot; ↔ &quot;Adriano&quot;). This visual confirmation builds trust, reassuring the user they are paying the right person before they confirm the transaction.</p>
          </div>

          <ImageGrid images={[{ name: "", url: "https://res.cloudinary.com/dvsi1jmrp/image/upload/v1766413507/option3_ru7tg4.png" }]} grid={1} />
          
          <div className="group">
            <p>We chose Option 3 because it minimised cognitive load, reduced time to complete a transfer, and aligned with how users already think about money movement. This decision directly influenced the recipient search, amount input, and payment confirmation screens you see here, resulting in a faster, more confident peer-to-peer payment experience.</p>
          </div>

          <div className="group">
            <h4>2. Designing the navigation system</h4>
            <p>The navigation bar is the main way people move around a mobile app. For Byte, it was especially important because users often open the app to do one thing quickly, send or receive money. Our challenge was to make key actions easy to reach while keeping the app calm, clear, and trustworthy.</p>
            <p>We explored three different navigation options before deciding on the final approach.</p>
          </div>

          <ImageGrid images={[{ name: "", url: "https://res.cloudinary.com/dvsi1jmrp/image/upload/v1766507728/menu_ckzmow.png" }]} grid={1} />

          <div className="group">
            <p style={{marginBottom: "4px"}}><strong style={{color: "#FF593B"}}>Option 1:</strong> This option used a five tab bottom navigation with clear icons, short labels, and the Byte logo placed at the centre.</p>
            <p style={{marginBottom: "4px"}}><strong>Brand presence:</strong> Placing the Byte logo in the middle helped reinforce the brand every time users opened the app. It gave Byte a clear identity without getting in the way of everyday tasks and also serve as a pay quick action button.</p>
            <p><strong>Clear feedback:</strong> Active tabs were highlighted in blue, so users could always tell where they were. This reduced confusion and made it easier to move between screens without thinking too much. The most common actions, Home, Wallet, and Activity, were all within easy thumb reach. This mattered because many users use the app on the go or in busy environments.</p>
          </div>

          <div className="group">
            <p style={{marginBottom: "4px"}}><strong style={{color: "#FF593B"}}>Option 2:</strong> This version added a dedicated Payments tab to the navigation.</p>
            <p style={{marginBottom: "4px"}}><strong>The idea:</strong> We wanted to make payments feel like the main action and encourage users to send money more often.</p>
            <p><strong>Clear feedback:</strong> Testing showed that users were confused by having both Payments and Wallet in the navigation. People were not sure where to go to check their balance versus sending money. The extra tab made the navigation feel busy and less clear.</p>
          </div>

          <div className="group">
            <p style={{marginBottom: "4px"}}><strong style={{color: "#FF593B"}}>Option 3:</strong> This option reduced the navigation to three items and placed extra features inside a menu.</p>
            <p style={{marginBottom: "4px"}}><strong>The idea:</strong> We aimed for a cleaner, more premium look that focused strongly on the Byte name and visual style.</p>
            <p><strong>Clear feedback:</strong> Although it looked good, it slowed users down. Important screens like Wallet and Activity were hidden behind a menu. For a payment app, especially during quick or stressful moments like paying at a checkout, this created unnecessary steps and frustration.</p>
          </div>

          <div className="group">
            <h4>Why we choose option 1</h4>
            <p>Option 1 struck the right balance. It felt modern and friendly, while still being practical. Users could reach their money and transaction history instantly, and the app remained easy to understand even for first time users. It supported fast actions without making the app feel cold or complicated.</p>
          </div>

          <div className="group">
            <h4>Results and Impact</h4>
            <p>After settling on Option 1, we saw clear improvements in how people used the app. Users completed payments faster because key actions were always visible and easy to reach. Fewer people got lost or switched between tabs unnecessarily. Support requests related to navigation dropped, which suggested better understanding and confidence. Overall, the clearer structure helped build trust by making the app feel predictable, reliable, and easy to use when it mattered most.</p>
          </div>

          <div className="group">
            <h4>3. Designing for trust in the contact list</h4>
            <p>In a payment app, the scariest moment is hitting &quot;Send.&quot; Did I type the name right? Is this the right &quot;Emmanuel&quot;? To solve this anxiety, we needed the contact list to offer immediate visual confirmation.</p>
            <p>We debated three ways to handle user profiles, balancing social trust against app performance.</p>
            <p><strong>The Options we explored:</strong></p>
          </div>

          <ImageGrid images={[{ name: "", url: "https://res.cloudinary.com/dvsi1jmrp/image/upload/v1766742381/Contact_screen_csg39w.png" }]} grid={1} />

          <div className="group">
            <p style={{marginBottom: "4px"}}><strong style={{color: "#FF593B"}}>Option 1:</strong> This was the safe bet. We would show photos only for &quot;Saved Beneficiaries&quot; (people you pay often) and use simple initials for everyone else.</p>
            <p><strong>Why we scrapped it:</strong> It felt inconsistent. The list looked messy, and it didn&apos;t solve the trust problem for new or one-off payments—which is exactly when you need visual confirmation the most.</p>
          </div>

          <div className="group">
            <p style={{marginBottom: "4px"}}><strong style={{color: "#FF593B"}}>Option 3:</strong> We explored using fun, generated avatars for users without photos.</p>
            <p><strong>Why we scrapped it:</strong> While it looked consistent, it failed the &quot;trust test.&quot; If I am sending 50,000 Naira to a mechanic, a cartoon avatar doesn&apos;t tell me I have the right person. It felt too playful for a financial transaction.</p>
          </div>

          <div className="group">
            <p style={{marginBottom: "4px"}}><strong style={{color: "#FF593B"}}>Option 2: The Winner</strong> We decided to pull profile photos for every single Byte user in your contact list.</p>
            <p><strong>Why it won:</strong> It instantly made the app feel social, like WhatsApp or Instagram. More importantly, seeing a real face eliminates the fear of sending money to the wrong person.</p>
          </div>

          <div className="group">
            <h4>The Technical Challenge: Handling the &quot;Heavy Lift&quot;</h4>
            <p>Choosing Option 2 wasn&apos;t easy from an engineering standpoint. Loading high-resolution images for a user&apos;s entire phonebook is data-heavy and can slow down the app—especially on older Android devices common in our market.</p>
            <p>To make this design work without killing performance, we had to solve a few backend puzzles:</p>
            <p><strong>Lazy Loading:</strong> We ensured images only downloaded as the user scrolled, rather than all at once.</p>
            <p><strong>Aggressive Caching:</strong> Once a contact&apos;s photo is loaded, it caches locally so it doesn&apos;t need to be fetched again unless they update their profile.</p>
            <p><strong>Thumbnail Compression:</strong> We created a pipeline to serve smaller, compressed thumbnails for the list view, only loading the full-res version if you tapped into their profile.</p>
            <p>By solving these technical constraints, we were able to keep the experience fast while delivering the high-trust visual experience users needed.</p>
          </div>

          <div className="group">
            <h3>High-Fidelity</h3>
            <p>Creating a high-fidelity version of our wireframes allowed me to identify and resolve technical issues that weren&apos;t apparent in the initial stages. This approach ensured a more polished and practical high-fidelity design for Byte&apos;s payment.</p>
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
                    <span style={{color: '#FF593B'}}  className="case-title" >Add money <br /> on Byte</span>
                    <Link href={"/byte/add-money"} style={{textDecoration: "none", color: "#fff"}} >
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
              <Link className='mob' href={"/byte/add-money"} style={{textDecoration: "none", color: "#fff"}} >
                <div className="c-s-card mob"  >
                  <span style={{color: '#FF593B'}}  className="case-title" >Add money <br /> on Byte</span>
                  <div className="link" >
                      <p>View project</p>
                      <img src="/arrow.svg" alt="" />
                  </div>
                  </div>
              </Link>
             </div>
          </div>
        </div>
 
        <Footer />

      </div>
    </div>
  )
}

export default Receive