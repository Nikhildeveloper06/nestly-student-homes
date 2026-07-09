import { useEffect, useRef } from "react";
import Lenis from "lenis";
import Sidebar from "./components/layout/Sidebar";
import Hero from "./components/sections/Hero";
import Locations from "./components/sections/Locations";

function App() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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
    <div className="flex h-screen bg-nestly-cream overflow-hidden">
      <Sidebar />
      <main
        ref={wrapperRef}
        className="flex-1 min-w-0 p-4 h-screen overflow-y-auto"
      >
        <div ref={contentRef}>
          <Hero />
          <Locations />
        </div>
      </main>
    </div>
  );
}

export default App;
