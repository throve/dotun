import React from 'react'
import { Navbar, ImageGrid } from '@/components'
import Link from 'next/link'
import Video from 'next-video';
// import getStarted from '/videos/get-started.mp4';
// import BackgroundVideo from 'next-video/background-video';
// import newVid from 'https://media.graphassets.com/O9JPSJZ0RGe725RtAgMp';


const Receive = () => {

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

        <h1 className='case-h1'>Payment platform that empowers users to take control of their financial lives.</h1>
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
        {/* <BackgroundVideo src={newVid}>
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
          <div className="group">

            <h3>Introduction</h3>
            <p>{"In today's digital age, the way we manage our finances and make payments has undergone a significant transformation. Byte, a leading financial technology company, recognised the need for a seamless and secure platform that allows users to consolidate their financial accounts and make payments to friends and family with ease. This design case study explores how Byte developed a solution that not only simplifies the payment process but also empowers users to take control of their financial lives. "}</p>
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
            <p>{"I employed an iterative approach, continuously testing and refining the solution based on user feedback. Prototypes were created at various stages to validate the design concepts and ensure a seamless user experience. The final design incorporated intuitive navigation, clear visualisations, and secure authentication processes to build trust and confidence among users."}</p>
          </div>

          <div className="group">
            <h3>Final Design</h3>
            <p>{"Byte's payment platform offers a clean and user-friendly interface that simplifies the process of managing financial accounts and making payments. Users can easily add their bank accounts and credit cards through a secure authentication process, ensuring the protection of their sensitive information. Once added, the platform automatically synchronises and categories transactions, providing users with a real-time overview of their account balances and payment history."}</p>
          </div>

          <ImageGrid images={wireframes} grid={4} />

          <div className="group">
            <h3>Metrics</h3>
            <p>Byte launched in December 2021 and quickly made a significant impact. Within just three months, Byte partnered with a major bank in Nigeria, processing over $10,000 in payments and attracting more than 600 waitlist sign-ups. User feedback from our initial three months was invaluable.</p>
            <p>After one year, Byte had processed over $500,000 in payments and expanded our team to six employees. By 2023, Byte was processing $1 million monthly, scaling towards $3 million. Inspired by our rapid growth and success, we embarked on Byte 2.0 to deliver even more innovative and user-friendly solutions.</p>
          </div>

          <div className="group">
             <h3>Related Case Studies</h3>
             <div className="case-cont">
                <div className="c-s-card " >
                    <span style={{color: '#FF593B'}}  className="case-title" >Split <br /> expenses.</span>
                    <Link href={"/byte/split-expenses"} style={{textDecoration: "none", color: "#fff"}} >
                        <div className="link" >
                            <p>Read case study</p>
                            <img src="/arrow.svg" alt="" />
                        </div>
                    </Link>
                  </div>
                <div className="c-s-card " >
                    <span style={{color: '#FF593B', width: "100%"}}  className="case-title" >Send and Receive <br /> money on Byte</span>
                    <Link href={"/byte/receive-money"} style={{textDecoration: "none", color: "#fff"}} >
                        <div className="link" >
                            <p>Read case study</p>
                            <img src="/arrow.svg" alt="" />
                        </div>
                    </Link>
                  </div>
             </div>
          </div>
        </div>
        <div className="footer">footer</div>
      </div>
    </div>
  )
}

export default Receive