

"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
// import Grid from "@/components/OurCoreServices";
import Footer from "@/components/Footer";
// import Clients from "@/components/Clients";
// // import Approach from "@/components/Approach";
// import Experience from "@/components/OurServices";
// import RecentProjects from "@/components/RecentProjects";
// import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Navbar from "@/components/ui/NavBar";
// import NavbarTop from "@/components/ui/navbartop";
import { TabsDemo } from "@/components/services";
// import { StickyScrollRevealDemo } from "@/components/CoreServices";
// import Trial from "@/components/Trial";
import { MarqueeDemo } from "@/components/Logoscroll";
// import { motion } from "framer-motion";
import OurServices from "@/components/OurServices";
import CoreServices from "@/components/OurCoreServices";

// import { TimelineDemo } from "@/components/CoreServices";
// import Services from "@/components/services";


const Home = () => {
  return (
    <>
      <main
        className="relative dark:bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 no-scrollbar"
        style={{
          backgroundColor: "#faefe0",
          // background: "linear-gradient(180deg, #faefe0,#fff7ad)",
        }}
      >
        <div className="max-w-7xl w-screen">
          <Navbar />
          <Hero />
          <MarqueeDemo />
          <OurServices />
          <CoreServices services={[]} />
          <TabsDemo />
          {/* <FloatingNav navItems={navItems} /> */}
          {/* <NavbarTop /> */}
          {/* <ServicesGsap/> */}
          {/* <Trial/> */}
          {/* <StickyScrollRevealDemo /> */}
          {/* <TimelineDemo/> */}
          {/* <Approach /> */}
          {/* <RecentProjects /> */}
          {/* <Clients /> */}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
