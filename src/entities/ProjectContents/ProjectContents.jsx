import Input from "../../shared/Input";
import React, { useRef } from "react";
import Modal from "../../shared/Modal";

/** 프로젝트 add 폼 */
function ProjectContents({ onAdd, onCancel }) {
  const modal = useRef();

  //1. useRef로 input 참조 생성
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSave = () => {
    //2. save버튼 클릭시 ref.current통해서 사용자 입력값 받아오기
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (enteredTitle.trim() === "" || enteredDescription.trim() === "" || enteredDueDate.trim() === "") {
      modal.current.open();
      return;
    }

    //3. 저장할 객체를 onAdd(=handleAddProject 함수)를 통해 보내기(MgmProjects로 데이터 전달)
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-600 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">please make sure you provide a valid value for every input field.</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button onClick={onCancel} className="text-stone-800 hover:text-stone-950">Cancel</button>
          </li>
          <li>
            <button className="px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handleSave}>Save</button>
          </li>
        </menu>
        <div className="">
          <Input ref={title} label="title" id="title" type="text" />
          <Input ref={description} label="description" id="description" textarea />
          <Input ref={dueDate} label="dueDate" id="dueDate" type="date" />
        </div>
      </div>
    </>
  );
}

export default ProjectContents;
