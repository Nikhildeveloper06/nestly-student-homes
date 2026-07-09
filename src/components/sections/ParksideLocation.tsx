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
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3B6FE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="6 13 12 19 18 13" />
    </svg>
  );
}

export default function ParksideLocation() {
  return (
    <section className="mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:items-stretch">
        <div className="bg-nestly-orange border border-black/10 rounded-3xl p-5 md:p-6">
          <span className="border border-black rounded-full px-4 py-2 w-fit text-sm font-medium inline-block">
            Location
          </span>

          <div className="flex items-start gap-3 mt-5">
            <LocationPin />
            <div>
              <p className="font-display font-semibold text-sm">12, Example Road</p>
              <p className="text-xs text-black/80">560001 Bengaluru, India</p>
            </div>
          </div>

          <div className="mt-3">
            <p className="font-display font-bold text-sm">hello@nestly.example</p>
            <p className="font-display font-bold text-sm">+91 98765 43210</p>
          </div>

          <h2 className="font-display font-bold text-2xl sm:text-3xl mt-5">
            Close to everything that matters
          </h2>

          <p className="mt-3 text-black/80 text-sm">
            Just a short walk from major colleges, with easy access to the
            city centre, you're always close to where you need to be. And
            when you need a breather, the neighbourhood park is right
            around the corner.
          </p>

          <p className="font-display font-bold mt-5 mb-3 text-sm">
            You're just a walk away:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {walkTimes.map(function (item) {
              return (
                <div
                  key={item.label}
                  className="bg-nestly-red rounded-xl p-3 flex flex-col justify-center"
                >
                  <span className="font-display font-bold text-lg text-white">
                    {item.time}
                  </span>
                  <span className="text-white text-[11px] mt-0.5 leading-tight">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-4 h-[300px] md:h-full">
          <div className="relative rounded-3xl overflow-hidden bg-nestly-orange border border-black/10 flex-1">
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
              <span className="bg-nestly-red text-white rounded-full px-3 py-1.5 text-xs font-bold mb-1.5 whitespace-nowrap">
                Nestly Parkside
              </span>
              <LocationPin />
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden flex-1 border border-black/10">
            <img
              src="/images/community/V2.jpeg"
              alt="Nestly Parkside entrance"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-4 bg-nestly-red rounded-3xl py-4 px-4 md:px-8 flex items-center justify-between">
        <div className="flex gap-1">
          <ArrowDown />
          <ArrowDown />
        </div>
        <h3 className="font-display font-bold text-lg sm:text-xl md:text-3xl text-white text-center">
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
