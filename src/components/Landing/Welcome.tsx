import { landingImage } from "../../assets"

function Welcome() {
  return (
    <div className="mx-auto flex flex-col items-center lg:flex-row justify-center py-28 lg:py-10 max-w-[1440px] bg-no-repeat relative">
      <div className="z-10 flex-col justify-center items-start gap-8 inline-flex lg:-mr-56 -mt-24">
        <div className="self-stretch flex-col justify-start items-start gap-5 flex">
          <h1 className="self-stretch bg-clip-text text-transparent bg-gradient-to-r from-[#C3C6EF] to-[#C3C6EF]">
            <div className="w-full max-w-[712px] justify-start text-indigo-200 text-5xl md:text-6xl font-extrabold leading-[70px]">
              Trade P2P on our Platform Anonymously
            </div>
          </h1>
          <p className="justify-start text-white text-2xl font-normal leading-10">
            Trade cryptocurrencies easily and securely on our platform.
          </p>
        </div>
        <div className="w-full flex flex-col sm:flex-row justify-start items-center gap-5">
          <button className="px-11 py-4 rounded outline outline-offset-[-1px] outline-indigo-400 cursor-pointer inline-flex justify-center items-center overflow-hidden">
            <div className="h-5 flex justify-center items-center gap-2">
              <p className="justify-center text-indigo-400 text-base font-normal">Get Started</p>
            </div>
          </button>
          <button className="px-11 py-4 bg-indigo-500 rounded inline-flex justify-center cursor-pointer items-center overflow-hidden">
            <div className="h-5 flex justify-center items-center gap-2">
              <p className="justify-center text-indigo-50 text-base font-normal">Connect Wallet</p>
            </div>
          </button>
        </div>
      </div>
      <div className="relative w-full lg:w-auto">
        <img
          className="w-full max-w-[700px] lg:max-w-[800px] object-cover -mt-16"
          src={landingImage}
          alt="Landing"
        />
      </div>
    </div>
  );
}

export default Welcome;
