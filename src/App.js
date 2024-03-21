// import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import FakeNav from "./components/FakeNav";
import arrow from "./images/down.png";
function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const [fakeNav, setFakeNave] = useState(false);
  const [slideNav, setSlideNav] = useState(false);

  if (openMenu) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "auto";
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSlideNav(true);
      } else {
        setSlideNav(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-10 left-10 bg-blue-400 w-9 h-9 rounded-full flex justify-center items-center cursor-pointer transition-all z-50 rotate-180 ${
          slideNav ? "scale-100" : "scale-0"
        }`}
      >
        <img src={arrow} alt="" />
      </div>
      {/* <div
        className={`fixed top-0 left-0 w-full z-40 transition-all ${
          slideNav ? "translate-y-0" : "-translate-y-full"
        } `}
      >
        <FakeNav setOpenMenu={setFakeNave} openMenu={fakeNav} />
      </div> */}
      <Navbar setOpenMenu={setOpenMenu} openMenu={openMenu} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
