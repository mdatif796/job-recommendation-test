import type { NextPage } from "next";

const ToolOptions: NextPage = () => {
  return (
    <form className="m-0 w-[100%] flex flex-col items-start justify-center">
      <button className="cursor-pointer mb-4 [border:none] py-[0.425rem] px-[1.2rem] bg-darkslategray shadow-[0px_4px_4px_rgba(0,_0,_0,_0.08)] rounded-3xs flex flex-row items-center justify-center whitespace-nowrap hover:bg-slategray">
        <div className="flex-1 relative text-[0.7rem] uppercase font-semibold font-montserrat text-white text-center">
          Job Recommendation Tool
        </div>
      </button>
      <div className="self-stretch rounded-3xs bg-white flex flex-row items-center justify-start p-[0.395rem] gap-[1.062rem] whitespace-nowrap">
        <img
          className="h-[1rem] w-[1rem] relative min-h-[1rem]"
          alt=""
          src="/vuesaxlinearclipboard.svg"
        />
        <div className="flex-1 relative text-[0.7rem] font-medium font-montserrat text-black text-left">{`Job Boards `}</div>
      </div>
      <div className="self-stretch rounded-3xs bg-white flex flex-row items-center justify-start p-[0.395rem] gap-[1.062rem]">
        <img
          className="h-[1rem] w-[1rem] relative min-h-[1rem]"
          alt=""
          src="/vuesaxlineartasksquare.svg"
        />
        <div className="flex-1 relative text-[0.7rem] font-medium font-montserrat text-black text-left">
          History
        </div>
      </div>
      <div className="self-stretch rounded-3xs bg-white flex flex-row items-center justify-start p-[0.395rem] gap-[1.062rem] whitespace-nowrap">
        <img
          className="h-[1rem] w-[1rem] relative min-h-[1rem]"
          alt=""
          src="/vuesaxlinearreceiptadd.svg"
        />
        <div className="flex-1 relative text-[0.7rem] font-medium font-montserrat text-black text-left">
          Saved Jobs
        </div>
      </div>
      <div className="self-stretch rounded-3xs bg-white flex flex-row items-center justify-start p-[0.395rem] gap-[1.062rem]">
        <img
          className="h-[1rem] w-[1rem] relative min-h-[1rem]"
          alt=""
          src="/vuesaxlineardollarsquare.svg"
        />
        <div className="flex-1 relative text-[0.7rem] font-medium font-montserrat text-black text-left">
          Plans
        </div>
      </div>
      <div className="self-stretch rounded-8xs bg-white flex flex-row items-center justify-start p-[0.395rem] gap-[1.062rem] whitespace-nowrap">
        <img
          className="h-[1rem] w-[1rem] relative min-h-[1rem]"
          alt=""
          src="/vuesaxlinearpeople.svg"
        />
        <div className="flex-1 relative text-[0.7rem] font-medium font-montserrat text-black text-left">
          Manage Profiles
        </div>
      </div>
    </form>
  );
};

export default ToolOptions;
