import type { NextPage } from "next";
import ProfileName from "./profile-name";
import GetStarted from "./get-started";

const Dashboard: NextPage = () => {
  return (
    <section className="text-black font-montserrat p-8">
      <div className="self-stretch flex flex-col items-start justify-start gap-[1.187rem] max-w-full">
        <ProfileName />
        <GetStarted />
      </div>
    </section>
  );
};

export default Dashboard;
