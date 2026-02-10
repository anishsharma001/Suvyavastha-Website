import { useEffect } from "react";
import { Outlet } from 'react-router-dom';
import { Navbar } from '../navbar/Navbar';
import Footer from '../footer/Footer';
import { useLocation } from "react-router-dom";

const MainLayout = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100); // wait for render
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
