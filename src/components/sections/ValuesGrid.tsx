import { useState } from "react";
import { Feather, Shuffle, Scale, Users } from "lucide-react";

const values = [
  {
    color: "bg-nestly-green",
    number: "1",
    title: "Simplicity",
    image: "/images/gallery/S6.webp",
    items: [
      "All-inclusive rent, one monthly payment",
      "Move-in ready from day one",
      "No furniture to source or assemble",
      "Digital everything - contracts, payments, support",
    ],
  },
  {
    color: "bg-nestly-orange",
    number: "2",
    title: "Flexibility",
    image: "/images/gallery/S7.webp",
    items: [
      "Choose your unit tier and upgrade anytime",
      "Shared spaces open access, 24/7",
      "Join community events - or skip them",
      "Contracts built around academic terms",
    ],
  },
  {
    color: "bg-nestly-blue",
    number: "3",
    title: "Balance",
    image: "/images/gallery/S8.webp",
    items: [
      "Private space for focus and rest",
      "Shared space for connection, on your terms",
      "Gym and wellness access built in",
      "Quiet hours respected across every unit",
    ],
  },
];

function Column({
  data,
  hovered,
  onEnter,
  onLeave,
}: {
  data: (typeof values)[number];
  hovered: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <div
      className="flex flex-col h-[520px] gap-4"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div
        className={data.color + " smooth-expand rounded-3xl p-6 overflow-hidden flex-none"}
        style={{ height: hovered ? "380px" : "120px" }}
      >
        <div className="flex items-start gap-3">
          <span className="bg-nestly-black text-white rounded-full w-8 h-8 flex items-center justify-center font-display font-bold text-sm shrink-0">
            {data.number}
          </span>
          <h3 className="font-display font-bold text-xl md:text-2xl">
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
                  style={{ animationDelay: 0.1 + i * 0.06 + "s" }}
                >
                  {item}
                </p>
              );
            })}
          </div>
        )}
      </div>

      <div className="smooth-expand flex-1 min-h-0 rounded-3xl overflow-hidden border border-black/10">
        <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default function ValuesGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="mt-4">
      <div className="text-center mb-4">
        <h2 className="font-display font-bold text-2xl md:text-4xl">
          The values behind the lifestyle
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {values.map(function (val, i) {
          return (
            <Column
              key={val.number}
              data={val}
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
