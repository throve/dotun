
import { Hero, Fintech, Medtech, Side, Navbar, IndexFooter } from "@/components";


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
        <IndexFooter />
      </div>
    </div>
  );
}
