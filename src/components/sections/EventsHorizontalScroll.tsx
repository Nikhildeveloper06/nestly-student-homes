import { useEffect, useRef, useState } from "react";
import { Sparkles, Heart, PartyPopper, Palette, Briefcase, HeartHandshake } from "lucide-react";

const PANEL_WIDTH = 34;

const pairs = [
  {
    color: "bg-nestly-green",
    Icon: Heart,
    title: "Health & Wellness",
    subtitle: "Move, breathe, and reset.",
    description: "Group workouts and mindfulness sessions built for both body and mind.",
    image: "/images/student-living/V1.jpeg",
    cardFirst: false,
  },
  {
    color: "bg-nestly-orange",
    Icon: PartyPopper,
    title: "Social Days & Nights",
    subtitle: "Laid-back hangouts and themed nights.",
    description: "From casual catch-ups to full-on parties - always welcoming, always at your own pace.",
    image: "/images/community/V2.jpeg",
    cardFirst: true,
  },
  {
    color: "bg-[#F5D033]",
    Icon: Palette,
    title: "Culture & Creativity",
    subtitle: "Spark ideas, try something new.",
    description: "Creative sessions, talks and city adventures that bring people together.",
    image: "/images/community/V3.jpeg",
    cardFirst: false,
  },
  {
    color: "bg-nestly-blue",
    Icon: Briefcase,
    title: "Career & Personal Development",
    subtitle: "Growth that goes beyond lectures.",
    description: "Practical talks and workshops on real skills and opportunities, grounded in everyday life.",
    image: "/images/hero/lounge-area.webp",
    cardFirst: true,
  },
  {
    color: "bg-nestly-purple",
    Icon: HeartHandshake,
    title: "Community Give-Back",
    subtitle: "Giving back to where we live.",
    description: "Initiatives that support our neighbourhood, the environment and the wider community.",
    image: "/images/student-living/V1.jpeg",
    cardFirst: false,
  },
];

export default function EventsHorizontalScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(function () {
    const el = sectionRef.current;
    if (!el) {
      return;
    }

    let scrollParent: HTMLElement | Window = window;
    let node = el.parentElement;
    while (node) {
      const style = window.getComputedStyle(node);
      if (style.overflowY === "auto" || style.overflowY === "scroll") {
        scrollParent = node;
        break;
      }
      node = node.parentElement;
    }

    function handleScroll() {
      if (!el) {
        return;
      }
      const rect = el.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) {
        setProgress(0);
        return;
      }
      const raw = -rect.top / scrollable;
      setProgress(Math.min(1, Math.max(0, raw)));
    }

    scrollParent.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return function () {
      scrollParent.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const totalPanels = pairs.length + 1;
  const trackWidth = totalPanels * PANEL_WIDTH;
  const maxTranslate = trackWidth - 100;

  return (
    <section ref={sectionRef} className="mt-4" style={{ height: "300vh" }}>
      <div className="sticky top-4 h-[calc(100vh-2rem)] overflow-hidden rounded-3xl">
        <div
          className="flex h-full gap-4"
          style={{
            width: trackWidth + "%",
            transform: "translateX(-" + progress * maxTranslate + "%)",
          }}
        >
          <div
            className="bg-nestly-purple rounded-3xl p-6 md:p-8 flex flex-col justify-between shrink-0 h-full"
            style={{ width: PANEL_WIDTH + "%" }}
          >
            <span className="border border-black rounded-full px-4 py-2 w-fit text-sm font-medium inline-flex items-center gap-2">
              <Sparkles size={16} />
              Events
            </span>

            <div>
              <h2 className="font-display font-bold text-2xl md:text-3xl leading-tight">
                What's on at Nestly
              </h2>
              <p className="mt-4 text-sm md:text-base text-black/80">
                Moments that shape your week - from wellbeing and
                creativity to social nights and cultural discoveries.
              </p>
              <p className="mt-6 font-display font-bold text-sm md:text-base">
                You pick what suits you.
                <br />
                We handle the rest.
              </p>
            </div>
          </div>

          {pairs.map(function (pair) {
            const Icon = pair.Icon;
            const card = (
              <div className={pair.color + " rounded-3xl p-5 flex flex-col justify-center gap-2 flex-[0.55]"}>
                <Icon size={22} strokeWidth={1.5} />
                <h3 className="font-display font-bold text-lg md:text-xl leading-tight">
                  {pair.title}
                </h3>
                <p className="font-semibold text-sm">{pair.subtitle}</p>
                <p className="text-xs md:text-sm">{pair.description}</p>
              </div>
            );
            const photo = (
              <div className="rounded-3xl overflow-hidden flex-1 border border-black/10">
                <img src={pair.image} alt="" className="w-full h-full object-cover" />
              </div>
            );

            return (
              <div
                key={pair.title}
                className="flex flex-col gap-4 shrink-0 h-full"
                style={{ width: PANEL_WIDTH + "%" }}
              >
                {pair.cardFirst ? card : photo}
                {pair.cardFirst ? photo : card}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
