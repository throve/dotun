import React from 'react'
import { Navbar, ImageGrid } from '@/components'
import Link from 'next/link'

const Receive = () => {

  const images = [
    {
      name: "Homepage",
      url: "/byte-2-Homepage.webp"
    },
    {
      name: "Split",
      url: "/byte-2-equal-split.webp"
    },
    {
      name: "Split",
      url: "/byte-2-split-0.webp"
    },
    {
      name: "Group",
      url: "/byte-2-group.webp"
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
        role: "Dev Lead"
      },
      {
        name: "Martins",
        role: "UX Designer"
      },
      {
        name: "Eze",
        role: "PM"
      },
    ],
    status: "Live",
    year: "2022"

  }

  const wireframes = [
    { name: "Pocket", url: "/byte-2-pocket.webp" },
    { name: "Split", url: "/byte-2-equal-split.webp" },
    { name: "Split", url: "/byte-2-split.webp" },
    { name: "Group", url: "/byte-2-group.webp" },
    { name: "Done", url: "/byte-2-done.webp" },
    { name: "Details", url: "/byte-2-details.webp" },
    { name: "Custom Split", url: "/byte-2-custom-split.webp" },
    { name: "Equal Split", url: "/byte-2-equal-split.webp" },
    { name: "Done", url: "/byte-2-split-done.webp" }
  ]
  return (
    <div className='case-study' >
      <div className="container">
        <Navbar color={"white"} />

        <h1 className='case-h1'  >Byte simplifies expense splitting, streamlining the process for sharing costs among friends, family.</h1>
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
             <p>In the bustling streets of Lagos, where commerce and connectivity intersect, Byte emerged in 2021 as a beacon of financial innovation. Initially conceived as a Facebook payment platform, Byte swiftly evolved to meet the dynamic needs of its users, pioneering peer-to-peer payment solutions in the Nigerian landscape. Facilitating seamless transactions through phone numbers and tags, Byte quickly garnered acclaim for its user-centric approach. Today, Byte stands tall as a fintech powerhouse, empowering businesses to navigate the digital realm with confidence. From streamlining payment collection to equipping enterprises with essential tools, Byte is poised to redefine greatness in Nigeria&apos;s financial landscape. Join us as we embark on a journey through Byte&APOS;s transformative evolution and unwavering commitment to excellence.</p>
             <p style={{marginTop: "20px"}} >I witnessed firsthand the company&apos;s meteoric rise. From the inception of Byte 1.0, I played a pivotal role in crafting the user experience of the first Byte peer payment platform, laying its foundation from the ground up. However, our journey didn&apos;t end there. With Byte 1.0 successfully launched, we embarked on an ambitious quest to explore new horizons, delving into features like business payment and split payment. It was during this transformative phase that I spearheaded the design efforts for the split payment feature, shaping its functionality and aesthetics to meet the evolving needs of our users. Join me as we delve into the captivating narrative of Byte&apos;s evolution and the role of UX/UI design in driving its success.</p>
          </div>

          <div className="group">
            <h3>Scenario </h3>
            <p>{"I witnessed firsthand the company's meteoric rise. From the inception of Byte 1.0, I played a pivotal role in crafting the user experience of the first Byte peer payment platform, laying its foundation from the ground up. However, our journey didn't end there. With Byte 1.0 successfully launched, we embarked on an ambitious quest to explore new horizons, delving into features like business payment and split payment. It was during this transformative phase that I spearheaded the design efforts for the split payment feature, shaping its functionality and aesthetics to meet the evolving needs of our users. Join me as we delve into the captivating narrative of Byte's evolution and the role of UX/UI design in driving its success."}</p>
            
          </div>

          <div className="group">
            <h3>Solution</h3>
            <p>{"After conducting thorough competitive analysis and desk research, we have identified a common pain point in managing group expenses: the need for seamless split payment solutions. To address this challenge, we have devised a comprehensive approach to tackle the split feature in two distinct ways. "}</p>
            <ol>
              <li className = "special-li" ><b>{"Splitting Payment After Expenses: "}</b> Utilizing the Transaction History screen within the Byte app, users can seamlessly split expenses after transactions. Upon accessing the transaction details, users can initiate the split payment process by selecting the specific transaction. Within the transaction interface, an option to &apos;Split with Contacts&apos; will be available, enabling users to easily divide the expense among participants connected on Byte. This intuitive feature simplifies expense management and fosters financial transparency among friends or group members. </li>
            </ol>
              <ImageGrid images={[{name: '', url: "/byte-2-solution.webp"}]} grid={1} />
            <ol style={{gap: "0px", margin: "-30px 32px 16px"}} >
              <li style={{opacity: "0"}} >-</li>
              <li style={{marginTop: "-32px"}} > <b>{"Creating Groups for Future Events: "}</b> {"Byte empowers users to plan for future events by creating groups within the app. Within the group interface, users can add upcoming expenses to a shared list in anticipation of the event. By leveraging this feature, Byte automatically calculates each member's contribution, facilitating seamless expense splitting for future gatherings. This functionality not only streamlines group coordination but also promotes financial clarity and accountability among participants."} </li>
            </ol>
            <ImageGrid images={[{name: '', url: "/byte-2-solution-2.webp"}]} grid={1} />
          </div>

          <div className="group" >
               <h3>High Fidelity</h3>
               <p>After finalising the user flow with the team, I seamlessly transitioned into high-fidelity design. Leveraging the UI kit created for Byte 2.0 by Martins, I ensured a consistent and visually appealing user interface, enhancing the overall user experience.</p>
          </div>
          <ImageGrid images={wireframes} grid={3}  />

          <div className="group" >
            <h3>Conclusion</h3>
            <p>{"By implementing these dual split payment features, Byte significantly enhances user experience and simplifies group financial management. The ability to retrospectively split expenses using the Transaction History screen, coupled with the option to create groups for future events, ensures that users can handle financial coordination effortlessly. These features not only promote transparency and ease but also strengthen the sense of camaraderie during shared experiences, making Byte the go-to solution for seamless financial interactions."}</p>
          </div>


          <div className="group">
             <h3>Related Case Studies</h3>
             <div className="case-cont">
             <div className="c-s-card " >
                <span style={{color: '#FF593B'}}  className="case-title" >Add money <br /> on Byte</span>
                <Link href={"/byte/add-money"} style={{textDecoration: "none", color: "#fff"}} >
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