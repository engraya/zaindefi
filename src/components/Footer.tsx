import { logo } from "../assets";

function Footer() {
  return (
    <footer className="w-full px-6 sm:px-10 md:px-20 lg:px-28 bg-zinc-950 flex flex-col justify-center items-center text-center gap-6">
      <div className="w-full py-10 flex flex-col gap-6 items-center">
        <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-4">
          <img src={logo} alt="Zainp2p Logo" className="w-32" />
          <div className="text-zinc-400 text-base font-normal">
            © {new Date().getFullYear()} Zainp2p. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
