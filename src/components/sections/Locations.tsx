import Marquee from "../ui/Marquee";

const amenities = [
  "Social areas",
  "Private kitchen & bathroom",
  "24/7 Security",
  "Fast and reliable maintenance",
  "Smart living",
];

function TransitPin({ top, left }: { top: string; left: string }) {
  return (
    <div
      className="absolute w-6 h-6 rounded-full bg-white border-2 border-nestly-blue flex items-center justify-center text-nestly-blue text-xs font-bold"
      style={{ top, left }}
    >
      T
    </div>
  );
}

export default function Locations() {
  return (
    <section id="section-locations" className="mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-nestly-blue rounded-3xl p-8 flex flex-col justify-between text-white min-h-[420px]">
          <button className="border border-white rounded-full px-4 py-2 w-fit text-sm font-medium">
            Locations
          </button>

          <div className="mt-8">
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight">
              Where your everyday
              <br />
              just works
            </h2>
            <p className="mt-6 text-white/90 max-w-md">
              Wake up, step out, you're there. Campus, classes, nights out -
              all within easy reach. No time wasted. Because at Nestly,
              location isn't random. It's chosen to match your rhythm and
              make life work better.
            </p>
          </div>

          <div className="mt-8">
            <p className="font-display font-bold mb-3">Explore what's</p>
            <div className="flex gap-3">
              <span className="bg-white/20 rounded-full px-4 py-2 text-sm">
                Coming soon
              </span>
              <span className="bg-nestly-red rounded-full px-4 py-2 text-sm font-bold text-white">
                Move-in ready!
              </span>
            </div>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden bg-nestly-orange min-h-[420px]">
          <svg
            className="absolute inset-0 w-full h-full opacity-40"
            viewBox="0 0 400 400"
            preserveAspectRatio="none"
          >
            <path d="M0,80 H400 M0,160 H400 M0,240 H400 M0,320 H400 M80,0 V400 M160,0 V400 M240,0 V400 M320,0 V400" stroke="#111111" strokeWidth="2" strokeOpacity="0.15" />
          </svg>

          <TransitPin top="15%" left="30%" />
          <TransitPin top="35%" left="60%" />
          <TransitPin top="55%" left="20%" />
          <TransitPin top="70%" left="70%" />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <span className="bg-nestly-blue text-white rounded-full px-4 py-2 text-sm font-bold mb-2 whitespace-nowrap">
              Nestly Parkside
            </span>
            <div
              className="w-6 h-8 bg-nestly-black"
              style={{
                clipPath: "polygon(50% 100%, 0 40%, 0 0, 100% 0, 100% 40%)",
              }}
            />
          </div>

          <span className="absolute bottom-3 left-4 text-nestly-black/50 text-xs font-medium">
            Map preview
          </span>
        </div>
      </div>

      <div className="mt-4">
        <Marquee items={amenities} />
      </div>
    </section>
  );
}
