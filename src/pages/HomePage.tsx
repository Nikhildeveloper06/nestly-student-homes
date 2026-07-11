import Seo from "../components/seo/Seo";
import Hero from "../components/sections/Hero";
import Locations from "../components/sections/Locations";
import FeatureGrid from "../components/sections/FeatureGrid";
import StudentLiving from "../components/sections/StudentLiving";
import Community from "../components/sections/Community";
import WhatDefinesUs from "../components/sections/WhatDefinesUs";
import StayingConnected from "../components/sections/StayingConnected";

export default function HomePage() {
  return (
    <>
      <Seo
        title="Nestly - Furnished Student Accommodation & Community Living"
        description="Nestly offers fully furnished, all-inclusive student accommodation with community living spaces, transparent pricing, and homes designed around real student life."
        path="/"
      />
      <Hero />
      <Locations />
      <FeatureGrid />
      <StudentLiving />
      <Community />
      <WhatDefinesUs />
      <StayingConnected />
    </>
  );
}
