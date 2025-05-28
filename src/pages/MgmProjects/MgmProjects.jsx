import React, { useState } from "react";
import Sidebar from "../../entities/Sidebar/Sidebar";
import ProjectContents from "../../entities/ProjectContents/ProjectContents";
import NoProjectSelected from "../../shared/NoProjectSelected";
import SelectedProject from "../../entities/SelectedProject/SelectedProject";

/** Management Project basecamp */
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

  const handleCancelAddProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  };

  //ProjectContents컴포넌트(자식컴포넌트)에서 함수실행할때 전달한 객체(인수)를 부모컴포넌트에서 파라미터로 사용
  const handleAddProject = (projectData) => {
    const projectId = Math.random();
    //4. 프로젝트 객체 생성, id 추가
    const newProject = {
      ...projectData,
      id: projectId,
    };

    //5. 기존값에 새 객체추가해서 상태 업데이트
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: projectId,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  /** 선택한 project id 가져와야함 */
  const handleSelectProject = (id) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  };

  const handleDeleteProjects = () => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      }
    })
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId)

  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProjects}/>;

  if (projectsState.selectedProjectId === null) {
    content = <ProjectContents onAdd={handleAddProject} onCancel={handleCancelAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else {
    content;
  }

  return (
    <>
      <section className="w-screen my-8 h-screen flex gap-8 bg-white pt-20">
        <Sidebar
          onStartAddProject={handleStartAddProject}
          projects={projectsState.projects}
          onSelectProject={handleSelectProject}
        />
        {content}
      </section>
    </>
  );
}

export default MgmProjects;
