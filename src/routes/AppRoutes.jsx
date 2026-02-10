import { Route, Routes } from "react-router-dom";
import MainLayout from "../pages/layout/MainLayout";
import PagesNotFound from "../pages/404/PagesNotFound";
import { Hero } from "../pages/hero/Hero";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<PagesNotFound />} />
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Hero/>} />
      </Route>
    </Routes>
  );
};
