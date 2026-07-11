export default function BookingHero() {
  return (
    <section className="page-enter mt-4">
      <div className="bg-nestly-purple rounded-3xl p-6 md:p-10 text-center">
        <span className="border border-black rounded-full px-4 py-2 w-fit text-sm font-medium inline-block">
          Book a Unit
        </span>
        <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mt-6 leading-tight">
          Reserve your Nestly unit
          <br />
          in just a few minutes.
        </h1>
        <p className="mt-4 text-black/80 text-sm md:text-base max-w-xl mx-auto">
          Pick your unit, choose your move-in details, and tell us a
          little about yourself. Our team will confirm everything within
          48 hours.
        </p>
      </div>
    </section>
  );
}
