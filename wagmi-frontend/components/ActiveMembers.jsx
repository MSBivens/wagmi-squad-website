import React from "react";
import Image from "next/image";
import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";

const ActiveMembers = ({ name, pfp, twitter, github, linkedin }) => {
  return (
    <div className="flex justify-center flex-wrap rounded-xl group hover:scale-105 ease-in duration-300">
      <div className="m-4 py-2 bg-white shadow-lg">
        <Image className="w-24 h-24 mx-auto rounded-full" src={pfp} />
        <h3 className="mx-2 mt-2 text-center text-2xl tracking-widest text-gray-700 font-semibold">
          {name}
        </h3>
        <div className="flex justify-center items-center mt-2">
          <a href={twitter} target="_blank" rel="noreferrer">
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <FaTwitter />
            </div>
          </a>
          <a href={linkedin} target="_blank" rel="noreferrer">
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <FaLinkedinIn />
            </div>
          </a>
          <a href={github} target="_blank" rel="noreferrer">
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <FaGithub />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ActiveMembers;
