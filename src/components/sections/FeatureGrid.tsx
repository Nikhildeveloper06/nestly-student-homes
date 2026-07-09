import { useEffect, useRef } from "react";
import type { RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function PhotoCard({ src }: { src: string }) {
  return (
    <div className="w-[420px] h-full shrink-0 rounded-3xl overflow-hidden">
      <img
        src={src}
        alt="Nestly community space"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

function ListCard({
  color,
  title,
  subtitle,
  items,
}: {
  color: string;
  title: string;
  subtitle: string;
  items: string[];
}) {
  return (
    <div
      className={
        color +
        " w-[340px] h-full shrink-0 rounded-3xl p-8 flex flex-col text-nestly-black"
      }
    >
      <h3 className="font-display font-bold text-2xl">{title}</h3>
      <p className="font-display font-semibold mt-1 mb-6">{subtitle}</p>
      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <li key={item} className="border-b border-black/20 pb-3 text-sm">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function IntroCard() {
  return (
    <div className="bg-nestly-red w-[420px] h-full shrink-0 rounded-3xl p-8 flex flex-col justify-between text-white">
      <span className="border border-white rounded-full px-4 py-2 w-fit text-sm">
        All-Inclusive Living
      </span>
      <div>
        <h2 className="font-display font-bold text-4xl leading-tight">
          One Unit.
          <br />
          An entire universe.
        </h2>
        <p className="font-display font-semibold mt-4">
          Your rent covers everything
        </p>
        <p className="mt-3 text-white/90 text-sm">
          Each unit is its own universe, combining spaces and services for
          effortless, all-inclusive student living. Everything is included
          in your rent. No hidden fees, no surprises.
        </p>
      </div>
    </div>
  );
}

export default function FeatureGrid({
  scrollerRef,
}: {
  scrollerRef: RefObject<HTMLDivElement | null>;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current || !scrollerRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const track = trackRef.current;
    const scroller = scrollerRef.current;

    const ctx = gsap.context(function () {
      const distance = track.scrollWidth - section.clientWidth;

      gsap.to(track, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          scroller: scroller,
          start: "top top",
          end: "+=" + distance,
          scrub: 1,
          pin: true,
          pinType: "transform",
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return function () {
      ctx.revert();
    };
  }, [scrollerRef]);

  return (
    <section
      ref={sectionRef}
      className="relative mt-4 h-[560px] rounded-3xl overflow-hidden"
    >
      <div ref={trackRef} className="flex gap-4 h-full w-max">
        <IntroCard />
        <PhotoCard src="/images/hero/lounge-area.webp" />
        <ListCard
          color="bg-nestly-purple"
          title="Community living spaces"
          subtitle="Open access, 24/7"
          items={["Fully equipped gym", "Self-service laundry room", "Social areas"]}
        />
        <ListCard
          color="bg-nestly-orange"
          title="Security"
          subtitle="Day and night"
          items={[
            "24/7 CCTV Surveillance",
            "7/7 Night patrol",
            "High-security entrance door",
            "Smart and secure access control",
          ]}
        />
        <PhotoCard src="/images/hero/lounge-area.webp" />
        <ListCard
          color="bg-nestly-green"
          title="Smart Living"
          subtitle="Designed for everyday ease"
          items={[
            "Digital mobile key",
            "Shared spaces reservations",
            "Maintenance ticketing system",
            "Laundry - EasyPay",
            "Digital intercom",
          ]}
        />
        <ListCard
          color="bg-nestly-blue"
          title="Support"
          subtitle="We've got you covered"
          items={[
            "24/7 Resident support",
            "Check-in & Onboarding assistance",
            "Fast request handling",
            "Fast maintenance support",
          ]}
        />
      </div>
    </section>
  );
}
