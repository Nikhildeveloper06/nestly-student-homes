import { useState } from "react";
import { Sunrise, Sun, Sunset, Moon } from "lucide-react";

const moments = [
  {
    key: "morning",
    label: "Morning",
    Icon: Sunrise,
    color: "bg-nestly-orange",
    image: "/images/gallery/S6.webp",
    text: "Slow starts or early lectures - your kitchen, your coffee, your pace. No queues, no shared schedules to work around.",
  },
  {
    key: "afternoon",
    label: "Afternoon",
    Icon: Sun,
    color: "bg-nestly-blue",
    image: "/images/community/V2.jpeg",
    text: "Deep focus in your private workspace, or a change of scenery in the shared lounge when you need people around you.",
  },
  {
    key: "evening",
    label: "Evening",
    Icon: Sunset,
    color: "bg-nestly-red",
    image: "/images/community/V3.jpeg",
    text: "Gym session, a home-cooked dinner, or catching up with neighbours in the common areas - whatever the day calls for.",
  },
  {
    key: "night",
    label: "Night",
    Icon: Moon,
    color: "bg-nestly-purple",
    image: "/images/student-living/V1.jpeg",
    text: "A quiet room built for real rest, with 24/7 security so winding down never comes with a second thought.",
  },
];

export default function DayInLife() {
  const [active, setActive] = useState(0);
  const current = moments[active];
  const Icon = current.Icon;

  return (
    <section className="mt-4">
      <div className="bg-nestly-cream border border-black/10 rounded-3xl p-6 md:p-8">
        <span className="border border-black rounded-full px-4 py-2 w-fit text-sm font-medium inline-block">
          A Day in Our Way of Living
        </span>

        <div className="flex flex-wrap gap-2 mt-6">
          {moments.map(function (moment, i) {
            const MIcon = moment.Icon;
            const isActive = i === active;
            return (
              <button
                key={moment.key}
                onClick={function () {
                  setActive(i);
                }}
                className={
                  "flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-300 " +
                  (isActive
                    ? moment.color + " scale-105"
                    : "bg-white border border-black/20 hover:border-black")
                }
              >
                <MIcon size={16} strokeWidth={1.5} />
                {moment.label}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="relative rounded-3xl overflow-hidden h-[280px] md:h-[380px] border border-black/10">
            {moments.map(function (moment, i) {
              return (
                <img
                  key={moment.key}
                  src={moment.image}
                  alt={moment.label}
                  className={
                    "absolute inset-0 w-full h-full object-cover transition-opacity duration-700 " +
                    (i === active ? "opacity-100" : "opacity-0")
                  }
                />
              );
            })}
          </div>

          <div className={current.color + " rounded-3xl p-6 md:p-8 flex flex-col justify-center transition-colors duration-500"}>
            <Icon size={28} strokeWidth={1.5} />
            <h3 className="font-display font-bold text-2xl md:text-3xl mt-4">
              {current.label}
            </h3>
            <p className="mt-4 text-sm md:text-base">{current.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
