export default function CareersHero() {
  return (
    <section className="page-enter mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[65vh] md:h-[calc(100vh-6.5rem)]">
        <div className="bg-nestly-green rounded-3xl p-6 md:p-8 flex flex-col justify-between h-full">
          <span className="border border-black rounded-full px-4 py-2 w-fit text-sm font-medium">
            Careers at Nestly
          </span>
          <div>
            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">
              Help us build the
              <br />
              future of student living.
            </h1>
            <p className="mt-6 text-black/90 text-sm md:text-base">
              We're a growing team across property operations, community,
              and customer experience - working every day to make student
              housing feel less like renting and more like home. If
              you're hands-on, care about people, and want real
              responsibility early, we'd like to hear from you.
            </p>
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden border border-black/10 h-full">
          <img
            src="/images/gallery/S4.webp"
            alt="Nestly team at work"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
