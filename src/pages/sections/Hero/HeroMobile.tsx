import Navbar from "../../../Components/Navbar";

export default function HeroMobile() {
  return (
    <>
      <Navbar />
      <div
        className="relative h-screen w-full bg-cover bg-black/50 bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url('/foto_richard.png')`,
        }}
      >
        <div className="absolute inset-0  bg-white/10" />
        <div className="relative -bottom-1/12 p-6 text-center max-w-xs mx-auto">
          <h1 className="text-lg font-montserrat font-semibold text-white mb-2">
            My name is Richard
          </h1>
          <p className="text-2xl font-montserrat font-semibold text-white tracking-wider">
            I'M A DEVELOPER
          </p>
          <div className="flex justify-center items-center mb-4">
            <img
              className="block mx-auto mb-4"
              src="/separator.png"
              alt="separator"
            />
          </div>

          <div className="flex gap-5 items-center justify-center mt-10">
            <img src="/mail.png" alt="mail" />
            <img src="/github.png" alt="github" />
            <img src="/linkedin.png" alt="linkedin" />
          </div>
        </div>
      </div>
      {/* <div className="h-screen w-screen">
        <section>
          <img src="/foto_richard.png" alt="Logo Montserrat" />
          <h1 className="font-montserrat font-semibold text-3xl text-white">
            Portfólio Montserrat
          </h1>

          <h3>My nome é Richard</h3>
          <h2>I'M A DEVELOPER</h2>
        </section>
      </div> */}
    </>
  );
}
