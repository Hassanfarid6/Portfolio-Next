import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ProjectsSection from "./components/ProjectsSection";
import AchievementsSection from "./components/AchievementsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212] mx-auto px-12 py-4">
      {/* <h1 className="text-white">Portfolio website</h1> */}
      <Navbar />

      <div className="container mt-24 mx-auto">
      <Hero />
      <AchievementsSection/>
      <About/>
      <ProjectsSection/>
      <EmailSection/>
      <Footer/>
      </div>
    </div>
  );
}
