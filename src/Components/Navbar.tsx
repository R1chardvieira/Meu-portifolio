import { useState } from "react";
import menuIcon from "../assets/menu.svg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header className="flex items-center h-16 px-3 bg-black z-10">
        <span className="hidden md:flex items-center header-box w-[797px] text-white font-bold text-2xl bg-black">
          <img src="/logoRV1.png" alt="LogoRichard" className="" />
        </span>
        <div className="flex w-full bg-black flex-row-reverse">
          <nav className="flex text-white items-center gap-6">
            <a className="hidden md:flex" href="#">
              About me
            </a>
            <a className="hidden md:flex" href="#">
              Skills
            </a>
            <a className="hidden md:flex" href="#">
              Portifolio
            </a>
            <button className="hidden md:flex bg-linear-to-r bg-(--cor-secundaria) px-4 py-2 rounded-full hover:opacity-80">
              CONTACT ME
            </button>
            <button
              className="md:hidden "
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <img src={menuIcon} alt="menu" />
            </button>
          </nav>
        </div>
      </header>
      {isMenuOpen && (
        <div className="md:hidden bg-black text-white flex flex-col items-center gap-4">
          <a href="#">About me</a>
          <a href="#">Skills</a>
          <a href="#">Portifolio</a>
          <button className="bg-linear-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-full hover:opacity-80">
            {" "}
            CONTACT ME
          </button>
        </div>
      )}
    </>
  );
}
