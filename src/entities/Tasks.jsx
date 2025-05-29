import React from "react";
import NewTask from "./NewTask.jsx";

function Tasks({ tasks, onAdd, onDelete, project }) {
  const projectTask = tasks.filter(task=>project.id === task.projectId);

  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {projectTask.length === 0 ? (
        <p className="text-stone-800 my-4">this project does not have any tasks yet.</p>
      ) : (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {projectTask.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span className="text-stone-800">{task.text}</span>
              <button className="text-stone-700 hover:text-red-500" onClick={()=>onDelete(task.id)}>Clear</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Tasks;
