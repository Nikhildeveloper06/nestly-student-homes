import { Sparkles, Heart, ShieldCheck } from "lucide-react";

function ArrowDown() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="6 13 12 19 18 13" />
    </svg>
  );
}

const highlights = [
  { Icon: Sparkles, text: "Practical ease and convenience, every day", color: "bg-nestly-orange" },
  { Icon: Heart, text: "A new take on student living", color: "bg-nestly-green" },
  { Icon: ShieldCheck, text: "Security and comfort from day one", color: "bg-nestly-blue" },
];

const photos = [
  "/images/hero/lounge-area.webp",
  "/images/student-living/V1.jpeg",
  "/images/community/V3.jpeg",
];

export default function WhyNestlyDifferent() {
  return (
    <section className="mt-4">
      <div className="bg-nestly-red rounded-3xl py-4 px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-end gap-1.5">
          <ArrowDown />
          <ArrowDown />
        </div>
        <h2 className="font-display font-bold text-lg sm:text-xl md:text-3xl text-black text-center">
          Why Nestly hits different.
        </h2>
        <div className="flex items-end gap-1.5">
          <ArrowDown />
          <ArrowDown />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
        {highlights.map(function (item) {
          const Icon = item.Icon;
          return (
            <div
              key={item.text}
              className={item.color + " rounded-full px-5 py-4 flex items-center gap-3 border border-black"}
            >
              <Icon size={20} strokeWidth={1.5} />
              <span className="text-sm font-medium">{item.text}</span>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
        {photos.map(function (src, i) {
          return (
            <div key={i} className="rounded-3xl overflow-hidden h-[220px] border border-black">
              <img src={src} alt="" className="w-full h-full object-cover" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
