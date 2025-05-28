import React, { useState } from "react";
import Sidebar from "../../entities/Sidebar/Sidebar";
import ProjectContents from "../../entities/ProjectContents/ProjectContents";
import NoProjectSelected from "../../shared/NoProjectSelected";

function MgmProjects() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  const handleStartAddProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  //ProjectContents컴포넌트(자식컴포넌트)에서 함수실행할때 전달한 객체(인수)를 부모컴포넌트에서 파라미터로 사용
  const handleAddProject = (projectData) => {
    //4. 프로젝트 객체 생성, id 추가
    const newProject = {
      ...projectData,
      id: Math.random(),
    };

    //5. 기존값에 새 객체추가해서 상태 업데이트
    setProjectsState((prevState) => {
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <ProjectContents onAdd={handleAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <>
      <section className="w-screen my-8 h-screen flex gap-8 bg-white pt-20">
        <Sidebar onStartAddProject={handleStartAddProject} />
        {content}
      </section>
    </>
  );
}

export default MgmProjects;
