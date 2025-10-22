import { useMediaQuery } from "react-responsive";
import HeroMobile from "./HeroMobile";
import HeroDesktop from "./HeroDesktop";
//import Navbar from "../../../Components/Navbar";

export default function Hero() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return isMobile ? <HeroMobile /> : <HeroDesktop />;
  // return (
  //   <>
  //     <Navbar />
  //     <div className="hidden sm:block">
  //       <section className="w-full flex">
  //         <div className="absolute bg-black h-screen w-1/2 hero-box1"></div>
  //         <div className="hero-box2 h-screen w-screen flex justify-center items-center">
  //           <img src="/foto_richard.png" alt="" className="relative left-60" />
  //         </div>
  //       </section>
  //     </div>
  //   </>
  // );
}
