import { useState } from "react";
import { Plus, X } from "lucide-react";

type Release = {
  date: string;
  title: string;
  content: string[];
};

const releases: Release[] = [
  {
    date: "March 2026",
    title: "Nestly expands to three new campus locations",
    content: [
      "Nestly today announced the opening of three new properties, extending all-inclusive student housing to more campuses. Each new location follows the same model - fully furnished units, community living spaces, and transparent, all-in pricing.",
      "The expansion reflects growing demand from students seeking housing that removes the usual friction of renting - hidden fees, rigid leases, and disconnected landlords.",
    ],
  },
  {
    date: "January 2026",
    title: "Nestly launches community events program across all properties",
    content: [
      "Starting this term, every Nestly property now runs a structured monthly calendar of community events, from wellness sessions to career workshops, coordinated by dedicated Community Managers at each site.",
      "The program formalizes what many residents already valued informally - shared spaces used not just for socializing, but for genuine connection and support.",
    ],
  },
  {
    date: "September 2025",
    title: "Nestly introduces flexible unit tiers to fit every budget",
    content: [
      "Nestly rolled out four distinct unit tiers - Kick, Boost, Flex and Vibe - giving students clearer choice over their living setup without sacrificing the all-inclusive pricing model.",
      "Each tier is designed around a different balance of space, location within the property, and amenities, allowing students to choose based on what matters most to them.",
    ],
  },
];

export default function PressReleases() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex(function (prev) {
      return prev === i ? null : i;
    });
  }

  return (
    <section className="mt-4">
      <h2 className="font-display font-bold text-2xl md:text-3xl text-center mb-4">
        Press releases
      </h2>
      <div className="flex flex-col gap-3">
        {releases.map(function (release, i) {
          const isOpen = openIndex === i;
          return (
            <button
              key={release.title}
              onClick={function () {
                toggle(i);
              }}
              className={
                "text-left border rounded-3xl p-5 md:p-6 transition-colors duration-300 " +
                (isOpen ? "bg-nestly-cream border-black" : "border-black/20 hover:border-black")
              }
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs text-black/50 font-medium">{release.date}</p>
                  <p className="font-display font-bold text-lg mt-1">{release.title}</p>
                </div>
                <span className="shrink-0 mt-1 transition-transform duration-300" style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}>
                  {isOpen ? <X size={24} strokeWidth={2.5} /> : <Plus size={24} strokeWidth={2.5} />}
                </span>
              </div>

              <div
                className="grid transition-[grid-template-rows] duration-500 ease-in-out"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <div className="pt-4 mt-4 border-t border-black/10 flex flex-col gap-3">
                    {release.content.map(function (paragraph, pi) {
                      return (
                        <p key={pi} className="text-sm text-black/80">
                          {paragraph}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
