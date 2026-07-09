import { Eye, RotateCcw } from "lucide-react";
import { useState } from "react";
import Lightbox from "../ui/Lightbox";

const loungeImage = "/images/hero/lounge-area.webp";
const gymImage = "/images/community/V2.jpeg";

const allImages = [loungeImage, gymImage];

export default function CommunityLivingSpaces() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [hover, setHover] = useState<{
    visible: boolean;
    x: number;
    y: number;
    imageIndex: number;
  }>({ visible: false, x: 0, y: 0, imageIndex: 0 });

  function handleMove(
    e: React.MouseEvent<HTMLDivElement>,
    imageIndex: number
  ) {
    const rect = e.currentTarget.getBoundingClientRect();
    setHover({
      visible: true,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      imageIndex,
    });
  }

  function handleLeave() {
    setHover(function (prev) {
      return { ...prev, visible: false };
    });
  }

  function openLightbox() {
    setLightboxIndex(hover.imageIndex);
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
        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr_1fr] gap-4">
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

          <div
            className="relative h-[260px] md:h-[420px] rounded-3xl overflow-hidden border border-white/20 cursor-pointer"
            onMouseMove={function (e) {
              handleMove(e, 0);
            }}
            onMouseLeave={handleLeave}
            onClick={openLightbox}
          >
            <img
              src={loungeImage}
              alt="Nestly common lounge"
              className="w-full h-full object-cover"
            />
            <span className="absolute top-4 right-4 bg-black/70 text-white rounded-full px-4 py-2 text-xs font-display font-bold whitespace-nowrap">
              Common lounge
            </span>
          </div>

          <div
            className="relative h-[260px] md:h-[420px] rounded-3xl overflow-hidden border border-white/20 cursor-pointer"
            onMouseMove={function (e) {
              handleMove(e, 1);
            }}
            onMouseLeave={handleLeave}
            onClick={openLightbox}
          >
            <img
              src={gymImage}
              alt="Nestly gym"
              className="w-full h-full object-cover"
            />
            <span className="absolute top-4 right-4 bg-black/70 text-white rounded-full px-4 py-2 text-xs font-display font-bold whitespace-nowrap">
              24/7 Gym
            </span>
          </div>
        </div>
      </div>

      {hover.visible && (
        <div
          className="fixed pointer-events-none bg-nestly-orange rounded-full w-14 h-14 flex items-center justify-center z-[60] transition-opacity duration-150"
          style={{
            left: hover.x,
            top: hover.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          <Eye size={22} className="text-white" />
        </div>
      )}

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
