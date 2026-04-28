import Header from "@/src/components/Header";
import Hero from "@/src/components/sections/Hero";
import FlagshipEcosystem from "@/src/components/sections/FlagshipEcosystem";
import FeaturedWork from "@/src/components/sections/FeaturedWork";
import Capabilities from "@/src/components/sections/Capabilities";
import BuilderEnvironment from "@/src/components/sections/BuilderEnvironment";
import Education from "@/src/components/sections/Education";
import Contact from "@/src/components/sections/Contact";
import { Fragment } from "react";

const Index = () => {
  return (
    <Fragment>
      <div className="page-content">
        <Header />
        <main>
          <Hero />
          <FlagshipEcosystem />
          <FeaturedWork />
          <Capabilities />
          <BuilderEnvironment />
          <Education />
          <Contact />
        </main>
      </div>
    </Fragment>
  );
};

export default Index;
