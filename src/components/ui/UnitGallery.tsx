import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function UnitGallery({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  function next() {
    setIndex(function (prev) {
      return (prev + 1) % images.length;
    });
  }

  function prev() {
    setIndex(function (prev) {
      return (prev - 1 + images.length) % images.length;
    });
  }

  function startTimer() {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
    }
    intervalRef.current = window.setInterval(next, 5000);
  }

  useEffect(function () {
    startTimer();
    return function () {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, [images.length]);

  function handleNext() {
    next();
    startTimer();
  }

  function handlePrev() {
    prev();
    startTimer();
  }

  return (
    <div className="relative h-[280px] sm:h-[360px] md:h-[460px]">
      <div className="relative w-full h-full overflow-hidden rounded-3xl">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{
            width: images.length * 100 + "%",
            transform: "translateX(-" + index * (100 / images.length) + "%)",
          }}
        >
          {images.map(function (src, i) {
            const secondSrc = images[(i + 1) % images.length];
            return (
              <div
                key={i}
                className="flex gap-4 h-full shrink-0"
                style={{ width: 100 / images.length + "%" }}
              >
                <div className="flex-[2.6] rounded-3xl overflow-hidden border border-black">
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 rounded-3xl overflow-hidden border border-black">
                  <img src={secondSrc} alt="" className="w-full h-full object-cover" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full shadow-lg py-4 px-3 flex flex-col items-center gap-3 z-10">
        <button
          onClick={handleNext}
          className="w-7 h-7 flex items-center justify-center hover:opacity-70 transition-opacity"
        >
          <ChevronRight size={18} />
        </button>
        <div className="w-5 h-px bg-black/60" />
        <button
          onClick={handlePrev}
          className="w-7 h-7 flex items-center justify-center hover:opacity-70 transition-opacity"
        >
          <ChevronLeft size={18} />
        </button>
      </div>
    </div>
  );
}
