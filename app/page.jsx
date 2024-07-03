import Image from "next/image";
import { Hero, Fintech, Medtech, Side, Navbar } from "@/components";
export default function Home() {
  return (
    <div className="home-page"  >
      <div className="container">
      <Navbar color="black" />
      <Hero />
      
      <div className="projects">
        <Fintech />
        <Medtech />
        <Side />
      </div>
      </div>
    </div>
  );
}
