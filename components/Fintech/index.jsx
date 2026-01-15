"use client"

import React, { useEffect } from 'react'
import { fintech as data } from '@/data'
import Link from 'next/link'
// import { Link }

const Fintech = () => {

    useEffect(() => {
        console.log(data)
    }, [])
   return ( 
    <div className="fintech-wrapper">
        <section className="live-apps">
          <h2 className="live-apps-title">My work</h2>
          <p className="live-apps-subtitle">These are projects I'm allowed to share publicly</p>
        </section>

        <div className="industry" >
            <div className="industry-tag" style={{backgroundColor: data.color}} >
                <img src={data.icon} alt="" />
                <p>FinTech</p>
            </div>

            <div className="companies">
            {
                data.startups.map(startup => (
                    <div className="company" key={startup.name} >

                        <div className="company-intro" >
                            <h2  style={{color: data.color}} > {startup.name} </h2>
                            <p>{startup.des}</p>
                        </div>

                        <div className="case-studies" >
                            {startup.caseStudies.map((caseStudy, index) => (
                                <div key={index} className="case-study-item">
                                    {caseStudy.images && caseStudy.header ? (
                                        // New design with images
                                        <>
                                            <div className="byte-case-study desk">
                                                <div className="byte-images-container">
                                                    {caseStudy.images.map((imageUrl, idx) => (
                                                        <img 
                                                            key={idx} 
                                                            src={imageUrl} 
                                                            alt={`Byte case study ${idx + 1}`}
                                                            className="byte-case-image"
                                                        />
                                                    ))}
                                                </div>
                                                <div className="byte-case-header">
                                                    <h3 style={{color: '#E1E1E1'}} className="case-title">
                                                        {caseStudy.header}
                                                    </h3>
                                                    <Link href={caseStudy.caseStudyUrl} style={{textDecoration: "none", color: "#fff"}} >
                                                        <div className="link" >
                                                            <p>View project</p>
                                                            <img src="/arrow.svg" alt="" />
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="byte-case-study mob">
                                                <div className="byte-images-container">
                                                    {caseStudy.images.map((imageUrl, idx) => (
                                                        <img 
                                                            key={idx} 
                                                            src={imageUrl} 
                                                            alt={`Byte case study ${idx + 1}`}
                                                            className="byte-case-image"
                                                        />
                                                    ))}
                                                </div>
                                                <div className="byte-case-header">
                                                    <h3 style={{color: '#E1E1E1'}} className="case-title">
                                                        {caseStudy.header}
                                                    </h3>
                                                    <Link href={caseStudy.caseStudyUrl} style={{textDecoration: "none", color: "#fff"}} >
                                                        <div className="link" >
                                                            <p>View project</p>
                                                            <img src="/arrow.svg" alt="" />
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        // Original design
                                        <>
                                            <div className="c-s-card desk" >
                                                <span style={{color: data.color}}  className="case-title" >{caseStudy.title}</span>
                                                <Link href={caseStudy.caseStudyUrl} style={{textDecoration: "none", color: "#fff"}} >
                                                    <div className="link" >
                                                        <p>View project</p>
                                                        <img src="/arrow.svg" alt="" />
                                                    </div>
                                                </Link>
                                            </div>
                                            <Link className='mob' href={caseStudy.caseStudyUrl} style={{textDecoration: "none", color: "#fff"}} >
                                                <div className="c-s-card mob"  >
                                                <span style={{color: data.color, width: "80%"}}  className="case-title" >{caseStudy.title}</span>

                                                        <div className="link" >
                                                            <p>View project</p>
                                                            <img src="/arrow.svg" alt="" />
                                                        </div>
                                                </div>
                                            </Link>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    </div>
   )
}

export default Fintech