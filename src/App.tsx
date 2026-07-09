import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";
import Preloader from "./components/ui/Preloader";
import Hero from "./components/sections/Hero";
import Locations from "./components/sections/Locations";
import FeatureGrid from "./components/sections/FeatureGrid";
import StudentLiving from "./components/sections/StudentLiving";
import Community from "./components/sections/Community";
import WhatDefinesUs from "./components/sections/WhatDefinesUs";
import StayingConnected from "./components/sections/StayingConnected";

function App() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(function () {
      setLoading(false);
    }, 2100);

    return function () {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!wrapperRef.current || !contentRef.current) {
      return;
    }

    const lenis = new Lenis({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      duration: 1.2,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return function () {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Preloader visible={loading} />
      <div className="flex h-screen bg-nestly-cream overflow-hidden">
        <Sidebar />
        <main
          ref={wrapperRef}
          className="flex-1 min-w-0 p-4 h-screen overflow-y-auto"
        >
          <div ref={contentRef}>
            <Hero />
            <Locations />
            <FeatureGrid />
            <StudentLiving />
            <Community />
            <WhatDefinesUs />
            <StayingConnected />
            <Footer />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
