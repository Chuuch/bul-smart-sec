"use client";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import Hero from "@/components/Hero/Hero";
import Grid from "@/components/Grid/Grid";
import RecentProjects from "@/components/RecentProjects/RecentProjects";
import Clients from "@/components/Clients/Clients";
import Experience from "@/components/Experience/Experience";
import Approach from "@/components/Approach/Approach";
import Footer from "@/components/Footer/Footer";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
