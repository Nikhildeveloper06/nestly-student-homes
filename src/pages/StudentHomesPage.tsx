import ImageCarousel from "../components/ui/ImageCarousel";

const carouselImages = [
  "/images/hero/lounge-area.webp",
  "/images/student-living/V1.jpeg",
  "/images/community/V2.jpeg",
  "/images/community/V3.jpeg",
];

export default function StudentHomesPage() {
  return (
    <section className="mt-4 grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-4">
      <div className="bg-nestly-cream border border-black/10 rounded-3xl p-6 md:p-8 flex flex-col justify-between min-h-[420px] md:min-h-[600px]">
        <span className="border border-black rounded-full px-4 py-2 w-fit text-sm font-medium">
          Nestly Parkside
        </span>

        <div>
          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">
            Student accommodation
            <br />
            at Nestly Parkside
          </h1>
          <p className="mt-6 text-black/80 text-sm md:text-base">
            Fully equipped and move-in ready, our units provide everything
            you need to hit "student mode" from day one. Designed around
            your daily flow, Nestly Parkside features a 24/7 gym, a laundry
            room, and social spaces. Whether you're preparing for finals or
            catching up with friends, you'll find the perfect balance to
            live, study and unwind.
          </p>
        </div>
      </div>

      <div className="rounded-3xl overflow-hidden min-h-[320px] md:min-h-[600px]">
        <ImageCarousel images={carouselImages} />
      </div>
    </section>
  );
}
