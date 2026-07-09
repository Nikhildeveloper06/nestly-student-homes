function ArrowDiagonal() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

function ArrowDown() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F0A830" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="6 13 12 19 18 13" />
    </svg>
  );
}

export default function Community() {
  return (
    <section id="section-03" className="mt-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:items-stretch">
        <div className="relative rounded-3xl overflow-hidden h-[280px] md:h-auto">
          <img
            src="/images/community/V2.jpeg"
            alt="Nestly building entrance"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div className="bg-nestly-red rounded-3xl p-6 md:p-8 flex flex-col gap-8 text-nestly-black">
          <span className="border border-black rounded-full px-4 py-2 w-fit text-sm font-medium">
            Community
          </span>

          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight">
              A shared way of
              <br />
              living
            </h2>
            <p className="mt-4 text-black/80 text-sm md:text-base">
              At Nestly, community happens naturally. Through common
              spaces, shared moments, and experiences that bring people
              together - with the freedom to join in whenever and however
              you want.
            </p>
          </div>

          <a
            href="#community"
            className="bg-nestly-black text-white rounded-full px-6 py-4 flex items-center gap-2 w-fit font-display font-medium"
          >
            Join our community
            <ArrowDiagonal />
          </a>
        </div>

        <div className="relative rounded-3xl overflow-hidden h-[280px] md:h-auto">
          <img
            src="/images/community/V3.jpeg"
            alt="Nestly residents socializing"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="mt-4 bg-nestly-blue rounded-3xl py-6 px-6 md:px-10 flex items-center justify-between">
        <div className="flex gap-1">
          <ArrowDown />
          <ArrowDown />
        </div>
        <h3 className="font-display font-bold text-2xl sm:text-3xl md:text-5xl text-center">
          What defines us
        </h3>
        <div className="flex gap-1">
          <ArrowDown />
          <ArrowDown />
        </div>
      </div>
    </section>
  );
}
