import BookingHero from "../components/sections/BookingHero";
import BookingFlow from "../components/sections/BookingFlow";
import WhatsIncluded from "../components/sections/WhatsIncluded";
import ScrollReveal from "../components/ui/ScrollReveal";

export default function BookUnitPage() {
  return (
    <>
      <BookingHero />
      <BookingFlow />
      <ScrollReveal>
        <WhatsIncluded />
      </ScrollReveal>
    </>
  );
}
