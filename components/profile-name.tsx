import type { NextPage } from "next";

const ProfileName: NextPage = () => {
  return (
    <div className="self-stretch rounded-3xs bg-white box-border flex flex-row items-start justify-start py-[1rem] px-[2rem] gap-[1.062rem] max-w-full text-left text-black font-montserrat border-[1px] border-solid border-darkgray-200 mq1350:flex-wrap">
      <button className="cursor-pointer [border:none] bg-gainsboro-100 xl:h-[3rem] xl:w-[3rem] rounded-31xl flex items-center justify-center box-border">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-contain"
          alt=""
          src="/image-10@2x.png"
        />
      </button>
      <div className=" flex flex-col items-start justify-start pt-[0.168rem] px-[0rem] pb-[0rem] box-border max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.437rem]">
          <div className="self-stretch relative font-semibold sm:text-[0.7rem] md:text-[0.7rem] lg:text-[0.8rem] xl:text-[0.9rem] 2xl:text-[1.4rem]">
            Hello Divyanshu 👋
          </div>
          <div className="self-stretch relative sm:text-[0.6rem] md:text-[0.6rem] lg:text-[0.6rem] xl:text-[0.7rem] 2xl:text-[1rem] font-medium text-darkgray-100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileName;
