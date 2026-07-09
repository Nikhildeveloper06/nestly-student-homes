function LocationPin() {
  return (
    <div
      className="w-6 h-6 bg-nestly-black shrink-0"
      style={{
        clipPath: "polygon(50% 100%, 0 40%, 0 0, 100% 0, 100% 40%)",
      }}
    />
  );
}

function TransitDot({ top, left }: { top: string; left: string }) {
  return (
    <div
      className="absolute w-6 h-6 rounded-full bg-white border-2 border-nestly-black flex items-center justify-center text-nestly-black text-xs font-bold"
      style={{ top, left }}
    >
      T
    </div>
  );
}

const walkTimes = [
  { time: "10'", label: "to the nearest campus gate" },
  { time: "1'", label: "to the nearest supermarket" },
  { time: "1'", label: "to the nearest bus stop" },
  { time: "20'", label: "to the metro station" },
  { time: "1'", label: "to the nearest cafe" },
  { time: "2'", label: "to the neighbourhood park" },
];

function ArrowDown() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3B6FE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="6 13 12 19 18 13" />
    </svg>
  );
}

export default function ParksideLocation() {
  return (
    <section className="mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-nestly-orange border border-black/10 rounded-3xl p-6 md:p-8">
          <span className="border border-black rounded-full px-4 py-2 w-fit text-sm font-medium inline-block">
            Location
          </span>

          <div className="flex items-start gap-3 mt-8">
            <LocationPin />
            <div>
              <p className="font-display font-semibold">12, Example Road</p>
              <p className="text-sm text-black/80">560001 Bengaluru, India</p>
            </div>
          </div>

          <div className="mt-4">
            <p className="font-display font-bold">hello@nestly.example</p>
            <p className="font-display font-bold">+91 98765 43210</p>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl mt-8">
            Close to everything that matters
          </h2>

          <p className="mt-4 text-black/80 text-sm md:text-base">
            Just a short walk from major colleges, with easy access to the
            city centre, you're always close to where you need to be. And
            when you need a breather, the neighbourhood park is right
            around the corner.
          </p>

          <p className="font-display font-bold mt-8 mb-4">
            You're just a walk away:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {walkTimes.map(function (item) {
              return (
                <div
                  key={item.label}
                  className="bg-nestly-red rounded-2xl p-4 flex flex-col justify-center"
                >
                  <span className="font-display font-bold text-2xl text-white">
                    {item.time}
                  </span>
                  <span className="text-white text-xs mt-1">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="relative rounded-3xl overflow-hidden bg-nestly-orange border border-black/10 min-h-[260px] flex-1">
            <svg
              className="absolute inset-0 w-full h-full opacity-40"
              viewBox="0 0 400 400"
              preserveAspectRatio="none"
            >
              <path
                d="M0,80 H400 M0,160 H400 M0,240 H400 M0,320 H400 M80,0 V400 M160,0 V400 M240,0 V400 M320,0 V400"
                stroke="#111111"
                strokeWidth="2"
                strokeOpacity="0.15"
              />
            </svg>
            <TransitDot top="20%" left="30%" />
            <TransitDot top="35%" left="55%" />
            <TransitDot top="70%" left="65%" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <span className="bg-nestly-red text-white rounded-full px-4 py-2 text-sm font-bold mb-2 whitespace-nowrap">
                Nestly Parkside
              </span>
              <LocationPin />
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden min-h-[220px] flex-1 border border-black/10">
            <img
              src="/images/community/V2.jpeg"
              alt="Nestly Parkside entrance"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-4 bg-nestly-red rounded-3xl py-6 px-6 md:px-10 flex items-center justify-between">
        <div className="flex gap-1">
          <ArrowDown />
          <ArrowDown />
        </div>
        <h3 className="font-display font-bold text-2xl sm:text-3xl md:text-5xl text-white text-center">
          Check out our Units
        </h3>
        <div className="flex gap-1">
          <ArrowDown />
          <ArrowDown />
        </div>
      </div>
    </section>
  );
}
