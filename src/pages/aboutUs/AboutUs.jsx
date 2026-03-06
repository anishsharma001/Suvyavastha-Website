import React from 'react'
import ThoughtfulTechnology from '../../components/aboutUs/ThoughtfulTechnology'
import AboutSuvyavastha from '../../components/aboutUs/AboutSuvyavastha '
import MissionVision from '../../components/aboutUs/MissionVision'
import WhatWeBelieve from '../../components/aboutUs/WhatWeBelieve '
import WhatWeAre from '../../components/hero/WhatWeAre'
import DecadeSection from '../../components/aboutUs/DecadeSection'
import ServiceSitemap from '../../components/hero/ServiceSitemap'
import MeetTheTeam from '../../components/aboutUs/MeetTheTeam'

export const AboutUs = () => {
  return (
    <div>
        <ThoughtfulTechnology />
        <AboutSuvyavastha />
        <MissionVision />
        <WhatWeBelieve />
        <WhatWeAre />
        <MeetTheTeam />
        <DecadeSection />
        <ServiceSitemap />
    </div>
  )
}
