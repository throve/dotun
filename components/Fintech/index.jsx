"use client"

import React, { useEffect, useState } from 'react'
import { fintech as data } from '@/data'
import Link from 'next/link'
// import { Link }

const SECTIONS = [
  { id: 'fintech', label: 'FinTech' },
  { id: 'health', label: 'Health' },
  { id: 'side-projects', label: 'Others' },
]

const Fintech = () => {
    const [activeFilter, setActiveFilter] = useState('fintech')

    useEffect(() => {
        console.log(data)
    }, [])

    const scrollToSection = (sectionId) => {
        const el = sectionId === 'fintech' ? document.getElementById('fintech') : document.getElementById(sectionId)
        if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY
            window.scrollTo({ top: y, behavior: 'smooth' })
            setActiveFilter(sectionId)
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            const fintechEl = document.getElementById('fintech')
            const healthEl = document.getElementById('health')
            const sideEl = document.getElementById('side-projects')
            if (!fintechEl || !healthEl || !sideEl) return
            const vh = window.innerHeight * 0.4
            const fintechTop = fintechEl.getBoundingClientRect().top
            const healthTop = healthEl.getBoundingClientRect().top
            const sideTop = sideEl.getBoundingClientRect().top
            if (sideTop <= vh) setActiveFilter('side-projects')
            else if (healthTop <= vh) setActiveFilter('health')
            else setActiveFilter('fintech')
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

   return ( 
    <div id="fintech" className="fintech-wrapper">
        <section className="live-apps">
          <div className="live-apps-heading">
            <h2 className="live-apps-title">My work</h2>
            <p className="live-apps-subtitle">These are projects I&apos;m allowed to share publicly</p>
          </div>
          <div className="work-filters" role="tablist" aria-label="Filter work by category">
            {SECTIONS.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                role="tab"
                className={`work-filter-btn ${activeFilter === id ? 'active' : ''}`}
                onClick={() => scrollToSection(id)}
                aria-selected={activeFilter === id}
              >
                {label}
              </button>
            ))}
          </div>
        </section>

        <div className="industry" >
            <div className="industry-inner">
                <div className="industry-tag" style={{backgroundColor: data.color}} >
                    <img src={data.icon} alt="" />
                    <p>FinTech</p>
                </div>
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