function ArrowDiagonal() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

const cards = [
  {
    title: "For Every Student",
    text: "Whether you're moving from Delhi, Mumbai, Bengaluru or a small town, Nestly feels like home from day one - private space when you need it, good company when you don't.",
    img: "/images/gallery/S4.webp",
  },
  {
    title: "Built With Purpose",
    text: "Fast WiFi for online classes, quiet corners for exam season, and common areas made for chai breaks with friends. Every detail is planned around real student life.",
    img: "/images/gallery/S5.webp",
  },
  {
    title: "With Care",
    text: "Parents trust us, students love us. 24/7 security, verified move-ins, and a support team that's always a call away - so you can focus on college, not chores.",
    img: "/images/gallery/S6.webp",
  },
];

export default function WhatDefinesUs() {
  return (
    <section className="mt-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((card) => (
          <div key={card.title} className="bg-nestly-blue rounded-3xl p-4 flex flex-col gap-4">
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center px-2 pb-2">
              <h3 className="font-display font-bold text-2xl">{card.title}</h3>
              <p className="mt-2 text-sm text-black/80">{card.text}</p>
            </div>
          </div>
        ))}
      </div>

      <a
        href="#way-of-living"
        className="mt-4 bg-nestly-black text-white rounded-full py-5 px-6 flex items-center justify-center gap-2 font-display font-medium"
      >
        Our way of living
        <ArrowDiagonal />
      </a>
    </section>
  );
}
