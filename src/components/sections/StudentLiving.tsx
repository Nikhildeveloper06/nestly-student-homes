import { Sofa, Laptop, UtensilsCrossed, Bath, Tv, Wind, Wifi, DoorOpen } from "lucide-react";
import Marquee from "../ui/Marquee";
import TunnelGrid from "../ui/TunnelGrid";

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

export default function StudentLiving() {
  return (
    <section id="section-02" className="mt-4">
      <Marquee items={amenities} bgColor="bg-nestly-blue" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="rounded-3xl border border-black/10 p-6 md:p-8 flex flex-col justify-between min-h-[600px]">
          <button className="border border-black rounded-full px-4 py-2 w-fit text-sm font-medium">
            Our Units
          </button>

          <div className="mt-6">
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight">
              Student living,
              <br />
              redefined.
            </h2>
            <p className="mt-6 text-black/80 max-w-md text-sm md:text-base">
              A new concept in student living - fully furnished, move-in
              ready units designed for comfort and ease. Nestly is more
              than just a place to stay; it's a place to belong. Join a
              vibrant community and experience student living like never
              before.
            </p>
          </div>

          <div
            className="grid gap-x-8 gap-y-4 mt-6"
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
            className="mt-6 bg-nestly-black text-white rounded-full px-6 py-4 flex items-center justify-center gap-2 font-display font-medium w-fit"
          >
            Check out our Units
            <span>-&gt;</span>
          </a>
        </div>

        <div className="rounded-3xl overflow-hidden bg-nestly-cream border border-black/10 min-h-[600px]">
          <TunnelGrid />
        </div>
      </div>
    </section>
  );
}
