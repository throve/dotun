"use client"

import React, { useEffect, useState } from 'react'
import { Navbar, ImageGrid, Footer } from '@/components'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Receive = () => {
  const [activeTab, setActiveTab] = useState('introduction')
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
          <a href="/cv-dotun.pdf" target='_blank' download={true}>
            <button className="receive-cv-button">Download CV</button>
          </a>
        </div>

        <h1 className='case-h1'  >Connecting everyone through payment Byte allow users to pay and receive money with phone number and tag.</h1>
        <ImageGrid images={images} grid={4} />
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
            <h4>Designing the Transfer Flow</h4>
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
            <h3>Final Design Final Design </h3>
            <p>Creating a high-fidelity version of our wireframes allowed me to identify and resolve technical issues that weren&apos;t apparent in the initial stages. This approach ensured a more polished and practical final design for Byte&apos;s payment.</p>
          </div>

          <ImageGrid images={wireframes} grid={4} />

          <div className="group" id="metrics">
            <h3>Metrics</h3>
            <p>Byte launched in December 2021 and quickly made a significant impact. Within just three months, Byte partnered with a major bank in Nigeria, processing over $10,000 in payments and attracting more than 600 waitlist sign-ups. User feedback from our initial three months was invaluable.</p>
            <p>After one year, Byte had processed over $500,000 in payments and expanded our team to six employees. By 2023, Byte was processing $1 million monthly, scaling towards $3 million. Inspired by our rapid growth and success, we embarked on Byte 2.0 to deliver even more innovative and user-friendly solutions.</p>
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