"use client"

import { useEffect } from 'react'
import { side as data } from '@/data'
import Link from 'next/link'

const Side = () => {

    useEffect(() => {
        console.log(data)
    }, [])

   return ( 
    <div className="industry" >
        <div className="industry-tag" style={{backgroundColor: data.color}} >
            <img src={data.icon} alt="" />
            <p>Side projects</p>
        </div>

        <div className="companies">
            <div className="company" >

                <div className="company-intro" >
                    <h2  style={{color: data.color}} > {data.startups[0].name} </h2>
                    <p>{data.startups[0].des}</p>
                </div>

                <div className="case-studies" >
                    <div className="fist-div" >

                        <div className="first c-s-card desk" >
                            <span style={{color: data.color}}  className="case-title" >{data.startups[0].caseStudies[0].title}</span>
                            <Link target='_blank' href={data.startups[0].caseStudies[0].caseStudyUrl} style={{textDecoration: "none", color: "#fff"}} >
                                <div className="link" >
                                    <p>Visit website</p>
                                    <img src="/arrow.svg" alt="" />
                                </div>
                            </Link>
                        </div>
                        <Link target='_blank'  className='mob' href={data.startups[0].caseStudies[0].caseStudyUrl} style={{textDecoration: "none", color: "#fff"}} >
                            <div className="c-s-card mob"  >
                            <span style={{color: data.color, width: "80%"}}  className="case-title" >{data.startups[0].caseStudies[0].title}</span>

                                    <div className="link" >
                                        <p>Visit website</p>
                                        <img src="/arrow.svg" alt="" />
                                    </div>
                            </div>
                        </Link>
                    </div>
          
                </div>
            </div>
                   

            <div className="company" >

                <div className="company-intro" >
                    <h2  style={{color: data.color}} > {data.startups[1].name} </h2>
                    <p>{data.startups[1].des}</p>
                </div>

                <div className="case-studies" >
                    <div className="fist-div" >

                        <div className="first c-s-card desk" >
                            <span style={{color: data.color}}  className="case-title" >{data.startups[1].caseStudies[0].title}</span>
                            <Link target='_blank' href={data.startups[1].caseStudies[0].caseStudyUrl} style={{textDecoration: "none", color: "#fff"}} >
                                <div className="link" >
                                    <p>Read on behance</p>
                                    <img src="/arrow.svg" alt="" />
                                </div>
                            </Link>
                        </div>
                        <Link target='_blank'  className='mob' href={data.startups[1].caseStudies[0].caseStudyUrl} style={{textDecoration: "none", color: "#fff"}} >
                            <div className="c-s-card mob"  >
                            <span style={{color: data.color, width: "80%"}}  className="case-title" >{data.startups[1].caseStudies[0].title}</span>

                                    <div className="link" >
                                        <p>Read on behance</p>
                                        <img src="/arrow.svg" alt="" />
                                    </div>
                            </div>
                        </Link>
                    </div>
                    {/* <div className="rest" >
                        <div className="second c-s-card " >
                            <span style={{color: data.color}}  className="case-title" >{data.startups[1].caseStudies[1].title}</span>
                            <div className="link" >
                                <p>Read case study</p>
                                <img src="/arrow.svg" alt="" />
                            </div>
                        </div>
                        <div className="third c-s-card " >
                            <span style={{color: data.color}}  className="case-title" >{data.startups[1].caseStudies[2].title}</span>
                            <div className="link" >
                                <p>Read case study</p>
                                <img src="/arrow.svg" alt="" />
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
    
        </div>
        
    </div>
   )
}

export default Side