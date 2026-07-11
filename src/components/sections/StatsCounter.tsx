import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 100, suffix: "%", label: "Move-in ready units" },
  { value: 48, suffix: "h", label: "Average response time" },
  { value: 30, suffix: "+", label: "Community events yearly" },
  { value: 24, suffix: "/7", label: "Amenity access" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(function () {
    const el = ref.current;
    if (!el) {
      return;
    }
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !started) {
            setStarted(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return function () {
      observer.disconnect();
    };
  }, [started]);

  useEffect(function () {
    if (!started) {
      return;
    }
    const duration = 1200;
    const startTime = performance.now();

    function tick(now: number) {
      const progress = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }
    requestAnimationFrame(tick);
  }, [started, value]);

  return (
    <div ref={ref} className="font-display font-bold text-4xl md:text-6xl">
      {display}
      {suffix}
    </div>
  );
}

export default function StatsCounter() {
  return (
    <section className="mt-4">
      <div className="bg-nestly-black text-white rounded-3xl p-6 md:p-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(function (stat) {
            return (
              <div key={stat.label} className="text-center">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                <p className="text-xs md:text-sm text-white/70 mt-2">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
