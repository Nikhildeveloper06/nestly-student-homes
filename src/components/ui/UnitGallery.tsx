import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function UnitGallery({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

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

  return (
    <div className="relative rounded-3xl overflow-hidden h-[320px] sm:h-[420px] md:h-[520px]">
      <img
        src={images[index]}
        alt=""
        className="w-full h-full object-cover"
      />

      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3">
        <button
          onClick={next}
          className="bg-white/85 hover:bg-white rounded-full w-9 h-9 flex items-center justify-center transition-colors"
        >
          <ChevronRight size={18} />
        </button>
        <div className="w-px h-6 bg-white/70" />
        <button
          onClick={prev}
          className="bg-white/85 hover:bg-white rounded-full w-9 h-9 flex items-center justify-center transition-colors"
        >
          <ChevronLeft size={18} />
        </button>
      </div>
    </div>
  );
}
