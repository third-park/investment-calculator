import React from "react";
import Button from "../../shared/Button";

function SelectedProject({ project, onDelete }) {
  const { title, description, dueDate } = project;

  const formattedDate = new Date(dueDate).toLocaleDateString("ko-KR", {
    year: "2-digit",
    month: "short",
    day: "2-digit",
  });

  
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">{title}</h1>
          <Button onClick={onDelete}>Delete</Button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">{description}</p>
      </header>
      TASKS
    </div>
  );
}

export default SelectedProject;
