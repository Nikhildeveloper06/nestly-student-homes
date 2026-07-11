export default function BookingHero() {
  return (
    <div className="bg-nestly-purple rounded-3xl px-6 md:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
      <span className="border border-black rounded-full px-4 py-1.5 text-sm font-medium whitespace-nowrap">
        Book a Unit
      </span>
      <h1 className="font-display font-bold text-lg md:text-2xl text-center sm:text-right leading-tight">
        Reserve your Nestly unit in just a few minutes.
      </h1>
    </div>
  );
}
