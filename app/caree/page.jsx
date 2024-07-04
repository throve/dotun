// "use client"

import React from 'react'
import { Navbar, ImageGrid, Footer } from '@/components'
import Link from 'next/link'
import { Wire_One } from 'next/font/google'

const Receive = () => {

  const images = [
    { name: "Homepage", url: "/caree-homepage.webp" },
    { name: "Info Screen", url: "/caree-info-screen.webp" },
    { name: "Medicines", url: "/caree-medicines.webp" },
    { name: "Task Page", url: "/caree-task-page.webp" }

  ]

  const projectDetails = {
    contribution: "Founding UXUI Designer",
    credit: [
      {
        name: "John",
        role: "CEO"
      }
    ],
    status: "Live",
    year: "2023"

  }

  const pd = `On 24 December 2021, the Government declared that care workers would be added to the Home Office's Shortage Occupation List (SOL) for visa purposes, The change has followed suggestions from the Migration Advisory Committee (MAC) corresponding to the issue of significant enlistment challenges and "extreme and expanding hardships looked by the consideration area. “There will be "a tsunami" of people without the care they need this winter unless staff shortages are tackled” England's care watchdog is warning. Care shortage meant more patients judged fit to go home were stuck in hospital as they lack who to look after them at home. As a result, many older people are not receiving the adequate care and guidance needed to go through the face of their life.`

  const wireframes = [
    { name: "Splash", url: "/caree-splash.webp" },
    { name: "Activation Screen", url: "/caree-activation-screen.webp" },
    { name: "Activation Active", url: "/caree-activation-active.webp" },
    { name: "Welcome Page", url: "/caree-welcome-page.webp" },
    { name: "Homepage", url: "/caree-homepage.webp" },
    { name: "Info Screen", url: "/caree-info-screen.webp" },
    { name: "Medicines", url: "/caree-medicines.webp" },
    { name: "Task Page", url: "/caree-task-page.webp" },
    { name: "Profile Screen", url: "/caree-profile-screen.webp" },
    { name: "Medicine Modal", url: "/caree-medicine-modal.webp" },
    { name: "Clock In Modal", url: "/caree-clock-in-modal.webp" },
    { name: "Chat Screen", url: "/caree-chat-screen.webp" }
];

  return (
    <div className='case-study' >
      <div className="container">
        <Navbar color={"white"} />

        <h1 className='case-h1'  >Smart Care Mobile App revolutionizes 
        personalized care and support planning</h1>
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
               <p>{"ZapmedX is a fast-paced, growing healthcare platform, passionate about improving community health and wellness. ZapmedX aim to help eliminate stigmas and make it easier for people to access care and treatment for the conditions that impact their daily lives. Currently Operating in Lagos, Nigeria. ZapmedX’s goal is to expand their reach beyond Nigeria to Africa, by providing people with accessible, convenient, and affordable healthcare services, where they can connect to pharmacies, lab tests, and doctors anywhere they are. "}</p>
               <p>{"'The Older age and Individuals living with long term circumstances (LTCs) are the best clients of NHS administrations and the biggest piece of the well-being administration financial plan are spent on their help. The consideration and backing expected to live well with an LTC are generally unique to that for the intense medical issues - while individuals with LTCs regularly spend only a couple of hours a year with well-being and care experts, they live with their circumstances and make due them consistently themselves. The well-being and care framework should uphold people to have the information, abilities also certainty to plan and deal with their own well-being and care, and to help one more with regards to their more extended families and networks. We in this manner need a significant re-plan of current methodologies. This will call for some progressions across the Well being and care framework: from the manner in which experts and individuals cooperate in a face to face counsels, to how experts are prepared and what backing individuals can tap into, including support for carers and relatives&'. Propels in medical care have helped individuals in England to live longer than any time in recent memory. Therefore, the quantity of more seasoned individuals in England is developing fundamentally and this pace of development is projected to accelerate throughout the following 20 years. This is uplifting news for us all yet it makes a test for the NHS - as we age we will more often than not get long-haul conditions and need more well-being and social consideration."}</p>
          </div>

          <div className="group">
            <h3>Problem Definition</h3>
            <p>{pd}</p>
          </div>

          <div className="group">
            <h3>Solution</h3>
            
            <p>{"Due to the high rate of Personal Health Carers and professionals needed in the United Kingdom. The number of Carers needed is always not enough, especially since the time of Covid19. So, the app will make a Carer job more flexible and effective, meaning with a smart care app, Care homes and carer can look after patients and clients effectively with perfect and real time care scheduling. Now few carer can reach more patient easily. The app will work with 3rd parties apps like Uber for transport, Diliveroo for food, Getir for groceries and Airtasker for household task and many more. The carer and care home admin will be logged in as an admin and make quick orders for patients or client."}</p>
          </div>

          <div className="group">
            <h3>Methodology</h3>
            
            <p>{"I followed a lean UX design thinking process to ensure that my decisions were supported through user research and feedback. Double diamond design process model."}</p>
            <p style={{opacity: "0"}} > .</p>
            <ImageGrid images={[{name: "", url: "/caree-methodology.webp"}]} grid={1} />
            <p>The Double Diamond Framework by the British Design Council permits me to settle on purposeful plan choices by investigating different choices (divergent thinking), while at the same time approving more grounded ones and removing the more vulnerable ones (convergent thinking). </p>
            <p>I utilise this equivalent way to  address two things: </p>
            <p>1. Is this the right issue to tackle? </p>
            <p>2. Is this the right solution to execute?</p>
            <p>The Process is intended to investigate every possibility to guarantee that the planned heading is bound to make the ideal effect.</p>
            
          </div>

          <div className="group">
            <p style={{fontWeight: "bold"}} >THE DOUBLE DIAMOND DESIGN PROCESS INCLUDES</p>
            <p><b>Discover</b>: The first step of the design process is critical for gathering information, requirements, and other data you need in order to make informed decisions later. This part helps me to empathise with the users through problem exploration, Foundational research, Surveys and Competitive analysis </p>
            <p>Foundational Research : According to the NHS More than one in five of us are already over 60, and the number of people over 60 is expected to increase from 14.9 million in 2014 to 18.5 million in 2025 (ONS, 2015) 75% of 21</p>
            <p>75-year-olds in the UK have more than one long term condition, rising to 82% of 85- year-olds (Barnett et al, 2012) Between 2007/08 and 2013/14 the numbers of A&E attendances by people aged 60 or over increased by two-thirds, a steeper increase than is expected by demographic change alone (NHS England data, 2015) </p>
          </div>

          <div className="group">
            <p><b>Competitive Analysis </b>: There are a variety of healthcare apps for both scheduling and consultation present currently but many only focus on time schedule for the carer and has give little or no information about the patient/client. * see appendix A for competitive analysis diagram. User Interview and Survey I decided to uses online survey and share with health care assistance because many might feel uncomfortable in providing information in person. I decided to streamline the survey question into 6 so as too minimize or eliminate information about the vulnerable once. As at the time of this writeup, I have not gotten ethics approval from the university and no data was collected </p>
            <p style={{opacity: "0"}} > .</p>
            
            <ImageGrid images={[{name: "", url: "/caree-ca.webp"}]} grid={1} />
            <p><b>Define</b> : The knowledge accumulated from the disclosure stage can assist with characterising the test another way. User personals, Empathy map , how to transform problem statement pain point to gain point. Develop : This stage helps to give different answers to the clearly defined problem, seeking inspiration from elsewhere and co-designing with a range of different people. This stage include Card sorting , Information Architecture and User flow, Low fidelity wireframe. </p>
            <p><b>Deliver</b> : This part involves creating high fidelity and Involves testing out different solutions at small- scale, rejecting those that will not work and improving the ones that will</p>
            
          </div>

          <div className="group">
            <h3>Requirement Specification </h3>
            <p>The Requirement specifications were used to outline possible features of pages. It was derived from the user stories.</p>
            <p style={{opacity: "0"}} > .</p>
            
            <ImageGrid images={[{name: "", url: "/caree-rs.webp"}]} grid={1} />
          </div>

          
          <div className="group">
            <h3>Sketches / Lo-fi Ideation </h3>
            <p>At the early stage of my iterations, I resulted to easily disposable sketches using white paper with black pen to generate various design ideas for each page. This allowed easy design iterations of various page structure.</p>
          </div>

          <ImageGrid images={[{name: "", url: "/caree-sketch-1.webp"},{name: "", url: "/caree-sketch-2.webp"}]} grid={2} />

          
          <div className="group">
            <h3>Final Design Final Design </h3>
            <p>The final design of the Smart Care Mobile App brings our vision to life with a sleek, intuitive interface that priorities user experience. By incorporating user feedback and extensive testing, we ensured that the app is both functional and aesthetically pleasing. Key features like personalised care plans, real-time health monitoring, and seamless communication tools are designed to be easily accessible and user-friendly.</p>
          </div>

          <ImageGrid images={wireframes} grid={4} />


          <ImageGrid images={[{name: "dashboard", url: "/caree-dashboard.webp"}]} grid={1} />


          <div className="group">
             <h3>Related Case Studies</h3>
             <div className="case-cont" style={{gridTemplateColumns: "1fr"}} >
                <div className="c-s-card desk" >
                    <span style={{color: '#FAB0F7'}}  className="case-title" >Pharmacy,
                    Diagnosis and Consultation.</span>
                    <Link href={"/zapmedx"} style={{textDecoration: "none", color: "#fff"}} >
                        <div className="link" >
                            <p>Read case study</p>
                            <img src="/arrow.svg" alt="" />
                        </div>
                    </Link>
                  </div>
                    <Link className='mob' href={"/zapmedx"} style={{textDecoration: "none", color: "#fff"}} >
                <div className="c-s-card mob"  >
                    <span style={{color: '#FAB0F7', width: "80%"}}  className="case-title" >Pharmacy,
                    Diagnosis and Consultation.</span>
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