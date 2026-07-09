import { useEffect, useState } from "react";

const tagline = "Unique Student Homes";

const images = [
  "/images/hero/lounge-area.webp",
  "/images/student-living/V1.jpeg",
  "/images/community/V2.jpeg",
  "/images/community/V3.jpeg",
];

const tiles = [
  { top: "6%", left: "8%", width: 170, height: 230, mWidth: 90, mHeight: 120, delay: 0 },
  { top: "7%", left: "66%", width: 180, height: 240, mWidth: 95, mHeight: 125, delay: 0.16 },
  { top: "58%", left: "7%", width: 180, height: 240, mWidth: 95, mHeight: 125, delay: 0.31 },
  { top: "56%", left: "68%", width: 170, height: 230, mWidth: 90, mHeight: 120, delay: 0.47 },
  { top: "4%", left: "38%", width: 150, height: 200, mWidth: 78, mHeight: 105, delay: 0.63 },
  { top: "66%", left: "40%", width: 150, height: 200, mWidth: 78, mHeight: 105, delay: 0.79 },
  { top: "32%", left: "10%", width: 140, height: 190, mWidth: 72, mHeight: 98, delay: 0.94 },
  { top: "32%", left: "74%", width: 140, height: 190, mWidth: 72, mHeight: 98, delay: 1.1 },
];

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(function () {
    function check() {
      setIsMobile(window.innerWidth < 640);
    }
    check();
    window.addEventListener("resize", check);
    return function () {
      window.removeEventListener("resize", check);
    };
  }, []);

  return isMobile;
}

export default function Preloader({ visible }: { visible: boolean }) {
  const [typed, setTyped] = useState("");
  const isMobile = useIsMobile();

  useEffect(function () {
    if (!visible) {
      return;
    }

    setTyped("");
    let i = 0;

    const interval = setInterval(function () {
      i = i + 1;
      setTyped(tagline.slice(0, i));
      if (i >= tagline.length) {
        clearInterval(interval);
      }
    }, 70);

    return function () {
      clearInterval(interval);
    };
  }, [visible]);

  return (
    <div
      className={
        "fixed inset-0 z-[100] bg-nestly-cream overflow-hidden transition-opacity duration-700 " +
        (visible ? "opacity-100" : "opacity-0 pointer-events-none")
      }
    >
      {tiles.map(function (tile, i) {
        return (
          <div
            key={i}
            className="absolute rounded-2xl overflow-hidden preloader-tile"
            style={{
              top: tile.top,
              left: tile.left,
              width: isMobile ? tile.mWidth : tile.width,
              height: isMobile ? tile.mHeight : tile.height,
              animationDelay: tile.delay + "s",
            }}
          >
            <img
              src={images[i % images.length]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        );
      })}

      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="bg-nestly-cream/85 backdrop-blur-sm rounded-3xl px-6 py-6 sm:px-10 sm:py-8 md:px-14 md:py-10 flex flex-col items-center gap-4 sm:gap-5">
          <h1 className="preloader-logo font-display font-bold text-4xl sm:text-6xl md:text-8xl text-nestly-black">
            nestly.
          </h1>

          <p className="font-body text-[10px] sm:text-xs md:text-sm tracking-[0.2em] uppercase text-nestly-black/70 h-5">
            {typed}
            <span className="inline-block w-[2px] h-3.5 bg-nestly-black ml-1 align-middle animate-pulse" />
          </p>

          <div className="w-32 sm:w-44 h-1 bg-black/10 rounded-full overflow-hidden mt-1 sm:mt-2">
            <div className="h-full bg-nestly-blue preloader-progress" />
          </div>
        </div>
      </div>
    </div>
  );
}
