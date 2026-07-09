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
