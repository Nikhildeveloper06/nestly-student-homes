import Marquee from "../ui/Marquee";

const marqueeItems = [
  "Different ways of living",
  "Social days & nights",
  "Different rhythms",
  "Health & wellness",
];

export default function CommunityHero() {
  return (
    <section className="page-enter mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[560px] md:h-[620px]">
        <div className="rounded-3xl overflow-hidden border border-black/10 h-full">
          <img
            src="/images/community/V3.jpeg"
            alt="Nestly entrance"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-nestly-red rounded-3xl p-6 md:p-8 flex flex-col justify-between h-full">
          <span className="border border-black rounded-full px-4 py-2 w-fit text-sm font-medium">
            How we see community
          </span>

          <div>
            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">
              More than shared spaces.
              <br />
              A shared way of living.
            </h1>
            <p className="mt-6 text-black/90 text-sm md:text-base">
              <span className="font-semibold">
                We're not chasing forced friendships or a fixed playbook.
                <br />
                We're building the right conditions for connection to
                happen naturally.
              </span>{" "}
              Community at Nestly grows through everyday moments, shared
              spaces, and the freedom to join in - or step back - whenever
              it feels right. It's not something you sign up for. It's
              something that unfolds, day by day.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <Marquee items={marqueeItems} bgColor="bg-nestly-purple" />
      </div>
    </section>
  );
}
