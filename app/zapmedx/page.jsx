// "use client"

import React from 'react'
import { Navbar, ImageGrid } from '@/components'
import Link from 'next/link'

const Receive = () => {

  const images = [
    {
      name: "",
      url: "/zap-waitlist.webp"
    },
    {
      name: "",
      url: "/zap-landing-page.webp"
    },
  ]

  const projectDetails = {
    contribution: "UI Designer",
    credit: [
      {
        name: "Yvonne",
        role: "CEO"
      },
      {
        name: "TJP",
        role: "PO"
      },
      {
        name: "Ben",
        role: "Backend"
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
    { name: "Homepage", url: "/byte-homepage.webp" },
    { name: "Contact", url: "/byte-contact.webp" },
    { name: "Amount Screen", url: "/byte-amount-screen.webp" },
    { name: "Payment Option", url: "/byte-payment-option.webp" }
  ];
  return (
    <div className='case-study' >
      <div className="container">
        <Navbar color={"white"} />

        <h1 className='case-h1'  >ZapMedX is a revolutionary platform transforming healthcare in Nigeria.</h1>
        <ImageGrid images={images} grid={2} />
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
          </div>

          <div className="group">
            <h3>Problem</h3>
            <p>{"In Lagos, Nigeria, and many other parts of Africa, accessing healthcare services can be a daunting task due to traffic congestion, long waiting times, and limited availability of medical resources. These challenges prevent people from receiving timely and adequate care, leading to worsened health conditions and a decreased quality of life. Furthermore, stigmas surrounding certain medical conditions can discourage individuals from seeking necessary treatment."}</p>
            <p>{"The existing healthcare infrastructure struggles to provide accessible, convenient, and affordable healthcare services to all residents, particularly those with mobility issues, busy schedules, or living in remote areas. There is a pressing need for a solution that simplifies and improves access to essential healthcare services, such as medication delivery, lab tests, and consultations with healthcare professionals."}</p>
            <p>{"ZapMedX aims to address these issues by creating a comprehensive platform that enables users to purchase medicines online, schedule home lab tests, and connect with doctors from the comfort of their homes. By doing so, ZapMedX seeks to enhance community health and wellness, eliminate healthcare stigmas, and ensure that everyone has access to the care and treatment they need to lead healthier lives."}</p>
          </div>

          <div className="group">
            <h3>Solution</h3>
            <p>{"As a UI designer at ZapmedX, I was tasked with transforming the way Nigerians buy medicines and access consultations online. Building on the completed research and wireframes, I crafted a web application designed to offer a seamless user experience across three core features:"}</p>
            <ul>
              <li>Pharmacy This feature allows users to order medicines without hassle. I integrated a simple e-commerce flow to facilitate easy customer checkout, ensuring that users can quickly and efficiently purchase the medications they need.</li>
              <li>Diagnosis Here, users can book online tests and receive results from the comfort of their homes. The process is straightforward: users log in, browse the available tests, make a payment, and our experts visit their location to collect blood samples. Results are delivered within 24 hours, making the entire experience convenient and stress-free.</li>
              <li>Consult Users can easily connect with online doctors for consultations. This feature is designed to provide accessible and immediate medical advice, ensuring that users can get professional help whenever they need it.</li>
            </ul>
            <p>With these features, ZapmedX aims to revolutionise healthcare in Nigeria by making it more accessible, convenient, and efficient for everyone. </p>
          </div>

          
          <div className="group">
            <h3>Final Design Final Design </h3>
            <p>The final design of the ZapMedX web application combines user-friendly interfaces with intuitive navigation to transform how Nigerians access healthcare services online. As a UI designer on this project, my goal was to create a seamless and engaging user experience across all features. Here are a few key designs showcased.</p>
          </div>

          <div className='special-img-cont' >
               <div className="left">
                <div className="img-div">
                    <img src="/zapmedex-fd-1.webp" alt="" />
                    <span>Pharmacy</span>
                </div>
                <div className="img-div">
                    <img src="/zapmedex-fd-3.webp" alt="" />
                    <span>Admin</span>
                </div>
               </div>
               <div className="right">
                <div className="img-div">
                    <img src="/zapmedex-fd-2.webp" alt="" />
                    <span>Order</span>
                </div>
                <div className="img-div">
                    <img src="/zapmedex-fd-4.webp" alt="" />
                    <span>Consult</span>
                </div>
               </div>
          </div>

          <ImageGrid images={[{name: "Handover", url: "/zapmedex-fd-5.webp"}]} grid={1} />

          <div className="group">
            <h3>Metrics</h3>
            <p>{"The enhanced design of the ZapMedX web application has made it remarkably easy for users to find and access the services they need. With an intuitive layout and user-friendly features, users can now effortlessly navigate the Pharmacy, Diagnosis, and Consult sections. This improved usability has led to a substantial 250% increase in user engagement and an impressive 86% increase in revenue. These metrics highlight the success of our design in meeting user needs and driving business growth, reaffirming our commitment to making healthcare more accessible and efficient."}</p>
          </div>

          <div className="group">
             <h3>Related Case Studies</h3>
             <div className="case-cont" style={{gridTemplateColumns: "1fr"}} >
                <div className="c-s-card desk" >
                    <span style={{color: '#FAB0F7'}}  className="case-title" >Real time scheduling and care assistance</span>
                    <Link href={"/caree"} style={{textDecoration: "none", color: "#fff"}} >
                        <div className="link" >
                            <p>Read case study</p>
                            <img src="/arrow.svg" alt="" />
                        </div>
                    </Link>
                  </div>
                    <Link className='mob' href={"/caree"} style={{textDecoration: "none", color: "#fff"}} >
                <div className="c-s-card mob"  >
                    <span style={{color: '#FAB0F7', width: "80%"}}  className="case-title" >Real time scheduling and care assistance</span>
                        <div className="link" >
                            <p>Read case study</p>
                            <img src="/arrow.svg" alt="" />
                        </div>
                  </div>
                    </Link>

             </div>
          </div>
        </div>
        <div className="footer">footer</div>
      </div>
    </div>
  )
}

export default Receive