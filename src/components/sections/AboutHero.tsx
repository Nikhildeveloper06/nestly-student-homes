export default function AboutHero() {
  return (
    <section className="page-enter mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[70vh] md:h-[calc(100vh-6.5rem)]">
        <div className="bg-nestly-blue rounded-3xl p-6 md:p-8 flex flex-col justify-between h-full">
          <span className="border border-black rounded-full px-4 py-2 w-fit text-sm font-medium">
            About Nestly
          </span>
          <div>
            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">
              Built by students,
              <br />
              for students.
            </h1>
            <p className="mt-6 text-black/90 text-sm md:text-base">
              Nestly started with a simple frustration: student housing
              shouldn't mean choosing between comfort, community and your
              budget. We set out to build homes that actually fit how
              students live today - fully furnished, all-inclusive, and
              designed around real life, not just a bed and four walls.
            </p>
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden border border-black/10 h-full">
          <img
            src="/images/gallery/S2.webp"
            alt="Nestly community"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
