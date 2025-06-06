import React from "react";
import Button from "../shared/Button";

/** 프로젝트가 없을 때 보여질 페이지 */ 
function NoProjectSelected({ onStartAddProject }) {

  return (
    <div className="text-center w-[35rem] mt-16">
      <h2 className="text-xl font-bold text-stone-500 my-4">No Project Selected</h2>
      <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create new Project</Button>
      </p>
    </div>
  );
}

export default NoProjectSelected;
