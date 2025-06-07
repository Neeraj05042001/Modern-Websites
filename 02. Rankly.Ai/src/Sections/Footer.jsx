import LogoIcon from "../assets/logo.svg?react";
import XSocial from "../assets/social-x.svg?react";
import InstaSocial from "../assets/social-instagram.svg?react";
import YTSocial from "../assets/social-youtube.svg?react";

const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15 ">
      <div className=" container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 ">
          <div className="flex gap-2 items-center ">
            <LogoIcon className="h-6 w-6" />
            <div className="font-medium">AI Startup Landing Page</div>
          </div>
          <div>
            <nav className="flex flex-col lg:flex-row  gap-5 lg:gap-7 lg:flex-1 lg:justify-center">
              <a
                href="#"
                className="text-white/70 text-xs md:text-sm  transition"
              >
                Features
              </a>
              <a
                href="#"
                className="text-white/70 text-xs md:text-sm  transition"
              >
                Developer
              </a>
              <a
                href="#"
                className="text-white/70 text-xs  md:text-sm transition"
              >
                Company
              </a>
              <a
                href="#"
                className="text-white/70 text-xs md:text-sm  transition"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-white/70 text-xs md:text-sm  transition"
              >
                Changelog
              </a>
            </nav>
          </div>
          <div className=" flex gap-5 lg:flex-1 lg:justify-end">
            <XSocial className="social cursor-pointer text-white/40 transition" />
            <InstaSocial className="social cursor-pointer text-white/40 transition" />
            <YTSocial className="social cursor-pointer text-white/40 transition" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
