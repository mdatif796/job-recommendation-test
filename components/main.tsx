import type { NextPage } from "next";
import SideBar from "./side-bar";
import Dashboard from "./dashboard";

const Main: NextPage = () => {
  return (
    <main className="self-stretch flex flex-row flex-wrap items-start justify-start py-[0rem] pr-[1.562rem] pl-[0rem] box-border gap-[2.5rem] max-w-full text-left text-[0.875rem] text-black font-montserrat mq800:gap-[1.25rem]">
      <SideBar />
      <Dashboard />
    </main>
  );
};

export default Main;
