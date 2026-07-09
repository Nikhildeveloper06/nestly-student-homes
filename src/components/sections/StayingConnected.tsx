function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="white" />
    </svg>
  );
}

function ArrowDiagonal() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

type MovingItem =
  | { type: "photo"; src: string; caption?: string }
  | { type: "blue"; text: string };

const movingItems: MovingItem[] = [
  { type: "photo", src: "/images/community/V2.jpeg" },
  {
    type: "photo",
    src: "/images/student-living/V1.jpeg",
    caption: "5 things that make hostel life so much easier.",
  },
  { type: "photo", src: "/images/community/V3.jpeg" },
  { type: "photo", src: "/images/hero/lounge-area.webp" },
  {
    type: "blue",
    text: "Take our quiz and find out which unit matches your vibe.",
  },
];

const doubled = [...movingItems, ...movingItems];

const CARD_SIZE = "w-[220px] h-[320px] sm:w-[260px] sm:h-[380px] md:w-[320px] md:h-[460px]";

function MovingCard({ item }: { item: MovingItem }) {
  if (item.type === "blue") {
    return (
      <div className={"bg-nestly-blue rounded-3xl p-5 md:p-6 flex flex-col justify-between shrink-0 text-white " + CARD_SIZE}>
        <div className="bg-black/70 rounded-md p-1.5 w-fit">
          <InstagramIcon />
        </div>
        <p className="font-display font-bold text-base md:text-xl leading-tight">
          {item.text}
        </p>
      </div>
    );
  }

  return (
    <div className={"relative rounded-3xl overflow-hidden shrink-0 " + CARD_SIZE}>
      <img
        src={item.src}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute top-3 left-3 bg-black/70 rounded-md p-1.5">
        <InstagramIcon />
      </div>
      {item.caption && (
        <div className="absolute bottom-3 left-3 right-3 bg-nestly-orange rounded-2xl p-3 md:p-4">
          <p className="font-display font-bold text-sm md:text-lg leading-tight">
            {item.caption}
          </p>
        </div>
      )}
    </div>
  );
}

export default function StayingConnected() {
  return (
    <section className="mt-4">
      <div className="flex gap-4">
        <div className={"bg-nestly-purple rounded-3xl p-5 md:p-6 flex flex-col justify-between shrink-0 " + CARD_SIZE}>
          <span className="border border-black rounded-full px-4 py-2 w-fit text-xs md:text-sm font-medium">
            Instagram
          </span>
          <h2 className="font-display font-bold text-2xl md:text-4xl leading-tight">
            Staying
            <br />
            connected
          </h2>
        </div>

        <div className="flex-1 min-w-0 overflow-hidden">
          <div className="flex gap-4 cards-marquee-track">
            {doubled.map(function (item, i) {
              return <MovingCard item={item} key={i} />;
            })}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-3 md:gap-4 mt-4">
        <div className="bg-nestly-red rounded-full px-6 md:px-8 py-4 md:py-5 flex items-center justify-center">
          <span className="font-display font-bold text-base md:text-lg whitespace-nowrap">Join our newsletter</span>
        </div>
        <div className="bg-nestly-orange rounded-full px-6 md:px-8 py-4 md:py-5 flex items-center">
          <span className="text-sm">Your email here</span>
        </div>
        <button className="bg-nestly-black rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center self-center md:self-auto mx-auto md:mx-0">
          <ArrowDiagonal />
        </button>
      </div>
    </section>
  );
}
