// import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="">
      {/* <div
        className={`absolute top-0 ${
          openMenu ? "left-0" : "-left-full"
        } w-screen h-screen bg-black z-10 bg-opacity-25`}
      >
        <button></button>
      </div> */}
      <Navbar setOpenMenu={setOpenMenu} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
