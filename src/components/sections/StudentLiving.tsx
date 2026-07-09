import { Sofa, Laptop, UtensilsCrossed, Bath, Tv, Wind, Wifi, DoorOpen } from "lucide-react";
import Marquee from "../ui/Marquee";

const leftFeatures = [
  { Icon: Sofa, label: "Fully furnished" },
  { Icon: Laptop, label: "Private workspace" },
  { Icon: UtensilsCrossed, label: "Private kitchen" },
  { Icon: Bath, label: "Private bathroom" },
];

const rightFeatures = [
  { Icon: Tv, label: "Smart TV" },
  { Icon: Wind, label: "Air-Conditioning" },
  { Icon: Wifi, label: "Super-Fast WiFi" },
  { Icon: DoorOpen, label: "Balcony" },
];

const amenities = [
  "24/7 Hot water",
  "Electric bike stations",
  "Elevator access",
  "Super-fast WiFi",
];

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="13 6 19 12 13 18" />
    </svg>
  );
}

export default function StudentLiving() {
  return (
    <section id="section-02" className="mt-4">
      <Marquee items={amenities} bgColor="bg-nestly-blue" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="rounded-3xl border border-black/10 p-6 md:p-8 flex flex-col gap-6 min-h-[440px]">
          <button className="border border-black rounded-full px-4 py-2 w-fit text-sm font-medium">
            Our Units
          </button>

          <div>
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight">
              Student living,
              <br />
              redefined.
            </h2>
            <p className="mt-4 text-black/80 max-w-md text-sm md:text-base">
              A new concept in student living - fully furnished, move-in
              ready units designed for comfort and ease. Nestly is more
              than just a place to stay; it's a place to belong. Join a
              vibrant community and experience student living like never
              before.
            </p>
          </div>

          <div
            className="grid gap-x-8 gap-y-4"
            style={{ gridTemplateColumns: "1fr 1fr", gridAutoFlow: "column", gridTemplateRows: "repeat(4, auto)" }}
          >
            {leftFeatures.concat(rightFeatures).map(({ Icon, label }) => (
              <div key={label} className="flex items-center gap-3 text-sm">
                <Icon size={20} strokeWidth={1.5} />
                <span>{label}</span>
              </div>
            ))}
          </div>

          <a
            href="#units"
            className="bg-nestly-black text-white rounded-full px-6 py-4 flex items-center justify-center gap-2 font-display font-medium w-fit"
          >
            Check out our Units
            <ArrowRight />
          </a>
        </div>

        <div className="rounded-3xl overflow-hidden border border-black/10 min-h-[440px]">
          <img
            src="/images/student-living/V1.jpeg"
            alt="Nestly student unit"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
