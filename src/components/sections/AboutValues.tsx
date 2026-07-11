import { useState } from "react";

type ValueItem = {
  color: string;
  number: string;
  title: string;
  image: string;
  items: string[];
};

const values: ValueItem[] = [
  {
    color: "bg-nestly-orange",
    number: "1",
    title: "Student-first, always",
    image: "/images/gallery/S6.webp",
    items: [
      "Every decision starts with what students actually need",
      "Feedback loops built into every property",
      "Pricing that stays honest and predictable",
      "Support that responds like people, not a ticket queue",
    ],
  },
  {
    color: "bg-nestly-red",
    number: "2",
    title: "Radical transparency",
    image: "/images/gallery/S8.webp",
    items: [
      "No hidden fees, ever",
      "Clear contracts written in plain language",
      "Open pricing across every unit tier",
      "Honest answers, even when they're not what you want to hear",
    ],
  },
  {
    color: "bg-nestly-purple",
    number: "3",
    title: "Community by design",
    image: "/images/gallery/S1.webp",
    items: [
      "Shared spaces built for real connection",
      "Events that fit into student schedules",
      "A team that's present, not just on-call",
      "Neighbours who become friends, not strangers",
    ],
  },
];

function Column({
  data,
  hovered,
  onEnter,
  onLeave,
}: {
  data: ValueItem;
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

export default function AboutValues() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="mt-4">
      <div className="text-center mb-4">
        <h2 className="font-display font-bold text-2xl md:text-4xl">
          What we stand for
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
