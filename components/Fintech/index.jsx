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
                            {startup.caseStudies.length > 0 && (
                                <div className="fist-div" >
                                    <div className="first c-s-card desk" >
                                        <span style={{color: data.color}}  className="case-title" >{startup.caseStudies[0].title}</span>
                                        <Link href={startup.caseStudies[0].caseStudyUrl} style={{textDecoration: "none", color: "#fff"}} >
                                            <div className="link" >
                                                <p>Read case study</p>
                                                <img src="/arrow.svg" alt="" />
                                            </div>
                                        </Link>
                                    </div>
                                    <Link className='mob' href={startup.caseStudies[0].caseStudyUrl} style={{textDecoration: "none", color: "#fff"}} >
                                        <div className="c-s-card mob"  >
                                        <span style={{color: data.color, width: "80%"}}  className="case-title" >{startup.caseStudies[0].title}</span>

                                                <div className="link" >
                                                    <p>Read case study</p>
                                                    <img src="/arrow.svg" alt="" />
                                                </div>
                                        </div>
                                    </Link>
                                </div>
                            )}
                            {startup.caseStudies.length > 1 && (
                                <div className="rest" >
                                    {startup.caseStudies.slice(1).map((caseStudy, index) => (
                                        <React.Fragment key={index}>
                                            <div className={`${index === 0 ? 'second' : 'third'} c-s-card desk`} >
                                                <span style={{color: data.color}}  className="case-title" >{caseStudy.title}</span>
                                                <Link href={caseStudy.caseStudyUrl} style={{textDecoration: "none", color: "#fff"}} >
                                                    <div className="link" >
                                                        <p>Read case study</p>
                                                        <img src="/arrow.svg" alt="" />
                                                    </div>
                                                </Link>
                                            </div>
                                            <Link className='mob' href={caseStudy.caseStudyUrl} style={{textDecoration: "none", color: "#fff"}} >
                                                <div className="c-s-card mob"  >
                                                <span style={{color: data.color, width: "80%"}}  className="case-title" >{caseStudy.title}</span>

                                                        <div className="link" >
                                                            <p>Read case study</p>
                                                            <img src="/arrow.svg" alt="" />
                                                        </div>
                                                </div>
                                            </Link>
                                        </React.Fragment>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))
            }
        </div>
        
    </div>
   )
}

export default Fintech