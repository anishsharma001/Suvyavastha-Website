import React from 'react'
import HeroSection from '../../components/hero/HeroSection'
import ExecutionProcess from '../../components/hero/ExecutionProcess'
import TransformationServices from '../../components/hero/TransformationServices'
import TechnologyStackCarousel from '../../components/hero/TechnologyStack'
import IndustriesWeServe from '../../components/hero/IndustriesWeServe'
import WhatWeAre from '../../components/hero/WhatWeAre'
import ExploreInsights from '../../components/hero/ExploreInsight'
import GetInTouch from '../../components/GetInTouch/GetInTouch'
import WhatHappensNext from '../../components/hero/WhatHappensNext'
import ServiceSitemap from '../../components/hero/ServiceSitemap'
import OfficeLocation from '../../components/hero/OfficeLocation'

export const Hero = () => {
  return (
    <div className="w-full">
      <section id="hero" className="scroll-mt-24">
        <HeroSection />
      </section>

      <section id="execution" className="scroll-mt-24">
        <ExecutionProcess />
      </section>

      <section id="services" className="scroll-mt-24">
        <TransformationServices />
      </section>

      <section id="tech" className="scroll-mt-24">
        <TechnologyStackCarousel />
      </section>

      <section id="industries" className="scroll-mt-24">
        <IndustriesWeServe />
      </section>

      <section id="company" className="scroll-mt-24">
        <WhatWeAre />
      </section>

      <section id="blogs" className="scroll-mt-24">
        <ExploreInsights />
      </section>

      <section id="contact" className="scroll-mt-24">
        <GetInTouch />
      </section>

      <WhatHappensNext />
      <ServiceSitemap />
      <OfficeLocation />
    </div>
  );
};

