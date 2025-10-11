export default function Navbar() {
  return (
    <>
      <header className="flex  justify-between items-center h-16 px-6 shadow-md bg-black">
        <span className="text-white font-bold text-2xl">Richard Vieira</span>
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
          <a className="hidden md:flex" href="#">
            CONTACT ME
          </a>
        </nav>
      </header>
    </>
  );
}
