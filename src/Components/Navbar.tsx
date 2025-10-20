import { useState } from "react";
import menuIcon from "../assets/menu.svg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header className="flex items-center h-16 px-6 shadow-md ">
        <span className="flex items-center header-box h-screen w-[797px] text-white font-bold text-2xl  bg-black">
          <img src="/logoRV1.png" alt="LogoRichard" className="" />
        </span>
        <div className="flex w-100 bg-white h-screen">
          <nav className="flex text-black items-center gap-6 ">
            <a className="hidden md:flex" href="#">
              About me
            </a>
            <a className="hidden md:flex" href="#">
              Skills
            </a>
            <a className="hidden md:flex" href="#">
              Portifolio
            </a>
            <button className="hidden md:flex bg-gradient-to-r bg-[var(--cor-secundaria)] px-4 py-2 rounded-full hover:opacity-80">
              CONTACT ME
            </button>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <img src={menuIcon} alt="menu" />
            </button>
          </nav>
        </div>
      </header>
      {isMenuOpen && (
        <div className="md:hidden bg-black text-white flex flex-col items-center gap-4 py-4 shadow-md">
          <a href="#">About me</a>
          <a href="#">Skills</a>
          <a href="#">Portifolio</a>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-full hover:opacity-80">
            {" "}
            CONTACT ME
          </button>
        </div>
      )}
    </>
  );
}
