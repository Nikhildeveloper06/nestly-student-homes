import { Eye, RotateCcw } from "lucide-react";
import { useState } from "react";
import Lightbox from "../ui/Lightbox";

const gymImage = "/images/community/V2.jpeg";
const socialImage = "/images/hero/lounge-area.webp";
const allImages = [gymImage, socialImage];

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
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  return (
    <div
      className="relative h-[260px] md:h-[420px] rounded-3xl overflow-hidden border border-black/10 cursor-pointer"
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
          className="absolute pointer-events-none bg-nestly-black rounded-full w-14 h-14 flex items-center justify-center z-10"
          style={{ left: pos.x, top: pos.y, transform: "translate(-50%, -50%)" }}
        >
          <Eye size={22} className="text-white" />
        </div>
      )}
    </div>
  );
}

export default function CommunitySpacesSection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  function closeLightbox() {
    setLightboxIndex(null);
  }
  function lightboxNext() {
    setLightboxIndex(function (prev) {
      return prev === null ? prev : (prev + 1) % allImages.length;
    });
  }
  function lightboxPrev() {
    setLightboxIndex(function (prev) {
      return prev === null ? prev : (prev - 1 + allImages.length) % allImages.length;
    });
  }

  return (
    <section className="mt-4">
      <div className="bg-nestly-red rounded-3xl p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr_1fr] gap-4">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="font-display font-bold text-2xl md:text-3xl leading-tight">
                Spaces that bring
                <br />
                people together
              </h2>
              <p className="text-sm mt-4">
                Shared spaces designed for real life - to work, relax,
                move and connect. Not just to pass time, but to share it,
                your way.
              </p>
            </div>

            <div className="bg-nestly-purple rounded-full px-6 py-3 flex items-center justify-center gap-2 font-display font-medium mt-4">
              360 view
              <RotateCcw size={16} />
            </div>
          </div>

          <HoverImage
            src={gymImage}
            alt="Nestly gym"
            label="24/7 Gym"
            onOpen={function () {
              setLightboxIndex(0);
            }}
          />

          <HoverImage
            src={socialImage}
            alt="Nestly social area"
            label="Social areas"
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
