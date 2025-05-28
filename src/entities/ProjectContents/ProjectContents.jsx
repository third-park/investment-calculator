import Input from "../../shared/Input.jsx";
import React from "react";

function ProjectContents() {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">Cancel</button>
        </li>
        <li>
          <button className="px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
        </li>
      </menu>
      <div className="">
        <Input label="title" id="title" type="text" />
        <Input label="description" id="description" textarea />
        <Input label="dueDate" id="dueDate" type="date" />
      </div>
    </div>
    // 생성한 project 클릭되면 템플릿 생성 + task input 생성해서 내용 입력시 해당 내용 저장(창을 바꿔도 계속 저장되어야함)
  );
}

export default ProjectContents;
