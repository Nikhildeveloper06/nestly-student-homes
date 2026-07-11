import { Eye, RotateCcw } from "lucide-react";
import { useState } from "react";
import Lightbox from "../ui/Lightbox";

const loungeImage = "/images/gallery/S5.webp";
const gymImage = "/images/gallery/S6.webp";

const allImages = [loungeImage, gymImage];

function HoverImage({
  src,
  alt,
  label,
  onOpen,
}: {
  src: string;
  alt: string;
  label: string;
  onOpen: () => void;
}) {
  const [hovering, setHovering] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }

  return (
    <div
      className="relative h-[260px] md:h-[420px] rounded-3xl overflow-hidden border border-white/20 cursor-pointer"
      onMouseEnter={function () {
        setHovering(true);
      }}
      onMouseMove={handleMove}
      onMouseLeave={function () {
        setHovering(false);
      }}
      onClick={onOpen}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />

      <span className="absolute top-4 right-4 bg-black/70 text-white rounded-full px-4 py-2 text-xs font-display font-bold whitespace-nowrap">
        {label}
      </span>

      {hovering && (
        <div
          className="absolute pointer-events-none bg-nestly-orange rounded-full w-14 h-14 flex items-center justify-center z-10"
          style={{
            left: pos.x,
            top: pos.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          <Eye size={22} className="text-white" />
        </div>
      )}
    </div>
  );
}

export default function CommunityLivingSpaces() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

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

          <HoverImage
            src={loungeImage}
            alt="Nestly common lounge"
            label="Common lounge"
            onOpen={function () {
              setLightboxIndex(0);
            }}
          />

          <HoverImage
            src={gymImage}
            alt="Nestly gym"
            label="24/7 Gym"
            onOpen={function () {
              setLightboxIndex(1);
            }}
          />
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
