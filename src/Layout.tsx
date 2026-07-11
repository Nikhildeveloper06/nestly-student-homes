import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Lenis from "lenis";
import Sidebar from "./components/layout/Sidebar";
import MobileNav from "./components/layout/MobileNav";
import Footer from "./components/layout/Footer";
import Preloader from "./components/ui/Preloader";

export default function Layout() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(function () {
    const timer = setTimeout(function () {
      setLoading(false);
      navigate("/", { replace: true });
    }, 2100);

    return function () {
      clearTimeout(timer);
    };
  }, []);

  useEffect(function () {
    if (!wrapperRef.current || !contentRef.current) {
      return;
    }

    if (wrapperRef.current) {
      wrapperRef.current.scrollTop = 0;
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
  }, [location.pathname]);

  return (
    <>
      <Preloader visible={loading} />
      <div className="flex h-screen bg-nestly-cream overflow-hidden">
        <Sidebar />
        <main
          ref={wrapperRef}
          className="flex-1 min-w-0 p-4 h-screen overflow-y-auto"
        >
          <MobileNav />
          <div ref={contentRef} className="max-w-[1920px] mx-auto">
            <Outlet />
            <Footer />
          </div>
        </main>
      </div>
    </>
  );
}
