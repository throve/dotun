import React from 'react'
import { Navbar, ImageGrid, Footer } from '@/components'
import Link from 'next/link'

const CornershopMobileStamps = () => {

  const images = [
    {
      url: "/Cornershop-screen1.webp"
    },
    {
      url: "/Cornershop-screen2.webp"
    },
    {
      url: "/Cornershop-screen3.webp"
    },
    {
      url: "/Cornershop-screen4.webp"
    },
    {
      url: "/Cornershop-screen5.webp"
    },
    {
      url: "/Cornershop-screen6.webp"
    }
  ]

  const projectDetails = {
    contribution: "UX/UI Designer",
    credit: [
      {
        name: "Tropiway",
        role: "Corner Shop"
      }
    ],
    status: "Concept",
    year: "2025"
  }

  const wireframes = [
    { name: "Problem Definition", url: "/Cornershop-problem.webp" },
    { name: "Solution Concept", url: "/Cornershop-idea.webp" },
    { name: "Screen 1", url: "/Cornershop-screen1.webp" },
    { name: "Screen 2", url: "/Cornershop-screen2.webp" },
    { name: "Screen 3", url: "/Cornershop-screen3.webp" },
    { name: "Screen 4", url: "/Cornershop-screen4.webp" },
    { name: "Screen 5", url: "/Cornershop-screen5.webp" },
    { name: "Screen 6", url: "/Cornershop-screen6.webp" }
  ];

  return (
    <div className='case-study'>
      <div className="container">
        <Navbar color={"white"} />

        <h1 className='case-h1'>Mobile loyalty app that rewards customers for every purchase at corner shops.</h1>
        
        <video width="100%" height="600" autoPlay loop muted playsInline preload="auto" controls>
          <source src="/cornershop-demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="details">
          <div>
            <h4>Contribution</h4>
            <p>{projectDetails.contribution}</p>
          </div>
          <div>
            <h4>Credit</h4>
            <div className="credit-div">
              <div className="staffs">
                {projectDetails.credit.map(staff => (
                  <p key={staff.name}>{staff.name}</p>
                ))}
              </div>
              <div className="role">
                {projectDetails.credit.map(staff => (
                  <p key={staff.role}>{staff.role}</p>
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
          <div className="group">
            <h3>Problem we are solving</h3>
            <p>Many corner shops still use paper stamp cards to reward loyal customers. A typical example is 'spend £10, get a stamp. Collect 10 stamps, and get £10 off your next purchase.'</p>
            <p>Clear problems with this system:</p>
            <ul>
              <li>Customers often forget to bring the paper card with them.</li>
              <li>Cards can be lost or misplaced.</li>
              <li>Shops have no easy way to track loyalty activity or repeat visits beyond the card.</li>
            </ul>
            <p>This creates frustration for customers and lost opportunities for shop owners to encourage repeat business.</p>
            <img src="/Cornershop-problem.webp" alt="Traditional paper loyalty cards showing the problems with the current system" style={{width: '100%', maxWidth: '600px', margin: '20px 0'}} />
          </div>

          <div className="group">
            <h3>Solution</h3>
            <p>The idea was to replace the paper card with a digital version that lives on the customer's phone.</p>
            <ul>
              <li>Customers can see all their participating shops on a map.</li>
              <li>Each shop has its own digital stamp card.</li>
              <li>When a customer spends £10, the shop owner can add a stamp by scanning a barcode or QR code.</li>
              <li>Customers can track their progress and easily see when they are close to a reward.</li>
            </ul>
            <p>This keeps the loyalty scheme simple, but removes the problem of paper cards.</p>
          </div>

          <div className="group">
            <h3>Methodology and ideation</h3>
            <p>To understand the problem better, I looked at how corner shops currently run their loyalty programs. I also reviewed existing loyalty apps like supermarket club cards to see how digital solutions work in larger businesses.</p>
            <p>Key questions I asked myself were:</p>
            <ul>
              <li>How can we make this simple enough for shop owners who may not be used to digital tools</li>
              <li>How can customers easily trust that their stamps are stored correctly</li>
              <li>How can the app be clear without adding unnecessary steps</li>
            </ul>
            <p>From these questions, I sketched quick ideas for two main journeys:</p>
            <ul>
              <li>Customer journey – viewing shops nearby, collecting stamps, checking progress.</li>
              <li>Shop owner journey – adding stamps using their phone camera to scan a code.</li>
            </ul>
            <p>I then created wireframes in Figma and tested flows to make sure they were easy to follow.</p>
            <img src="/Cornershop-idea.webp" alt="Hand-drawn wireframes showing the methodology and ideation process" style={{width: '100%', maxWidth: '800px', margin: '20px 0'}} />
          </div>

          <div className="group">
            <h3>Final Design</h3>
            <p>The app has two main parts:</p>
            <ul>
              <li><strong>Home screen</strong>
                <ul>
                  <li>Shows the customer's active stamp cards.</li>
                  <li>Easy progress view so they can see how many stamps are left before they get a reward.</li>
                </ul>
              </li>
              <li><strong>Discovery tab</strong>
                <ul>
                  <li>Map showing participating shops nearby.</li>
                  <li>Tapping a shop icon opens its loyalty card and shows progress.</li>
                </ul>
              </li>
              <li><strong>Stamp collection</strong>
                <ul>
                  <li>Customer taps "Get Stamp" which displays a QR code.</li>
                  <li>Shop owner scans the QR code to add a stamp.</li>
                </ul>
              </li>
            </ul>
            <p>The design is simple, clean, and focused on the main task: collect and redeem stamps without paper.</p>
          </div>

          <ImageGrid images={images} grid={3} />

          <div className="group">
            <h3>Conclusions</h3>
            <p>The Corner Shop Loyalty App solves a small but common problem: the hassle of paper stamp cards.</p>
            <p>For customers, it makes loyalty rewards easier to track and harder to lose.</p>
            <p>For shop owners, it keeps the system as simple as paper, but with the benefit of digital tracking.</p>
            <p>This project was not built as a business, but as a case study. It shows how everyday problems in small communities can inspire quick design solutions.</p>
            <p>It also reminds us that maybe not everything needs technology. But when used well, technology can improve small experiences we often overlook.</p>
          </div>

          <div className="group">
            <h3>Related Case Studies</h3>
            <div className="case-cont">
              <div className="c-s-card desk">
                <span style={{color: '#FF593B'}} className="case-title">Send and Receive <br /> money on Byte</span>
                <Link href={"/byte/receive-money"} style={{textDecoration: "none", color: "#fff"}}>
                  <div className="link">
                    <p>Read case study</p>
                    <img src="/arrow.svg" alt="" />
                  </div>
                </Link>
              </div>
              <div className="c-s-card desk">
                <span style={{color: '#FF593B'}} className="case-title">Split <br /> expenses</span>
                <Link href={"/byte/split-expenses"} style={{textDecoration: "none", color: "#fff"}}>
                  <div className="link">
                    <p>Read case study</p>
                    <img src="/arrow.svg" alt="" />
                  </div>
                </Link>
              </div>
              <Link className='mob' href={"/byte/receive-money"} style={{textDecoration: "none", color: "#fff"}}>
                <div className="c-s-card mob">
                  <span style={{color: '#FF593B'}} className="case-title">Send and Receive <br /> money on Byte</span>
                  <div className="link">
                    <p>Read case study</p>
                    <img src="/arrow.svg" alt="" />
                  </div>
                </div>
              </Link>
              <Link className='mob' href={"/byte/split-expenses"} style={{textDecoration: "none", color: "#fff"}}>
                <div className="c-s-card mob">
                  <span style={{color: '#FF593B'}} className="case-title">Split <br /> expenses</span>
                  <div className="link">
                    <p>Read case study</p>
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

export default CornershopMobileStamps
