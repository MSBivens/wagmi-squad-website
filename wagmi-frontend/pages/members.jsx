import React from "react";
import ActiveMembers from "../components/ActiveMembers";

// Member image imports
import mikeBivens from "../public/members/MikeBivens.png";

const members = () => {
  return (
    <div className="w-full p-2 py-40">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#ffbd59]">
          Active Members
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <ActiveMembers
            name="Mike Bivens"
            pfp={mikeBivens}
            twitter="https://twitter.com/MSBivens_"
            linkedin="https://www.linkedin.com/in/msbivens/"
            github="https://github.com/MSBivens"
          />
        </div>
      </div>
    </div>
  );
};

export default members;
