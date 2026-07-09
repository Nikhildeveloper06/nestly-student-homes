import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function CrossfadeImage({ src }: { src: string }) {
  const [current, setCurrent] = useState(src);
  const [previous, setPrevious] = useState<string | null>(null);
  const [fadingIn, setFadingIn] = useState(true);

  useEffect(function () {
    if (src === current) {
      return;
    }
    setPrevious(current);
    setCurrent(src);
    setFadingIn(false);

    const timer = window.setTimeout(function () {
      setFadingIn(true);
    }, 30);

    return function () {
      window.clearTimeout(timer);
    };
  }, [src]);

  return (
    <div className="relative w-full h-full">
      {previous && (
        <img
          src={previous}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <img
        src={current}
        alt=""
        className={
          "absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out " +
          (fadingIn ? "opacity-100" : "opacity-0")
        }
      />
    </div>
  );
}

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

  const firstImage = images[index];
  const secondImage = images[(index + 1) % images.length];

  return (
    <div className="relative flex gap-4 h-[280px] sm:h-[360px] md:h-[460px]">
      <div className="flex-[2.6] rounded-3xl overflow-hidden border border-black">
        <CrossfadeImage src={firstImage} />
      </div>

      <div className="flex-1 rounded-3xl overflow-hidden border border-black">
        <CrossfadeImage src={secondImage} />
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
