import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../navbar/navbar';
import Footer from '../footer/Footer';

const MainLayout = () => {
  const topRef = useRef(null);
  const location = useLocation();
  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);
  return (
    <>
    <div ref={topRef}></div>
      <div className="bg-[#F7F7F8] flex flex-col">
          <Navbar />
          <div className="">
            <Outlet />
          </div>
          <Footer />
        </div>
    </>
  );
};

export default MainLayout;
