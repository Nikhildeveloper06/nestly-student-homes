import { Eye, RotateCcw, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Lightbox from "../ui/Lightbox";

const loungeImage = "/images/hero/lounge-area.webp";
const gymImages = [
  "/images/community/V2.jpeg",
  "/images/community/V3.jpeg",
  "/images/student-living/V1.jpeg",
];

const allImages = [loungeImage].concat(gymImages);

export default function CommunityLivingSpaces() {
  const [gymIndex, setGymIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const intervalRef = useRef<number | null>(null);

  function nextGym() {
    setGymIndex(function (prev) {
      return (prev + 1) % gymImages.length;
    });
  }

  function prevGym() {
    setGymIndex(function (prev) {
      return (prev - 1 + gymImages.length) % gymImages.length;
    });
  }

  function startTimer() {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
    }
    intervalRef.current = window.setInterval(nextGym, 5000);
  }

  useEffect(function () {
    startTimer();
    return function () {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, []);

  function handleGymNext() {
    nextGym();
    startTimer();
  }

  function handleGymPrev() {
    prevGym();
    startTimer();
  }

  function openLightbox(i: number) {
    setLightboxIndex(i);
  }

  function closeLightbox() {
    setLightboxIndex(null);
  }

  function lightboxNext() {
    setLightboxIndex(function (prev) {
      if (prev === null) {
        return prev;
      }
      return (prev + 1) % allImages.length;
    });
  }

  function lightboxPrev() {
    setLightboxIndex(function (prev) {
      if (prev === null) {
        return prev;
      }
      return (prev - 1 + allImages.length) % allImages.length;
    });
  }

  return (
    <section className="mt-4">
      <div className="bg-nestly-blue rounded-3xl p-6 md:p-8 text-white">
        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr_1fr] gap-4 h-[260px] md:h-[420px]">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="font-display font-bold text-2xl md:text-3xl leading-tight">
                Community Living
                <br />
                Spaces
              </h2>
              <p className="text-sm text-white/85 mt-4">
                Social areas to relax and connect, a self-service laundry
                room that makes life easier, and a fully equipped gym with
                24/7 access, so you never lose your rhythm.
              </p>
            </div>

            <div className="bg-nestly-purple rounded-full px-6 py-3 flex items-center justify-center gap-2 font-display font-medium text-black mt-4">
              360 view
              <RotateCcw size={16} />
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden h-[260px] md:h-full border border-white/20">
            <img
              src={loungeImage}
              alt="Nestly common lounge"
              className="w-full h-full object-cover"
            />
            <span className="absolute top-4 right-4 bg-black/70 text-white rounded-full px-4 py-2 text-xs font-display font-bold whitespace-nowrap">
              Common lounge
            </span>
            <button
              onClick={function () {
                openLightbox(0);
              }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-nestly-orange rounded-full w-14 h-14 flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition-transform duration-300"
            >
              <Eye size={22} className="text-white" />
            </button>
          </div>

          <div className="relative rounded-3xl overflow-hidden h-[260px] md:h-full border border-white/20">
            <div className="relative w-full h-full overflow-hidden">
              <div
                className="flex h-full transition-transform duration-700 ease-in-out"
                style={{
                  width: gymImages.length * 100 + "%",
                  transform: "translateX(-" + gymIndex * (100 / gymImages.length) + "%)",
                }}
              >
                {gymImages.map(function (src, i) {
                  return (
                    <img
                      key={i}
                      src={src}
                      alt=""
                      className="w-full h-full object-cover shrink-0"
                      style={{ width: 100 / gymImages.length + "%" }}
                    />
                  );
                })}
              </div>
            </div>

            <span className="absolute top-4 right-4 bg-black/70 text-white rounded-full px-4 py-2 text-xs font-display font-bold whitespace-nowrap">
              24/7 Gym
            </span>

            <button
              onClick={function () {
                openLightbox(1 + gymIndex);
              }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-nestly-orange rounded-full w-14 h-14 flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition-transform duration-300"
            >
              <Eye size={22} className="text-white" />
            </button>

            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full shadow-lg py-4 px-3 flex flex-col items-center gap-3 z-10">
              <button
                onClick={handleGymNext}
                className="w-7 h-7 flex items-center justify-center hover:opacity-70 transition-opacity"
              >
                <ChevronRight size={18} className="text-black" />
              </button>
              <div className="w-5 h-px bg-black/60" />
              <button
                onClick={handleGymPrev}
                className="w-7 h-7 flex items-center justify-center hover:opacity-70 transition-opacity"
              >
                <ChevronLeft size={18} className="text-black" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={allImages}
          index={lightboxIndex}
          onClose={closeLightbox}
          onNext={lightboxNext}
          onPrev={lightboxPrev}
        />
      )}
    </section>
  );
}
