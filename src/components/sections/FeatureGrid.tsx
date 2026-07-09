function SwayingPlant() {
  return (
    <div className="absolute top-6 right-6 w-14 h-14 float-icon">
      <svg viewBox="0 0 60 60" className="w-full h-full sway-icon">
        <rect x="20" y="42" width="20" height="14" rx="3" fill="#3B6FE0" />
        <path
          d="M30,42 C30,30 22,26 18,16 C24,20 28,26 30,34 C32,24 28,16 24,8 C32,12 36,22 30,34 C34,24 40,20 44,14 C42,24 36,32 30,42 Z"
          fill="white"
          fillOpacity="0.9"
        />
      </svg>
    </div>
  );
}

function PhotoCard({
  src,
  position,
}: {
  src: string;
  position?: string;
}) {
  return (
    <div className="rounded-3xl overflow-hidden h-full">
      <img
        src={src}
        alt="Nestly community space"
        className="w-full h-full object-cover"
        style={{ objectPosition: position || "center" }}
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
        " rounded-3xl p-5 md:p-6 flex flex-col text-nestly-black h-full overflow-hidden"
      }
    >
      <h3 className="font-display font-bold text-lg md:text-xl">{title}</h3>
      <p className="font-display font-semibold mt-1 mb-3 text-sm">
        {subtitle}
      </p>
      <ul className="flex flex-col gap-2 overflow-y-auto">
        {items.map((item) => (
          <li key={item} className="border-b border-black/20 pb-2 text-xs md:text-sm">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function IntroCard() {
  return (
    <div className="relative bg-nestly-red rounded-3xl p-5 md:p-6 flex flex-col justify-between text-white h-full overflow-hidden">
      <span className="border border-white rounded-full px-4 py-2 w-fit text-sm">
        All-Inclusive Living
      </span>

      <SwayingPlant />

      <div>
        <h2 className="font-display font-bold text-2xl md:text-3xl leading-tight">
          One Unit.
          <br />
          An entire universe.
        </h2>
        <p className="font-display font-semibold mt-3 text-sm">
          Your rent covers everything
        </p>
        <p className="mt-2 text-white/90 text-xs md:text-sm">
          Each unit is its own universe, combining spaces and services for
          effortless, all-inclusive student living. No hidden fees, no
          surprises.
        </p>
      </div>
    </div>
  );
}

export default function FeatureGrid() {
  return (
    <section className="mt-4">
      <div
        className="grid gap-4 h-[clamp(480px,75vh,700px)]"
        style={{
          gridTemplateColumns: "1fr 1.3fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gridTemplateAreas: '"intro photo1 security" "intro community photo2"',
        }}
      >
        <div style={{ gridArea: "intro" }}>
          <IntroCard />
        </div>

        <div style={{ gridArea: "photo1" }}>
          <PhotoCard src="/images/hero/lounge-area.webp" position="top" />
        </div>

        <div style={{ gridArea: "security" }}>
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
        </div>

        <div style={{ gridArea: "community" }}>
          <ListCard
            color="bg-nestly-purple"
            title="Community living spaces"
            subtitle="Open access, 24/7"
            items={["Fully equipped gym", "Self-service laundry room", "Social areas"]}
          />
        </div>

        <div style={{ gridArea: "photo2" }}>
          <PhotoCard src="/images/hero/lounge-area.webp" position="bottom" />
        </div>
      </div>
    </section>
  );
}
