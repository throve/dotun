import Image from "next/image";
import { Hero, Fintech, Medtech, Side } from "@/components";
export default function Home() {
  return (
    <div className="home-page" >
      <Hero />
      
      <div className="projects">
        <Fintech />
        <Medtech />
        <Side />
      </div>
    </div>
  );
}
