import { Wifi, Snowflake, Sofa, ShieldCheck, Dumbbell, Sparkles } from "lucide-react";

const perks = [
  { Icon: Sofa, label: "Fully furnished", color: "bg-nestly-orange" },
  { Icon: Wifi, label: "Super-fast WiFi", color: "bg-nestly-blue" },
  { Icon: Snowflake, label: "Heating & cooling", color: "bg-nestly-green" },
  { Icon: ShieldCheck, label: "24/7 security", color: "bg-nestly-red" },
  { Icon: Dumbbell, label: "Gym access", color: "bg-nestly-purple" },
  { Icon: Sparkles, label: "Zero hidden fees", color: "bg-nestly-orange" },
];

export default function WhatsIncluded() {
  return (
    <section className="mt-4">
      <h2 className="font-display font-bold text-2xl md:text-3xl text-center mb-4">
        Every unit includes
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
