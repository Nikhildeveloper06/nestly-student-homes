import { Heart, TrendingUp, Users2, Coffee, ShieldCheck, Sparkles } from "lucide-react";

const perks = [
  { Icon: Heart, label: "Health coverage", color: "bg-nestly-red" },
  { Icon: TrendingUp, label: "Real growth paths", color: "bg-nestly-blue" },
  { Icon: Users2, label: "Close-knit teams", color: "bg-nestly-green" },
  { Icon: Coffee, label: "Flexible schedules", color: "bg-nestly-orange" },
  { Icon: ShieldCheck, label: "Job security", color: "bg-nestly-purple" },
  { Icon: Sparkles, label: "Property discounts", color: "bg-nestly-orange" },
];

export default function CareersCulture() {
  return (
    <section className="mt-4">
      <h2 className="font-display font-bold text-2xl md:text-3xl text-center mb-4">
        Why work with us
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {perks.map(function (perk) {
          const Icon = perk.Icon;
          return (
            <div
              key={perk.label}
              className={perk.color + " rounded-2xl p-4 flex flex-col items-center gap-2 text-center hover:-translate-y-1 transition-transform duration-300"}
            >
              <Icon size={22} strokeWidth={1.5} />
              <span className="text-xs font-medium">{perk.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
