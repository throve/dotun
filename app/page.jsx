"use client"

import { useEffect, useRef, useState } from "react";
import { Hero, Fintech, Medtech, Side, Navbar, IndexFooter } from "@/components";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const restoredRef = useRef(false);

  // Restore scroll position when returning to the home page (e.g., after back navigation)
  useEffect(() => {
    const storedScroll = sessionStorage.getItem("home-scroll");
    if (storedScroll) {
      const y = parseInt(storedScroll, 10);
      if (!Number.isNaN(y)) {
        window.scrollTo(0, y);
        restoredRef.current = true;
      }
      sessionStorage.removeItem("home-scroll");
    }
  }, []);

  // Save scroll position before leaving the page
  useEffect(() => {
    return () => {
      sessionStorage.setItem("home-scroll", window.scrollY.toString());
    };
  }, []);

  useEffect(() => {
    // Prevent scroll on page load
    if (typeof window !== 'undefined' && !restoredRef.current) {
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
