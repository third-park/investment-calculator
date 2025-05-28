import React, { useState } from "react";
import Button from "../../shared/Button";

/** 사이드바 - add버튼과 등록된 프로젝트 보여지는 컴포넌트 */
function Sidebar({ onStartAddProject }) {
  const [] = useState();

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul>{/* 생성한 프로젝트 클릭하면 ProjectContents에 템플릿 렌더링 */}</ul>
    </aside>
  );
}

export default Sidebar;
