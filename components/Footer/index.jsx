import React from 'react'

const Footer = () => {
  return (
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
        <button className="contact-button desk">
            <span >Contact</span> 
            <br/> 
            <span  className="me">
                me<img src="/arrow-up.svg" alt="" />
            </span> 
        </button>
        <button style={{ textAlign: "center", justifyContent: "center",  marginTop: "40px", marginBottom: "70px" }} className="contact-button mob">Contact me</button>

        </div>
  )
}

export default Footer