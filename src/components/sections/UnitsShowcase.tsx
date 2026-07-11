import { Link } from "react-router-dom";
import {
  Ruler,
  Sofa,
  Sparkles,
  BedDouble,
  LayoutGrid,
  Briefcase,
  Refrigerator,
  Bath,
  Wifi,
  Tv,
  Wind,
  DoorOpen,
  Phone,
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  RotateCcw,
} from "lucide-react";
import UnitGallery from "../ui/UnitGallery";

const tiers = [
  { name: "Kick Unit", price: "18,000", active: false },
  { name: "Boost Unit", price: "21,000", active: true },
  { name: "Flex Unit", price: "24,000", active: false },
  { name: "Vibe Unit", price: "27,000", active: false },
];

const galleryImages = [
  "/images/hero/lounge-area.webp",
  "/images/student-living/V1.jpeg",
  "/images/community/V2.jpeg",
  "/images/community/V3.jpeg",
];

const features = [
  { Icon: Ruler, label: "17-22 sqm" },
  { Icon: Sofa, label: "Fully furnished" },
  { Icon: Sparkles, label: "Fully equipped" },
  { Icon: BedDouble, label: "120cm or 140cm double bed" },
  { Icon: LayoutGrid, label: "Anatomical mattress" },
  { Icon: Briefcase, label: "Private workspace" },
  { Icon: Refrigerator, label: "Private kitchen" },
  { Icon: Bath, label: "Private bathroom" },
  { Icon: Wifi, label: "Super-Fast WiFi" },
  { Icon: Tv, label: "Smart TV" },
  { Icon: Wind, label: "Air-Condition" },
  { Icon: DoorOpen, label: "Balcony" },
];

export default function UnitsShowcase() {
  return (
    <section className="mt-4">
      <div className="border border-black rounded-3xl p-4 sm:p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-4">
          <div className="md:sticky md:top-4 md:self-start flex flex-col gap-3 h-fit">
            {tiers.map(function (tier) {
              return (
                <div
                  key={tier.name}
                  className={
                    "rounded-full px-6 py-4 border flex items-center justify-between " +
                    (tier.active
                      ? "bg-nestly-black text-white border-nestly-black"
                      : "bg-nestly-cream text-black border-black")
                  }
                >
                  <div>
                    <p className="font-display font-bold text-lg leading-tight">{tier.name}</p>
                    <p className="text-sm mt-0.5">From Rs {tier.price} / month</p>
                  </div>
                  {tier.active ? <ArrowRight size={18} /> : <ArrowUpRight size={18} />}
                </div>
              );
            })}

            <Link to="/book-unit" className="bg-nestly-green rounded-full px-6 py-4 text-center font-display font-bold flex items-center justify-center gap-2">
              Book your Unit
              <ArrowUpRight size={18} />
            </Link>

            <div className="flex items-center gap-2 justify-center text-sm mt-2">
              <Phone size={16} />
              <span>Call us at +91 98765 43210</span>
            </div>
          </div>

          <div>
            <UnitGallery images={galleryImages} />

            <div className="mt-6 pt-6 border-t border-black/10 flex flex-wrap items-center gap-3 justify-between">
              <span className="border border-black rounded-full px-4 py-2 text-sm font-medium">
                Description
              </span>
              <span className="border border-black rounded-full px-5 py-2 text-sm">
                From <span className="font-display font-bold">Rs 21,000</span> per month
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6 mt-6">
              <div>
                <h2 className="font-display font-bold text-3xl md:text-4xl">
                  Boost Unit
                </h2>
                <p className="text-lg mt-1">The extra boost that you need!</p>

                <p className="mt-4 text-black/80 text-sm md:text-base">
                  An upgrade that changes the game. Boost Units are our most
                  popular pick - balanced, upgraded, and just right. They
                  keep the smart, compact feel of Kick Units, while adding
                  that little something extra: higher floors, private
                  balconies, more natural light, or better views. Built to
                  give your everyday a little boost.
                </p>

                <p className="mt-4 text-sm">
                  Need more flexibility? Step up to the{" "}
                  <span className="font-bold underline">Flex Units</span>.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="relative bg-nestly-orange border border-black rounded-2xl p-5">
                  <div className="absolute -top-2 -right-2 bg-nestly-green rounded-full p-1">
                    <CheckCircle2 size={18} className="text-white" fill="currentColor" />
                  </div>
                  <p className="font-display font-bold">All-inclusive rent</p>
                  <p className="text-sm mt-2">
                    Your rent covers everything - electricity, water,
                    high-speed WiFi, heating, cooling, shared expenses, plus
                    unlimited access to all Community Living Spaces.
                  </p>
                </div>

                <div className="bg-nestly-purple border border-black rounded-full px-5 py-3 flex items-center justify-center gap-2 font-display font-medium">
                  360 view
                  <RotateCcw size={16} />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-5 mt-8 pt-6 border-t border-black/10">
              {features.map(function (feature) {
                const Icon = feature.Icon;
                return (
                  <div key={feature.label} className="flex items-center gap-3 text-sm">
                    <Icon size={20} strokeWidth={1.5} className="text-nestly-purple" />
                    <span>{feature.label}</span>
                  </div>
                );
              })}
            </div>

            <p className="mt-6 pt-4 border-t border-black/10 text-xs text-black/60">
              Each unit features: Anatomical mattress, mattress protector,
              two pillows, fridge, electric oven, electric hob, extractor
              hood, kettle, toaster, dish rack, smart TV, desk chair, desk
              lamp, air-conditioning, bathroom equipment, curtains, electric
              shutters, and decorative wall art.
            </p>
            <p className="mt-2 text-xs text-black/50">
              *Available in select units only.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
