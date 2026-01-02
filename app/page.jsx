"use client"

import { useEffect, useState } from "react";
import { Hero, Fintech, Medtech, Side, Navbar, IndexFooter } from "@/components";


export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Prevent scroll on page load
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
    // Small delay to ensure animation triggers
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 10);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`home-page ${isLoaded ? 'loaded' : ''}`}  >
      <div className="container">
      <Navbar color="black" />
      <Hero />
      
      <div className="projects">
        <Fintech />
        <Medtech />
        <Side />
      </div>
        <IndexFooter />
      </div>
    </div>
  );
}
