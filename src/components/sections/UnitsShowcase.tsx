import { Ruler, BedDouble, Sofa, Briefcase, Wifi, Tv, Wind, Home as BalconyIcon, Phone } from "lucide-react";

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
  "/images/hero/lounge-area.webp",
];

const specs = [
  { Icon: Ruler, label: "17-22 sqm" },
  { Icon: BedDouble, label: "Queen size bed" },
  { Icon: Sofa, label: "Fully furnished" },
  { Icon: Briefcase, label: "Private workspace" },
  { Icon: Wifi, label: "Super-Fast WiFi" },
  { Icon: Tv, label: "Smart TV" },
  { Icon: Wind, label: "Air-Conditioning" },
  { Icon: BalconyIcon, label: "Balcony" },
];

export default function UnitsShowcase() {
  return (
    <section className="mt-4">
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-4">
        <div className="flex flex-col gap-3">
          {tiers.map(function (tier) {
            return (
              <div
                key={tier.name}
                className={
                  "rounded-2xl p-4 border " +
                  (tier.active
                    ? "bg-nestly-black text-white border-nestly-black"
                    : "bg-nestly-cream text-black border-black/20")
                }
              >
                <p className="font-display font-bold text-lg">{tier.name}</p>
                <p className="text-sm mt-1">From (Rs) {tier.price} / month</p>
              </div>
            );
          })}

          <div className="bg-nestly-green rounded-2xl p-4 text-center font-display font-bold">
            Book your Unit
          </div>

          <div className="flex items-center gap-2 justify-center text-sm">
            <Phone size={16} />
            <span>Call us at +91 98765 43210</span>
          </div>
        </div>

        <div>
          <div className="sticky top-4 flex gap-3 overflow-x-auto pb-2">
            {galleryImages.map(function (src, i) {
              return (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden shrink-0 w-[160px] h-[180px] md:w-[200px] md:h-[220px]"
                >
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 justify-between">
            <span className="border border-black rounded-full px-4 py-2 text-sm font-medium">
              Description
            </span>
            <span className="bg-nestly-orange rounded-full px-5 py-2 text-sm font-display font-bold">
              From Rs 21,000 per month
            </span>
          </div>

          <h2 className="font-display font-bold text-3xl md:text-4xl mt-6">
            Boost Unit
          </h2>
          <p className="text-lg mt-1">The extra boost that you need!</p>

          <p className="mt-4 text-black/80 text-sm md:text-base">
            An upgrade changes the game. Boost Units are our most popular
            choice - balanced, upgraded, and just right. They keep the
            smart, compact feel of Kick Units, while adding that little
            something that makes the difference: upper floors, private
            balconies, more natural light, or better views. Designed to
            give your everyday an extra boost.
          </p>

          <div className="mt-6 bg-nestly-orange rounded-2xl p-4">
            <p className="font-display font-bold">All-inclusive rent</p>
            <p className="text-sm mt-1">
              Your rent covers everything - electricity, water, high-speed
              WiFi, heating, cooling, shared expenses, plus unlimited
              access to all Community Living Spaces.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
            {specs.map(function (spec) {
              const Icon = spec.Icon;
              return (
                <div key={spec.label} className="flex items-center gap-2 text-sm">
                  <Icon size={18} strokeWidth={1.5} />
                  <span>{spec.label}</span>
                </div>
              );
            })}
          </div>

          <p className="mt-6 pt-4 border-t border-black/10 text-xs text-black/60">
            Each unit features: Anatomical mattress, mattress protector,
            two pillows, fridge, electric oven, kettle, toaster, dish
            rack, smart TV, desk chair, desk lamp, air-conditioning,
            curtains, full-length mirror and decorative wall art.
          </p>
        </div>
      </div>
    </section>
  );
}
