import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Lightbox({
  images,
  index,
  onClose,
  onNext,
  onPrev,
}: {
  images: string[];
  index: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4 sm:p-8">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/10 hover:bg-white/20 rounded-full w-11 h-11 flex items-center justify-center transition-colors"
      >
        <X size={22} className="text-white" />
      </button>

      <button
        onClick={onPrev}
        className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full w-12 h-12 flex items-center justify-center transition-colors"
      >
        <ChevronLeft size={24} className="text-white" />
      </button>

      <img
        src={images[index]}
        alt=""
        className="max-w-full max-h-full rounded-2xl object-contain"
      />

      <button
        onClick={onNext}
        className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full w-12 h-12 flex items-center justify-center transition-colors"
      >
        <ChevronRight size={24} className="text-white" />
      </button>
    </div>
  );
}
