import FeaturedProject from "./components/home/FeaturedProject";
import Hero from "./components/home/Hero";

import Reveal from "./components/ui/Reveal";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Reveal from="right">
        <FeaturedProject />
      </Reveal>
    </>
  );
}
