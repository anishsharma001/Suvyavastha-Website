import { Route, Routes } from "react-router-dom";
import MainLayout from "../pages/layout/MainLayout";
import PagesNotFound from "../pages/404/PagesNotFound";
import { Hero } from "../pages/hero/Hero";
import TransformationServices from "../components/hero/TransformationServices";
import IndustriesWeServe from "../components/hero/IndustriesWeServe";
import ExploreInsights from "../components/hero/ExploreInsight";
import WhatWeAre from "../components/hero/WhatWeAre";
import GetInTouch from "../components/GetInTouch/GetInTouch";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<PagesNotFound />} />
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Hero />} />
        {/* <Route path="services" element={<TransformationServices />} />
        <Route path="industries" element={<IndustriesWeServe />} />
        <Route path="blogs" element={<ExploreInsights />} />
        <Route path="company" element={<WhatWeAre />} />
        <Route path="contact" element={<GetInTouch />} /> */}
      </Route>
    </Routes>
  );
};
