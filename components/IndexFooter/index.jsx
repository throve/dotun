import React from 'react'
import { Carousel } from '..';

const IndexFooter = () => {

    const experiences = [
        {
          Company: "Telus Health",
          Position: "UX Designer",
          Status: "Present"
        },
        {
          Company: "SparkHQ",
          Position: "Founder",
          Status: "Present"
        },
        {
          Company: "Byte (Dojo Expert 23)",
          Position: "Founding UXUI",
          Status: "2021"
        }
      ];
    
      const tools = [
        { name: "Figma", url: "/figma.svg" },
        { name: "Illustrator", url: "/ai.svg" },
        { name: "Photoshop", url: "/ps.svg" },
        { name: "HTML", url: "/html.svg" },
        { name: "CSS", url: "/css.svg" },
        { name: "Bootstrap", url: "/bootstrap.svg" },
        { name: "Agile", url: "/agile.svg" },
        { name: "Gen-AI", url: "/gen-ai.svg" }
      ];
      
      
      
  return (
    <div className='index-footer' >
        <div className="big-text" >
            <span >What people say</span>
        </div>
        <div className='carousel-div' >
            <Carousel />
        </div>
        <div className='tools-exp' >
            <div className="exp">
                <div className='exp-main' >
                    <span>Experience </span>
                    <div className="exp-cont">
                        {
                            experiences.map(exp => (
                                <div key={exp.Company} className="exp-card">
                                    <span>{exp.Company}</span>
                                    <div className="exp-role">
                                        <p>{exp.Position}</p>
                                        <p>{exp.Status}</p>
                                    </div>
                                </div>
                            ))
                        }
                        {/* <div className="exp-card">
                            <span>Telus Health</span>
                            <div className="exp-role">
                                <p>UX Designer</p>
                                <p>Present</p>
                            </div>
                        </div> */}
                      
                    </div>
                </div>
                <div className='education' >
                    <span>Education </span>
                    <div className="exp-cont">
                        <div className="exp-card">
                            <span>Middlesex University, London</span>
                            <div className="exp-role">
                                <p>Information technology</p>
                                <p>2022</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="tools">
                <span>Tools</span>
                <div className="tools-cont">
                {tools.map(tool => (
                    <div key={tool.name} className="tools-div">
                        <img src={tool.url} alt={tool.name} />
                        <p>{tool.name}</p>
                    </div>
                ))}
                </div>
            </div>
        </div>
        <div className="socials-container">
            <div className="links">

                <span>Socials</span>
                <div className="socials-grid">
                    <p>LinkedIN</p>
                    <p>Instagram</p>
                    <p>Behance</p>
                    <p>Twitter (X)</p>
                </div>
            </div>
            <button style={{marginTop: "40px" }} className="contact-button desk">
                <span >Contact</span> 
                <br/> 
                <span  className="me">
                    me<img src="/arrow-up.svg" alt="" />
                </span> 
            </button>
            <button className="contact-button mob" style={{ textAlign: "center", justifyContent: "center", marginTop: "40px" }} >Contact me</button>
        </div>
    </div>
  )
}

export default IndexFooter