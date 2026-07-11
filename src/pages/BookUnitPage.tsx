import BookingHero from "../components/sections/BookingHero";
import BookingFlow from "../components/sections/BookingFlow";
import WhatsIncluded from "../components/sections/WhatsIncluded";
import ScrollReveal from "../components/ui/ScrollReveal";

export default function BookUnitPage() {
  return (
    <>
      <div className="page-enter mt-4 flex flex-col gap-4 h-[calc(100vh-2rem)]">
        <BookingHero />
        <BookingFlow />
      </div>

      <ScrollReveal>
        <WhatsIncluded />
      </ScrollReveal>
    </>
  );
}
