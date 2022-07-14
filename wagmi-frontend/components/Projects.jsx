import React from "react";
import ProjectItem from "./ProjectItem";
import Placeholder from "../public/assets/placeholder.PNG";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#ffbd59]">
          Projects
        </p>
        <h2 className="py-4">What We&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="WAGMI Squad DAO"
            backgroundImg={Placeholder}
            projectUrl="/"
          />
          <ProjectItem
            title="WAGMI Squad Access Token"
            backgroundImg={Placeholder}
            projectUrl="/"
          />
          <ProjectItem
            title="WAGMI Squad Reputation Token"
            backgroundImg={Placeholder}
            projectUrl="/"
          />
          <ProjectItem
            title="WAGMI Squad Website"
            backgroundImg={Placeholder}
            projectUrl="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
