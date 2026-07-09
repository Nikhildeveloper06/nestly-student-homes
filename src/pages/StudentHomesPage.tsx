import ImageCarousel from "../components/ui/ImageCarousel";
import ParksideLocation from "../components/sections/ParksideLocation";
import UnitsShowcase from "../components/sections/UnitsShowcase";

const carouselImages = [
  "/images/hero/lounge-area.webp",
  "/images/student-living/V1.jpeg",
  "/images/community/V2.jpeg",
  "/images/community/V3.jpeg",
];

export default function StudentHomesPage() {
  return (
    <>
      <section className="page-enter mt-4 grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-4 h-[75vh] md:h-[calc(100vh-2rem)]">
        <div className="bg-nestly-cream border border-black/10 rounded-3xl p-6 md:p-8 flex flex-col justify-between h-full">
          <span className="border border-black rounded-full px-4 py-2 w-fit text-sm font-medium">
            Nestly Parkside
          </span>

          <div>
            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">
              Move-in ready living
              <br />
              at Nestly Parkside
            </h1>
            <p className="mt-6 text-black/80 text-sm md:text-base">
              Every unit comes fully furnished and ready from day one.
              Built around how you actually live, Nestly Parkside includes
              a round-the-clock gym, self-service laundry, and shared
              spaces to unwind. Whether it's crunch time before exams or
              downtime with friends, you'll find the right balance between
              living, studying and relaxing.
            </p>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden h-full border border-black/10">
          <ImageCarousel images={carouselImages} />
        </div>
      </section>

      <ParksideLocation />
      <UnitsShowcase />
    </>
  );
}
