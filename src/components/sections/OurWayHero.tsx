export default function OurWayHero() {
  return (
    <section className="page-enter mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[75vh] md:h-[calc(100vh-6.5rem)]">
        <div className="bg-nestly-orange rounded-3xl p-6 md:p-8 flex flex-col justify-between h-full">
          <span className="border border-black rounded-full px-4 py-2 w-fit text-sm font-medium">
            Our Philosophy
          </span>

          <div>
            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">
              Living, simplified.
              <br />
              Life, unscripted.
            </h1>
            <p className="mt-6 text-black/90 text-sm md:text-base">
              We designed Nestly around one idea: your home should adapt
              to your life, not the other way around. No rigid routines,
              no unnecessary hassle - just a space that gives you room to
              study, rest, work and connect, exactly how you want to.
            </p>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden border border-black/10 h-full">
          <img
            src="/images/gallery/S2.webp"
            alt="Nestly student living"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
