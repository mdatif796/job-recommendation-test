import type { NextPage } from "next";

export type UploadStepsType = {
  uploadIcon?: string;
  uploadResume?: string;
  uploadYourResumeAndHighli?: string;
};

const UploadSteps: NextPage<UploadStepsType> = ({
  uploadIcon,
  uploadResume,
  uploadYourResumeAndHighli,
}) => {
  return (
    <div className="flex-1 flex flex-row items-center justify-start min-w-[11.125rem] max-w-full [row-gap:20px] text-center text-black font-montserrat mq450:flex-wrap">
      <div className="flex-1 flex flex-col items-center justify-center sm:text-[5rem] md:text-[4rem] lg:text-[5rem] xl:text-[5rem] 2xl:text-[6rem] gap-[0.5rem] min-w-[14.625rem] max-w-full">
        <b className="self-stretch relative lg:leading-[5rem] xl:leading-[5.5rem] 2xl:leading-[7.625rem] font-inter text-transparent !bg-clip-text [background:linear-gradient(180deg,_#dedee0,_rgba(221,_222,_223,_0))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] sm:leading-[3.063rem] md:leading-[4.563rem]">
          {uploadIcon}
        </b>
        <div className="self-stretch relative sm:text-[0.7rem] md:text-[0.7rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.3rem] font-semibold mq450:text-[1rem]">
          {uploadResume}
        </div>
        <div className="self-stretch relative sm:text-[0.6rem] md:text-[0.6rem] lg:text-[0.6rem] xl:text-[0.7rem] 2xl:text-[1rem] font-medium text-darkgray-100">
          {uploadYourResumeAndHighli}
        </div>
      </div>
      {uploadIcon !== '3' && <div className="w-[4.781rem] flex flex-col items-start justify-start p-[0.625rem] box-border">
        <img
          className="self-stretch h-[1.375rem] relative rounded-64xl max-w-full overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/vector-20.svg"
        />
      </div>}
    </div>
  );
};

export default UploadSteps;
