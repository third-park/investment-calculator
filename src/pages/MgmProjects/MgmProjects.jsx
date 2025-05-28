import React from "react";
import Sidebar from "../../entities/Sidebar/Sidebar";
import ProjectContents from "../../entities/ProjectContents/ProjectContents";
import NoProjectSelected from "../../shared/NoProjectSelected";


function MgmProjects() {
  return (
    <>
      <section className="w-screen my-8 h-screen flex gap-8 bg-white pt-20">
        <Sidebar />
        {/* <ProjectContents /> */}
        <NoProjectSelected />        
      </section>
    </>
  );
}

export default MgmProjects;
