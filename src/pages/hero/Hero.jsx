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
    <div className='w-full'>
        <HeroSection />
        <ExecutionProcess />
        <TransformationServices />
        <TechnologyStackCarousel />
        <IndustriesWeServe />
        <WhatWeAre />
        <ExploreInsights />
        <GetInTouch />
        <WhatHappensNext />
        <ServiceSitemap />
        <OfficeLocation />
    </div>
  )
}
