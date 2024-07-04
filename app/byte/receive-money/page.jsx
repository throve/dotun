import React from 'react'
import { Navbar, ImageGrid, Footer } from '@/components'
import Link from 'next/link'

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
            <p>In Nigeria, the size of mobile payments has risen dramatically over the last few years in response to global, domestic, market, technological, and regulatory factors. Data from the Nigeria Interbank Settlement System (NIBSS) show that while the volume of mobile transactions was 51 million in 2017, it reached 410 million in 2019 representing a growth of about 703.9 per cent (see Figure 1a). Similarly, the value of mobile transactions increased sharply from N196.3 billion in 2017 to N828.1 billion in 2019. The value of mobile transactions (N853.7 billion) recorded in the first five-months of 2020 surpassed the total amount recorded in 2019 by 3.1 per cent. The phenomenal growth in the value of mobile payments, especially in May 2020 (Figure 1b) can be partly explained by the effects of the restricted human movements associated with the lockdown measures implemented in response to the Covid-19 pandemic. CBN Journal of Applied Statistics Vol. 12 No. 1 (June 2021).</p>
          </div>

          <div className="group">
            <h3>Problem Definition </h3>
            <p>Payment downtime with Nigeria banks rise by 32% in Nigeria. meaning for every 10 mobile money transfer, only 6 gets to it destination. Customers need convenience, support and faster payment options..</p>
            <ul style={{fontStyle: "italic"}} >
              <li>How can we make peer payment more reliable and fast in Nigeria?</li>
              <li>How can we eliminate downtime in our banking system?</li>
              <li>How can we make peer payment more fun to use?</li>
            </ul>
            <p>Before we answer those questions, we must understand the cause</p>
            <ul>
              <li>Lack of adequate infrastructure </li>
              <li>Inter bank transaction is handle by NIBSS </li>
              <li>Poor user experience </li>
              <li>Public acceptability </li>
            </ul>
          </div>

          <div className="group">
            <h3>Solution</h3>
            <p>Byte aims to connect everyone through payment, by enable users to pay anyone with an email, phone number or bytetag, using their linked bank account or credit card and provide following </p>
            <ul>
              <li>Reduce payment downtime, experience fast transfer time.</li>
              <li>Go beyond just payment with peers</li>
              <li>Save money on transaction and monthly fees.</li>
            </ul>
            <p>To , achieve the above solution, We must do without Nigeria Inter-Bank settlement system for our peer payment.
            How can we archive this?</p>
          </div>

          <div className="group">
            <h3>Ideation</h3>
            <p>Right from the beginning and brainstorming stage for byte, we wanted a platform that makes payment more fun while maintaining its speed and reliability. One of the ways is to do  without traditional bank account and bank name type of payment. Paying users , friends , family with Phone Number and Email will be more fun. With that, we ticked our  second box. Since payment is all done with mobile number or email or byte tag, we have successfully bypass the Nigeria Inter-Bank settlement system for our peer payment which is mostly the cause of down payment because of its poor infrastructure.</p>
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
          
          <div className="group">
            <h3>Final Design Final Design </h3>
            <p>Creating a high-fidelity version of our wireframes allowed me to identify and resolve technical issues that weren&apos;t apparent in the initial stages. This approach ensured a more polished and practical final design for Byte&apos;s payment.</p>
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
                <div className="c-s-card desk" >
                    <span style={{color: '#FF593B'}}  className="case-title" >Split <br /> expenses.</span>
                    <Link href={"/byte/split-expenses"} style={{textDecoration: "none", color: "#fff"}} >
                        <div className="link" >
                            <p>Read case study</p>
                            <img src="/arrow.svg" alt="" />
                        </div>
                    </Link>
                  </div>
                <div className="c-s-card desk" >
                    <span style={{color: '#FF593B'}}  className="case-title" >Add money <br /> on Byte</span>
                    <Link href={"/byte/add-money"} style={{textDecoration: "none", color: "#fff"}} >
                        <div className="link" >
                            <p>Read case study</p>
                            <img src="/arrow.svg" alt="" />
                        </div>
                    </Link>
                  </div>
              <Link className='mob' href={"/byte/split-expenses"} style={{textDecoration: "none", color: "#fff"}} >
                <div className="c-s-card mob"  >
                  <span style={{color: '#FF593B'}}  className="case-title" >Split <br /> expenses.</span>
                  <div className="link" >
                      <p>Read case study</p>
                      <img src="/arrow.svg" alt="" />
                  </div>
                </div>
              </Link>
              <Link className='mob' href={"/byte/add-money"} style={{textDecoration: "none", color: "#fff"}} >
                <div className="c-s-card mob"  >
                  <span style={{color: '#FF593B'}}  className="case-title" >Add money <br /> on Byte</span>
                  <div className="link" >
                      <p>Read case study</p>
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