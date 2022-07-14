import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/assets/logo.PNG";

const Main = () => {
  return (
    <div id="home" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-1">
          <p className="uppercase text-xl tracking-widest text-[#ffbd59]">
            Who We Are
          </p>
          <h2 className="py-4">A Devloper Squad</h2>
          <p className="py-2 text-gray-600">
            WAGMI Squad is a group of developers that have banded together to
            rapidly develop projects, participate in hackathons, and share
            resources. This group&#39;s active members are in pursuit of
            becoming self-sufficient blockend devs.
          </p>
          <p className="py-2 text-gray-600">
            To learn more about the objectives and methods of the organization,
            you can find an article{" "}
            <Link
              href="https://mirror.xyz/0xc46C2e614c3Ec2B679961caf095204FbcFA23fAC/JyHpK5v72pLQ6tzhRweuTHfguaV7-ZCXq7ht-q2ufQg"
              className="underline cursor-pointer"
            >
              here
            </Link>
            .{/* Medium blog mention here */}
          </p>
        </div>
        <div className="col-span-2 w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image className="rounded-xl" src={Logo} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Main;
