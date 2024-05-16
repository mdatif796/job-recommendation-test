import type { NextPage } from "next";
import ToolOptions from "./tool-options";

const SideBar: NextPage = () => {
  return (
    <div className="w-[280px] min-w-[280px] h-[100%] bg-white flex flex-col items-start justify-between py-[2rem] px-[1.6rem] box-border text-left text-black font-montserrat ">
      <ToolOptions />
      <div className="self-stretch flex flex-col items-start justify-center gap-[1rem]">
        <div className="self-stretch flex flex-col items-start justify-center gap-[0.09rem]">
          <div className="self-stretch flex flex-row items-center justify-start py-[0.2rem] px-[0.625rem] text-[0.7rem] text-darkgray-100">
            <div className="flex-1 relative font-medium">{`Help & Support`}</div>
          </div>
          <div className="self-stretch rounded-3xs bg-white flex flex-row items-center justify-center py-[0.2rem] px-[0.625rem] gap-[1.062rem] whitespace-nowrap">
            <img
              className="h-[0.8rem] w-[0.8rem] relative overflow-hidden shrink-0 min-h-[0.8rem]"
              alt=""
              src="/mdiaboutcircleoutline.svg"
            />
            <div className="flex-1 relative font-medium text-[0.6rem]">Contact Us</div>
          </div>
          <div className="self-stretch rounded-3xs bg-white flex flex-row items-center justify-center py-[0.2rem] px-[0.625rem] gap-[1.062rem] whitespace-nowrap">
            <img
              className="h-[0.8rem] w-[0.8rem] relative overflow-hidden shrink-0 min-h-[0.8rem]"
              alt=""
              src="/20px--help-question.svg"
            />
            <div className="flex-1 relative font-medium text-[0.6rem]">About Us</div>
          </div>
          <div className="self-stretch rounded-3xs bg-white flex flex-row items-center justify-center py-[0.2rem] px-[0.625rem] gap-[1.062rem] whitespace-nowrap">
            <img
              className="h-[0.8rem] w-[0.8rem] relative overflow-hidden shrink-0 min-h-[0.8rem]"
              alt=""
              src="/settings.svg"
            />
            <div className="flex-1 relative font-medium text-[0.6rem]">Terms of Service</div>
          </div>
          <div className="self-stretch rounded-3xs bg-white flex flex-row items-center justify-center py-[0.2rem] px-[0.625rem] gap-[1.062rem] whitespace-nowrap">
            <img
              className="h-[0.8rem] w-[0.8rem] relative overflow-hidden shrink-0 min-h-[0.8rem]"
              alt=""
              src="/materialsymbolsprivacytipoutline.svg"
            />
            <div className="flex-1 relative font-medium text-[0.6rem]">Privacy Policy</div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-center gap-[0.687rem]">
          <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.1)] rounded-8xs bg-white flex flex-row items-center justify-center py-[0.187rem] px-[0.562rem] whitespace-nowrap border-[1px] border-solid border-darkgray-100">
            <div className="flex-1 relative font-medium text-[0.7rem]">
              <span>{`Current Plan : `}</span>
              <span className="text-darkorange">Free</span>
            </div>
          </div>
          <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.1)] rounded-8xs bg-floralwhite flex flex-row items-center justify-center py-[0.3rem] px-[0.562rem] gap-[0.875rem] border-[1px] border-solid border-darkorange">
            <div className="h-[2rem] w-[2rem] relative flex items-center justify-center">
              <img
                className="h-full w-full object-contain absolute left-[0rem] top-[0.275rem] [transform:scale(2.208)]"
                loading="lazy"
                alt=""
                src="/group-1216258269.svg"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-center min-w-[9rem]">
              <div className="self-stretch relative font-medium text-[0.7rem]">
                UPGRADE TO PRO
              </div>
              <div className="self-stretch relative text-[0.6rem] font-medium text-darkgray-100">
                Get all features
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
