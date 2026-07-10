import { useState } from "react";

function ArrowDown() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="6 13 12 19 18 13" />
    </svg>
  );
}

const columns = [
  {
    color: "bg-nestly-orange",
    number: "1",
    title: "Practical ease and convenience, every day",
    image: "/images/hero/lounge-area.webp",
    items: [
      "All-inclusive rent - covering electricity, water, internet, heating/cooling and shared expenses.",
      "Smooth check-in and check-out, with our team by your side.",
      "Guided tours, in person or online.",
      "We take care of your unit - fast support, whenever you need it.",
      "Simple monthly payments, all done digitally.",
      "A two-month deposit secures your spot.",
    ],
  },
  {
    color: "bg-nestly-green",
    number: "2",
    title: "A new take on student living",
    image: "/images/student-living/V1.jpeg",
    items: [
      "Community-first approach",
      "Seamless student living experience",
      "Smart technology",
      "Thoughtfully designed spaces",
      "Sustainable living",
    ],
  },
  {
    color: "bg-nestly-blue",
    number: "3",
    title: "Security and comfort from day one",
    image: "/images/community/V2.jpeg",
    items: [
      "24/7 Security",
      "24/7 Support",
      "Fast & reliable maintenance",
      "24/7 Hot water",
      "Super-Fast WiFi",
    ],
  },
];

function Column({
  data,
  hovered,
  onEnter,
  onLeave,
}: {
  data: (typeof columns)[number];
  hovered: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <div
      className="flex flex-col h-[560px] gap-4"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div
        className={data.color + " smooth-expand rounded-3xl p-6 overflow-hidden flex-none"}
        style={{ height: hovered ? "420px" : "128px" }}
      >
        <div className="flex items-start gap-3">
          <span className="bg-nestly-black text-white rounded-full w-8 h-8 flex items-center justify-center font-display font-bold text-sm shrink-0">
            {data.number}
          </span>
          <h3 className="font-display font-bold text-xl md:text-2xl leading-tight">
            {data.title}
          </h3>
        </div>

        {hovered && (
          <div className="flex flex-col gap-3 mt-6">
            {data.items.map(function (item, i) {
              return (
                <p
                  key={item}
                  className="fade-slide-item text-sm border-b border-black/20 pb-3"
                  style={{ animationDelay: 0.15 + i * 0.06 + "s" }}
                >
                  {item}
                </p>
              );
            })}
          </div>
        )}
      </div>

      <div className="smooth-expand flex-1 min-h-0 rounded-3xl overflow-hidden border border-black">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
          style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }}
        />
      </div>
    </div>
  );
}

export default function WhyNestlyDifferent() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {columns.map(function (col, i) {
          return (
            <Column
              key={col.number}
              data={col}
              hovered={hoveredIndex === i}
              onEnter={function () {
                setHoveredIndex(i);
              }}
              onLeave={function () {
                setHoveredIndex(null);
              }}
            />
          );
        })}
      </div>
    </section>
  );
}
