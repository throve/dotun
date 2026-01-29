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
    status: "Product casestudy",
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
        <Navbar color={"white"} tabs={[{ label: 'Summary', sectionId: 'summary' }, { label: 'Research', sectionId: 'research' }, { label: 'Design', sectionId: 'design' }]} />

        <h1 className='case-h1'  >Smart Care: Bridging the UK Care Gap through Integrated Logistics & Support Orchestration</h1>
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
          <div className="group" id="summary">

            <h3>Executive Summary</h3>
               <p>The UK is facing a "care tsunami": a rapidly aging population coupled with a severe shortage of professional carers. Smart Care is a mobile platform designed to empower carers by automating the "logistical admin" of care. By integrating third-party services like Uber and Deliveroo, the app reduces the operational burden on carers, allowing them to focus on high-quality patient interaction while managing more clients effectively.</p>
          </div>

          <div className="group">
            <h3>The Challenge</h3>
            <p>With over 18.5 million people in the UK projected to be over 60 by 2025, the NHS and social care sectors are overwhelmed.</p>
            <p><strong>The Problem:</strong> Carers spend a disproportionate amount of time on manual coordination—booking transport, shopping for groceries, and managing household tasks—rather than actual caregiving.</p>
            <p><strong>The Impact:</strong> Severe burnout, staff shortages, and "bed blocking," where patients cannot be discharged from hospitals because there is no logistical support at home.</p>
          </div>

          <div className="group">
            <h3>Solution</h3>
            <p>Instead of building another simple scheduling tool, I designed a logistics-first ecosystem. I identified that the most effective way to "scale" a carer's impact is to give them the tools to delegate secondary tasks.</p>
            <p><strong>Key Innovation: 3rd-Party API Integration</strong> I designed a seamless interface that allows Carers and Care Home Admins to:</p>
            <p><strong>Logistics:</strong> Book Uber for patient transport to medical checkups.</p>
            <p><strong>Nutrition:</strong> Order specialized meals via Deliveroo.</p>
            <p><strong>Essentials:</strong> Rapidly restock groceries and medical supplies through Getir.</p>
            <p><strong>Maintenance:</strong> Delegate household chores via Airtasker.</p>
            <p><strong>The Result:</strong> By turning the app into a central hub for these services, a single carer can manage a larger caseload without compromising the quality of personalized care.</p>
          </div>

          <div className="group" id="research">
            <h3>Research & Methodology: Lean & Empathetic</h3>
            <p>I utilized a Lean UX / Double Diamond approach to ensure the product was grounded in real-world necessity.</p>
            <p><strong>Discovery:</strong> Conducted foundational research into NHS trends and ONS data. I focused on the "Time-Poverty" of carers, identifying that logistical friction was the #1 cause of daily stress.</p>
            <p><strong>Competitive Analysis:</strong> Found that most existing tools (like scheduling apps) were "passive"—they tracked time but didn't solve the tasks within that time. Smart Care was designed to be "active."</p>
            <p><strong>Synthesis:</strong> Developed Personas for both the time-poor professional carer and the vulnerable LTC (Long Term Condition) patient to map the emotional high-points and friction-points of the care journey.</p>
            <p style={{opacity: "0"}} > .</p>
            <ImageGrid images={[{name: "", url: "/caree-methodology.webp"}]} grid={1} />
          </div>

          <div className="group">
            <p><b>Competitive Analysis </b>: There are a variety of healthcare apps for both scheduling and consultation present currently but many only focus on time schedule for the carer and has give little or no information about the patient/client. * see appendix A for competitive analysis diagram. User Interview and Survey I decided to uses online survey and share with health care assistance because many might feel uncomfortable in providing information in person. I decided to streamline the survey question into 6 so as too minimize or eliminate information about the vulnerable once. As at the time of this writeup, I have not gotten ethics approval from the university and no data was collected </p>
            <p style={{opacity: "0"}} > .</p>
            
            <ImageGrid images={[{name: "", url: "/caree-ca.webp"}]} grid={1} />
            <p><b>Define</b> : The knowledge accumulated from the disclosure stage can assist with characterising the test another way. User personals, Empathy map , how to transform problem statement pain point to gain point. Develop : This stage helps to give different answers to the clearly defined problem, seeking inspiration from elsewhere and co-designing with a range of different people. This stage include Card sorting , Information Architecture and User flow, Low fidelity wireframe. </p>
            <p><b>Deliver</b> : This part involves creating high fidelity and Involves testing out different solutions at small- scale, rejecting those that will not work and improving the ones that will</p>
            
          </div>

          <div className="group" id="design">
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
            <h3>High-Fidelity</h3>
            <p>The high-fidelity design of the Smart Care Mobile App brings our vision to life with a sleek, intuitive interface that priorities user experience. By incorporating user feedback and extensive testing, we ensured that the app is both functional and aesthetically pleasing. Key features like personalised care plans, real-time health monitoring, and seamless communication tools are designed to be easily accessible and user-friendly.</p>
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
                            <p>View project</p>
                            <img src="/arrow.svg" alt="" />
                        </div>
                    </Link>
                  </div>
                    <Link className='mob' href={"/zapmedx"} style={{textDecoration: "none", color: "#fff"}} >
                <div className="c-s-card mob"  >
                    <span style={{color: '#FAB0F7', width: "80%"}}  className="case-title" >Pharmacy,
                    Diagnosis and Consultation.</span>
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
