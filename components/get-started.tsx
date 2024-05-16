import type { NextPage } from "next";
import UploadSteps from "./upload-steps";

const GetStarted: NextPage = () => {

  return (
    <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.1)] rounded-3xs bg-white box-border flex flex-col items-center justify-start pt-[2rem] px-[4.312rem] pb-[2rem] gap-[3.812rem] max-w-full text-center text-black font-montserrat border-[1px] border-solid border-darkgray-200 sm:gap-[1.438rem] md:gap-[2.875rem] md:pt-[1.938rem] md:pb-[1.313rem] md:box-border xl:pl-[2.125rem] xl:pr-[2.125rem] xl:box-border">
      <div className="self-stretch flex flex-col items-center justify-start gap-[0.387rem]">
        <h3 className="m-0 self-stretch relative text-inherit font-semibold font-inherit sm:text-[0.6rem] xl:text-[1rem]">
          Dream Job in 3 easy steps
        </h3>
        <div className="self-stretch relative font-medium text-darkgray-100 sm:text-[0.5rem] xl:text-[0.8rem]">
          Upload your resume and get job profiles with high success rate
        </div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[0.625rem_0.5rem] max-w-full text-[5.888rem]">
        <UploadSteps
          uploadIcon="1"
          uploadResume="Upload Resume"
          uploadYourResumeAndHighli="Upload your resume and highlight preferences."
        />
        <UploadSteps
          uploadIcon="2"
          uploadResume="Select Profile"
          uploadYourResumeAndHighli="Chose a role that fits your skills and ambitions."
        />
        <UploadSteps
          uploadIcon="3"
          uploadResume="Get Job Profile"
          uploadYourResumeAndHighli="Browse and apply to jobs tailored just for you."
        />
        {/* <div className="flex-1 flex flex-col items-center sm:text-[5rem] md:text-[4rem] lg:text-[5rem] xl:text-[5rem] 2xl:text-[6rem] justify-center gap-[0.5rem] min-w-[11.125rem] max-w-full">
          <b className="self-stretch relative leading-[7.625rem] font-inter text-transparent !bg-clip-text [background:linear-gradient(180deg,_#dedee0,_rgba(221,_222,_223,_0))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            3
          </b>
          <div className="self-stretch relative sm:text-[0.7rem] md:text-[0.7rem] lg:text-[0.8rem] xl:text-[1rem] 2xl:text-[1.3rem] font-semibold">
            Get Job Profile
          </div>
          <div className="self-stretch relative sm:text-[0.6rem] md:text-[0.6rem] lg:text-[0.6rem] xl:text-[0.7rem] 2xl:text-[1rem] font-medium text-darkgray-100">
            Browse and apply to jobs tailored just for you.
          </div>
        </div> */}
      </div>
      <div
        className="w-[15.313rem] rounded-3xs bg-darkorange overflow-hidden flex flex-row items-center justify-center py-[0.625rem] px-[0rem] box-border whitespace-nowrap max-w-full cursor-pointer text-white"
      >
        <h3 className="m-0 relative text-inherit font-semibold font-inherit inline-block shrink-0 max-w-[398%]">
          Get Started
        </h3>
      </div>
    </div>
  );
};

export default GetStarted;
