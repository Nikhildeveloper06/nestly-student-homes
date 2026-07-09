import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function SlideImage({ src, direction }: { src: string; direction: "next" | "prev" }) {
  const [current, setCurrent] = useState(src);
  const [previous, setPrevious] = useState<string | null>(null);
  const [animating, setAnimating] = useState(false);

  useEffect(function () {
    if (src === current) {
      return;
    }
    setPrevious(current);
    setCurrent(src);
    setAnimating(false);

    const timer = window.setTimeout(function () {
      setAnimating(true);
    }, 20);

    const cleanupTimer = window.setTimeout(function () {
      setPrevious(null);
    }, 620);

    return function () {
      window.clearTimeout(timer);
      window.clearTimeout(cleanupTimer);
    };
  }, [src]);

  const enterFrom = direction === "next" ? "translate-x-full" : "-translate-x-full";
  const exitTo = direction === "next" ? "-translate-x-full" : "translate-x-full";

  return (
    <div className="relative w-full h-full overflow-hidden">
      {previous && (
        <img
          src={previous}
          alt=""
          className={
            "absolute inset-0 w-full h-full object-cover transition-transform duration-600 ease-in-out " +
            (animating ? exitTo : "translate-x-0")
          }
        />
      )}
      <img
        src={current}
        alt=""
        className={
          "absolute inset-0 w-full h-full object-cover transition-transform duration-600 ease-in-out " +
          (previous ? (animating ? "translate-x-0" : enterFrom) : "translate-x-0")
        }
      />
    </div>
  );
}

export default function UnitGallery({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const intervalRef = useRef<number | null>(null);

  function next() {
    setDirection("next");
    setIndex(function (prev) {
      return (prev + 1) % images.length;
    });
  }

  function prevSlide() {
    setDirection("prev");
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
    prevSlide();
    startTimer();
  }

  const firstImage = images[index];
  const secondImage = images[(index + 1) % images.length];

  return (
    <div className="relative flex gap-4 h-[280px] sm:h-[360px] md:h-[460px]">
      <div className="flex-[2.6] rounded-3xl overflow-hidden border border-black">
        <SlideImage src={firstImage} direction={direction} />
      </div>

      <div className="flex-1 rounded-3xl overflow-hidden border border-black">
        <SlideImage src={secondImage} direction={direction} />
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
