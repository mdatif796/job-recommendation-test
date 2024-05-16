import type { NextPage } from "next";
import Header from "../components/header";
import SideBar from "../components/side-bar";
import Dashboard from "../components/dashboard";

const JOBRECOMMENDATIONTOOLRespo: NextPage = () => {
  return (
    <div className="w-[100vw] h-[100vh] relative bg-whitesmoke overflow-hidden leading-[normal] tracking-[normal]">
      <Header />
      <div className="h-[93%] w-[100%] overflow-hidden flex">
        <SideBar />
        <Dashboard />
      </div>
    </div>
  );
};

export default JOBRECOMMENDATIONTOOLRespo;
