export default function AboutStory() {
  return (
    <section className="mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:items-stretch">
        <div className="relative rounded-3xl overflow-hidden h-[280px] md:h-auto border border-black/10">
          <img
            src="/images/gallery/S5.webp"
            alt="Nestly common space"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="bg-nestly-cream border border-black/10 rounded-3xl p-6 md:p-8 flex flex-col justify-center gap-4">
          <span className="border border-black rounded-full px-4 py-2 w-fit text-sm font-medium">
            Our story
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight">
            From one building to a growing community.
          </h2>
          <p className="text-black/80 text-sm md:text-base">
            What began as a single property has grown into a network of
            student homes built around one idea: give students a place
            that supports both their studies and their social life,
            without the usual hassle of renting. Every unit, every shared
            space, and every policy exists to remove friction from
            student life.
          </p>
        </div>
      </div>
    </section>
  );
}
