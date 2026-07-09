import { useEffect, useState } from "react";

const tagline = "Unique Student Homes";

export default function Preloader({ visible }: { visible: boolean }) {
  const [typed, setTyped] = useState("");

  useEffect(() => {
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
        "fixed inset-0 z-[100] bg-nestly-cream flex flex-col items-center justify-center gap-5 transition-opacity duration-700 " +
        (visible ? "opacity-100" : "opacity-0 pointer-events-none")
      }
    >
      <h1 className="preloader-logo font-display font-bold text-6xl md:text-8xl text-nestly-black">
        nestly.
      </h1>

      <p className="font-body text-xs md:text-sm tracking-[0.2em] uppercase text-nestly-black/70 h-5">
        {typed}
        <span className="inline-block w-[2px] h-3.5 bg-nestly-black ml-1 align-middle animate-pulse" />
      </p>

      <div className="w-44 h-1 bg-black/10 rounded-full overflow-hidden mt-2">
        <div className="h-full bg-nestly-blue preloader-progress" />
      </div>
    </div>
  );
}
