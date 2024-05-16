import type { NextPage } from "next";

const Header: NextPage = () => {
  return (
    <header className="h-[7%] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.1)] bg-white flex flex-row items-center justify-between py-[0.281rem] px-[1.275rem] box-border top-[0] z-[99] sticky w-full">
      <img
        className="h-[1.7rem] w-[9.563rem] relative overflow-hidden shrink-0 object-contain"
        loading="lazy"
        alt=""
        src="/group-1216258255-1@2x.png"
      />
      <nav className="m-0 flex flex-row items-center justify-center py-[0rem]  box-border gap-[0.125rem] max-w-full text-left sm:text-[0.6rem] md:text-[0.6rem] lg:text-[0.6rem] xl:text-[0.7rem] 2xl:text-[1rem] text-black font-montserrat">
        <div className="flex flex-row items-center justify-center p-[0.625rem]">
          <div className="relative font-medium inline-block whitespace-nowrap">
            Resume Scan
          </div>
        </div>
        <div className="flex flex-row items-center justify-center p-[0.625rem] text-darkorange">
          <div className="relative font-semibold whitespace-nowrap">
            Job Recommendation
          </div>
        </div>
        <div className="flex flex-row items-center justify-center p-[0.625rem]">
          <div className="relative font-medium whitespace-nowrap">
            Resume Keywords
          </div>
        </div>
        <div className="flex flex-row items-center justify-center p-[0.625rem]">
          <div className="relative font-medium whitespace-nowrap">
            Resume Services
          </div>
        </div>
        <div className="flex flex-row items-center justify-center p-[0.625rem]">
          <div className="relative font-medium inline-block min-w-[6.5rem] whitespace-nowrap">
            Career Blogs
          </div>
        </div>
      </nav>
      <button className="cursor-pointer [border:none] py-[0.287rem] px-4 bg-gainsboro-200 rounded-xl flex items-center justify-center box-border hover:bg-silver sm:text-[0.7rem] md:text-[0.7rem] lg:text-[0.7rem] xl:text-[0.9rem] 2xl:text-[1rem]">
        Sign In
      </button>
    </header>
  );
};

export default Header;
